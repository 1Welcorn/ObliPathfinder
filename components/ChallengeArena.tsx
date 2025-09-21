import React from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { TrophyIcon } from './icons/TrophyIcon';

interface ChallengeArenaProps {
    onBack: () => void;
    isPortugueseHelpVisible: boolean;
    currentUser: { uid: string; email: string | null; displayName: string | null; photoURL: string | null } | null;
}

const ChallengeArena: React.FC<ChallengeArenaProps> = ({ onBack, isPortugueseHelpVisible, currentUser }) => {
    return (
        <div className="animate-fade-in">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mb-8">
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        <span className="font-medium">Back to Dashboard</span>
                    </button>
                </div>

                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <TrophyIcon className="h-12 w-12 text-yellow-600" />
                        <h1 className="text-4xl font-bold text-slate-800">Challenge Arena</h1>
                    </div>
                    <p className="text-xl text-slate-600 mb-2">
                        Compete with your classmates in AI-generated challenges!
                    </p>
                    {isPortugueseHelpVisible && (
                        <p className="text-sm text-slate-500 italic">
                            Compita com seus colegas em desafios gerados por IA!
                        </p>
                    )}
                </div>

                <div className="text-center">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Coming Soon!</h2>
                        <p className="text-slate-600">
                            The Challenge Arena is being set up with competitive features.
                        </p>
                        {isPortugueseHelpVisible && (
                            <p className="text-sm text-slate-500 italic mt-2">
                                A Arena de Desafios está sendo configurada com recursos competitivos.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeArena;