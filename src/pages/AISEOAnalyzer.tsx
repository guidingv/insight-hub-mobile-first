import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Search, ExternalLink, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export const AISEOAnalyzer = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [seoScore, setSeoScore] = useState(0);

  // Mock SEO checklist data
  const seoChecklist = [
    { id: "title", label: "Page Title Optimized", status: "good", description: "Title tag is present and under 60 characters" },
    { id: "meta", label: "Meta Description", status: "warning", description: "Meta description present but could be improved" },
    { id: "headings", label: "Heading Structure (H1-H6)", status: "good", description: "Proper heading hierarchy found" },
    { id: "keywords", label: "Target Keywords", status: "poor", description: "Keywords not properly optimized" },
    { id: "images", label: "Image Alt Text", status: "warning", description: "Some images missing alt text" },
    { id: "loading", label: "Page Loading Speed", status: "good", description: "Page loads in under 3 seconds" },
    { id: "mobile", label: "Mobile Responsive", status: "good", description: "Site is mobile-friendly" },
    { id: "schema", label: "Schema Markup", status: "poor", description: "No structured data found" },
    { id: "ssl", label: "SSL Certificate", status: "good", description: "Site uses HTTPS" },
    { id: "internal", label: "Internal Linking", status: "warning", description: "Could improve internal link structure" }
  ];

  const analyzeURL = () => {
    if (!url) return;
    
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      setSeoScore(72); // Mock score
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "poor":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "poor":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">AI SEO Analyzer</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Check your website's SEO performance and get optimization recommendations
          </p>
        </div>
      </div>

      {/* URL Input */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Enter Website URL
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="url">Website URL</Label>
              <div className="relative mt-2">
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pr-10"
                />
                <ExternalLink className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="flex items-end">
              <Button 
                onClick={analyzeURL} 
                disabled={!url || isAnalyzing}
                className="whitespace-nowrap"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze SEO"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {(isAnalyzing || analysisComplete) && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* SEO Score */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Score</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isAnalyzing ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-sm text-muted-foreground">Analyzing...</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className={`text-4xl font-bold ${getScoreColor(seoScore)}`}>
                    {seoScore}/100
                  </div>
                  <Progress value={seoScore} className="mt-4" />
                  <p className="text-sm text-muted-foreground mt-2">
                    {seoScore >= 80 ? "Excellent" : seoScore >= 60 ? "Good" : "Needs Improvement"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* SEO Checklist */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>SEO Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              {isAnalyzing ? (
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="flex-1 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              ) : analysisComplete ? (
                <div className="space-y-4">
                  {seoChecklist.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                      <div className="mt-0.5">
                        {getStatusIcon(item.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">{item.label}</h4>
                          <Badge variant="outline" className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  Enter a URL above to start the SEO analysis
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quick Actions */}
      {analysisComplete && (
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                Schedule Monitoring
              </Button>
              <Button variant="outline" size="sm">
                Compare with Competitors
              </Button>
              <Button variant="outline" size="sm">
                Get Improvement Suggestions
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};