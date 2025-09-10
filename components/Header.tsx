import React from 'react';
import type { User } from '../types';
import { GraduationCapIcon } from './icons/GraduationCapIcon';
import { UsersIcon } from './icons/UsersIcon';
import { ArrowRightOnRectangleIcon } from './icons/ArrowRightOnRectangleIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { DatabaseIcon } from './icons/DatabaseIcon';

interface HeaderProps {
    user: User | null;
    onLogout: () => void;
    isPortugueseHelpVisible: boolean;
    onTogglePortugueseHelp: () => void;
    onOpenDatabaseInspector: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout, isPortugueseHelpVisible, onTogglePortugueseHelp, onOpenDatabaseInspector }) => {
    const roleText = user?.role === 'student' ? 'Student View' : 'Teacher View';
    const RoleIcon = user?.role === 'student' ? GraduationCapIcon : UsersIcon;

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-40 mb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <img src="https://www.canva.com/design/DAGyheH7U1I/F21Lv38TjFUZmEOKlGWsnQ/view?utm_content=DAGyheH7U1I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7e84ba11a" alt="OBLI Pathfinder Logo" className="h-10 w-10" />
                        <span className="text-xl font-bold text-slate-800 hidden sm:block">OBLI Pathfinder</span>
                         {user && (
                            <>
                                <div className="w-px h-6 bg-slate-300 mx-2 hidden sm:block"></div>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <RoleIcon className="h-6 w-6" />
                                    <span className="font-semibold">{roleText}</span>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onTogglePortugueseHelp}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-colors ${isPortugueseHelpVisible ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                            title="Toggle Portuguese help text"
                        >
                            <GlobeIcon className="h-5 w-5" />
                            <span className="hidden md:inline">{isPortugueseHelpVisible ? 'Ajuda ON' : 'Ajuda OFF'}</span>
                        </button>

                         <button
                            onClick={onOpenDatabaseInspector}
                            className="p-2 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                            title="Inspect App State"
                        >
                            <DatabaseIcon className="h-5 w-5" />
                        </button>
                        
                        {user && (
                             <button
                                onClick={onLogout}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-700 transition-colors"
                                title="Log out"
                            >
                                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                                <span className="hidden md:inline">Logout</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
