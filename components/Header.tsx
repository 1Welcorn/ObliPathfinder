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
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzZERTVGRiIvPgo8cGF0aCBkPSJNMjAuMjc2NiAxMC42OTQ5QzE5LjQ5ODQgMTAuNjk0OSAxOC44NDY3IDEwLjk4NDggMTguMzIxOCAxMS41NjQ1QzE3Ljc5NjkgMTIuMTQ0MyAxNy41MDcgMTIuODgwOSAxNy41MDcgMTMuNzgzN1YxNC45MDY5SDIxLjA0NjJWMTMuNzgzN0MyMS4wNDYyIDEzLjIxNTkgMjAuOTA5MyAxMi42ODA0IDIwLjQ1NzcgMTIuMjA4MkMyMC4wMDYxIDExLjczNTkgMTkuNDY4NSAxMS40NjA5IDE4Ljg0NjcgMTEuNDYwOUgxOC43MzIyQzE4LjM5MjMgMTEuNDYwOSAxOC4wNjM4IDExLjU3NDYgMTcuNzQ2OCAxMS44MDE1QzE3LjQyOTggMTIuMDI4MyAxNy4yODQzIDEyLjM0NCAxNy4yODQzIDEyLjc0ODNWMTMuNzgzN0MxNy4yODQzIDEzLjMwOTggMTcuMzk4IDEzLjc4ODkgMTcuNjI1assiMTQuMjIwOUMxNy44NTMgMTQuNjUyOCAxOC4xODE2IDE0Ljk2OTggMTguNjExNSAxNS4xNzE1QzE5LjA0MTUgMTUuMzczMiAxOS41MzE0IDE1LjQ3MyAyMC45ODEzIDE1LjQ3M0MyMC42NzYxIDE1LjQ3MyAyMS4yNzQzIDE1LjI2ODkgMjEuNzc1OSAxNC44NjA3QzIyLjI3NzYgMTQuNDUyNiAyMy4xMDE1IDEzLjQzMjMgMjMuMTAxNSAxMy40MzIzTDIwLjgyMzMgMTEuNTI4MUMyMC44MjMzIDExLjUyODEgMjAuNTUxNiAxMS4xMTQ0IDIwLjI3NjYgMTAuNjk0OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNy4wOTY3IDE4LjUzNTJDzI2LjAzMzQgMTcuNDcyNSAyNC43MzIyIDE2Ljk0MTggMjMuMTUyOSAxNi45NDE4QzIxLjQxMTkgMTYuOTQxOCAxOS45NTUgMTcuNTQwNCAxOC43ODkxIDE4LjczNzhDMTcuNjIzMyAxOS45MzUyIDE3LjAzOTUgMjEuNDA0MyAxNy4wMzk1IDEyMy4xNTQ4QzE3LjAzOTUgMjQuOTA1NCAxNy42MjMzIDI2LjM3NDUgMTguNzg5MSAyNy41NzE5QzE5Ljk1NSAyOC43NjkzIDIxLjQxMTkgMjkuMzY3OSAyMy4xNTI5IDI5LjM2NzlDMjQuNzMyMiAyOS4zNjc5IDI2LjAzMzQgMjguODQ2MSAyNy4wOTY3IDI3Ljc4MjhDMjguMTYgMjYuNzE5NSAyOC42OTA4IDI1LjQ0MDQgMjguNjkwOCAyMy45NDU1VjIyLjM2NjJIMjIuNjIyMlYyMy45NDU1QzIyLjYyMjIgMjQuODU5MiAyMi4zMzA3IDI1LjYxMyAyMS43NDc2IDI2LjIwN0MyMS4xNjQ2IDI2Ljc4ODkgMjAuNDE4OCAyNy4wODgzIDE5LjUwMDYgMjcuMDg4M0MxOC40MTA3IDI3LjA4ODMgMTcuNTM2OSAyNi43NTk3IDE2Ljg3OTEgMjYuMDczOUMxNi4yMjE0IDI1LjM4ODIgMTUuODk3NSAyNC40MDQ3IDE1Ljg5NzUgMjMuMTM5M0MxNS44OTc1IDIxLjg3MzggMTYuMjIxNCAyMC44OTA4IDE2Ljg3OTEgMjAuMTk5MUMxNy41MzY5IDE5LjUyNzUgMTguNDEwNyAxOS4xOTE3IDE5LjUwMDYgMTkuMTkxN0MyMC40MTg4IDE5LjE5MTcgMjEuMTY0NiAxOS40OTEyIDIxLjc0NzYgMjAuMDczQzIyLjMzMDcgMjAuNjU0OSAyMi42MjIyIDIxLjQwODcgMjIuNjIyMiAyMi4zNjYySDI4LjY5MDhWMjEuNzg3OUMyOC42OTA4IDIwLjE4NTQgMjguMTYgMTkuNTk5MSAyNy4wOTY3IDE4LjUzNThaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="OBLI Pathfinder Logo" className="h-10 w-10" />
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