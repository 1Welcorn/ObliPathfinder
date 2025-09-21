import React, { useState } from 'react';
import type { Student, Collaborator, CollaboratorPermission, User } from '../types';
import { UserPlusIcon } from './icons/UserPlusIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ManageCollaboratorsModal } from './ManageCollaboratorsModal';
import { canManageCollaborators } from '../services/permissionService';

interface TeacherDashboardProps {
  students: Student[];
  onSelectStudent: (student: Student) => void;
  collaborators: Collaborator[];
  onInviteCollaborator: (email: string, permission: CollaboratorPermission) => void;
  onRemoveCollaborator: (email: string) => void;
  onUpdateCollaboratorPermission: (email: string, permission: CollaboratorPermission) => void;
  onOpenStudyMaterials: () => void;
  isPortugueseHelpVisible: boolean;
  currentUser: User | null;
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

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ 
  students, 
  onSelectStudent, 
  collaborators, 
  onInviteCollaborator, 
  onRemoveCollaborator, 
  onUpdateCollaboratorPermission,
  onOpenStudyMaterials,
  isPortugueseHelpVisible,
  currentUser
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const collaboratorCount = collaborators.length;
  const editorCount = collaborators.filter(c => c.permission === 'editor').length;
  const viewerCount = collaboratorCount - editorCount;
  const canManage = canManageCollaborators(currentUser);
  
  return (
    <div className="animate-fade-in">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mb-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Teacher Dashboard</h1>
                <p className="text-slate-600 mt-1">Here is an overview of your students' progress.</p>
                {isPortugueseHelpVisible && <p className="text-sm text-slate-500 mt-2 italic">Clique em um estudante para ver o progresso detalhado.</p>}
                
                {!canManage && (
                  <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <span className="font-semibold">Collaborator Access:</span> You have {collaboratorCount > 0 ? 'limited' : 'view-only'} access to this dashboard.
                    </p>
                    {isPortugueseHelpVisible && (
                      <p className="text-xs text-amber-700 italic mt-1">
                        Acesso de Colaborador: Você tem acesso limitado a este painel.
                      </p>
                    )}
                  </div>
                )}
                
                {collaboratorCount > 0 && (
                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <span className="text-slate-600">
                      {collaboratorCount} collaborator{collaboratorCount !== 1 ? 's' : ''}
                    </span>
                    {editorCount > 0 && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {editorCount} editor{editorCount !== 1 ? 's' : ''}
                      </span>
                    )}
                    {viewerCount > 0 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {viewerCount} viewer{viewerCount !== 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                )}
            </div>
            <div className="flex gap-3">
              <button
                  onClick={onOpenStudyMaterials}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow hover:shadow-md"
              >
                  <BookOpenIcon className="h-5 w-5" />
                  Study Materials
              </button>
              {canManage && (
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow hover:shadow-md"
                >
                    <UserPlusIcon className="h-5 w-5" />
                    Manage Collaborators
                </button>
              )}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* FIX: Use `student.uid` for the key as `Student` type does not have `id`. */}
        {students.map(student => (
          <StudentCard key={student.uid} student={student} onSelect={() => onSelectStudent(student)} />
        ))}
      </div>

      {canManage && (
        <ManageCollaboratorsModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          collaborators={collaborators}
          onInvite={onInviteCollaborator}
          onRemove={onRemoveCollaborator}
          onUpdatePermission={onUpdateCollaboratorPermission}
          isPortugueseHelpVisible={isPortugueseHelpVisible}
        />
      )}
    </div>
  );
};

export default TeacherDashboard;