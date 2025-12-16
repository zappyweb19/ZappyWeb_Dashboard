import React from "react";
import { Layout } from "@/components/layout/Layout";
import { AIOverview } from "@/components/dashboard/AIOverview";
import { ContentUpdates } from "@/components/dashboard/ContentUpdates";
import { SEOAnalytics } from "@/components/dashboard/SEOAnalytics";
import { PageLayoutAI } from "@/components/dashboard/PageLayoutAI";
import { PerformanceMonitor } from "@/components/dashboard/PerformanceMonitor";
import { WorkflowTimeline } from "@/components/dashboard/WorkflowTimeline";
import { HowItWorks } from "@/components/dashboard/HowItWorks";

export default function Dashboard() {
  return (
    <Layout>
      <div className="mb-2">
        <h1 className="text-3xl font-display font-bold text-white tracking-tight">
          Dashboard
          <span className="text-brand-electric">.</span>
        </h1>
        <p className="text-gray-400 mt-1">Welcome back, Alex. Your AI agents are active.</p>
      </div>

      {/* Top Grid: Overview, Content, SEO */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 h-auto min-h-[24rem]">
          <AIOverview />
        </div>
        <div className="md:col-span-4 h-auto min-h-[24rem]">
          <ContentUpdates />
        </div>
        <div className="md:col-span-4 h-auto min-h-[24rem]">
          <SEOAnalytics />
        </div>
      </div>

      {/* Middle Grid: Layout, Perf, Workflow */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3 h-auto min-h-[20rem]">
          <PageLayoutAI />
        </div>
        <div className="md:col-span-3 h-auto min-h-[20rem]">
          <PerformanceMonitor />
        </div>
        <div className="md:col-span-6 h-auto min-h-[20rem]">
           <WorkflowTimeline />
        </div>
      </div>

      {/* Bottom Section */}
      <HowItWorks />
    </Layout>
  );
}
