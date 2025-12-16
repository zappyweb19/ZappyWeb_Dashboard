import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

interface User {
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  avatarUrl: string;
}

interface UserContextType {
  user: User | null;
  updateUser: (updates: Partial<User>) => void;
}

const defaultUser: User = {
  name: "Guest User",
  email: "guest@example.com",
  role: "Viewer",
  avatarUrl: "https://github.com/shadcn.png",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Sync with Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName || "Admin User",
          email: firebaseUser.email || "no-email@example.com",
          role: "Admin", // you can adjust roles dynamically if you have a role system
          avatarUrl: firebaseUser.photoURL || "https://github.com/shadcn.png",
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
