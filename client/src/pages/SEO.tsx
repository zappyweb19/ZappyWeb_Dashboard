import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Search, AlertCircle, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function SEO() {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">
            SEO Optimization
            <span className="text-brand-lime">.</span>
          </h1>
          <p className="text-gray-400 mt-1">AI-driven insights to improve your search ranking.</p>
        </div>
        <Button variant="outline" className="border-brand-lime/20 text-brand-lime hover:bg-brand-lime/10 hover:text-brand-lime">
          <Search className="w-4 h-4 mr-2" /> Run Full Audit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-panel p-6 rounded-xl">
          <div className="text-sm text-gray-400 mb-2">Overall Health Score</div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-white">92</span>
            <span className="text-sm text-brand-electric mb-1.5 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +4%
            </span>
          </div>
          <Progress value={92} className="h-2 mt-4 bg-white/10" indicatorClassName="bg-gradient-to-r from-brand-lime to-brand-electric" />
        </div>
        
        <div className="glass-panel p-6 rounded-xl">
          <div className="text-sm text-gray-400 mb-2">Organic Traffic</div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-white">12.5k</span>
            <span className="text-sm text-brand-electric mb-1.5 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +12%
            </span>
          </div>
          <div className="mt-4 h-2 w-full flex gap-1">
             <div className="h-full w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-brand-electric/50 w-[60%]" />
             </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <div className="text-sm text-gray-400 mb-2">Backlinks</div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-white">843</span>
            <span className="text-sm text-brand-electric mb-1.5 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +24
            </span>
          </div>
           <div className="mt-4 h-2 w-full flex gap-1">
             <div className="h-full w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-brand-lime/50 w-[40%]" />
             </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-white mb-4">Actionable Insights</h2>
      <div className="space-y-4">
        {[
          { priority: "High", title: "Missing Meta Descriptions", count: 3, type: "Content" },
          { priority: "Medium", title: "Slow LCP on Mobile", count: 5, type: "Performance" },
          { priority: "Low", title: "Image Alt Tags Empty", count: 12, type: "Accessibility" },
        ].map((issue, i) => (
          <div key={i} className="glass-panel p-4 rounded-xl flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${issue.priority === 'High' ? 'bg-red-500' : issue.priority === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                <div>
                  <div className="text-white font-medium">{issue.title}</div>
                  <div className="text-xs text-gray-500">{issue.count} pages affected • {issue.type}</div>
                </div>
             </div>
             <Button size="sm" className="bg-white/5 hover:bg-white/10 text-white border-0">
               Fix with AI
             </Button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
