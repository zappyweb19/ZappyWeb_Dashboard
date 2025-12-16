import React from "react";
import { Activity, Server, Wifi } from "lucide-react";

export function PerformanceMonitor() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold text-white flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          Performance
        </h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
           <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                 <Server className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                 <div className="text-sm font-medium text-white">Server Response</div>
                 <div className="text-xs text-gray-500">Global CDN</div>
              </div>
           </div>
           <div className="text-right">
              <div className="text-lg font-mono font-bold text-brand-electric">45ms</div>
              <div className="text-[10px] text-gray-500">Top 1%</div>
           </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
           <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-lime/20 rounded-lg">
                 <Wifi className="w-4 h-4 text-brand-lime" />
              </div>
              <div>
                 <div className="text-sm font-medium text-white">Uptime</div>
                 <div className="text-xs text-gray-500">Last 30 Days</div>
              </div>
           </div>
           <div className="text-right">
              <div className="text-lg font-mono font-bold text-brand-bright">99.99%</div>
              <div className="text-[10px] text-gray-500">Stable</div>
           </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10">
         <div className="flex justify-between items-center text-xs mb-2">
            <span className="text-gray-400">Core Web Vitals</span>
            <span className="text-brand-electric">Passed</span>
         </div>
         <div className="flex gap-1 h-1.5 w-full rounded-full overflow-hidden">
            <div className="flex-1 bg-brand-electric" />
            <div className="flex-1 bg-brand-electric" />
            <div className="flex-1 bg-brand-electric" />
            <div className="w-1 bg-transparent" />
         </div>
      </div>
    </div>
  );
}
