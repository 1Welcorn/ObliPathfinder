// NOTE: This is a simplified mock of the Firebase SDK for demonstration purposes.
// In a real application, you would import these from the 'firebase' packages.
// The logic here simulates the behavior of Firebase Authentication and Firestore.

import type { User, UserRole, LearningPlan, Lesson } from '../types';
import { mockStudents } from '../data/mockData';

// --- Mock Firebase SDK ---

interface MockUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

// --- Mock Authentication ---
let mockCurrentUser: MockUser | null = null;
let onAuthChangedCallback: (user: MockUser | null) => void = () => {};

// --- Mock Firestore Database ---
const mockDb: { [key: string]: any } = {};
// Pre-populate DB with mock students
mockStudents.forEach(student => {
    if (student.learningPlan) {
        mockDb[student.uid] = {
            uid: student.uid,
            email: student.email,
            name: student.name,
            gradeLevel: student.gradeLevel,
            learningPlan: student.learningPlan
        };
    }
});


const auth = {
  onAuthStateChanged: (callback: (user: MockUser | null) => void) => {
    onAuthChangedCallback = callback;
    setTimeout(() => callback(mockCurrentUser), 100); 
    return () => { onAuthChangedCallback = () => {}; };
  },
  signInWithPopup: () => {
    return new Promise<{ user: MockUser }>((resolve, reject) => {
      setTimeout(() => {
        const confirmSignIn = window.confirm("Simulate signing in with Google?");
        if (confirmSignIn) {
          const mockUser = {
            uid: `firebase-uid-${Date.now()}`,
            email: "student.test@example.com",
            displayName: "Test User",
          };
          // Check if this user exists in our mock DB, otherwise use them.
          mockCurrentUser = mockDb[mockUser.uid] || mockUser;
          resolve({ user: mockCurrentUser });
        } else {
          reject(new Error("Sign-in cancelled by user."));
        }
      }, 500);
    });
  },
  signOut: () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        mockCurrentUser = null;
        resolve();
      }, 200);
    });
  }
};

const firestore = {
    doc: (path: string) => ({
        get: () => Promise.resolve({
            exists: () => !!mockDb[path],
            data: () => mockDb[path]
        }),
        set: (data: any) => {
            mockDb[path] = data;
            return Promise.resolve();
        },
        update: (data: any) => {
            mockDb[path] = { ...mockDb[path], ...data };
            return Promise.resolve();
        }
    })
};


// --- Service Functions ---

export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      const role = (sessionStorage.getItem('userRole') as UserRole) || 'student';
      callback({ ...firebaseUser, role });
    } else {
      callback(null);
    }
  });
};

export const signInWithGoogle = async (role: UserRole): Promise<void> => {
  try {
    const result = await auth.signInWithPopup();
    sessionStorage.setItem('userRole', role);
    onAuthChangedCallback(result.user);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await auth.signOut();
    sessionStorage.removeItem('userRole');
    onAuthChangedCallback(null);
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};

// --- Firestore Service Functions ---

/**
 * Retrieves a student's learning plan from Firestore.
 * @param uid - The user's unique ID.
 * @returns The LearningPlan object or null if not found.
 */
export const getLearningPlan = async (uid: string): Promise<LearningPlan | null> => {
    console.log(`Fetching plan for uid: ${uid}`);
    const docSnap = await firestore.doc(uid).get();
    if (docSnap.exists()) {
        console.log("Plan found:", docSnap.data().learningPlan);
        return docSnap.data().learningPlan as LearningPlan;
    }
    console.log("No plan found for this user.");
    return null;
};

/**
 * Saves a new student and their learning plan to Firestore.
 * @param uid - The user's unique ID.
 * @param plan - The generated LearningPlan.
 */
export const saveLearningPlan = async (uid: string, plan: LearningPlan, email: string | null, name: string | null, gradeLevel: string): Promise<void> => {
    console.log(`Saving new plan for uid: ${uid}`);
    const userDoc = {
        uid,
        email,
        name,
        gradeLevel,
        learningPlan: plan
    };
    await firestore.doc(uid).set(userDoc);
    console.log("Plan saved successfully.");
};

/**
 * Updates a single lesson within a module in Firestore.
 * @param uid - The user's unique ID.
 * @param moduleTitle - The title of the module containing the lesson.
 * @param updatedLesson - The lesson object with the new data.
 */
export const updateLessonInDb = async (uid: string, moduleTitle: string, updatedLesson: Lesson): Promise<void> => {
    console.log(`Updating lesson "${updatedLesson.title}" for uid: ${uid}`);
    const docSnap = await firestore.doc(uid).get();
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

        await firestore.doc(uid).update({ learningPlan: { ...currentPlan, modules: newModules } });
        console.log("Lesson updated successfully in DB.");
    } else {
        console.error("Could not update lesson: user document not found.");
    }
};