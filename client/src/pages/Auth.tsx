import React, { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail, Lock, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";

import { auth, googleProvider } from "../lib/firebase"; // relative import
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// If your lucide-react version does not have Google icon, define manually
function GoogleIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.35 11.1h-9.17v2.83h5.44c-.23 1.33-1.51 3.9-5.44 3.9-3.27 0-5.95-2.7-5.95-6s2.68-6 5.95-6c1.86 0 3.12.8 3.84 1.48l2.62-2.53C18.68 2.87 16.64 2 13.78 2 7.65 2 3 6.63 3 12s4.65 10 10.78 10c6.22 0 10.45-4.38 10.45-10 0-.67-.08-1.33-.88-1.8z" />
    </svg>
  );
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Email/password auth
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      localStorage.setItem("isAuthenticated", "true");
      setLocation("/");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Google auth
  const handleGoogleAuth = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem("isAuthenticated", "true");
      setLocation("/");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-electric/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-olive/20 rounded-full blur-[120px] animate-pulse" />

      <div className="flex-1 flex items-center justify-center relative z-10 p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
          <div className="glass-panel p-8 rounded-2xl border-t border-white/10 shadow-2xl backdrop-blur-xl bg-black/40">
            <div className="text-center mb-8">
              <img src="/images/logo.png" alt="ZappyWeb Logo" className="w-40 h-40 object-contain mx-auto mb-4" />
              <h1 className="text-3xl font-display font-bold mb-2 tracking-tight">
                {isLogin ? "Welcome Back" : "Join ZappyWeb"}
              </h1>
              <p className="text-gray-400 text-sm">
                {isLogin ? "Enter your credentials to access the dashboard." : "Start automating your web presence today."}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-electric transition-colors" />
                    <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" className="pl-10 bg-white/5 border-white/10 text-white h-11" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-electric transition-colors" />
                  <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" className="pl-10 bg-white/5 border-white/10 text-white h-11" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-electric transition-colors" />
                  <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="pl-10 bg-white/5 border-white/10 text-white h-11" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-white/20 data-[state=checked]:bg-brand-electric data-[state=checked]:text-black" />
                <label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400">
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full h-11 bg-brand-electric hover:bg-brand-bright text-black font-bold text-base" disabled={isLoading}>
                {isLoading ? <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 animate-spin" /> Processing...</span> : <span>{isLogin ? "Sign In" : "Create Account"}</span>}
              </Button>
            </form>

            {/* Google Auth */}
            <div className="mt-4 flex justify-center">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={handleGoogleAuth} disabled={isLoading}>
                <GoogleIcon className="w-4 h-4" /> {isLogin ? "Sign in with Google" : "Sign up with Google"}
              </Button>
            </div>

            {/* Switch login/signup */}
            <div className="mt-6 text-center text-sm text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-brand-electric hover:underline font-medium">
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
