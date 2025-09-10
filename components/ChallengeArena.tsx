// [FE-FIX] Provided full implementation for this file to resolve module and reference errors.
import React from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { TrophyIcon } from './icons/TrophyIcon';

interface ChallengeArenaProps {
  onBack: () => void;
  isPortugueseHelpVisible: boolean;
}

const ChallengeArena: React.FC<ChallengeArenaProps> = ({ onBack, isPortugueseHelpVisible }) => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-indigo-600 font-semibold mb-6 hover:underline">
        <ArrowLeftIcon className="h-5 w-5" />
        Back to Dashboard
      </button>

      <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-200 mb-8 text-center">
        <TrophyIcon className="h-20 w-20 mx-auto text-yellow-400" />
        <h1 className="text-4xl font-extrabold text-slate-900 mt-4">Challenge Arena</h1>
        <p className="text-lg text-slate-600 mt-2">This feature is coming soon!</p>
        <p className="text-slate-500 mt-2">
            Get ready to test your skills with fun challenges and practice exercises based on your learning plan.
        </p>
         {isPortugueseHelpVisible && <p className="text-sm text-slate-500 mt-2 italic">Em breve: Teste suas habilidades com desafios divertidos baseados no seu plano de estudos.</p>}
      </div>
    </div>
  );
};

export default ChallengeArena;
