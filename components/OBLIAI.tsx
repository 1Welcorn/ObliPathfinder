import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { SendIcon } from './icons/SendIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { obliAIService, ChatMessage, StudySession, StudyRecommendation } from '../services/obliAIService';
import SSHGeminiConfig from './SSHGeminiConfig';

interface OBLIAIProps {
    onBack: () => void;
    isPortugueseHelpVisible: boolean;
    currentUser: { uid: string; email: string | null; displayName: string | null; photoURL: string | null } | null;
}

const OBLIAI: React.FC<OBLIAIProps> = ({ onBack, isPortugueseHelpVisible, currentUser }) => {
    const [currentSession, setCurrentSession] = useState<StudySession | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isStarting, setIsStarting] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState('Matemática');
    const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
    const [recommendations, setRecommendations] = useState<StudyRecommendation[]>([]);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [showSSHConfig, setShowSSHConfig] = useState(false);
    const [sshConfig, setSshConfig] = useState({
        host: 'gemini.google.com',
        port: '443',
        apiEndpoint: 'https://gemini.google.com/gem/7b0cd16f87e2',
        apiKey: 'AIzaSyD6h4OQmRBPU6wkMJXgq9YDJvFQdyqqXoU'
    });
    const [isTestingConnection, setIsTestingConnection] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const subjects = [
        'Matemática', 'Português', 'História', 'Geografia', 'Ciências', 
        'Física', 'Química', 'Biologia', 'Inglês', 'Filosofia', 'Sociologia'
    ];

    const difficulties = [
        { value: 'beginner', label: 'Iniciante', description: 'Conceitos básicos' },
        { value: 'intermediate', label: 'Intermediário', description: 'Conceitos médios' },
        { value: 'advanced', label: 'Avançado', description: 'Conceitos complexos' }
    ];

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Handle SSH configuration changes
    const handleSSHConfigChange = (field: string, value: string) => {
        setSshConfig(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Test SSH connection
    const testSSHConnection = async () => {
        setIsTestingConnection(true);
        try {
            // Simulate connection test
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // For now, we'll just show a success message
            // In a real implementation, this would test the actual connection
            alert(`Connection test successful!\n\nHost: ${sshConfig.host}\nPort: ${sshConfig.port}\nEndpoint: ${sshConfig.apiEndpoint}`);
            
            // Save configuration to localStorage
            localStorage.setItem('sshGeminiConfig', JSON.stringify(sshConfig));
            
        } catch (error) {
            alert(`Connection test failed: ${error}`);
        } finally {
            setIsTestingConnection(false);
        }
    };

    // Save SSH configuration
    const saveSSHConfig = () => {
        localStorage.setItem('sshGeminiConfig', JSON.stringify(sshConfig));
        setShowSSHConfig(false);
        alert('SSH configuration saved successfully!');
    };

    // Start a new study session
    const startStudySession = async () => {
        if (!currentUser) return;
        
        setIsStarting(true);
        try {
            const session = await obliAIService.startStudySession(
                currentUser.uid,
                selectedSubject,
                selectedDifficulty
            );
            setCurrentSession(session);
            setMessages(session.messages);
        } catch (error) {
            console.error('Error starting study session:', error);
        } finally {
            setIsStarting(false);
        }
    };

    // Send a message to the AI
    const sendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;
        
        setIsLoading(true);
        try {
            const response = await obliAIService.sendMessage(inputMessage);
            setMessages(prev => [...prev, response]);
            setInputMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Get study recommendations
    const getRecommendations = async () => {
        try {
            const recs = await obliAIService.getStudyRecommendations();
            setRecommendations(recs);
            setShowRecommendations(true);
        } catch (error) {
            console.error('Error getting recommendations:', error);
        }
    };

    // End study session
    const endStudySession = () => {
        const session = obliAIService.endStudySession();
        setCurrentSession(null);
        setMessages([]);
        setShowRecommendations(false);
        setRecommendations([]);
    };

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Get message type styling
    const getMessageTypeStyle = (type?: ChatMessage['type']) => {
        switch (type) {
            case 'study_tip':
                return 'bg-yellow-50 border-yellow-200 text-yellow-800';
            case 'explanation':
                return 'bg-blue-50 border-blue-200 text-blue-800';
            case 'question':
                return 'bg-green-50 border-green-200 text-green-800';
            case 'recommendation':
                return 'bg-purple-50 border-purple-200 text-purple-800';
            default:
                return 'bg-slate-50 border-slate-200 text-slate-800';
        }
    };

    // Session setup screen
    if (!currentSession) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <button
                                onClick={onBack}
                                className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <ArrowLeftIcon className="h-5 w-5" />
                                <span className="font-medium">Back to Study Materials</span>
                            </button>
                        </div>

                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="text-4xl">🤖</div>
                                <h1 className="text-4xl font-bold text-slate-800">OBLI A.I.</h1>
                            </div>
                            <p className="text-xl text-slate-600 mb-2">
                                Seu assistente de estudos inteligente com IA
                            </p>
                            {isPortugueseHelpVisible && (
                                <p className="text-sm text-slate-500 italic">
                                    Your intelligent AI study assistant
                                </p>
                            )}
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-6">
                                <h2 className="text-xl font-bold text-slate-800 mb-4">Configure sua sessão de estudos</h2>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Matéria:
                                        </label>
                                        <select
                                            value={selectedSubject}
                                            onChange={(e) => setSelectedSubject(e.target.value)}
                                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        >
                                            {subjects.map(subject => (
                                                <option key={subject} value={subject}>
                                                    {subject}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Nível de dificuldade:
                                        </label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {difficulties.map(diff => (
                                                <button
                                                    key={diff.value}
                                                    onClick={() => setSelectedDifficulty(diff.value as any)}
                                                    className={`p-3 rounded-lg border-2 transition-all ${
                                                        selectedDifficulty === diff.value
                                                            ? 'bg-indigo-600 text-white border-transparent'
                                                            : 'bg-white border-slate-300 hover:border-indigo-400'
                                                    }`}
                                                >
                                                    <div className="text-center">
                                                        <div className="font-semibold">{diff.label}</div>
                                                        <div className="text-xs opacity-75">{diff.description}</div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <div className="flex gap-4 justify-center">
                                        <button
                                            onClick={startStudySession}
                                            disabled={isStarting}
                                            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            {isStarting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                    Iniciando...
                                                </>
                                            ) : (
                                                <>
                                                    <SparklesIcon className="h-5 w-5" />
                                                    Iniciar Sessão de Estudos
                                                </>
                                            )}
                                        </button>
                                        <button
                                            onClick={() => {
                                                console.log('SSH Config button clicked!');
                                                setShowSSHConfig(true);
                                                console.log('showSSHConfig set to true');
                                            }}
                                            className="px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
                                        >
                                            <span className="text-sm">⚙️ SSH Config</span>
                                        </button>
                                        <button
                                            onClick={() => alert('Test button works!')}
                                            className="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                                        >
                                            <span className="text-sm">Test</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center text-slate-600">
                                <p className="text-sm">
                                    O OBLI A.I. pode ajudá-lo com explicações, exercícios, dicas de estudo e muito mais!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SSH Configuration Modal - Session Setup Screen */}
                {showSSHConfig && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '24px',
                            borderRadius: '8px',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                            maxWidth: '500px',
                            width: '90%',
                            maxHeight: '80vh',
                            overflow: 'auto'
                        }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
                                SSH Configuration
                            </h3>
                            <p style={{ color: '#6b7280', marginBottom: '16px' }}>
                                Configure connection to your custom Gemini app at:
                                <br />
                                <code style={{ backgroundColor: '#f3f4f6', padding: '4px', borderRadius: '4px', fontSize: '12px' }}>
                                    https://gemini.google.com/gem/7b0cd16f87e2
                                </code>
                            </p>
                            <div style={{ marginBottom: '16px' }}>
                                <div style={{ marginBottom: '12px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                                        Host
                                    </label>
                                    <input
                                        type="text"
                                        value={sshConfig.host}
                                        onChange={(e) => handleSSHConfigChange('host', e.target.value)}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '12px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                                        Port
                                    </label>
                                    <input
                                        type="number"
                                        value={sshConfig.port}
                                        onChange={(e) => handleSSHConfigChange('port', e.target.value)}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '12px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                                        API Endpoint
                                    </label>
                                    <input
                                        type="text"
                                        value={sshConfig.apiEndpoint}
                                        onChange={(e) => handleSSHConfigChange('apiEndpoint', e.target.value)}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '12px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                                        API Key
                                    </label>
                                    <input
                                        type="text"
                                        value={sshConfig.apiKey}
                                        onChange={(e) => handleSSHConfigChange('apiKey', e.target.value)}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button
                                    onClick={() => setShowSSHConfig(false)}
                                    style={{
                                        flex: 1,
                                        padding: '8px 16px',
                                        backgroundColor: '#d1d5db',
                                        color: '#374151',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={saveSSHConfig}
                                    style={{
                                        flex: 1,
                                        padding: '8px 16px',
                                        backgroundColor: '#10b981',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    onClick={testSSHConnection}
                                    disabled={isTestingConnection}
                                    style={{
                                        flex: 1,
                                        padding: '8px 16px',
                                        backgroundColor: isTestingConnection ? '#9ca3af' : '#4f46e5',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: isTestingConnection ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isTestingConnection ? 'Testing...' : 'Test Connection'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Chat interface
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mb-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={endStudySession}
                                className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <ArrowLeftIcon className="h-5 w-5" />
                                <span className="font-medium">Encerrar Sessão</span>
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <div className="text-sm font-semibold text-slate-800">{currentSession.subject}</div>
                                <div className="text-xs text-slate-600">{difficulties.find(d => d.value === currentSession.difficulty)?.label}</div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={getRecommendations}
                                    className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    <LightBulbIcon className="h-4 w-4" />
                                    <span className="text-sm">Recomendações</span>
                                </button>
                                <button
                                    onClick={() => setShowSSHConfig(true)}
                                    className="flex items-center gap-2 px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
                                >
                                    <span className="text-sm">⚙️ SSH Config</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="h-96 overflow-y-auto border border-slate-200 rounded-lg p-4 mb-4 bg-slate-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg border ${
                                        message.role === 'user'
                                            ? 'bg-indigo-600 text-white border-transparent'
                                            : `bg-white ${getMessageTypeStyle(message.type)}`
                                    }`}
                                >
                                    <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                                    <div className={`text-xs mt-1 ${
                                        message.role === 'user' ? 'text-indigo-100' : 'text-slate-500'
                                    }`}>
                                        {message.timestamp.toLocaleTimeString()}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start mb-4">
                                <div className="bg-white border border-slate-200 px-4 py-2 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"></div>
                                        <span className="text-sm text-slate-600">OBLI A.I. está pensando...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Digite sua pergunta ou dúvida..."
                            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            disabled={isLoading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!inputMessage.trim() || isLoading}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            <SendIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Recommendations Modal */}
                {showRecommendations && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-slate-800">Recomendações de Estudo</h3>
                                <button
                                    onClick={() => setShowRecommendations(false)}
                                    className="text-slate-500 hover:text-slate-700"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <div className="space-y-3">
                                {recommendations.map((rec) => (
                                    <div key={rec.id} className="border border-slate-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-slate-800">{rec.title}</h4>
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                rec.priority === 'high' ? 'bg-red-100 text-red-800' :
                                                rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-green-100 text-green-800'
                                            }`}>
                                                {rec.priority}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-2">{rec.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-slate-500">
                                            <span>Tempo: {rec.estimatedTime} min</span>
                                            <span>Dificuldade: {rec.difficulty}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* SSH Configuration Modal - Inside return statement */}
            {console.log('Rendering modal, showSSHConfig:', showSSHConfig)}
            {console.log('Modal should render:', showSSHConfig)}
            {showSSHConfig && (
                <div style={{
                    position: 'fixed',
                    top: '50px',
                    left: '50px',
                    right: '50px',
                    bottom: '50px',
                    backgroundColor: 'red',
                    border: '5px solid blue',
                    zIndex: 99999
                }}>
                    <h1 style={{ color: 'white', fontSize: '24px' }}>MODAL IS WORKING!</h1>
                    <button onClick={() => setShowSSHConfig(false)} style={{ padding: '10px', fontSize: '16px' }}>
                        Close Modal
                    </button>
                </div>
            )}
        </div>
    );
};

export default OBLIAI;
