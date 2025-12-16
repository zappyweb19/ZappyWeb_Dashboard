import React from "react";
import { LayoutTemplate, MousePointerClick, Eye } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function PageLayoutAI() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold text-white flex items-center gap-2">
          <LayoutTemplate className="w-5 h-5 text-brand-ivory" />
          Smart Layout
        </h3>
      </div>

      <div className="relative bg-black/50 rounded-xl p-4 border border-white/10 aspect-video flex items-center justify-center overflow-hidden group">
        {/* Mock UI Representation */}
        <div className="w-3/4 space-y-2 opacity-50 group-hover:opacity-80 transition-opacity">
           <div className="h-8 bg-white/10 rounded w-full" />
           <div className="flex gap-2">
              <div className="h-24 bg-white/10 rounded w-2/3" />
              <div className="h-24 bg-white/10 rounded w-1/3" />
           </div>
           <div className="h-12 bg-white/10 rounded w-full" />
        </div>

        {/* Heatmap Overlay Mock */}
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-red-500/30 blur-xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-brand-electric/30 blur-xl rounded-full" />
        
        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/10 text-xs text-gray-300">
           <div className="flex justify-between mb-1">
             <span>CTA Visibility</span>
             <span className="text-brand-electric">High</span>
           </div>
           <Progress value={85} className="h-1 bg-white/10" indicatorClassName="bg-brand-electric" />
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-3">
         <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 p-2 rounded-lg">
            <MousePointerClick className="w-3 h-3 text-brand-bright" /> +15% CTR
         </div>
         <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 p-2 rounded-lg">
            <Eye className="w-3 h-3 text-brand-ivory" /> +8% Time
         </div>
      </div>
    </div>
  );
}
