import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, Plus } from "lucide-react";

export const CompetitorComparison = () => {
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>(["techcorp", "innovateflow"]);
  const [comparisonType, setComparisonType] = useState("pricing");

  const competitors = [
    { id: "techcorp", name: "TechCorp Inc.", color: "bg-marketing-blue" },
    { id: "innovateflow", name: "InnovateFlow", color: "bg-marketing-green" },
    { id: "nextgen", name: "NextGen Solutions", color: "bg-marketing-purple" },
    { id: "digital", name: "Digital Dynamics", color: "bg-marketing-orange" }
  ];

  const pricingData = [
    {
      feature: "Basic Plan",
      techcorp: "$29/mo",
      innovateflow: "$25/mo",
      nextgen: "$35/mo",
      digital: "$30/mo"
    },
    {
      feature: "Pro Plan",
      techcorp: "$79/mo",
      innovateflow: "$69/mo",
      nextgen: "$89/mo",
      digital: "$75/mo"
    },
    {
      feature: "Enterprise",
      techcorp: "Custom",
      innovateflow: "$199/mo",
      nextgen: "Custom",
      digital: "$299/mo"
    },
    {
      feature: "Free Trial",
      techcorp: "14 days",
      innovateflow: "30 days",
      nextgen: "7 days",
      digital: "14 days"
    }
  ];

  const featuresData = [
    {
      feature: "Analytics Dashboard",
      techcorp: "✅",
      innovateflow: "✅",
      nextgen: "✅",
      digital: "✅"
    },
    {
      feature: "API Access",
      techcorp: "✅",
      innovateflow: "✅",
      nextgen: "⚠️ Limited",
      digital: "❌"
    },
    {
      feature: "Custom Integrations",
      techcorp: "✅",
      innovateflow: "⚠️ Pro+",
      nextgen: "✅",
      digital: "⚠️ Enterprise"
    },
    {
      feature: "24/7 Support",
      techcorp: "⚠️ Pro+",
      innovateflow: "✅",
      nextgen: "⚠️ Enterprise",
      digital: "❌"
    }
  ];

  const getCurrentData = () => {
    return comparisonType === "pricing" ? pricingData : featuresData;
  };

  const toggleCompetitor = (competitorId: string) => {
    setSelectedCompetitors(prev => 
      prev.includes(competitorId) 
        ? prev.filter(id => id !== competitorId)
        : [...prev, competitorId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Comparison Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium mb-2">Comparison Type</label>
              <Select value={comparisonType} onValueChange={setComparisonType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pricing">Pricing</SelectItem>
                  <SelectItem value="features">Features</SelectItem>
                  <SelectItem value="products">Products</SelectItem>
                  <SelectItem value="marketing">Marketing Messages</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Add Custom Category
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Select Competitors to Compare</label>
            <div className="flex flex-wrap gap-3">
              {competitors.map((competitor) => (
                <div key={competitor.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={competitor.id}
                    checked={selectedCompetitors.includes(competitor.id)}
                    onCheckedChange={() => toggleCompetitor(competitor.id)}
                  />
                  <label htmlFor={competitor.id} className="flex items-center gap-2 cursor-pointer">
                    <div className={`w-3 h-3 rounded-full ${competitor.color}`} />
                    {competitor.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              {comparisonType === "pricing" ? "Pricing Comparison" : "Feature Comparison"}
            </CardTitle>
            <Badge variant="secondary">
              {selectedCompetitors.length} competitors selected
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">
                    {comparisonType === "pricing" ? "Plan/Feature" : "Feature"}
                  </TableHead>
                  {selectedCompetitors.map((competitorId) => {
                    const competitor = competitors.find(c => c.id === competitorId);
                    return (
                      <TableHead key={competitorId} className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${competitor?.color}`} />
                          {competitor?.name}
                        </div>
                      </TableHead>
                    );
                  })}
                </TableRow>
              </TableHeader>
              <TableBody>
                {getCurrentData().map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    {selectedCompetitors.map((competitorId) => (
                      <TableCell key={competitorId} className="text-center">
                        {row[competitorId as keyof typeof row] || "N/A"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-marketing-green-light rounded-lg">
              <h4 className="font-semibold text-marketing-green mb-2">Competitive Advantage</h4>
              <p className="text-sm">Your pricing is 15% more competitive than the market average</p>
            </div>
            <div className="p-4 bg-marketing-orange-light rounded-lg">
              <h4 className="font-semibold text-marketing-orange mb-2">Opportunity</h4>
              <p className="text-sm">Consider adding 24/7 support to match InnovateFlow's offering</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};