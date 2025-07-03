import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Eye, AlertTriangle, Star } from "lucide-react";

export const CompetitorOverview = () => {
  const competitors = [
    {
      id: 1,
      name: "TechCorp Inc.",
      website: "techcorp.com",
      score: 94,
      change: "+2",
      trend: "up",
      lastUpdate: "2 hours ago",
      status: "active",
      alerts: 3,
      category: "Direct Competitor"
    },
    {
      id: 2,
      name: "InnovateFlow",
      website: "innovateflow.io",
      score: 87,
      change: "-1",
      trend: "down",
      lastUpdate: "5 hours ago",
      status: "active",
      alerts: 1,
      category: "Indirect Competitor"
    },
    {
      id: 3,
      name: "NextGen Solutions",
      website: "nextgen.com",
      score: 83,
      change: "+5",
      trend: "up",
      lastUpdate: "1 day ago",
      status: "active",
      alerts: 0,
      category: "Direct Competitor"
    },
    {
      id: 4,
      name: "Digital Dynamics",
      website: "digitaldynamics.net",
      score: 78,
      change: "0",
      trend: "stable",
      lastUpdate: "3 hours ago",
      status: "monitoring",
      alerts: 2,
      category: "Emerging Competitor"
    }
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-marketing-green" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-destructive" />;
    return <span className="h-4 w-4" />;
  };

  const getTrendColor = (trend: string) => {
    if (trend === "up") return "text-marketing-green";
    if (trend === "down") return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{competitors.length}</p>
                <p className="text-sm text-muted-foreground">Tracked Competitors</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-marketing-orange" />
              <div>
                <p className="text-2xl font-bold">{competitors.reduce((sum, c) => sum + c.alerts, 0)}</p>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-marketing-green" />
              <div>
                <p className="text-2xl font-bold">87</p>
                <p className="text-sm text-muted-foreground">Avg. Comp Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-marketing-purple" />
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Recent Changes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitors List */}
      <Card>
        <CardHeader>
          <CardTitle>Competitor Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitors.map((competitor) => (
              <div
                key={competitor.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-info rounded-lg flex items-center justify-center text-white font-bold">
                    {competitor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{competitor.name}</h3>
                    <p className="text-sm text-muted-foreground">{competitor.website}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={competitor.category === "Direct Competitor" ? "default" : "secondary"}>
                        {competitor.category}
                      </Badge>
                      {competitor.alerts > 0 && (
                        <Badge variant="destructive">
                          {competitor.alerts} alerts
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{competitor.score}</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {getTrendIcon(competitor.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(competitor.trend)}`}>
                      {competitor.change}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Updated</p>
                    <p className="text-sm">{competitor.lastUpdate}</p>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};