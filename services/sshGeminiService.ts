// SSH Gemini Integration Service
// This service connects to your custom Gemini application via SSH

export interface SSHGeminiConfig {
    host: string;
    port?: number;
    username: string;
    privateKey?: string;
    password?: string;
    apiEndpoint: string;
    timeout?: number;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    type?: 'text' | 'study_tip' | 'explanation' | 'question' | 'recommendation';
}

export interface StudySession {
    id: string;
    userId: string;
    subject: string;
    messages: ChatMessage[];
    startTime: Date;
    endTime?: Date;
    topics: string[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface StudyRecommendation {
    id: string;
    type: 'topic' | 'exercise' | 'review' | 'practice';
    title: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    estimatedTime: number;
    priority: 'high' | 'medium' | 'low';
}

class SSHGeminiService {
    private config: SSHGeminiConfig;
    private currentSession: StudySession | null = null;

    constructor(config: SSHGeminiConfig) {
        this.config = {
            port: 22,
            timeout: 30000,
            ...config
        };
    }

    // Initialize a new study session
    async startStudySession(userId: string, subject: string, difficulty: 'beginner' | 'intermediate' | 'advanced'): Promise<StudySession> {
        const session: StudySession = {
            id: `session_${Date.now()}`,
            userId,
            subject,
            messages: [],
            startTime: new Date(),
            topics: [],
            difficulty
        };

        // Add welcome message
        const welcomeMessage = await this.generateWelcomeMessage(subject, difficulty);
        session.messages.push(welcomeMessage);
        
        this.currentSession = session;
        return session;
    }

    // Send a message to your Gemini application via SSH
    async sendMessage(message: string, context?: string): Promise<ChatMessage> {
        if (!this.currentSession) {
            throw new Error('No active study session');
        }

        // Add user message
        const userMessage: ChatMessage = {
            id: `msg_${Date.now()}_user`,
            role: 'user',
            content: message,
            timestamp: new Date()
        };
        this.currentSession.messages.push(userMessage);

        try {
            // Send request to your Gemini application via SSH
            const aiResponse = await this.sendSSHRequest(message, context);
            this.currentSession.messages.push(aiResponse);
            
            return aiResponse;
        } catch (error) {
            console.error('Error sending SSH request:', error);
            const errorMessage: ChatMessage = {
                id: `msg_${Date.now()}_error`,
                role: 'assistant',
                content: 'Desculpe, encontrei um erro ao conectar com o servidor. Tente novamente.',
                timestamp: new Date(),
                type: 'text'
            };
            this.currentSession.messages.push(errorMessage);
            return errorMessage;
        }
    }

    // Send HTTP request to your Gemini application via SSH tunnel
    private async sendSSHRequest(message: string, context?: string): Promise<ChatMessage> {
        const requestData = {
            message,
            context,
            session: {
                subject: this.currentSession?.subject,
                difficulty: this.currentSession?.difficulty,
                userId: this.currentSession?.userId
            },
            timestamp: new Date().toISOString()
        };

        try {
            // Method 1: Direct HTTP request (if your server is accessible)
            const response = await fetch(`${this.config.apiEndpoint}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getAuthToken()}`
                },
                body: JSON.stringify(requestData),
                signal: AbortSignal.timeout(this.config.timeout || 30000)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            return {
                id: `msg_${Date.now()}_ai`,
                role: 'assistant',
                content: data.response || data.message || 'Resposta recebida do servidor',
                timestamp: new Date(),
                type: this.determineMessageType(data.response || data.message)
            };

        } catch (error) {
            console.error('SSH request failed:', error);
            
            // Fallback: Try alternative connection methods
            return await this.tryAlternativeConnection(requestData);
        }
    }

    // Alternative connection methods (WebSocket, Server-Sent Events, etc.)
    private async tryAlternativeConnection(requestData: any): Promise<ChatMessage> {
        try {
            // Method 2: WebSocket connection
            if (this.config.apiEndpoint.startsWith('ws://') || this.config.apiEndpoint.startsWith('wss://')) {
                return await this.sendWebSocketRequest(requestData);
            }

            // Method 3: Server-Sent Events
            return await this.sendSSERequest(requestData);

        } catch (error) {
            console.error('Alternative connection failed:', error);
            throw error;
        }
    }

    // WebSocket connection method
    private async sendWebSocketRequest(requestData: any): Promise<ChatMessage> {
        return new Promise((resolve, reject) => {
            const ws = new WebSocket(this.config.apiEndpoint);
            
            ws.onopen = () => {
                ws.send(JSON.stringify(requestData));
            };

            ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    ws.close();
                    resolve({
                        id: `msg_${Date.now()}_ai`,
                        role: 'assistant',
                        content: data.response || data.message,
                        timestamp: new Date(),
                        type: this.determineMessageType(data.response || data.message)
                    });
                } catch (error) {
                    reject(error);
                }
            };

            ws.onerror = (error) => {
                reject(error);
            };

            ws.onclose = () => {
                reject(new Error('WebSocket connection closed'));
            };

            // Timeout
            setTimeout(() => {
                ws.close();
                reject(new Error('WebSocket request timeout'));
            }, this.config.timeout || 30000);
        });
    }

    // Server-Sent Events method
    private async sendSSERequest(requestData: any): Promise<ChatMessage> {
        return new Promise((resolve, reject) => {
            const eventSource = new EventSource(`${this.config.apiEndpoint}/stream?data=${encodeURIComponent(JSON.stringify(requestData))}`);
            
            eventSource.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    eventSource.close();
                    resolve({
                        id: `msg_${Date.now()}_ai`,
                        role: 'assistant',
                        content: data.response || data.message,
                        timestamp: new Date(),
                        type: this.determineMessageType(data.response || data.message)
                    });
                } catch (error) {
                    reject(error);
                }
            };

            eventSource.onerror = (error) => {
                eventSource.close();
                reject(error);
            };

            // Timeout
            setTimeout(() => {
                eventSource.close();
                reject(new Error('SSE request timeout'));
            }, this.config.timeout || 30000);
        });
    }

    // Get authentication token (implement based on your auth method)
    private getAuthToken(): string {
        // Method 1: From environment variable
        if (import.meta.env.VITE_SSH_GEMINI_TOKEN) {
            return import.meta.env.VITE_SSH_GEMINI_TOKEN;
        }

        // Method 2: From localStorage
        const token = localStorage.getItem('ssh_gemini_token');
        if (token) {
            return token;
        }

        // Method 3: Generate token based on SSH credentials
        return btoa(`${this.config.username}:${this.config.password || 'default'}`);
    }

    // Generate welcome message
    private async generateWelcomeMessage(subject: string, difficulty: string): Promise<ChatMessage> {
        const welcomeText = `Olá! Sou o OBLI A.I., seu assistente de estudos inteligente! 🤖📚

Estou aqui para ajudá-lo com ${subject} no nível ${difficulty}. Posso:
• Explicar conceitos complexos de forma simples
• Responder suas dúvidas
• Dar dicas de estudo
• Criar exercícios práticos
• Ajudar com revisões

Como posso ajudá-lo hoje? Faça uma pergunta ou me diga o que gostaria de estudar!`;

        return {
            id: `msg_${Date.now()}_welcome`,
            role: 'assistant',
            content: welcomeText,
            timestamp: new Date(),
            type: 'text'
        };
    }

    // Determine message type for styling
    private determineMessageType(content: string): ChatMessage['type'] {
        if (content.includes('dica') || content.includes('sugestão')) return 'study_tip';
        if (content.includes('explicação') || content.includes('conceito')) return 'explanation';
        if (content.includes('?')) return 'question';
        if (content.includes('recomendo') || content.includes('sugiro')) return 'recommendation';
        return 'text';
    }

    // Get study recommendations from your Gemini application
    async getStudyRecommendations(): Promise<StudyRecommendation[]> {
        if (!this.currentSession) return [];

        try {
            const response = await fetch(`${this.config.apiEndpoint}/recommendations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getAuthToken()}`
                },
                body: JSON.stringify({
                    subject: this.currentSession.subject,
                    difficulty: this.currentSession.difficulty,
                    userId: this.currentSession.userId
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.recommendations || [];

        } catch (error) {
            console.error('Error getting recommendations:', error);
            return [];
        }
    }

    // End current study session
    endStudySession(): StudySession | null {
        if (this.currentSession) {
            this.currentSession.endTime = new Date();
            const session = this.currentSession;
            this.currentSession = null;
            return session;
        }
        return null;
    }

    // Get current session
    getCurrentSession(): StudySession | null {
        return this.currentSession;
    }

    // Test connection to your Gemini application
    async testConnection(): Promise<boolean> {
        try {
            const response = await fetch(`${this.config.apiEndpoint}/health`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.getAuthToken()}`
                },
                signal: AbortSignal.timeout(5000)
            });

            return response.ok;
        } catch (error) {
            console.error('Connection test failed:', error);
            return false;
        }
    }
}

// Create and export the service instance
export const createSSHGeminiService = (config: SSHGeminiConfig) => {
    return new SSHGeminiService(config);
};

// Default configuration (you'll need to update these values)
export const defaultSSHConfig: SSHGeminiConfig = {
    host: import.meta.env.VITE_SSH_GEMINI_HOST || 'your-server.com',
    port: parseInt(import.meta.env.VITE_SSH_GEMINI_PORT || '22'),
    username: import.meta.env.VITE_SSH_GEMINI_USERNAME || 'your-username',
    privateKey: import.meta.env.VITE_SSH_GEMINI_PRIVATE_KEY,
    password: import.meta.env.VITE_SSH_GEMINI_PASSWORD,
    apiEndpoint: import.meta.env.VITE_SSH_GEMINI_API_ENDPOINT || 'https://your-server.com/api',
    timeout: parseInt(import.meta.env.VITE_SSH_GEMINI_TIMEOUT || '30000')
};

export const sshGeminiService = createSSHGeminiService(defaultSSHConfig);
