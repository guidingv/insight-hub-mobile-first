import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Competitors } from "@/pages/Competitors";
import { ContentStudio } from "@/pages/ContentStudio";
import { LeadTracker } from "@/pages/LeadTracker";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "competitors":
        return <Competitors />;
      case "content":
        return <ContentStudio />;
      case "leads":
        return <LeadTracker />;
      case "campaigns":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
            <p className="text-muted-foreground">Manage your marketing campaigns...</p>
          </div>
        );
      case "ai-seo":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">AI SEO</h1>
            <p className="text-muted-foreground">Optimize your content for search engines with AI...</p>
          </div>
        );
      case "idea-hub":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Idea Hub</h1>
            <p className="text-muted-foreground">Generate and organize content ideas with AI...</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <p className="text-muted-foreground">Configure your marketing hub settings...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
