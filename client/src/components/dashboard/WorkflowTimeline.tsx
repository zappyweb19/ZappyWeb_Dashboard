import React from "react";
import { Workflow, Play, MoreHorizontal } from "lucide-react";
import workflowImg from "@assets/generated_images/futuristic_workflow_automation_diagram_visual.png";

export function WorkflowTimeline() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold text-white flex items-center gap-2">
          <Workflow className="w-5 h-5 text-brand-electric" />
          Active Workflows
        </h3>
        <div className="flex gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
               <MoreHorizontal className="w-4 h-4" />
            </button>
        </div>
      </div>

      <div className="relative h-48 w-full rounded-xl overflow-hidden border border-white/10 group">
          <img 
            src={workflowImg} 
            alt="Workflow Visualization" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
             <span className="px-2 py-1 bg-black/60 backdrop-blur rounded border border-white/10 text-[10px] text-brand-electric font-mono border-l-2 border-l-brand-electric">
                Trigger: New Blog Post
             </span>
             <span className="px-2 py-1 bg-black/60 backdrop-blur rounded border border-white/10 text-[10px] text-white font-mono">
                → Optimize SEO
             </span>
             <span className="px-2 py-1 bg-black/60 backdrop-blur rounded border border-white/10 text-[10px] text-white font-mono">
                → Social Share
             </span>
          </div>
          
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-electric/90 hover:bg-brand-electric rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(181,229,80,0.4)] transition-all hover:scale-110">
             <Play className="w-5 h-5 text-black fill-current ml-0.5" />
          </button>
      </div>
    </div>
  );
}
