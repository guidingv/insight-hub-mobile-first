import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Lightbulb, AlertTriangle, BarChart3, Download } from "lucide-react";

export const CompetitorInsights = () => {
  const insights = [
    {
      title: "Pricing Gap Opportunity",
      description: "Your enterprise pricing is 23% below market average. Consider gradual increase.",
      type: "opportunity",
      impact: "high",
      icon: TrendingUp,
      recommendation: "Increase enterprise pricing by 15% over next quarter"
    },
    {
      title: "Feature Parity Alert",
      description: "3 competitors now offer AI analytics. This is becoming table stakes.",
      type: "threat",
      impact: "medium",
      icon: AlertTriangle,
      recommendation: "Prioritize AI analytics development for Q2 roadmap"
    },
    {
      title: "Market Positioning",
      description: "You're uniquely positioned in the mid-market segment with superior support.",
      type: "strength",
      impact: "medium",
      icon: Target,
      recommendation: "Emphasize support quality in marketing materials"
    }
  ];

  const marketAnalysis = {
    marketShare: [
      { competitor: "Your Company", share: 28, color: "bg-primary" },
      { competitor: "TechCorp Inc.", share: 34, color: "bg-marketing-blue" },
      { competitor: "InnovateFlow", share: 22, color: "bg-marketing-green" },
      { competitor: "NextGen Solutions", share: 16, color: "bg-marketing-purple" }
    ],
    strengths: [
      { area: "Customer Support", score: 94, benchmark: 78 },
      { area: "Product Quality", score: 88, benchmark: 85 },
      { area: "Pricing", score: 76, benchmark: 82 },
      { area: "Innovation", score: 71, benchmark: 88 }
    ]
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case "opportunity": return "border-marketing-green bg-marketing-green-light";
      case "threat": return "border-destructive bg-destructive/10";
      case "strength": return "border-marketing-blue bg-marketing-blue-light";
      default: return "border-border bg-muted";
    }
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "high": return <Badge className="bg-destructive">High Impact</Badge>;
      case "medium": return <Badge className="bg-marketing-orange">Medium Impact</Badge>;
      case "low": return <Badge className="bg-marketing-green">Low Impact</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* AI-Powered Insights */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-marketing-purple" />
              AI-Powered Insights
            </CardTitle>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 ${getInsightColor(insight.type)}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-background">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{insight.title}</h4>
                        {getImpactBadge(insight.impact)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                      <div className="bg-background p-3 rounded-lg">
                        <p className="text-sm font-medium">💡 Recommendation:</p>
                        <p className="text-sm">{insight.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Market Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-marketing-blue" />
              Market Share Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketAnalysis.marketShare.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.competitor}</span>
                    <span className="text-sm">{item.share}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Competitive Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketAnalysis.strengths.map((strength, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{strength.area}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{strength.score}</span>
                      <span className="text-xs text-muted-foreground">vs {strength.benchmark}</span>
                    </div>
                  </div>
                  <div className="relative">
                    <Progress value={strength.benchmark} className="h-2 bg-muted" />
                    <div
                      className="absolute top-0 left-0 h-2 bg-primary rounded-full"
                      style={{ width: `${Math.min(strength.score, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Industry Avg: {strength.benchmark}</span>
                    <span className={strength.score > strength.benchmark ? "text-marketing-green" : "text-destructive"}>
                      {strength.score > strength.benchmark ? "+" : ""}{strength.score - strength.benchmark} vs avg
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strategic Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-marketing-green-light rounded-lg">
              <h4 className="font-semibold text-marketing-green mb-2">Short Term (1-3 months)</h4>
              <ul className="text-sm space-y-1">
                <li>• Adjust enterprise pricing strategy</li>
                <li>• Enhance marketing messaging around support</li>
                <li>• Monitor AI analytics competitor rollouts</li>
              </ul>
            </div>
            
            <div className="p-4 bg-marketing-blue-light rounded-lg">
              <h4 className="font-semibold text-marketing-blue mb-2">Medium Term (3-6 months)</h4>
              <ul className="text-sm space-y-1">
                <li>• Develop AI analytics capabilities</li>
                <li>• Expand mid-market positioning</li>
                <li>• Launch competitive research program</li>
              </ul>
            </div>
            
            <div className="p-4 bg-marketing-purple-light rounded-lg">
              <h4 className="font-semibold text-marketing-purple mb-2">Long Term (6+ months)</h4>
              <ul className="text-sm space-y-1">
                <li>• Build competitive moats in support</li>
                <li>• Explore new market segments</li>
                <li>• Develop differentiated features</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};