import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadDashboard } from "@/components/leads/LeadDashboard";
import { LeadManagement } from "@/components/leads/LeadManagement";
import { LeadPipeline } from "@/components/leads/LeadPipeline";
import { AddLead } from "@/components/leads/AddLead";
import { Plus, Users } from "lucide-react";

export const LeadTracker = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Lead Tracker</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Monitor and manage your leads through the sales pipeline
          </p>
        </div>
        <Button onClick={() => setActiveTab("add")} className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="add">Add Lead</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <LeadDashboard />
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          <LeadManagement />
        </TabsContent>

        <TabsContent value="pipeline" className="space-y-6">
          <LeadPipeline />
        </TabsContent>

        <TabsContent value="add" className="space-y-6">
          <AddLead />
        </TabsContent>
      </Tabs>
    </div>
  );
};