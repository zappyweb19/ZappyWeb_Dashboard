import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Plus, Play, Pause, MoreHorizontal, GitBranch, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const workflows = [
  {
    id: 1,
    name: "New Blog Post SEO",
    trigger: "On Publish",
    steps: 5,
    status: "Active",
    lastRun: "2 mins ago",
    successRate: "98%",
  },
  {
    id: 2,
    name: "Weekly Performance Report",
    trigger: "Every Monday",
    steps: 3,
    status: "Active",
    lastRun: "2 days ago",
    successRate: "100%",
  },
  {
    id: 3,
    name: "Image Optimization",
    trigger: "On Upload",
    steps: 2,
    status: "Paused",
    lastRun: "5 hours ago",
    successRate: "95%",
  },
  {
    id: 4,
    name: "Social Media Distribution",
    trigger: "Manual",
    steps: 8,
    status: "Active",
    lastRun: "1 hour ago",
    successRate: "92%",
  },
];

export default function Workflows() {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">
            Automation Workflows
            <span className="text-brand-electric">.</span>
          </h1>
          <p className="text-gray-400 mt-1">Manage and monitor your automated tasks.</p>
        </div>
        <Button className="bg-brand-electric text-black hover:bg-brand-bright border-0 font-medium">
          <Plus className="w-4 h-4 mr-2" /> New Workflow
        </Button>
      </div>

      <div className="grid gap-4">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="glass-panel p-6 rounded-xl flex items-center justify-between group hover:border-brand-electric/30 transition-all">
            <div className="flex items-center gap-6">
              <div className={`p-3 rounded-xl ${workflow.status === 'Active' ? 'bg-brand-electric/10 text-brand-electric' : 'bg-gray-800 text-gray-500'}`}>
                <GitBranch className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-electric transition-colors">{workflow.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    Trigger: {workflow.trigger}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    {workflow.steps} Steps
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
               <div className="text-right hidden md:block">
                  <div className="text-sm font-medium text-white">{workflow.successRate}</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
               </div>
               
               <div className="text-right hidden md:block">
                  <div className="text-sm font-medium text-white">{workflow.lastRun}</div>
                  <div className="text-xs text-gray-500">Last Run</div>
               </div>

               <div className="flex items-center gap-3">
                  <Badge variant="outline" className={`
                    border-0 px-3 py-1
                    ${workflow.status === 'Active' ? 'bg-brand-electric/10 text-brand-electric' : 'bg-yellow-500/10 text-yellow-500'}
                  `}>
                    {workflow.status}
                  </Badge>
                  
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    {workflow.status === 'Active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
