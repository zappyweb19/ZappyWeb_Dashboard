import React, { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { LayoutTemplate, Smartphone, Monitor, Tablet, RefreshCcw, Check, MousePointerClick, ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

export default function LayoutAI() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [layoutVersion, setLayoutVersion] = useState(1);
  const [appliedChanges, setAppliedChanges] = useState<string[]>([]);
  const [variant, setVariant] = useState(0);

  const handleRegenerate = () => {
    setIsAnalyzing(true);
    setAppliedChanges([]); // Reset applied changes on new analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setLayoutVersion(prev => prev + 1);
      setVariant(Math.floor(Math.random() * 3)); // Cycle through 3 mock layout variants
    }, 2000);
  };

  const applySuggestion = (id: string) => {
    if (appliedChanges.includes(id)) return;
    setAppliedChanges([...appliedChanges, id]);
  };

  // Mock Layout Variants
  const renderLayout = () => {
    switch(variant) {
      case 0: // Default
        return (
          <>
            <div className={`w-full h-16 bg-white/10 rounded-lg transition-all duration-500 ${appliedChanges.includes('nav') ? 'flex justify-between items-center px-4' : ''}`}>
                {appliedChanges.includes('nav') && (
                  <>
                    <div className="w-20 h-8 bg-white/20 rounded" />
                    <div className="flex gap-2">
                      <div className="w-16 h-8 bg-white/10 rounded" />
                      <div className="w-16 h-8 bg-white/10 rounded" />
                    </div>
                  </>
                )}
            </div>
            <div className="flex gap-4 h-64">
                <div className={`flex-1 bg-white/10 rounded-lg border-2 border-brand-ivory/50 flex flex-col justify-center p-6 transition-all duration-500 ${appliedChanges.includes('cta') ? '-translate-y-4 bg-brand-ivory/10' : ''}`}>
                  <div className="w-2/3 h-8 bg-white/20 rounded mb-4" />
                  <div className="w-1/2 h-4 bg-white/10 rounded mb-8" />
                  <div className={`w-32 h-10 bg-brand-ivory/50 rounded transition-all duration-500 ${appliedChanges.includes('cta') ? 'scale-110 shadow-[0_0_20px_rgba(236,236,163,0.3)]' : ''}`} />
                </div>
                <div className="w-1/3 bg-white/10 rounded-lg" />
            </div>
            <div className="grid grid-cols-3 gap-4 h-32">
                <div className="bg-white/10 rounded-lg" />
                <div className="bg-white/10 rounded-lg" />
                <div className="bg-white/10 rounded-lg" />
            </div>
          </>
        );
      case 1: // Split Hero
         return (
           <>
             <div className={`w-full h-16 bg-white/10 rounded-lg mb-4 ${appliedChanges.includes('nav') ? 'flex justify-center items-center' : ''}`}>
                 {appliedChanges.includes('nav') && <div className="w-1/2 h-8 bg-white/10 rounded" />}
             </div>
             <div className="grid grid-cols-2 gap-4 h-56">
                 <div className="bg-white/10 rounded-lg p-4">
                    <div className="w-full h-32 bg-white/5 rounded mb-4" />
                 </div>
                 <div className={`bg-white/10 rounded-lg border-2 border-brand-ivory/50 flex flex-col justify-center p-6 transition-all duration-500 ${appliedChanges.includes('cta') ? 'bg-brand-ivory/10' : ''}`}>
                     <div className={`w-full h-12 bg-brand-ivory/50 rounded transition-all duration-500 ${appliedChanges.includes('cta') ? 'scale-105 shadow-lg' : ''}`} />
                 </div>
             </div>
             <div className="h-40 bg-white/10 rounded-lg mt-4" />
           </>
         );
      case 2: // Minimal
         return (
           <>
             <div className="w-full h-12 bg-white/10 rounded-lg mb-8" />
             <div className="flex flex-col items-center justify-center h-48 bg-white/5 rounded-lg border border-white/10 mb-4">
                 <div className="w-1/2 h-10 bg-white/20 rounded mb-4" />
                 <div className={`w-40 h-12 bg-brand-ivory/50 rounded transition-all duration-500 ${appliedChanges.includes('cta') ? 'scale-125 shadow-[0_0_25px_rgba(236,236,163,0.5)]' : ''}`} />
             </div>
             <div className="grid grid-cols-4 gap-2 h-24">
                {[1,2,3,4].map(i => <div key={i} className="bg-white/10 rounded-lg" />)}
             </div>
           </>
         );
      default: return null;
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">
            Page Layout AI
            <span className="text-brand-ivory">.</span>
          </h1>
          <p className="text-gray-400 mt-1">Smart layout adjustments based on user behavior.</p>
        </div>
        <Button 
          onClick={handleRegenerate} 
          disabled={isAnalyzing}
          className="bg-brand-ivory text-black hover:bg-white border-0 font-medium disabled:opacity-50 transition-all"
        >
          <RefreshCcw className={`w-4 h-4 mr-2 ${isAnalyzing ? 'animate-spin' : ''}`} /> 
          {isAnalyzing ? "Generating New Layout..." : "Regenerate Layout"}
        </Button>
      </div>

      <Tabs defaultValue="desktop" className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
           <TabsList className="bg-white/5 border border-white/10">
             <TabsTrigger value="desktop" className="data-[state=active]:bg-brand-ivory data-[state=active]:text-black"><Monitor className="w-4 h-4 mr-2"/> Desktop</TabsTrigger>
             <TabsTrigger value="tablet" className="data-[state=active]:bg-brand-ivory data-[state=active]:text-black"><Tablet className="w-4 h-4 mr-2"/> Tablet</TabsTrigger>
             <TabsTrigger value="mobile" className="data-[state=active]:bg-brand-ivory data-[state=active]:text-black"><Smartphone className="w-4 h-4 mr-2"/> Mobile</TabsTrigger>
           </TabsList>
           
           {isAnalyzing && (
             <span className="text-sm text-brand-electric animate-pulse flex items-center gap-2">
               <span className="w-2 h-2 bg-brand-electric rounded-full"></span>
               Processing real-time user session data...
             </span>
           )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-8">
              <div className="aspect-video bg-black/40 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
                 
                 {/* Mock Website UI */}
                 <AnimatePresence mode="wait">
                   <motion.div 
                     key={layoutVersion}
                     initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                     animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                     exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                     transition={{ duration: 0.5 }}
                     className="absolute inset-0 flex flex-col p-8 gap-4 opacity-50 w-full h-full"
                   >
                      {renderLayout()}
                   </motion.div>
                 </AnimatePresence>
                 
                 {/* Heatmap Overlays - Animated */}
                 <motion.div 
                   animate={{ 
                     opacity: isAnalyzing ? [0.5, 1, 0.5] : 0.8,
                     scale: isAnalyzing ? [1, 1.2, 1] : 1,
                     left: isAnalyzing ? ["25%", "50%", "25%"] : "25%"
                   }}
                   transition={{ duration: 2, repeat: isAnalyzing ? Infinity : 0 }}
                   className="absolute top-1/3 left-1/4 w-32 h-32 bg-red-500/20 blur-2xl rounded-full pointer-events-none" 
                 />
                 <motion.div 
                   animate={{ 
                     opacity: isAnalyzing ? [0.5, 1, 0.5] : 0.6,
                     scale: isAnalyzing ? [1, 1.1, 1] : 1,
                     right: isAnalyzing ? ["33%", "10%", "33%"] : "33%"
                   }}
                   transition={{ duration: 1.5, repeat: isAnalyzing ? Infinity : 0, delay: 0.5 }}
                   className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-brand-electric/20 blur-2xl rounded-full pointer-events-none" 
                 />

                 {/* Scanning Effect */}
                 {isAnalyzing && (
                   <motion.div 
                     initial={{ top: "0%" }}
                     animate={{ top: "100%" }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     className="absolute left-0 right-0 h-1 bg-brand-electric shadow-[0_0_20px_#b5e550] z-10 pointer-events-none"
                   />
                 )}
              </div>
           </div>

           <div className="lg:col-span-4 space-y-4">
              <div className="glass-panel p-5 rounded-xl h-full">
                 <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                   <Sparkles className="w-4 h-4 text-brand-ivory" />
                   AI Suggestions
                 </h3>
                 <div className="space-y-3">
                    <div 
                      onClick={() => applySuggestion('cta')}
                      className={`p-3 rounded-lg text-sm border transition-all cursor-pointer relative overflow-hidden group
                        ${appliedChanges.includes('cta') 
                          ? 'bg-brand-ivory/10 border-brand-ivory/50 text-white' 
                          : 'bg-white/5 text-gray-300 border-white/5 hover:border-brand-ivory/50'
                        }`}
                    >
                       <div className="flex justify-between items-start mb-1">
                          <span className="text-brand-ivory font-bold flex items-center gap-2">
                            <MousePointerClick className="w-3 h-3" /> CTA Visibility
                          </span>
                          {appliedChanges.includes('cta') && <Check className="w-4 h-4 text-brand-electric" />}
                       </div>
                       <p className="text-xs opacity-80 mb-2">Users are scrolling past the primary button. Lift position by 120px to increase CTR.</p>
                       {!appliedChanges.includes('cta') && (
                         <div className="text-[10px] text-brand-ivory font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Click to Apply</div>
                       )}
                    </div>

                    <div 
                      onClick={() => applySuggestion('nav')}
                      className={`p-3 rounded-lg text-sm border transition-all cursor-pointer relative overflow-hidden group
                        ${appliedChanges.includes('nav') 
                          ? 'bg-brand-ivory/10 border-brand-ivory/50 text-white' 
                          : 'bg-white/5 text-gray-300 border-white/5 hover:border-brand-ivory/50'
                        }`}
                    >
                       <div className="flex justify-between items-start mb-1">
                          <span className="text-brand-ivory font-bold flex items-center gap-2">
                            <LayoutTemplate className="w-3 h-3" /> Navigation Density
                          </span>
                          {appliedChanges.includes('nav') && <Check className="w-4 h-4 text-brand-electric" />}
                       </div>
                       <p className="text-xs opacity-80 mb-2">Menu density is too high for tablet users. Consolidate items into a simplified bar.</p>
                       {!appliedChanges.includes('nav') && (
                         <div className="text-[10px] text-brand-ivory font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Click to Apply</div>
                       )}
                    </div>

                    <div 
                      onClick={handleRegenerate}
                      className="p-3 bg-black/20 rounded-lg text-sm text-gray-500 border border-white/5 flex items-center justify-center hover:bg-white/5 hover:text-white cursor-pointer transition-all"
                    >
                       <span className="flex items-center gap-2">
                         <RefreshCcw className={`w-3 h-3 ${isAnalyzing ? 'animate-spin' : ''}`} /> 
                         {isAnalyzing ? "Analyzing..." : "Run new analysis"}
                       </span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Tabs>
    </Layout>
  );
}
