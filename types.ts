// [FE-FIX] Implemented missing type definitions to resolve module resolution errors across the application.
export type LessonStatus = 'not_started' | 'in_progress' | 'completed';

export interface PronunciationGuide {
    word: string;
    ipa: string;
}

export interface Lesson {
    title: string;
    objective: string;
    explanation: string;
    example: string;
    practice_prompt: string;
    pronunciation_guide: PronunciationGuide[];
    status: LessonStatus;
    notes?: string;
    practice_answer?: string;
    practice_feedback?: string;
}

export interface Module {
    title: string;
    description: string;
    lessons: Lesson[];
}

export interface LearningPlan {
    goal: string;
    modules: Module[];
}

export type UserRole = 'student' | 'teacher';

export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    role: UserRole;
}

export interface Student {
    uid: string;
    name: string;
    email: string;
    gradeLevel: string;
    learningPlan: LearningPlan | null;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}
