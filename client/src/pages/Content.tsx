import React from "react";
import { Layout } from "@/components/layout/Layout";
import { FileText, Sparkles, RefreshCw, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const contentItems = [
  { title: "The Future of AI in Web Design", type: "Blog Post", status: "Published", score: 98 },
  { title: "Product Features Overview", type: "Landing Page", status: "Draft", score: 65 },
  { title: "About Us - 2025 Update", type: "Page", status: "Review", score: 82 },
  { title: "Customer Success Stories", type: "Case Study", status: "Published", score: 94 },
  { title: "API Documentation v2", type: "Docs", status: "Draft", score: 45 },
];

export default function Content() {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">
            Content AI
            <span className="text-brand-bright">.</span>
          </h1>
          <p className="text-gray-400 mt-1">Generate, optimize, and manage content with AI.</p>
        </div>
        <Button className="bg-brand-bright text-black hover:bg-white border-0 font-medium">
          <PenTool className="w-4 h-4 mr-2" /> Create New
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <Input placeholder="Search content..." className="bg-white/5 border-white/10 text-white max-w-sm" />
        <Button variant="outline" className="border-white/10 text-gray-300">Filter</Button>
      </div>

      <div className="grid gap-4">
        {contentItems.map((item, i) => (
          <div key={i} className="glass-panel p-5 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-lg group-hover:text-brand-bright transition-colors text-gray-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>{item.type}</span>
                  <span>•</span>
                  <span>Last edited 2h ago</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end">
                   <span className={`text-lg font-bold ${item.score > 80 ? 'text-brand-electric' : item.score > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                     {item.score}
                   </span>
                   <span className="text-xs text-gray-500">/100</span>
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">AI Score</div>
              </div>

              <Badge variant="secondary" className="bg-white/10 text-gray-300 hover:bg-white/20">
                {item.status}
              </Badge>
              
              <Button size="icon" variant="ghost" className="text-brand-bright opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
