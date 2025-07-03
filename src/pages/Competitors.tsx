import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search } from "lucide-react";

export const Competitors = () => {
  const [activeTab, setActiveTab] = useState("analyze");

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Competitor Analysis</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Track and analyze your competitors
          </p>
        </div>
        <Button onClick={() => setActiveTab("analyze")} className="w-full sm:w-auto">
          <Search className="mr-2 h-4 w-4" />
          Analyze Competitor
        </Button>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="analyze">Analyze</TabsTrigger>
          <TabsTrigger value="track">Track Changes</TabsTrigger>
        </TabsList>

        <TabsContent value="analyze" className="space-y-6">
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Analyze Competitors</h3>
            <p className="text-muted-foreground">Start analyzing your competitors here</p>
          </div>
        </TabsContent>

        <TabsContent value="track" className="space-y-6">
          <div className="text-center py-12">
            <Plus className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Track Changes</h3>
            <p className="text-muted-foreground">Monitor competitor changes and updates</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};