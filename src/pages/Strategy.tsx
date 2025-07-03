import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, TrendingUp, DollarSign, Users, Calendar, Edit, Eye, BarChart3 } from "lucide-react";

export const Strategy = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock campaign data
  const campaigns = [
    {
      id: 1,
      name: "Small Business Insurance Awareness",
      type: "Lead Generation",
      status: "Active",
      budget: 5000,
      spent: 3200,
      leadsGenerated: 42,
      targetLeads: 60,
      roi: 185,
      startDate: "2024-01-15",
      endDate: "2024-03-15"
    },
    {
      id: 2,
      name: "Healthcare Provider Outreach",
      type: "Conversion",
      status: "Active",
      budget: 8000,
      spent: 5400,
      leadsGenerated: 28,
      targetLeads: 40,
      roi: 142,
      startDate: "2024-02-01",
      endDate: "2024-04-01"
    },
    {
      id: 3,
      name: "Auto Insurance Digital Campaign",
      type: "Awareness",
      status: "Completed",
      budget: 3500,
      spent: 3500,
      leadsGenerated: 38,
      targetLeads: 35,
      roi: 220,
      startDate: "2024-01-01",
      endDate: "2024-02-29"
    }
  ];

  const businessSizeMetrics = {
    small: {
      monthlyLeads: "25-50",
      avgDealValue: "$2,500",
      conversionRate: "8-12%",
      recommendedBudget: "$2,000-5,000"
    },
    medium: {
      monthlyLeads: "75-150",
      avgDealValue: "$8,000",
      conversionRate: "12-18%",
      recommendedBudget: "$8,000-15,000"
    },
    enterprise: {
      monthlyLeads: "200+",
      avgDealValue: "$25,000",
      conversionRate: "15-25%",
      recommendedBudget: "$20,000+"
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      case "Paused": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Marketing Strategy</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Manage campaigns, track ROI, and optimize lead generation strategy
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Target className="mr-2 h-4 w-4" />
          Create Campaign
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Active Campaigns</TabsTrigger>
          <TabsTrigger value="planning">Strategic Planning</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Leads</p>
                    <p className="text-2xl font-bold">108</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">+23% vs last month</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg ROI</p>
                    <p className="text-2xl font-bold">182%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">+15% improvement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Budget</p>
                    <p className="text-2xl font-bold">$16.5K</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-blue-500" />
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">67% utilized</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Campaigns</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                  <Target className="h-8 w-8 text-orange-500" />
                </div>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">On target</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Size Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Lead Generation Targets by Business Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(businessSizeMetrics).map(([size, metrics]) => (
                  <div key={size} className="p-4 border rounded-lg">
                    <h3 className="font-semibold capitalize mb-3">{size} Business</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Leads:</span>
                        <span className="font-medium">{metrics.monthlyLeads}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg Deal Value:</span>
                        <span className="font-medium">{metrics.avgDealValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Conversion Rate:</span>
                        <span className="font-medium">{metrics.conversionRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Budget:</span>
                        <span className="font-medium">{metrics.recommendedBudget}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{campaign.name}</h3>
                        <Badge className={getStatusColor(campaign.status)}>
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">{campaign.type}</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Budget</p>
                          <p className="font-medium">${campaign.budget.toLocaleString()}</p>
                          <Progress value={(campaign.spent / campaign.budget) * 100} className="mt-1" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Leads Generated</p>
                          <p className="font-medium">{campaign.leadsGenerated} / {campaign.targetLeads}</p>
                          <Progress value={(campaign.leadsGenerated / campaign.targetLeads) * 100} className="mt-1" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium text-green-600">{campaign.roi}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-medium text-xs">{campaign.startDate} to {campaign.endDate}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-3 w-3 mr-1" />
                        Analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="planning" className="space-y-6">
          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Marketing Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Define your marketing vision and long-term goals..."
                  className="min-h-[120px]"
                  defaultValue="To become the leading insurance provider for small businesses by leveraging digital marketing and personalized customer experiences."
                />
                <Button size="sm" variant="outline">Save Vision</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Objectives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span className="text-sm">Increase lead generation by 40%</span>
                    <Badge variant="secondary">Q2 2024</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span className="text-sm">Improve conversion rate to 15%</span>
                    <Badge variant="secondary">Q3 2024</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span className="text-sm">Expand to 3 new market segments</span>
                    <Badge variant="secondary">Q4 2024</Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline">Add Objective</Button>
              </CardContent>
            </Card>
          </div>

          {/* Strategy Planning Form */}
          <Card>
            <CardHeader>
              <CardTitle>New Campaign Strategy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="e.g., Q2 Small Business Outreach" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-audience">Target Audience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small-business">Small Business (1-50 employees)</SelectItem>
                      <SelectItem value="medium-business">Medium Business (51-200 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Campaign Budget</Label>
                  <Input id="budget" type="number" placeholder="5000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-target">Lead Target</Label>
                  <Input id="lead-target" type="number" placeholder="50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="strategy-description">Strategy Description</Label>
                <Textarea
                  id="strategy-description"
                  placeholder="Describe your campaign strategy, channels, and approach..."
                  className="min-h-[100px]"
                />
              </div>
              
              <Button>Create Campaign Strategy</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};