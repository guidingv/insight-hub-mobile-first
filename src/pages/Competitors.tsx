import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompetitorOverview } from "@/components/competitors/CompetitorOverview";
import { CompetitorComparison } from "@/components/competitors/CompetitorComparison";
import { ChangeTracking } from "@/components/competitors/ChangeTracking";
import { CompetitorInsights } from "@/components/competitors/CompetitorInsights";
import { AddCompetitorDialog } from "@/components/competitors/AddCompetitorDialog";
import { Plus } from "lucide-react";

export const Competitors = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Competitor Analysis</h1>
          <p className="text-muted-foreground">
            Track, compare, and monitor your competitors in real-time
          </p>
        </div>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Competitor
        </Button>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="comparison">Compare</TabsTrigger>
          <TabsTrigger value="tracking">Change Tracking</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <CompetitorOverview />
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <CompetitorComparison />
        </TabsContent>

        <TabsContent value="tracking" className="space-y-6">
          <ChangeTracking />
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <CompetitorInsights />
        </TabsContent>
      </Tabs>

      <AddCompetitorDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </div>
  );
};