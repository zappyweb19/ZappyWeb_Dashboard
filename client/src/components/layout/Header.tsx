import React, { useState } from "react";
import { Bell, Search, ChevronDown, Sparkles, LogOut, User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/userContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function Header() {
  const { user } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(auth);
      // Optional: you can redirect to /auth after logout using your router
      window.location.href = "/auth";
    } catch (error: any) {
      console.error("Logout failed:", error.message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="h-16 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left: Search */}
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-electric transition-colors" />
          <Input
            placeholder="Ask Zappy AI..."
            className="bg-white/5 border-white/10 pl-10 text-white placeholder:text-gray-500 focus-visible:ring-brand-electric/50 focus-visible:border-brand-electric/50 transition-all h-10 rounded-xl"
          />
          <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-electric opacity-50 animate-pulse" />
        </div>
      </div>

      {/* Right: Notifications & Avatar */}
      <div className="flex items-center gap-4 relative">
        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white hover:bg-white/5 rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-electric rounded-full shadow-[0_0_8px_#b5e550]" />
        </Button>

        <div className="h-8 w-[1px] bg-white/10 mx-2" />

        {/* User Avatar + Dropdown */}
        <div
          className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-1.5 rounded-xl transition-colors pr-3 relative"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Avatar className="h-8 w-8 border border-brand-electric/30">
            <AvatarImage src={user?.avatarUrl || undefined} />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>

          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-white leading-none">{user?.name || "Guest"}</p>
            <p className="text-xs text-gray-500 mt-1">{user?.role || "Viewer"}</p>
          </div>

          <ChevronDown className="w-4 h-4 text-gray-500" />

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-12 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg overflow-hidden z-50">
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-white hover:bg-white/5 transition-colors"
                onClick={() => window.location.href = "/settings"}
              >
                <UserIcon className="w-4 h-4" /> Profile
              </button>
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-red-500/10 transition-colors"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                <LogOut className="w-4 h-4" /> {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
