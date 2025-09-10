import {
    onAuthStateChanged as firebaseOnAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    type User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import type { User, UserRole, LearningPlan, Lesson, Student } from '../types';

const provider = new GoogleAuthProvider();

// --- Authentication Service Functions ---

/**
 * Listens for authentication state changes and retrieves user role from Firestore.
 */
export const onAuthStateChanged = (callback: (user: User | null) => void): (() => void) => {
    return firebaseOnAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
            // User is signed in, now get their role from Firestore.
            const userDocRef = doc(db, 'users', firebaseUser.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
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
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
            await setDoc(userDocRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                role: role,
                createdAt: serverTimestamp(),
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
    try {
        await signOut(auth);
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
    const userDocRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists() && docSnap.data().learningPlan) {
        return docSnap.data().learningPlan as LearningPlan;
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
    const userDocRef = doc(db, 'users', uid);
    await updateDoc(userDocRef, {
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
    const userDocRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
        const userData = docSnap.data();
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

        await updateDoc(userDocRef, {
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
    const usersCollectionRef = collection(db, 'users');
    const q = query(usersCollectionRef, where("role", "==", "student"));
    const querySnapshot = await getDocs(q);

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