import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Target, Building, Users, DollarSign, MapPin, Briefcase, Sparkles } from "lucide-react";

export const ICPGenerator = () => {
  const [icpData, setIcpData] = useState({
    industry: "",
    companySize: "",
    revenue: "",
    geography: "",
    jobTitles: "",
    painPoints: "",
    goals: "",
    budget: "",
    decisionMakers: "",
    channels: ""
  });

  const [generatedICP, setGeneratedICP] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setIcpData(prev => ({ ...prev, [field]: value }));
  };

  const generateICP = () => {
    const icp = `
**Ideal Customer Profile - Insurance Provider B2B**

**Demographics:**
• Industry: ${icpData.industry || "Financial Services, Healthcare, Manufacturing"}
• Company Size: ${icpData.companySize || "50-500 employees"}
• Annual Revenue: ${icpData.revenue || "$10M - $100M"}
• Geography: ${icpData.geography || "North America"}

**Key Decision Makers:**
• ${icpData.jobTitles || "CFO, Risk Manager, HR Director, Operations Manager"}
• ${icpData.decisionMakers || "C-suite executives with budget authority"}

**Pain Points:**
• ${icpData.painPoints || "Rising insurance costs, complex compliance requirements, inadequate coverage"}
• Risk management challenges
• Need for customized insurance solutions

**Goals & Objectives:**
• ${icpData.goals || "Cost optimization, comprehensive coverage, streamlined claims process"}
• Regulatory compliance
• Employee satisfaction and retention

**Budget & Buying Process:**
• Budget Range: ${icpData.budget || "$50K - $500K annually"}
• Decision Timeline: 3-6 months
• Involves multiple stakeholders

**Preferred Channels:**
• ${icpData.channels || "LinkedIn, industry events, referrals, email marketing"}
• Professional networks and associations
• Industry publications and webinars
    `;
    setGeneratedICP(icp.trim());
  };

  const industries = [
    "Technology", "Healthcare", "Manufacturing", "Financial Services", 
    "Real Estate", "Retail", "Construction", "Professional Services"
  ];

  const companySizes = [
    "1-10 employees", "11-50 employees", "51-200 employees", 
    "201-500 employees", "501-1000 employees", "1000+ employees"
  ];

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">ICP Generator</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Create detailed Ideal Customer Profiles for targeted marketing
          </p>
        </div>
        <Button onClick={generateICP} className="w-full sm:w-auto">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate ICP
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Customer Profile Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Target Industry</Label>
                <Select value={icpData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size</Label>
                <Select value={icpData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    {companySizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="revenue">Annual Revenue</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="revenue"
                    className="pl-10"
                    placeholder="e.g., $10M - $100M"
                    value={icpData.revenue}
                    onChange={(e) => handleInputChange("revenue", e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="geography">Geography</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="geography"
                    className="pl-10"
                    placeholder="e.g., North America, Europe"
                    value={icpData.geography}
                    onChange={(e) => handleInputChange("geography", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobTitles">Key Job Titles</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="jobTitles"
                  className="pl-10"
                  placeholder="e.g., CFO, Risk Manager, HR Director"
                  value={icpData.jobTitles}
                  onChange={(e) => handleInputChange("jobTitles", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="painPoints">Pain Points</Label>
              <Textarea
                id="painPoints"
                placeholder="What challenges do they face?"
                value={icpData.painPoints}
                onChange={(e) => handleInputChange("painPoints", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">Goals & Objectives</Label>
              <Textarea
                id="goals"
                placeholder="What are they trying to achieve?"
                value={icpData.goals}
                onChange={(e) => handleInputChange("goals", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Input
                id="budget"
                placeholder="e.g., $50K - $500K annually"
                value={icpData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="channels">Preferred Channels</Label>
              <Textarea
                id="channels"
                placeholder="How do you reach them? (LinkedIn, events, etc.)"
                value={icpData.channels}
                onChange={(e) => handleInputChange("channels", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Generated ICP */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Generated ICP
            </CardTitle>
          </CardHeader>
          <CardContent>
            {generatedICP ? (
              <div className="space-y-4">
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                    {generatedICP}
                  </pre>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Copy to Clipboard
                  </Button>
                  <Button variant="outline" size="sm">
                    Export as PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    Save Template
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Target className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No ICP Generated Yet</h3>
                <p className="text-muted-foreground">
                  Fill out the form and click "Generate ICP" to create your ideal customer profile
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Technology Startups
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Healthcare Providers
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Manufacturing Companies
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Professional Services
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Real Estate Firms
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};