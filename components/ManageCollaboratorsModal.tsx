import React, { useState } from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { TrashIcon } from './icons/TrashIcon';
import { UserPlusIcon } from './icons/UserPlusIcon';

interface ManageCollaboratorsModalProps {
  isOpen: boolean;
  onClose: () => void;
  collaborators: string[];
  onInvite: (email: string) => void;
  onRemove: (email: string) => void;
  isPortugueseHelpVisible: boolean;
}

export const ManageCollaboratorsModal: React.FC<ManageCollaboratorsModalProps> = ({ isOpen, onClose, collaborators, onInvite, onRemove, isPortugueseHelpVisible }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onInvite(email.trim());
      setEmail('');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md m-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Manage Collaborators</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-slate-600 mb-1">Invite other teachers to view student progress. They will have read-only access to all dashboards.</p>
        {isPortugueseHelpVisible && <p className="text-xs text-slate-500 italic mb-6">Convide outros professores para visualizar o progresso dos alunos. Eles terão acesso de apenas leitura a todos os painéis.</p>}

        <form onSubmit={handleInvite} className="flex gap-2 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="teacher@example.com"
            className="flex-grow p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 flex items-center gap-2 shadow hover:shadow-md transition-all"
          >
            <UserPlusIcon className="h-5 w-5" />
            Invite
          </button>
        </form>

        <div>
          <h3 className="font-semibold text-slate-700 mb-1">Current Collaborators</h3>
          {isPortugueseHelpVisible && <p className="text-xs text-slate-500 italic mb-2">Colaboradores Atuais</p>}
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {collaborators.length > 0 ? collaborators.map(c => (
              <div key={c} className="flex justify-between items-center bg-slate-100 p-3 rounded-lg">
                <span className="text-slate-800">{c}</span>
                <button onClick={() => onRemove(c)} className="text-red-500 hover:text-red-700">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            )) : (
              <p className="text-slate-500 text-center py-4">No collaborators yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};