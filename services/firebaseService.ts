
// FIX: Switched to Firebase v8 compat imports to resolve module errors.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { auth, db, isFirebaseConfigured } from './firebaseConfig';
import type { User, UserRole, LearningPlan, Lesson, Student } from '../types';

// FIX: Used firebase.auth for GoogleAuthProvider
const provider = new firebase.auth.GoogleAuthProvider();
const CONFIG_ERROR_MESSAGE = "Firebase is not configured correctly. Please check your environment variables.";

// --- Authentication Service Functions ---

/**
 * Listens for authentication state changes and retrieves user role from Firestore.
 */
export const onAuthStateChanged = (callback: (user: User | null) => void): (() => void) => {
    if (!isFirebaseConfigured || !auth || !db) {
        callback(null);
        return () => {}; // Return a no-op unsubscribe function
    }
    // FIX: Used auth.onAuthStateChanged (v8 compat) and firebase.User type
    return auth.onAuthStateChanged(async (firebaseUser: firebase.User | null) => {
        if (firebaseUser) {
            // User is signed in, now get their role from Firestore.
            // FIX: Used db.collection().doc() (v8 compat)
            const userDocRef = db.collection('users').doc(firebaseUser.uid);
            // FIX: Used userDocRef.get() (v8 compat)
            const userDocSnap = await userDocRef.get();

            if (userDocSnap.exists) {
                const userData = userDocSnap.data()!;
                const user: User = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                    role: userData.role as UserRole,
                };
                callback(user);
            } else {
                console.warn(`User document not found for uid: ${firebaseUser.uid}. Logging them out.`);
                await logout();
                callback(null);
            }
        } else {
            // User is signed out.
            callback(null);
        }
    });
};

/**
 * Signs in the user with Google and creates a user document in Firestore if it's their first time.
 */
export const signInWithGoogle = async (role: UserRole): Promise<void> => {
    if (!isFirebaseConfigured || !auth || !db) throw new Error(CONFIG_ERROR_MESSAGE);
    try {
        // FIX: Used auth.signInWithPopup (v8 compat)
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        if (!user) {
            throw new Error("Sign in failed, user object is null.");
        }

        const userDocRef = db.collection('users').doc(user.uid);
        const userDocSnap = await userDocRef.get();

        if (!userDocSnap.exists) {
            // FIX: Used userDocRef.set() and firebase.firestore.FieldValue (v8 compat)
            await userDocRef.set({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                role: role,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
    } catch (error) {
        console.error("Error during Google Sign-In:", error);
        throw error;
    }
};

/**
 * Signs out the current user.
 */
export const logout = async (): Promise<void> => {
    if (!isFirebaseConfigured || !auth) throw new Error(CONFIG_ERROR_MESSAGE);
    try {
        // FIX: Used auth.signOut (v8 compat)
        await auth.signOut();
    } catch (error) {
        console.error("Logout Error:", error);
        throw error;
    }
};

// --- Firestore Service Functions ---

/**
 * Retrieves a student's learning plan from their user document in Firestore.
 * @param uid - The user's unique ID.
 * @returns The LearningPlan object or null if not found.
 */
export const getLearningPlan = async (uid: string): Promise<LearningPlan | null> => {
    if (!isFirebaseConfigured || !db) throw new Error(CONFIG_ERROR_MESSAGE);
    const userDocRef = db.collection('users').doc(uid);
    const docSnap = await userDocRef.get();

    if (docSnap.exists && docSnap.data()?.learningPlan) {
        return docSnap.data()?.learningPlan as LearningPlan;
    }
    return null;
};

/**
 * Saves a new learning plan to an existing user's document in Firestore.
 * @param uid - The user's unique ID.
 * @param plan - The generated LearningPlan.
 * @param gradeLevel - The student's grade level.
 */
export const saveLearningPlan = async (uid: string, plan: LearningPlan, gradeLevel: string): Promise<void> => {
    if (!isFirebaseConfigured || !db) throw new Error(CONFIG_ERROR_MESSAGE);
    const userDocRef = db.collection('users').doc(uid);
    // FIX: Used userDocRef.update (v8 compat)
    await userDocRef.update({
        learningPlan: plan,
        gradeLevel: gradeLevel
    });
};

/**
 * Updates a single lesson within a module in Firestore using dot notation for efficiency.
 * @param uid - The user's unique ID.
 * @param moduleTitle - The title of the module containing the lesson.
 * @param updatedLesson - The lesson object with the new data.
 */
export const updateLessonInDb = async (uid: string, moduleTitle: string, updatedLesson: Lesson): Promise<void> => {
    if (!isFirebaseConfigured || !db) throw new Error(CONFIG_ERROR_MESSAGE);
    const userDocRef = db.collection('users').doc(uid);
    const docSnap = await userDocRef.get();

    if (docSnap.exists) {
        const userData = docSnap.data()!;
        const currentPlan = userData.learningPlan as LearningPlan;

        const newModules = currentPlan.modules.map(module => {
            if (module.title === moduleTitle) {
                return {
                    ...module,
                    lessons: module.lessons.map(lesson =>
                        lesson.title === updatedLesson.title ? updatedLesson : lesson
                    )
                };
            }
            return module;
        });

        await userDocRef.update({
            'learningPlan.modules': newModules
        });
    } else {
        throw new Error("Could not update lesson: user document not found.");
    }
};

/**
 * Fetches all student users from Firestore for the teacher dashboard.
 */
export const getStudents = async (): Promise<Student[]> => {
    if (!isFirebaseConfigured || !db) throw new Error(CONFIG_ERROR_MESSAGE);
    const usersCollectionRef = db.collection('users');
    // FIX: Used collection.where().get() (v8 compat)
    const q = usersCollectionRef.where("role", "==", "student");
    const querySnapshot = await q.get();

    const studentList: Student[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        studentList.push({
            uid: data.uid,
            name: data.displayName || 'Unnamed Student',
            email: data.email || 'No email',
            gradeLevel: data.gradeLevel || '',
            learningPlan: data.learningPlan || null,
        });
    });
    return studentList;
};
