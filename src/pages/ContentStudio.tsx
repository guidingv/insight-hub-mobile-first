import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Sparkles } from "lucide-react";

export const ContentStudio = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Content Studio</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Create and manage your marketing content
          </p>
        </div>
        <Button onClick={() => setActiveTab("create")} className="w-full sm:w-auto">
          <Sparkles className="mr-2 h-4 w-4" />
          AI Generate
        </Button>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="library">Library</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <div className="text-center py-12">
            <Plus className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Create Content</h3>
            <p className="text-muted-foreground">Start creating your marketing content here</p>
          </div>
        </TabsContent>

        <TabsContent value="library" className="space-y-6">
          <div className="text-center py-12">
            <Plus className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Content Library</h3>
            <p className="text-muted-foreground">Manage your existing content here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};