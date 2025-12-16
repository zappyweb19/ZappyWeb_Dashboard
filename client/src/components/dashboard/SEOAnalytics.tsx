import React from "react";
import { Search, TrendingUp, AlertCircle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', score: 65 },
  { name: 'Tue', score: 72 },
  { name: 'Wed', score: 68 },
  { name: 'Thu', score: 85 },
  { name: 'Fri', score: 82 },
  { name: 'Sat', score: 90 },
  { name: 'Sun', score: 94 },
];

export function SEOAnalytics() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold text-white flex items-center gap-2">
          <Search className="w-5 h-5 text-brand-lime" />
          SEO Performance
        </h3>
        <div className="flex gap-2">
           <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">Last 7 Days</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
         <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Avg Position</div>
            <div className="text-xl font-bold text-white">3.2</div>
         </div>
         <div className="text-center border-l border-r border-white/10">
            <div className="text-xs text-gray-500 mb-1">Clicks</div>
            <div className="text-xl font-bold text-brand-electric">12.5k</div>
         </div>
         <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Health</div>
            <div className="text-xl font-bold text-brand-lime">98%</div>
         </div>
      </div>

      <div className="flex-1 min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#809c13" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#809c13" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#333', borderRadius: '8px' }}
              itemStyle={{ color: '#abc32f' }}
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#b5e550" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorScore)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-yellow-500 bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
        <AlertCircle className="w-4 h-4" />
        3 pages missing meta descriptions detected.
      </div>
    </div>
  );
}
