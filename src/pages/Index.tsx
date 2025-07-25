import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Competitors } from "@/pages/Competitors";
import { ContentStudio } from "@/pages/ContentStudio";
import { Graphics } from "@/pages/Graphics";
import { LeadTracker } from "@/pages/LeadTracker";
import { ICPGenerator } from "@/pages/ICPGenerator";
import { Trends } from "@/pages/Trends";
import { AISEOAnalyzer } from "@/pages/AISEOAnalyzer";
import { Strategy } from "@/pages/Strategy";

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
      case "graphics":
        return <Graphics />;
      case "leads":
        return <LeadTracker />;
      case "icp":
        return <ICPGenerator />;
      case "trends":
        return <Trends />;
      case "strategy":
        return <Strategy />;
      case "ai-seo":
        return <AISEOAnalyzer />;
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
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
