import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, Users, Mail, MapPin, Search, ExternalLink, Star, Calendar } from "lucide-react";

export const Trends = () => {
  const [activeTab, setActiveTab] = useState("influencers");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchIndustry, setSearchIndustry] = useState("");

  // Mock data for influencers
  const influencers = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Insurance Innovation Expert",
      location: "San Francisco, CA",
      followers: "45K",
      engagement: "8.5%",
      platform: "LinkedIn",
      niche: "InsurTech",
      avatar: "/placeholder.svg",
      verified: true,
      recentPost: "The future of AI in insurance claims processing"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Risk Management Consultant",
      location: "New York, NY",
      followers: "32K",
      engagement: "6.2%",
      platform: "LinkedIn",
      niche: "Commercial Insurance",
      avatar: "/placeholder.svg",
      verified: false,
      recentPost: "5 trends shaping commercial insurance in 2024"
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Healthcare Insurance Specialist",
      location: "Chicago, IL",
      followers: "28K",
      engagement: "9.1%",
      platform: "LinkedIn",
      niche: "Healthcare",
      avatar: "/placeholder.svg",
      verified: true,
      recentPost: "Healthcare cost containment strategies"
    }
  ];

  // Mock newsletter data
  const newsletters = [
    {
      id: 1,
      title: "Insurance Innovation Weekly",
      description: "Latest trends in InsurTech and digital transformation",
      subscribers: "15K",
      frequency: "Weekly",
      topics: ["InsurTech", "AI", "Digital Claims"],
      lastIssue: "AI-Powered Underwriting: A Game Changer"
    },
    {
      id: 2,
      title: "Risk Management Today",
      description: "Commercial insurance insights and risk analysis",
      subscribers: "22K",
      frequency: "Bi-weekly",
      topics: ["Risk Assessment", "Commercial", "Compliance"],
      lastIssue: "Cyber Insurance: What You Need to Know"
    },
    {
      id: 3,
      title: "Healthcare Insurance Insights",
      description: "Healthcare coverage trends and regulatory updates",
      subscribers: "18K",
      frequency: "Monthly",
      topics: ["Healthcare", "Policy", "Regulations"],
      lastIssue: "2024 Healthcare Policy Changes"
    }
  ];

  const industries = [
    "InsurTech", "Commercial Insurance", "Healthcare", "Auto Insurance", 
    "Life Insurance", "Property & Casualty", "Reinsurance"
  ];

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Trends & Influencers</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Discover industry influencers and stay updated with newsletters
          </p>
        </div>
      </div>

      {/* Search Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-[200px]">
              <Select value={searchIndustry} onValueChange={setSearchIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="newsletters">Industry Newsletters</TabsTrigger>
        </TabsList>

        <TabsContent value="influencers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {influencers.map((influencer) => (
              <Card key={influencer.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={influencer.avatar} />
                        <AvatarFallback>{influencer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-semibold text-sm">{influencer.name}</h3>
                          {influencer.verified && (
                            <Star className="h-3 w-3 text-primary fill-primary" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{influencer.title}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {influencer.location}
                  </div>
                  
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {influencer.followers} followers
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {influencer.engagement} engagement
                    </Badge>
                  </div>
                  
                  <Badge variant="outline" className="text-xs">
                    {influencer.niche}
                  </Badge>
                  
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Recent: "{influencer.recentPost}"
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Users className="mr-1 h-3 w-3" />
                      Connect
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="newsletters" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsletters.map((newsletter) => (
              <Card key={newsletter.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {newsletter.description}
                      </p>
                    </div>
                    <Button size="sm">
                      <Mail className="mr-1 h-3 w-3" />
                      Subscribe
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {newsletter.subscribers} subscribers
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {newsletter.frequency}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {newsletter.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      Latest: "{newsletter.lastIssue}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Create Newsletter Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Create Your Industry Newsletter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newsletter-name">Newsletter Name</Label>
                  <Input id="newsletter-name" placeholder="e.g., Insurance Insights Weekly" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Target Topics</Label>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <Badge key={industry} variant="outline" className="cursor-pointer hover:bg-muted">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button className="w-full">
                <TrendingUp className="mr-2 h-4 w-4" />
                Create Newsletter Template
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};