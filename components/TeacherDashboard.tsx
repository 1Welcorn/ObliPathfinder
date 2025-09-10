import React, { useState } from 'react';
import type { Student } from '../types';
import { UserPlusIcon } from './icons/UserPlusIcon';
import { ManageCollaboratorsModal } from './ManageCollaboratorsModal';

interface TeacherDashboardProps {
  students: Student[];
  onSelectStudent: (student: Student) => void;
  collaborators: string[];
  onInviteCollaborator: (email: string) => void;
  onRemoveCollaborator: (email: string) => void;
  isPortugueseHelpVisible: boolean;
}

const gradeLevelLabels: { [key: string]: string } = {
  junior: 'Junior',
  level1: 'Level 1',
  level2: 'Level 2',
  upper: 'Upper/Free',
};

const StudentCard: React.FC<{ student: Student, onSelect: () => void }> = ({ student, onSelect }) => {
    const totalModules = student.learningPlan?.modules.length || 0;
    const completedModules = student.learningPlan?.modules.filter(m => m.lessons.every(l => l.status === 'completed')).length || 0;
    const progress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
    
    return (
        <div 
            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all"
            onClick={onSelect}
        >
            <h3 className="text-xl font-bold text-slate-800">{student.name}</h3>
            <p className="text-indigo-600 font-semibold mb-4 text-sm">{gradeLevelLabels[student.gradeLevel]}</p>
            
            {student.learningPlan ? (
                <>
                    <div className="flex justify-between items-center mb-1 text-sm text-slate-600">
                        <span>Progress</span>
                        <span>{completedModules} / {totalModules} Modules</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </>
            ) : (
                <p className="text-sm text-slate-500 italic">Learning plan not generated yet.</p>
            )}
        </div>
    );
};

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ students, onSelectStudent, collaborators, onInviteCollaborator, onRemoveCollaborator, isPortugueseHelpVisible }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="animate-fade-in">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mb-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Teacher Dashboard</h1>
                <p className="text-slate-600 mt-1">Here is an overview of your students' progress.</p>
                {isPortugueseHelpVisible && <p className="text-sm text-slate-500 mt-2 italic">Clique em um estudante para ver o progresso detalhado.</p>}
            </div>
            <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow hover:shadow-md"
            >
                <UserPlusIcon className="h-5 w-5" />
                Manage Collaborators
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* FIX: Use `student.uid` for the key as `Student` type does not have `id`. */}
        {students.map(student => (
          <StudentCard key={student.uid} student={student} onSelect={() => onSelectStudent(student)} />
        ))}
      </div>

      <ManageCollaboratorsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        collaborators={collaborators}
        onInvite={onInviteCollaborator}
        onRemove={onRemoveCollaborator}
        isPortugueseHelpVisible={isPortugueseHelpVisible}
      />
    </div>
  );
};

export default TeacherDashboard;