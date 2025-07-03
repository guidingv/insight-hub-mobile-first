import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Image, Video, Clock, TrendingUp, Target, Eye } from "lucide-react";

export const ContentDashboard = () => {
  const stats = [
    {
      title: "Content Created",
      value: "147",
      change: "+23%",
      changeType: "positive" as const,
      icon: FileText,
      description: "This month"
    },
    {
      title: "Scheduled Posts",
      value: "28",
      change: "+12",
      changeType: "positive" as const,
      icon: Calendar,
      description: "Next 7 days"
    },
    {
      title: "Templates Used",
      value: "64",
      change: "+8",
      changeType: "positive" as const,
      icon: Target,
      description: "Most popular"
    },
    {
      title: "Assets Uploaded",
      value: "89",
      change: "+15",
      changeType: "positive" as const,
      icon: Image,
      description: "This week"
    }
  ];

  const recentContent = [
    {
      id: 1,
      title: "Q4 Product Launch Campaign",
      type: "Social Post",
      status: "scheduled",
      date: "Dec 15, 2024",
      platform: "LinkedIn",
      preview: "Excited to announce our latest product innovation..."
    },
    {
      id: 2,
      title: "Holiday Marketing Email",
      type: "Email",
      status: "draft",
      date: "Dec 18, 2024",
      platform: "Email",
      preview: "Special holiday offers for our valued customers..."
    },
    {
      id: 3,
      title: "Year in Review Blog Post",
      type: "Blog",
      status: "published",
      date: "Dec 10, 2024",
      platform: "Website",
      preview: "Looking back at our incredible journey this year..."
    },
    {
      id: 4,
      title: "Customer Success Story",
      type: "Social Post",
      status: "scheduled",
      date: "Dec 16, 2024",
      platform: "Twitter",
      preview: "How @TechCorp increased efficiency by 40% using our platform..."
    }
  ];

  const upcomingContent = [
    { date: "Today", count: 3, items: ["Social post", "Email newsletter", "Blog post"] },
    { date: "Tomorrow", count: 2, items: ["Product announcement", "Case study"] },
    { date: "This Week", count: 8, items: ["Holiday campaign", "Social media series"] },
    { date: "Next Week", count: 12, items: ["Year-end content", "New feature posts"] }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-marketing-green text-white";
      case "scheduled": return "bg-marketing-blue text-white";
      case "draft": return "bg-marketing-orange text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Social Post": return <Eye className="h-4 w-4" />;
      case "Email": return <FileText className="h-4 w-4" />;
      case "Blog": return <FileText className="h-4 w-4" />;
      case "Video": return <Video className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-sm text-marketing-green">{stat.change}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Content</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContent.map((content) => (
                  <div
                    key={content.id}
                    className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 bg-muted rounded-lg">
                      {getTypeIcon(content.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium truncate">{content.title}</h4>
                        <Badge className={getStatusColor(content.status)}>
                          {content.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                        {content.preview}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{content.type}</span>
                        <span>{content.platform}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {content.date}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Content */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Publishing Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingContent.map((schedule, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{schedule.date}</h4>
                      <Badge variant="secondary">{schedule.count} items</Badge>
                    </div>
                    <div className="space-y-1">
                      {schedule.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-sm text-muted-foreground">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Full Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>Write Blog Post</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Eye className="h-6 w-6" />
              <span>Create Social Post</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Image className="h-6 w-6" />
              <span>Design Graphics</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span>Schedule Content</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};