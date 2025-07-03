import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, TrendingUp, TrendingDown, DollarSign, Package, Globe, Bell } from "lucide-react";

export const ChangeTracking = () => {
  const [timeFilter, setTimeFilter] = useState("7d");
  const [competitorFilter, setCompetitorFilter] = useState("all");

  const recentChanges = [
    {
      id: 1,
      competitor: "TechCorp Inc.",
      type: "pricing",
      change: "Basic plan increased from $25 to $29",
      impact: "high",
      timestamp: "2 hours ago",
      icon: DollarSign,
      color: "text-marketing-orange"
    },
    {
      id: 2,
      competitor: "InnovateFlow",
      type: "product",
      change: "Launched new AI Analytics feature",
      impact: "medium",
      timestamp: "1 day ago",
      icon: Package,
      color: "text-marketing-blue"
    },
    {
      id: 3,
      competitor: "NextGen Solutions",
      type: "website",
      change: "Updated homepage messaging focus on enterprise",
      impact: "low",
      timestamp: "2 days ago",
      icon: Globe,
      color: "text-marketing-green"
    },
    {
      id: 4,
      competitor: "Digital Dynamics",
      type: "pricing",
      change: "Introduced new Enterprise tier at $299/mo",
      impact: "high",
      timestamp: "3 days ago",
      icon: DollarSign,
      color: "text-marketing-purple"
    }
  ];

  const pricingHistory = [
    {
      competitor: "TechCorp Inc.",
      plan: "Basic",
      changes: [
        { date: "2024-01-15", price: "$25", change: "initial" },
        { date: "2024-02-01", price: "$27", change: "+$2" },
        { date: "2024-03-01", price: "$29", change: "+$2" }
      ]
    },
    {
      competitor: "InnovateFlow",
      plan: "Pro",
      changes: [
        { date: "2024-01-01", price: "$75", change: "initial" },
        { date: "2024-02-15", price: "$69", change: "-$6" },
        { date: "2024-03-01", price: "$69", change: "unchanged" }
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-marketing-orange text-white";
      case "low": return "bg-marketing-green text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getChangeIcon = (change: string) => {
    if (change.includes("+")) return <TrendingUp className="h-3 w-3 text-marketing-green" />;
    if (change.includes("-")) return <TrendingDown className="h-3 w-3 text-destructive" />;
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Change Tracking Filters</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={competitorFilter} onValueChange={setCompetitorFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Competitors</SelectItem>
              <SelectItem value="techcorp">TechCorp Inc.</SelectItem>
              <SelectItem value="innovateflow">InnovateFlow</SelectItem>
              <SelectItem value="nextgen">NextGen Solutions</SelectItem>
              <SelectItem value="digital">Digital Dynamics</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Alert Settings
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="recent" className="space-y-6">
        <TabsList>
          <TabsTrigger value="recent">Recent Changes</TabsTrigger>
          <TabsTrigger value="pricing">Pricing History</TabsTrigger>
          <TabsTrigger value="products">Product Updates</TabsTrigger>
          <TabsTrigger value="content">Content Changes</TabsTrigger>
        </TabsList>

        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Recent Competitor Changes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentChanges.map((change) => {
                  const IconComponent = change.icon;
                  return (
                    <div
                      key={change.id}
                      className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className={`p-2 rounded-lg bg-muted ${change.color}`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{change.competitor}</h4>
                          <Badge variant="outline">{change.type}</Badge>
                          <Badge className={getImpactColor(change.impact)}>
                            {change.impact} impact
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{change.change}</p>
                        <p className="text-xs text-muted-foreground">{change.timestamp}</p>
                      </div>
                      
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Change History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pricingHistory.map((item, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">{item.competitor} - {item.plan} Plan</h4>
                    <div className="space-y-2">
                      {item.changes.map((change, changeIndex) => (
                        <div key={changeIndex} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                          <span className="text-sm text-muted-foreground">{change.date}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{change.price}</span>
                            {getChangeIcon(change.change)}
                            <span className="text-sm text-muted-foreground">({change.change})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Product Launch Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Product tracking data will appear here</p>
                <p className="text-sm">Configure product monitoring in settings</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Content & Messaging Changes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Content monitoring data will appear here</p>
                <p className="text-sm">Enable website monitoring for competitors</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};