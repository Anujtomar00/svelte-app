import { auth } from "$lib/firebase";
import type { AuthAdapter, AppUser, AuthResponse } from "../../app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  updateEmail,
  updatePassword,
  deleteUser,
  onAuthStateChanged,
  type User as FirebaseUser,
} from "firebase/auth";
import { writable } from "svelte/store";

const mapFirebaseUser = (user: FirebaseUser | null): AppUser | null => {
  if (!user) return null;
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
  };
};

export const user = writable<AppUser | null>(null);

onAuthStateChanged(auth, (firebaseUser) => {
  user.set(mapFirebaseUser(firebaseUser));
});

export const firebaseAuthAdapter: AuthAdapter = {
  async login(email: string, password: string): AuthResponse {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return { user: mapFirebaseUser(userCredential.user) };
    } catch (error) {
      return { user: null, error: (error as Error).message };
    }
  },

  async signup(
    email: string,
    password: string,
    displayName?: string
  ): AuthResponse {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }
      return { user: mapFirebaseUser(userCredential.user) };
    } catch (error) {
      return { user: null, error: (error as Error).message };
    }
  },

  async logout(): Promise<void> {
    await signOut(auth);
  },

  async getCurrentUser(): Promise<AppUser | null> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        unsubscribe();
        resolve(mapFirebaseUser(firebaseUser));
      });
    });
  },

  async sendPasswordResetEmail(email: string): Promise<{ error?: string }> {
    try {
      await sendPasswordResetEmail(auth, email);
      return {};
    } catch (error) {
      return { error: (error as Error).message };
    }
  },

  async updateProfile(profile: {
    displayName?: string;
    photoURL?: string;
  }): Promise<{ error?: string }> {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("No user is currently signed in");
      await updateProfile(currentUser, profile);
      return {};
    } catch (error) {
      return { error: (error as Error).message };
    }
  },

  async updateEmail(newEmail: string): Promise<{ error?: string }> {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("No user is currently signed in");
      await updateEmail(currentUser, newEmail);
      return {};
    } catch (error) {
      return { error: (error as Error).message };
    }
  },

  async updatePassword(newPassword: string): Promise<{ error?: string }> {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("No user is currently signed in");
      await updatePassword(currentUser, newPassword);
      return {};
    } catch (error) {
      return { error: (error as Error).message };
    }
  },

  async deleteAccount(): Promise<{ error?: string }> {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("No user is currently signed in");
      await deleteUser(currentUser);
      return {};
    } catch (error) {
      return { error: (error as Error).message };
    }
  },
};
