import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Users } from "lucide-react";

export const LeadTracker = () => {
  const [activeTab, setActiveTab] = useState("manage");

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Lead Tracker</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Monitor and manage your leads
          </p>
        </div>
        <Button onClick={() => setActiveTab("add")} className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="manage">Manage</TabsTrigger>
          <TabsTrigger value="add">Add Lead</TabsTrigger>
        </TabsList>

        <TabsContent value="manage" className="space-y-6">
          <div className="text-center py-12">
            <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Manage Leads</h3>
            <p className="text-muted-foreground">View and manage your leads pipeline</p>
          </div>
        </TabsContent>

        <TabsContent value="add" className="space-y-6">
          <div className="text-center py-12">
            <Plus className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Add New Lead</h3>
            <p className="text-muted-foreground">Add a new lead to your pipeline</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};