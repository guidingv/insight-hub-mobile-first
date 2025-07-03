import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Image, Download, Share, Palette } from "lucide-react";

export const Graphics = () => {
  const [activeTab, setActiveTab] = useState("templates");

  const templates = [
    {
      id: 1,
      name: "Social Media Post",
      category: "Social",
      thumbnail: "/placeholder.svg",
      dimensions: "1080x1080"
    },
    {
      id: 2,
      name: "Instagram Story",
      category: "Social",
      thumbnail: "/placeholder.svg",
      dimensions: "1080x1920"
    },
    {
      id: 3,
      name: "Banner Ad",
      category: "Advertising",
      thumbnail: "/placeholder.svg",
      dimensions: "728x90"
    },
    {
      id: 4,
      name: "Logo Design",
      category: "Branding",
      thumbnail: "/placeholder.svg",
      dimensions: "500x500"
    }
  ];

  const recentDesigns = [
    {
      id: 1,
      name: "Campaign Banner",
      created: "2 hours ago",
      status: "Published",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Product Showcase",
      created: "1 day ago",
      status: "Draft",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Event Poster",
      created: "3 days ago",
      status: "Published",
      thumbnail: "/placeholder.svg"
    }
  ];

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Graphics Studio</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Create stunning visuals and graphics for your marketing campaigns
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Palette className="mr-2 h-4 w-4" />
            AI Generate
          </Button>
          <Button onClick={() => setActiveTab("create")} className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Create Design
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-hover transition-shadow cursor-pointer">
                <CardContent className="p-3 md:p-4">
                  <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <Image className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-sm md:text-base mb-1">{template.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{template.category}</p>
                  <p className="text-xs text-muted-foreground">{template.dimensions}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4 md:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Designs</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-3 md:space-y-4">
                {recentDesigns.map((design) => (
                  <div
                    key={design.id}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm md:text-base">{design.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{design.created}</p>
                      <span className={`inline-block text-xs px-2 py-1 rounded-full mt-1 ${
                        design.status === "Published" 
                          ? "bg-marketing-green text-white" 
                          : "bg-marketing-orange text-white"
                      }`}>
                        {design.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assets" className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Assets</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Logo Files</span>
                    <span className="text-xs text-muted-foreground">12 files</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Brand Colors</span>
                    <span className="text-xs text-muted-foreground">8 colors</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Fonts</span>
                    <span className="text-xs text-muted-foreground">4 fonts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stock Images</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <Image className="h-6 w-6 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-4 md:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Design</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-24 flex flex-col gap-2">
                  <Image className="h-8 w-8" />
                  <span>Start from Template</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2">
                  <Plus className="h-8 w-8" />
                  <span>Blank Canvas</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2">
                  <Palette className="h-8 w-8" />
                  <span>AI Generated</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};