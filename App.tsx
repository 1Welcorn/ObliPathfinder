import React, { useState, useEffect, useCallback } from 'react';
import type { User, LearningPlan, Module, Lesson, Student } from './types';
import { onAuthStateChanged, logout, getLearningPlan, saveLearningPlan, updateLessonInDb, getStudents } from './services/firebaseService';
import { generateLearningPlan } from './services/geminiService';
import { isFirebaseConfigured } from './services/firebaseConfig';

// Components
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import LearningModuleView from './components/LearningModuleView';
import TeacherDashboard from './components/TeacherDashboard';
import StudentProgressView from './components/StudentProgressView';
import Loader from './components/Loader';
import VirtualTeacher from './components/VirtualTeacher';
import ChallengeUnlockedModal from './components/ChallengeUnlockedModal';
import NotesView from './components/NotesView';
import ChallengeArena from './components/ChallengeArena';
import DatabaseInspectorModal from './components/DatabaseInspectorModal';
import ConfigErrorScreen from './components/ConfigErrorScreen';

type AppView = 'login' | 'welcome' | 'generating' | 'student_dashboard' | 'module_view' | 'notes_view' | 'challenge_arena' | 'teacher_dashboard' | 'student_progress_view';

const App: React.FC = () => {
    // Core State
    const [user, setUser] = useState<User | null>(null);
    const [view, setView] = useState<AppView>('login');
    const [isLoading, setIsLoading] = useState(true); // For initial auth check
    const [isConfigError] = useState(!isFirebaseConfigured);

    // UI State
    const [isPortugueseHelpVisible, setIsPortugueseHelpVisible] = useState(false);
    const [isDbInspectorOpen, setIsDbInspectorOpen] = useState(false);

    // Student-specific State
    const [learningPlan, setLearningPlan] = useState<LearningPlan | null>(null);
    const [gradeLevel, setGradeLevel] = useState<string>('');
    const [selectedModule, setSelectedModule] = useState<Module | null>(null);
    const [completedModuleTitle, setCompletedModuleTitle] = useState<string | null>(null);

    // Teacher-specific State
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [collaborators, setCollaborators] = useState<string[]>(['teacher.collaborator@example.com']);

    // Effect for handling authentication and data fetching
    useEffect(() => {
        if (isConfigError) {
            setIsLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                setIsLoading(true);
                if (currentUser.role === 'student') {
                    const plan = await getLearningPlan(currentUser.uid);
                    if (plan) {
                        setLearningPlan(plan);
                        // Infer grade level from a student object if needed, or store it alongside the plan
                        // For now, we'll leave it as is, but a real app would store this.
                        setView('student_dashboard');
                    } else {
                        setView('welcome');
                    }
                } else { // Teacher
                    const studentList = await getStudents();
                    setStudents(studentList);
                    setView('teacher_dashboard');
                }
                setIsLoading(false);
            } else {
                setView('login');
                setLearningPlan(null); // Clear data on logout
                setStudents([]); // Clear student list on logout
                setIsLoading(false);
            }
        });
        return () => unsubscribe();
    }, [isConfigError]);

    const handleStartPlan = async (studentNeeds: string, level: string) => {
        if (!user) return;
        setView('generating');
        setGradeLevel(level);
        try {
            const plan = await generateLearningPlan(studentNeeds, level);
            await saveLearningPlan(user.uid, plan, level);
            setLearningPlan(plan);
            setView('student_dashboard');
        } catch (error) {
            console.error(error);
            alert("There was an error generating your plan. Please try again.");
            setView('welcome');
        }
    };
    
    const handleUpdateLesson = useCallback(async (updatedLesson: Lesson) => {
        if (!learningPlan || !selectedModule || !user) return;

        const oldModuleCompleteStatus = selectedModule.lessons.every(l => l.status === 'completed');

        const newModules = learningPlan.modules.map(m => {
            if (m.title === selectedModule.title) {
                return {
                    ...m,
                    lessons: m.lessons.map(l => l.title === updatedLesson.title ? updatedLesson : l),
                };
            }
            return m;
        });
        
        const newLearningPlan = { ...learningPlan, modules: newModules };
        setLearningPlan(newLearningPlan);

        // Update selected module view
        const updatedModule = newModules.find(m => m.title === selectedModule.title);
        if (updatedModule) {
            setSelectedModule(updatedModule);

            const isNewModuleComplete = updatedModule.lessons.every(l => l.status === 'completed');
            if(isNewModuleComplete && !oldModuleCompleteStatus) {
                setCompletedModuleTitle(updatedModule.title);
            }
        }
        
        // Persist change to Firestore
        await updateLessonInDb(user.uid, selectedModule.title, updatedLesson);

    }, [learningPlan, selectedModule, user]);

    const handleLogout = async () => {
        await logout();
        setView('login');
        setUser(null);
        setLearningPlan(null);
    };

    const renderContent = () => {
        if (isConfigError) return <ConfigErrorScreen />;
        if (isLoading) return <Loader message="Initializing..." />;
        
        switch (view) {
            case 'login':
                return <LoginScreen isPortugueseHelpVisible={isPortugueseHelpVisible} />;
            case 'welcome':
                return <WelcomeScreen onStart={handleStartPlan} isPortugueseHelpVisible={isPortugueseHelpVisible} />;
            case 'generating':
                return <Loader message="Crafting your personalized learning plan..." />;
            case 'student_dashboard':
                if (!learningPlan) return <WelcomeScreen onStart={handleStartPlan} isPortugueseHelpVisible={isPortugueseHelpVisible} />;
                return <Dashboard 
                    plan={learningPlan} 
                    onSelectModule={module => { setSelectedModule(module); setView('module_view'); }}
                    onViewNotes={() => setView('notes_view')}
                    onViewChallenges={() => setView('challenge_arena')}
                    isPortugueseHelpVisible={isPortugueseHelpVisible}
                />;
            case 'module_view':
                if (!selectedModule || !learningPlan) return null; // Or show an error
                return <LearningModuleView
                    module={selectedModule}
                    onBack={() => { setSelectedModule(null); setView('student_dashboard'); }}
                    onUpdateLesson={handleUpdateLesson}
                    isPortugueseHelpVisible={isPortugueseHelpVisible}
                    gradeLevel={gradeLevel}
                />;
            case 'notes_view':
                if (!learningPlan) return null;
                 return <NotesView 
                    plan={learningPlan}
                    onBack={() => setView('student_dashboard')}
                    isPortugueseHelpVisible={isPortugueseHelpVisible}
                 />;
            case 'challenge_arena':
                 return <ChallengeArena 
                    onBack={() => setView('student_dashboard')}
                    isPortugueseHelpVisible={isPortugueseHelpVisible}
                 />;
            case 'teacher_dashboard':
                return <TeacherDashboard
                    students={students}
                    onSelectStudent={student => { setSelectedStudent(student); setView('student_progress_view'); }}
                    collaborators={collaborators}
                    onInviteCollaborator={email => setCollaborators(prev => [...prev, email])}
                    onRemoveCollaborator={email => setCollaborators(prev => prev.filter(c => c !== email))}
                    isPortugueseHelpVisible={isPortugueseHelpVisible}
                />;
            case 'student_progress_view':
                if (!selectedStudent) return null; // Or error
                return <StudentProgressView
                    student={selectedStudent}
                    onBack={() => { setSelectedStudent(null); setView('teacher_dashboard'); }}
                    isPortugueseHelpVisible={isPortugueseHelpVisible}
                />
            default:
                return <div>Something went wrong.</div>;
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
            <Header
                user={user}
                onLogout={handleLogout}
                isPortugueseHelpVisible={isPortugueseHelpVisible}
                onTogglePortugueseHelp={() => setIsPortugueseHelpVisible(prev => !prev)}
                onOpenDatabaseInspector={() => setIsDbInspectorOpen(true)}
            />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {renderContent()}
            </main>
            {user && !isConfigError && <VirtualTeacher isPortugueseHelpVisible={isPortugueseHelpVisible} />}
            {completedModuleTitle && (
                <ChallengeUnlockedModal
                    isOpen={!!completedModuleTitle}
                    onClose={() => setCompletedModuleTitle(null)}
                    moduleTitle={completedModuleTitle}
                />
            )}
             <DatabaseInspectorModal 
                isOpen={isDbInspectorOpen}
                onClose={() => setIsDbInspectorOpen(false)}
                learningPlan={learningPlan}
                students={students}
                collaborators={collaborators}
            />
        </div>
    );
};

export default App;