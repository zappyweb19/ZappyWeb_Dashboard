import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Activity, Bell, Server, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Performance() {
  return (
    <Layout>
       <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">
            Performance & Alerts
            <span className="text-blue-400">.</span>
          </h1>
          <p className="text-gray-400 mt-1">System health monitoring and incident logs.</p>
        </div>
        <Button className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/50 font-medium">
          <Activity className="w-4 h-4 mr-2" /> System Status: Healthy
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
         <div className="glass-panel p-6 rounded-xl border-t-4 border-t-blue-500">
            <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Server className="w-5 h-5" /></div>
               <span className="text-xs text-gray-500">Avg Response</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">45ms</div>
            <div className="text-sm text-gray-400">Global CDN</div>
         </div>
         
         <div className="glass-panel p-6 rounded-xl border-t-4 border-t-green-500">
            <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><ShieldCheck className="w-5 h-5" /></div>
               <span className="text-xs text-gray-500">Uptime</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">99.99%</div>
            <div className="text-sm text-gray-400">Last 30 days</div>
         </div>

         <div className="glass-panel p-6 rounded-xl border-t-4 border-t-brand-electric">
            <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-brand-electric/20 rounded-lg text-brand-electric"><Activity className="w-5 h-5" /></div>
               <span className="text-xs text-gray-500">Requests/sec</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">2.4k</div>
            <div className="text-sm text-gray-400">Peak load</div>
         </div>
      </div>

      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Bell className="w-5 h-5" /> Recent Alerts
      </h2>
      
      <div className="space-y-2">
         {[
           { level: 'Info', msg: 'Daily backup completed successfully', time: '10m ago', color: 'text-blue-400' },
           { level: 'Warning', msg: 'High memory usage detected on Worker #4', time: '2h ago', color: 'text-yellow-500' },
           { level: 'Info', msg: 'Deployment v2.4.1 successful', time: '5h ago', color: 'text-green-400' },
           { level: 'Error', msg: 'API Rate limit approached (90%)', time: '1d ago', color: 'text-red-500' },
         ].map((alert, i) => (
           <div key={i} className="glass-panel p-4 rounded-lg flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                 <span className={`text-xs font-bold uppercase w-16 ${alert.color}`}>{alert.level}</span>
                 <span className="text-gray-300 text-sm">{alert.msg}</span>
              </div>
              <span className="text-xs text-gray-500 font-mono">{alert.time}</span>
           </div>
         ))}
      </div>
    </Layout>
  );
}
