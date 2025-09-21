import React, { useState } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import { BeakerIcon } from './icons/BeakerIcon';
import { DocumentArrowDownIcon } from './icons/DocumentArrowDownIcon';
import { SpeakerWaveIcon } from './icons/SpeakerWaveIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ClockIcon } from './icons/ClockIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { TrophyIcon } from './icons/TrophyIcon';
import type { StudyMaterial, StudyMaterialType } from '../types';

interface StudyMaterialsViewProps {
    studyMaterials: StudyMaterial[];
    onBack: () => void;
    isPortugueseHelpVisible: boolean;
    onOpenOBLIAI: () => void;
}

const StudyMaterialsView: React.FC<StudyMaterialsViewProps> = ({
    studyMaterials,
    onBack,
    isPortugueseHelpVisible,
    onOpenOBLIAI
}) => {
    const [selectedType, setSelectedType] = useState<StudyMaterialType | 'all'>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const getTypeIcon = (type: StudyMaterialType) => {
        switch (type) {
            case 'link': return <GlobeIcon className="h-6 w-6" />;
            case 'form': return <DocumentTextIcon className="h-6 w-6" />;
            case 'quiz': return <BeakerIcon className="h-6 w-6" />;
            case 'document': return <DocumentArrowDownIcon className="h-6 w-6" />;
            case 'video': return <SpeakerWaveIcon className="h-6 w-6" />;
            case 'assignment': return <BookOpenIcon className="h-6 w-6" />;
            case 'past_exam': return <TrophyIcon className="h-6 w-6" />;
            default: return <DocumentTextIcon className="h-6 w-6" />;
        }
    };

    const getTypeColor = (type: StudyMaterialType) => {
        switch (type) {
            case 'link': return 'text-blue-600 bg-blue-100 border-blue-200';
            case 'form': return 'text-green-600 bg-green-100 border-green-200';
            case 'quiz': return 'text-purple-600 bg-purple-100 border-purple-200';
            case 'document': return 'text-orange-600 bg-orange-100 border-orange-200';
            case 'video': return 'text-red-600 bg-red-100 border-red-200';
            case 'assignment': return 'text-indigo-600 bg-indigo-100 border-indigo-200';
            case 'past_exam': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
            default: return 'text-gray-600 bg-gray-100 border-gray-200';
        }
    };

    const filteredMaterials = studyMaterials.filter(material => {
        const matchesType = selectedType === 'all' || material.type === selectedType;
        const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            material.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesType && matchesSearch;
    });

    const typeCounts = {
        all: studyMaterials.length,
        link: studyMaterials.filter(m => m.type === 'link').length,
        form: studyMaterials.filter(m => m.type === 'form').length,
        quiz: studyMaterials.filter(m => m.type === 'quiz').length,
        document: studyMaterials.filter(m => m.type === 'document').length,
        video: studyMaterials.filter(m => m.type === 'video').length,
        assignment: studyMaterials.filter(m => m.type === 'assignment').length,
        past_exam: studyMaterials.filter(m => m.type === 'past_exam').length,
    };

    const handleMaterialClick = (material: StudyMaterial) => {
        if (material.url) {
            window.open(material.url, '_blank', 'noopener,noreferrer');
        }
    };

    const isOverdue = (dueDate: Date) => {
        return new Date() > dueDate;
    };

    const isDueSoon = (dueDate: Date) => {
        const threeDaysFromNow = new Date();
        threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
        return new Date() <= dueDate && dueDate <= threeDaysFromNow;
    };

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

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/4">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Study Materials</h1>
                        <p className="text-slate-600 mb-6">
                            Access your educational resources, assignments, and learning materials.
                        </p>
                        {isPortugueseHelpVisible && (
                            <p className="text-sm text-slate-500 italic mb-6">
                                Acesse seus recursos educacionais, tarefas e materiais de aprendizado.
                            </p>
                        )}

                        {/* Search */}
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Search materials..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>

                        {/* Type Filter */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-slate-800 mb-3">Filter by Type</h3>
                            {(['all', 'past_exam', 'link', 'form', 'quiz', 'document', 'video', 'assignment'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                                        selectedType === type
                                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                                            : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {type !== 'all' && getTypeIcon(type as StudyMaterialType)}
                                        <span className="capitalize font-medium">
                                            {type === 'all' ? 'All Materials' : 
                                             type === 'past_exam' ? 'Past Obli Exams' : 
                                             type}
                                        </span>
                                    </div>
                                    <span className="text-sm bg-slate-200 text-slate-600 px-2 py-1 rounded-full">
                                        {typeCounts[type]}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-3/4">
                        {/* OBLI A.I. Section */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">🤖</div>
                                <h2 className="text-2xl font-bold text-slate-800">OBLI A.I.</h2>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded-full">
                                    AI Assistant
                                </span>
                            </div>
                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                                            Seu Assistente de Estudos Inteligente
                                        </h3>
                                        <p className="text-slate-600 mb-4">
                                            Converse com a IA para tirar dúvidas, obter explicações, dicas de estudo e muito mais!
                                        </p>
                                        {isPortugueseHelpVisible && (
                                            <p className="text-sm text-slate-500 italic mb-4">
                                                Chat with AI to ask questions, get explanations, study tips and much more!
                                            </p>
                                        )}
                                        <div className="flex items-center gap-4 text-sm text-slate-600">
                                            <span className="flex items-center gap-1">
                                                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                                Explicações personalizadas
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                                Dicas de estudo
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                                Suporte 24/7
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={onOpenOBLIAI}
                                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                                    >
                                        <div className="text-xl">🤖</div>
                                        <span className="font-semibold">Iniciar Chat</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Past Obli Exams Section */}
                        {studyMaterials.filter(m => m.type === 'past_exam').length > 0 && (
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrophyIcon className="h-8 w-8 text-yellow-600" />
                                    <h2 className="text-2xl font-bold text-slate-800">Past Obli Exams</h2>
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                                        {studyMaterials.filter(m => m.type === 'past_exam').length} exam{studyMaterials.filter(m => m.type === 'past_exam').length !== 1 ? 's' : ''}
                                    </span>
                                </div>
                                <div className="grid gap-4">
                                    {studyMaterials
                                        .filter(m => m.type === 'past_exam')
                                        .map((material) => (
                                            <div
                                                key={material.id}
                                                className={`p-6 border-2 rounded-xl transition-all duration-200 ${
                                                    material.url
                                                        ? 'cursor-pointer hover:shadow-lg hover:border-yellow-400'
                                                        : 'border-slate-200'
                                                } ${getTypeColor(material.type)}`}
                                                onClick={() => material.url && handleMaterialClick(material)}
                                            >
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-lg ${getTypeColor(material.type)}`}>
                                                            {getTypeIcon(material.type)}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-bold text-slate-800">
                                                                {material.title}
                                                            </h3>
                                                            <p className="text-sm text-slate-600">
                                                                Past Obli Exam
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {material.isRequired && (
                                                            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                                                                Required
                                                            </span>
                                                        )}
                                                        {material.points && (
                                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs font-semibold rounded-full">
                                                                {material.points} pts
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <p className="text-slate-700 mb-4">
                                                    {material.description}
                                                </p>

                                                {material.content && (
                                                    <div className="bg-slate-50 p-4 rounded-lg mb-4">
                                                        <h4 className="font-semibold text-slate-800 mb-2">Instructions:</h4>
                                                        <p className="text-slate-700 whitespace-pre-wrap">
                                                            {material.content}
                                                        </p>
                                                    </div>
                                                )}

                                                {material.dueDate && (
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <ClockIcon className="h-4 w-4 text-slate-500" />
                                                        <span className={`text-sm font-medium ${
                                                            isOverdue(material.dueDate)
                                                                ? 'text-red-600'
                                                                : isDueSoon(material.dueDate)
                                                                ? 'text-yellow-600'
                                                                : 'text-slate-600'
                                                        }`}>
                                                            Due: {material.dueDate.toLocaleDateString()}
                                                            {isOverdue(material.dueDate) && ' (Overdue)'}
                                                            {isDueSoon(material.dueDate) && !isOverdue(material.dueDate) && ' (Due Soon)'}
                                                        </span>
                                                    </div>
                                                )}

                                                {material.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {material.tags.map((tag, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded-full"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {material.url && (
                                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                                        <GlobeIcon className="h-4 w-4" />
                                                        <span>Click to open exam</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* Other Study Materials Section */}
                        {filteredMaterials.filter(m => m.type !== 'past_exam').length > 0 && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpenIcon className="h-6 w-6 text-slate-600" />
                                    <h2 className="text-xl font-bold text-slate-800">Other Study Materials</h2>
                                </div>
                                <div className="grid gap-4">
                                    {filteredMaterials
                                        .filter(m => m.type !== 'past_exam')
                                        .map((material) => (
                                            <div
                                                key={material.id}
                                                className={`p-6 border-2 rounded-xl transition-all duration-200 ${
                                                    material.url
                                                        ? 'cursor-pointer hover:shadow-lg hover:border-indigo-300'
                                                        : 'border-slate-200'
                                                } ${getTypeColor(material.type)}`}
                                                onClick={() => material.url && handleMaterialClick(material)}
                                            >
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-lg ${getTypeColor(material.type)}`}>
                                                            {getTypeIcon(material.type)}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-bold text-slate-800">
                                                                {material.title}
                                                            </h3>
                                                            <p className="text-sm text-slate-600 capitalize">
                                                                {material.type}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {material.isRequired && (
                                                            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                                                                Required
                                                            </span>
                                                        )}
                                                        {material.points && (
                                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs font-semibold rounded-full">
                                                                {material.points} pts
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <p className="text-slate-700 mb-4">
                                                    {material.description}
                                                </p>

                                                {material.content && (
                                                    <div className="bg-slate-50 p-4 rounded-lg mb-4">
                                                        <h4 className="font-semibold text-slate-800 mb-2">Instructions:</h4>
                                                        <p className="text-slate-700 whitespace-pre-wrap">
                                                            {material.content}
                                                        </p>
                                                    </div>
                                                )}

                                                {material.dueDate && (
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <ClockIcon className="h-4 w-4 text-slate-500" />
                                                        <span className={`text-sm font-medium ${
                                                            isOverdue(material.dueDate)
                                                                ? 'text-red-600'
                                                                : isDueSoon(material.dueDate)
                                                                ? 'text-yellow-600'
                                                                : 'text-slate-600'
                                                        }`}>
                                                            Due: {material.dueDate.toLocaleDateString()}
                                                            {isOverdue(material.dueDate) && ' (Overdue)'}
                                                            {isDueSoon(material.dueDate) && !isOverdue(material.dueDate) && ' (Due Soon)'}
                                                        </span>
                                                    </div>
                                                )}

                                                {material.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {material.tags.map((tag, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded-full"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {material.url && (
                                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                                        <GlobeIcon className="h-4 w-4" />
                                                        <span>Click to open link</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* No Materials Message */}
                        {filteredMaterials.length === 0 && (
                            <div className="text-center py-12">
                                <DocumentTextIcon className="h-16 w-16 mx-auto mb-4 text-slate-300" />
                                <h3 className="text-lg font-semibold text-slate-600 mb-2">
                                    No materials found
                                </h3>
                                <p className="text-slate-500">
                                    {searchTerm || selectedType !== 'all'
                                        ? 'Try adjusting your search or filter criteria'
                                        : 'No study materials have been added yet'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyMaterialsView;
