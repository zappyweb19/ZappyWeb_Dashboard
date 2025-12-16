import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const integrations = [
  { name: "Google Analytics 4", cat: "Analytics", connected: true, icon: "📊" },
  { name: "Slack", cat: "Communication", connected: true, icon: "💬" },
  { name: "WordPress", cat: "CMS", connected: false, icon: "📝" },
  { name: "Shopify", cat: "E-commerce", connected: false, icon: "🛍️" },
  { name: "Mailchimp", cat: "Marketing", connected: true, icon: "📧" },
  { name: "Stripe", cat: "Payments", connected: false, icon: "💳" },
  { name: "HubSpot", cat: "CRM", connected: false, icon: "👥" },
  { name: "Zapier", cat: "Automation", connected: true, icon: "⚡" },
];

export default function Integrations() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">
            Integrations
            <span className="text-brand-electric">.</span>
          </h1>
          <p className="text-gray-400 mt-1">Connect ZappyWeb with your favorite tools.</p>
        </div>
        <Button className="w-full md:w-auto bg-white/10 text-white hover:bg-white/20 border border-white/10 flex items-center justify-center">
          <Plus className="w-4 h-4 mr-2" /> Request Integration
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((item, i) => (
          <div
            key={i}
            className="glass-panel p-6 rounded-xl flex flex-col justify-between h-48 group hover:border-brand-electric/50 transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <Switch checked={item.connected} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-brand-electric transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-gray-500">{item.cat}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
