import React from "react";
import { FileText, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const updates = [
  { id: 1, page: "/pricing", status: "Optimized", suggestion: "Added comparison table schema", time: "2m ago" },
  { id: 2, page: "/blog/ai-trends", status: "Pending", suggestion: "Keyword density low", time: "15m ago" },
  { id: 3, page: "/features", status: "Processing", suggestion: "Generating meta descriptions", time: "1h ago" },
  { id: 4, page: "/about", status: "Optimized", suggestion: "Image alt tags updated", time: "3h ago" },
];

export function ContentUpdates() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-brand-bright" />
          Content AI
        </h3>
        <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-brand-bright">
          View All
        </Button>
      </div>

      <ScrollArea className="flex-1 -mr-4 pr-4">
        <div className="space-y-3">
          {updates.map((item) => (
            <div key={item.id} className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-bright/30 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono text-xs text-brand-electric">{item.page}</span>
                <span className="text-[10px] text-gray-500">{item.time}</span>
              </div>
              <p className="text-sm text-gray-300 mb-3 group-hover:text-white transition-colors">
                {item.suggestion}
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className={`
                  border-0 bg-opacity-20 text-[10px] px-2 py-0.5 rounded-md font-normal
                  ${item.status === 'Optimized' ? 'bg-brand-lime text-brand-lime' : ''}
                  ${item.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500' : ''}
                  ${item.status === 'Processing' ? 'bg-blue-500/20 text-blue-400' : ''}
                `}>
                  {item.status}
                </Badge>
                <Sparkles className="w-3 h-3 text-gray-600 group-hover:text-brand-bright transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <Button className="w-full mt-4 bg-brand-olive/20 hover:bg-brand-olive/40 text-brand-electric border border-brand-olive/50">
        Run Full Audit <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
