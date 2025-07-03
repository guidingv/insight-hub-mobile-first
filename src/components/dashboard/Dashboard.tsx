import { TrendingUp, Users, Target, Eye, Zap, Star, ArrowRight } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Dashboard = () => {
  const metrics = [
    {
      title: "Total Campaigns",
      value: "24",
      change: "+12%",
      changeType: "positive" as const,
      icon: Target,
      gradient: "bg-gradient-info",
      description: "Active marketing campaigns"
    },
    {
      title: "Leads Generated",
      value: "1,234",
      change: "+24%",
      changeType: "positive" as const,
      icon: Users,
      gradient: "bg-gradient-success",
      description: "This month"
    },
    {
      title: "Competitor Insights",
      value: "47",
      change: "+5",
      changeType: "positive" as const,
      icon: Eye,
      gradient: "bg-gradient-warning",
      description: "New insights this week"
    },
    {
      title: "Automation Tasks",
      value: "156",
      change: "+18%",
      changeType: "positive" as const,
      icon: Zap,
      gradient: "bg-gradient-purple",
      description: "Running automations"
    }
  ];

  const recentActivities = [
    { action: "New competitor analysis", target: "TechCorp Inc.", time: "2 minutes ago", type: "analysis" },
    { action: "Campaign launched", target: "Q4 Product Launch", time: "1 hour ago", type: "campaign" },
    { action: "Lead captured", target: "john@example.com", time: "3 hours ago", type: "lead" },
    { action: "Content generated", target: "Social Media Post", time: "5 hours ago", type: "content" },
    { action: "Automation triggered", target: "Email Sequence #3", time: "6 hours ago", type: "automation" }
  ];

  const topCompetitors = [
    { name: "TechCorp Inc.", score: 94, change: "+2", trend: "up" },
    { name: "InnovateFlow", score: 87, change: "-1", trend: "down" },
    { name: "NextGen Solutions", score: 83, change: "+5", trend: "up" },
    { name: "Digital Dynamics", score: 78, change: "0", trend: "stable" }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="bg-card border border-border rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Good morning, Sarah! 👋</h1>
        <p className="text-muted-foreground mb-6">
          Your marketing hub is performing well. Here's what's happening today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === "analysis" ? "bg-marketing-blue-light" :
                    activity.type === "campaign" ? "bg-marketing-green-light" :
                    activity.type === "lead" ? "bg-marketing-orange-light" :
                    activity.type === "content" ? "bg-marketing-purple-light" :
                    "bg-primary-light"
                  }`}>
                    {activity.type === "analysis" && <Eye className="h-5 w-5 text-marketing-blue" />}
                    {activity.type === "campaign" && <Target className="h-5 w-5 text-marketing-green" />}
                    {activity.type === "lead" && <Users className="h-5 w-5 text-marketing-orange" />}
                    {activity.type === "content" && <Star className="h-5 w-5 text-marketing-purple" />}
                    {activity.type === "automation" && <Zap className="h-5 w-5 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.target}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Top Competitors */}
        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Top Competitors</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {topCompetitors.map((competitor, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-info rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {competitor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{competitor.name}</p>
                      <p className="text-xs text-muted-foreground">Score: {competitor.score}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-medium ${
                      competitor.trend === "up" ? "text-marketing-green" :
                      competitor.trend === "down" ? "text-destructive" :
                      "text-muted-foreground"
                    }`}>
                      {competitor.change}
                    </span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className={`h-3 w-3 ${
                        competitor.trend === "up" ? "text-marketing-green" :
                        competitor.trend === "down" ? "text-destructive rotate-180" :
                        "text-muted-foreground"
                      }`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex flex-col gap-2">
            <Target className="h-6 w-6" />
            <span>New Campaign</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2">
            <Eye className="h-6 w-6" />
            <span>Analyze Competitor</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2">
            <Star className="h-6 w-6" />
            <span>Generate Content</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2">
            <Zap className="h-6 w-6" />
            <span>Setup Automation</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};