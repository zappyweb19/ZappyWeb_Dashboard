import React, { useState, useEffect } from "react";
import { Layout } from "../components/layout/Layout";
import { User, Lock, Bell, ShieldCheck, Key, CreditCard, LogOut, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useToast } from "../hooks/use-toast";
import { useLocation } from "wouter";

import { auth } from "../lib/firebase"; // Firebase
import { signOut } from "firebase/auth";

export default function Settings() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
    notifications: true,
    mfa: true,
    apiKey: "zp_live_8923498273498234",
  });

  // 🔹 Load Firebase user info on mount
  useEffect(() => {
    if (auth.currentUser) {
      const user = auth.currentUser;
      setFormData((prev) => ({
        ...prev,
        name: user.displayName || "",
        email: user.email || "",
      }));
    }
  }, []);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Settings saved",
        description: "Your profile has been updated successfully.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setLocation("/auth");
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    } catch (error: any) {
      toast({
        title: "Logout failed",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">
            Settings
          </h1>
          <p className="text-gray-400 mt-1">Manage your account and preferences.</p>
        </div>

        {/* Logout */}
        <Button onClick={handleLogout} variant="destructive" className="flex items-center gap-2">
          <LogOut className="w-4 h-4" /> {isLoading ? "Logging out..." : "Logout"}
        </Button>
      </div>

      <Tabs defaultValue="profile" className="glass-panel p-0 rounded-xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">
         <div className="w-full md:w-64 border-r border-white/10 bg-black/20 p-4">
            <TabsList className="flex flex-col h-auto bg-transparent space-y-1 p-0 w-full">
               <TabsTrigger value="profile" className="w-full justify-start px-4 py-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400"><User className="w-4 h-4 mr-2"/> Profile</TabsTrigger>
               <TabsTrigger value="security" className="w-full justify-start px-4 py-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400"><Lock className="w-4 h-4 mr-2"/> Security</TabsTrigger>
               <TabsTrigger value="notifications" className="w-full justify-start px-4 py-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400"><Bell className="w-4 h-4 mr-2"/> Notifications</TabsTrigger>
               <TabsTrigger value="admin" className="w-full justify-start px-4 py-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-brand-electric hover:text-brand-bright"><ShieldCheck className="w-4 h-4 mr-2"/> Admin Panel</TabsTrigger>
            </TabsList>
         </div>

         <div className="flex-1 p-8 bg-black/20">
            <TabsContent value="profile" className="space-y-6 max-w-lg mt-0">
               <h2 className="text-xl font-bold text-white mb-1">Profile Settings</h2>
               <p className="text-sm text-gray-400">Your logged-in information from Firebase Auth.</p>

               <div className="space-y-4">
                  <div className="space-y-2">
                     <Label className="text-gray-300">Full Name</Label>
                     <Input value={formData.name} readOnly className="bg-white/5 border-white/10 text-white" />
                  </div>

                  <div className="space-y-2">
                     <Label className="text-gray-300">Email Address</Label>
                     <Input value={formData.email} readOnly className="bg-white/5 border-white/10 text-white" />
                  </div>
               </div>

               <div className="pt-4">
                  <Button onClick={handleSave} disabled={isLoading} className="bg-brand-electric text-black hover:bg-brand-bright font-medium">
                    Save Changes
                  </Button>
               </div>
            </TabsContent>
         </div>
      </Tabs>
    </Layout>
  );
}
