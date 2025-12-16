import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Workflow,
  Search,
  FileText,
  LayoutTemplate,
  Activity,
  Puzzle,
  Settings,
  Sparkles,
  LogOut,
  Menu,
  X
} from "lucide-react";
import logoImg from "@assets/generated_images/geometric_minimal_abstract_logo_for_zappyweb_in_lime_green_style.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Workflow, label: "Automation Workflows", href: "/workflows" },
  { icon: Search, label: "SEO Optimization", href: "/seo" },
  { icon: FileText, label: "Content AI", href: "/content" },
  { icon: LayoutTemplate, label: "Page Layout AI", href: "/layout" },
  { icon: Activity, label: "Performance & Alerts", href: "/performance" },
  { icon: Puzzle, label: "Integrations", href: "/integrations" },
];

export function Sidebar() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setLocation("/auth");
  };

  const NavContent = () => (
    <>
      <div className="p-6 flex items-center gap-3">
        <img
          src="/images/logo.png"
          alt="ZappyWeb Logo"
          className="w-20 h-auto object-contain"   // width=40px, height adjusts automatically
        />
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              <a className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                isActive
                  ? "text-brand-electric bg-white/5 border border-white/5 shadow-[0_0_15px_rgba(181,229,80,0.1)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}>
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-electric shadow-[0_0_10px_#b5e550]" />
                )}
                <item.icon className={cn("w-5 h-5", isActive ? "text-brand-electric" : "text-gray-500 group-hover:text-white")} />
                {item.label}
              </a>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 mt-auto">
        <div className="mb-2 p-4 rounded-xl bg-gradient-to-br from-brand-olive/20 to-transparent border border-brand-olive/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-electric/5 group-hover:bg-brand-electric/10 transition-colors" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2 text-brand-electric">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Pro Plan</span>
            </div>
            <p className="text-xs text-gray-300 mb-3">AI Usage: 78%</p>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-brand-electric w-[78%] shadow-[0_0_8px_#b5e550]" />
            </div>
          </div>
        </div>

        <Link href="/settings" onClick={() => setIsOpen(false)}>
          <a className={cn(
            "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all",
            location === "/settings" ? "text-white bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"
          )}>
            <Settings className="w-5 h-5 text-gray-500" />
            Settings
          </a>
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all mt-1 text-left"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 hidden md:flex flex-col border-r border-white/10 bg-black/40 backdrop-blur-md h-screen sticky top-0 z-40">
        <NavContent />
      </aside>

      {/* Mobile Trigger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white bg-black/50 backdrop-blur-md border border-white/10">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0 bg-black/95 border-r border-white/10 text-white flex flex-col">
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
