import type { User as FirebaseUser } from 'firebase/auth';

declare global {
  namespace App {
    interface Locals {
      user?: AppUser;
    }
  }
}

export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
}

export type AuthResponse = Promise<{ user: AppUser | null; error?: string }>;

export interface AuthAdapter {
  login(email: string, password: string): AuthResponse;
  signup(email: string, password: string, displayName?: string): AuthResponse;
  logout(): Promise<void>;
  getCurrentUser(): Promise<AppUser | null>;
  sendPasswordResetEmail(email: string): Promise<{ error?: string }>;
  updateProfile(profile: { displayName?: string; photoURL?: string }): Promise<{ error?: string }>;
  updateEmail(newEmail: string): Promise<{ error?: string }>;
  updatePassword(newPassword: string): Promise<{ error?: string }>;
  deleteAccount(): Promise<{ error?: string }>;
}

export {};