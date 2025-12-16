import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import bgImage from "@assets/generated_images/dark_futuristic_abstract_background_with_subtle_neon_green_glow.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex relative overflow-hidden">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
      />
      
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pt-16 md:pt-8">
          <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 md:pb-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
