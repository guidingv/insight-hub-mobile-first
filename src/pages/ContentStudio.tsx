import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentDashboard } from "@/components/content/ContentDashboard";
import { ContentCreate } from "@/components/content/ContentCreate";
import { ContentCalendar } from "@/components/content/ContentCalendar";
import { ContentLibrary } from "@/components/content/ContentLibrary";
import { Plus, Sparkles } from "lucide-react";

export const ContentStudio = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Studio</h1>
          <p className="text-muted-foreground">
            Create, plan, and manage your marketing content
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setActiveTab("create")}>
            <Sparkles className="mr-2 h-4 w-4" />
            AI Generate
          </Button>
          <Button onClick={() => setActiveTab("create")}>
            <Plus className="mr-2 h-4 w-4" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="library">Library</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <ContentDashboard />
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <ContentCreate />
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <ContentCalendar />
        </TabsContent>

        <TabsContent value="library" className="space-y-6">
          <ContentLibrary />
        </TabsContent>
      </Tabs>
    </div>
  );
};