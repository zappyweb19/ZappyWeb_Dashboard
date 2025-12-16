import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, ArrowUpRight, CheckCircle2 } from "lucide-react";
import aiVisual from "@assets/generated_images/abstract_ai_data_processing_visualization_with_neon_nodes.png";

export function AIOverview() {
  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group h-full">
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div>
          <h3 className="text-lg font-display font-semibold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-brand-electric" />
            AI Automation Status
          </h3>
          <p className="text-sm text-gray-400 mt-1">Real-time system monitoring</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-electric opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-electric"></span>
          </span>
          <span className="text-xs font-medium text-brand-electric">Active</span>
        </div>
      </div>

      <div className="relative h-40 rounded-xl overflow-hidden border border-white/10 mb-6">
         <img 
           src={aiVisual} 
           alt="AI Processing" 
           className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
            <div className="w-full">
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>Processing Queue</span>
                <span>98% Efficiency</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="h-full w-full bg-gradient-to-r from-transparent via-brand-electric to-transparent opacity-50"
                />
              </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-brand-electric/20 transition-colors">
          <div className="text-gray-400 text-xs mb-1">Tasks Completed</div>
          <div className="text-2xl font-mono font-bold text-white">1,284</div>
          <div className="text-brand-electric text-xs flex items-center mt-1">
            <ArrowUpRight className="w-3 h-3 mr-1" /> +12%
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-brand-electric/20 transition-colors">
           <div className="text-gray-400 text-xs mb-1">System Health</div>
           <div className="text-2xl font-mono font-bold text-white">99.9%</div>
           <div className="text-brand-bright text-xs flex items-center mt-1">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Optimal
          </div>
        </div>
      </div>
    </div>
  );
}
