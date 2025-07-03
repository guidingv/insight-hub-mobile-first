import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Target, DollarSign, Phone, Mail, Calendar, User } from "lucide-react";

export const LeadDashboard = () => {
  const stats = [
    {
      title: "Total Leads",
      value: "324",
      change: "+18",
      changeType: "positive" as const,
      icon: Users,
      description: "This month"
    },
    {
      title: "Conversion Rate",
      value: "23%",
      change: "+4%",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Lead to customer"
    },
    {
      title: "Pipeline Value",
      value: "$127K",
      change: "+$23K",
      changeType: "positive" as const,
      icon: DollarSign,
      description: "Potential revenue"
    },
    {
      title: "Hot Leads",
      value: "47",
      change: "+12",
      changeType: "positive" as const,
      icon: Target,
      description: "High priority"
    }
  ];

  const recentLeads = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      email: "sarah@techstart.com",
      phone: "+1 (555) 123-4567",
      source: "Website",
      stage: "qualified",
      value: "$25,000",
      priority: "high",
      lastContact: "2 hours ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions",
      email: "m.chen@digital.com",
      phone: "+1 (555) 987-6543",
      source: "Referral",
      stage: "contacted",
      value: "$18,500",
      priority: "medium",
      lastContact: "1 day ago"
    },
    {
      id: 3,
      name: "Emma Wilson",
      company: "Growth Co.",
      email: "emma@growth.co",
      phone: "+1 (555) 456-7890",
      source: "LinkedIn",
      stage: "new",
      value: "$32,000",
      priority: "high",
      lastContact: "3 hours ago"
    },
    {
      id: 4,
      name: "David Rodriguez",
      company: "Innovate Ltd.",
      email: "david@innovate.com",
      phone: "+1 (555) 321-0987",
      source: "Website",
      stage: "proposal",
      value: "$45,000",
      priority: "high",
      lastContact: "5 hours ago"
    }
  ];

  const pipelineStages = [
    { stage: "New", count: 28, value: "$142K" },
    { stage: "Contacted", count: 15, value: "$89K" },
    { stage: "Qualified", count: 12, value: "$156K" },
    { stage: "Proposal", count: 8, value: "$234K" },
    { stage: "Negotiation", count: 5, value: "$178K" },
    { stage: "Closed Won", count: 3, value: "$67K" },
    { stage: "Closed Lost", count: 7, value: "$45K" }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "new": return "bg-marketing-blue text-white";
      case "contacted": return "bg-marketing-purple text-white";
      case "qualified": return "bg-marketing-green text-white";
      case "proposal": return "bg-marketing-orange text-white";
      case "negotiation": return "bg-primary text-white";
      case "closed_won": return "bg-marketing-green text-white";
      case "closed_lost": return "bg-destructive text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-white";
      case "medium": return "bg-marketing-orange text-white";
      case "low": return "bg-marketing-green text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
                      <span className="text-sm text-marketing-green">{stat.change}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                  </div>
                  <div className="p-2 md:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        {/* Recent Leads */}
        <div className="xl:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <CardTitle>Recent Leads</CardTitle>
                <Button variant="ghost" size="sm" className="w-full sm:w-auto">View All</Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-3 md:space-y-4">
                {recentLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="flex flex-col sm:flex-row sm:items-start gap-3 p-3 md:p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg self-start">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-medium">{lead.name}</h4>
                        <Badge className={getPriorityColor(lead.priority)}>
                          {lead.priority}
                        </Badge>
                        <Badge className={getStageColor(lead.stage)}>
                          {lead.stage}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{lead.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1 break-all">
                          <Mail className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{lead.email}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3 flex-shrink-0" />
                          {lead.phone}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="text-sm font-medium">{lead.value}</span>
                        <span className="text-xs text-muted-foreground">{lead.lastContact}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full sm:w-auto mt-2 sm:mt-0">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pipeline Overview */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Pipeline Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-2 md:space-y-3">
                {pipelineStages.map((stage, index) => (
                  <div key={index} className="flex items-center justify-between p-2 md:p-3 bg-muted/50 rounded-lg">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm truncate">{stage.stage}</h4>
                      <p className="text-xs text-muted-foreground">{stage.count} leads</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-medium text-sm">{stage.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <Button variant="outline" className="h-16 md:h-20 flex flex-col gap-1 md:gap-2 text-xs md:text-sm">
              <User className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-center">Add New Lead</span>
            </Button>
            <Button variant="outline" className="h-16 md:h-20 flex flex-col gap-1 md:gap-2 text-xs md:text-sm">
              <Phone className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-center">Log Call</span>
            </Button>
            <Button variant="outline" className="h-16 md:h-20 flex flex-col gap-1 md:gap-2 text-xs md:text-sm">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-center">Send Email</span>
            </Button>
            <Button variant="outline" className="h-16 md:h-20 flex flex-col gap-1 md:gap-2 text-xs md:text-sm">
              <Calendar className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-center">Schedule Meeting</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};