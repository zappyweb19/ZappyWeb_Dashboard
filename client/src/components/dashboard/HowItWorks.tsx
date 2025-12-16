import React from "react";
import { Lightbulb, Cog, Rocket } from "lucide-react";

export function HowItWorks() {
  return (
    <div className="glass-panel rounded-2xl p-8 mt-8 border-t-4 border-t-brand-electric/50">
      <h3 className="text-xl font-display font-bold text-white mb-2 text-center">How ZappyWeb Works</h3>
      <p className="text-gray-400 text-center text-sm mb-10 max-w-lg mx-auto">Automating your digital presence in three simple, intelligent steps.</p>
      
      <div className="grid md:grid-cols-3 gap-8 relative">
         <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />
         
         <div className="relative z-10 flex flex-col items-center text-center group">
             <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:border-brand-electric/50 group-hover:shadow-[0_0_15px_rgba(181,229,80,0.2)] transition-all">
                 <Lightbulb className="w-8 h-8 text-gray-500 group-hover:text-brand-electric transition-colors" />
             </div>
             <h4 className="text-white font-bold mb-2">1. Analyze</h4>
             <p className="text-xs text-gray-400 px-4">AI scans your content, structure, and performance metrics instantly.</p>
         </div>

         <div className="relative z-10 flex flex-col items-center text-center group">
             <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:border-brand-lime/50 group-hover:shadow-[0_0_15px_rgba(128,156,19,0.2)] transition-all">
                 <Cog className="w-8 h-8 text-gray-500 group-hover:text-brand-lime transition-colors animate-[spin_10s_linear_infinite]" />
             </div>
             <h4 className="text-white font-bold mb-2">2. Optimize</h4>
             <p className="text-xs text-gray-400 px-4">Smart workflows apply SEO fixes and layout adjustments automatically.</p>
         </div>

         <div className="relative z-10 flex flex-col items-center text-center group">
             <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:border-brand-bright/50 group-hover:shadow-[0_0_15px_rgba(171,195,47,0.2)] transition-all">
                 <Rocket className="w-8 h-8 text-gray-500 group-hover:text-brand-bright transition-colors" />
             </div>
             <h4 className="text-white font-bold mb-2">3. Scale</h4>
             <p className="text-xs text-gray-400 px-4">Watch your traffic grow with continuous background monitoring.</p>
         </div>
      </div>
    </div>
  );
}
