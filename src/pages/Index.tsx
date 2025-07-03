import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Competitors } from "@/pages/Competitors";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "competitors":
        return <Competitors />;
      case "content":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Content Studio</h1>
            <p className="text-muted-foreground">Create and manage your marketing content...</p>
          </div>
        );
      case "leads":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Lead Tracker</h1>
            <p className="text-muted-foreground">Monitor and manage your leads...</p>
          </div>
        );
      case "campaigns":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
            <p className="text-muted-foreground">Manage your marketing campaigns...</p>
          </div>
        );
      case "analytics":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Analytics</h1>
            <p className="text-muted-foreground">View detailed performance analytics...</p>
          </div>
        );
      case "automation":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Automation</h1>
            <p className="text-muted-foreground">Set up marketing automation workflows...</p>
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
