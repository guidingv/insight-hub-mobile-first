import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Upload, Image, FileText, Video, Folder, Filter, Download, Trash2, Eye } from "lucide-react";

export const ContentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const assets = [
    {
      id: 1,
      name: "Product Hero Image",
      type: "image",
      category: "product",
      size: "2.4 MB",
      format: "PNG",
      uploadDate: "2024-12-10",
      tags: ["hero", "product", "marketing"],
      preview: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Brand Guidelines",
      type: "document",
      category: "brand",
      size: "1.8 MB",
      format: "PDF",
      uploadDate: "2024-12-08",
      tags: ["brand", "guidelines", "style"],
      preview: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Demo Video",
      type: "video",
      category: "product",
      size: "25.6 MB",
      format: "MP4",
      uploadDate: "2024-12-05",
      tags: ["demo", "product", "video"],
      preview: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Company Logo",
      type: "image",
      category: "brand",
      size: "0.5 MB",
      format: "SVG",
      uploadDate: "2024-12-03",
      tags: ["logo", "brand", "identity"],
      preview: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Social Media Template",
      type: "template",
      category: "social",
      size: "1.2 MB",
      format: "PSD",
      uploadDate: "2024-12-01",
      tags: ["template", "social", "design"],
      preview: "/placeholder.svg"
    }
  ];

  const templates = [
    {
      id: 1,
      name: "Product Announcement",
      category: "Social Media",
      description: "Professional template for product launches",
      preview: "/placeholder.svg",
      uses: 24
    },
    {
      id: 2,
      name: "Newsletter Header",
      category: "Email",
      description: "Modern email newsletter header design",
      preview: "/placeholder.svg",
      uses: 18
    },
    {
      id: 3,
      name: "Blog Post Banner",
      category: "Blog",
      description: "Engaging banner template for blog posts",
      preview: "/placeholder.svg",
      uses: 32
    },
    {
      id: 4,
      name: "Customer Testimonial",
      category: "Social Media",
      description: "Template for showcasing customer reviews",
      preview: "/placeholder.svg",
      uses: 15
    }
  ];

  const brandAssets = [
    {
      id: 1,
      name: "Primary Logo",
      type: "Logo",
      formats: ["SVG", "PNG", "AI"],
      preview: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Color Palette",
      type: "Colors",
      formats: ["ASE", "CSS", "HEX"],
      preview: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Typography Guide",
      type: "Fonts",
      formats: ["PDF", "TTF"],
      preview: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Icon Set",
      type: "Icons",
      formats: ["SVG", "PNG"],
      preview: "/placeholder.svg"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "image": return <Image className="h-4 w-4" />;
      case "video": return <Video className="h-4 w-4" />;
      case "document": return <FileText className="h-4 w-4" />;
      case "template": return <Folder className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "image": return "bg-marketing-blue text-white";
      case "video": return "bg-marketing-purple text-white";
      case "document": return "bg-marketing-green text-white";
      case "template": return "bg-marketing-orange text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         asset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || asset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Content Library</CardTitle>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload Assets
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search assets, templates, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="assets" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="assets">Media Assets</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="brand">Brand Assets</TabsTrigger>
        </TabsList>

        <TabsContent value="assets">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Media Assets ({filteredAssets.length})</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Bulk Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-muted-foreground">
                        {getTypeIcon(asset.type)}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm truncate">{asset.name}</h4>
                        <Badge className={getTypeColor(asset.type)}>
                          {asset.format}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{asset.size}</span>
                        <span>•</span>
                        <span>{asset.uploadDate}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {asset.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {asset.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{asset.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Content Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors group cursor-pointer"
                  >
                    <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-muted-foreground">
                        <FileText className="h-8 w-8" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge variant="secondary">{template.category}</Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {template.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Used {template.uses} times
                        </span>
                        <Button size="sm">Use Template</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="brand">
          <Card>
            <CardHeader>
              <CardTitle>Brand Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {brandAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-muted-foreground">
                        <Image className="h-8 w-8" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">{asset.name}</h4>
                      <Badge variant="outline">{asset.type}</Badge>
                      
                      <div className="flex flex-wrap gap-1">
                        {asset.formats.map((format) => (
                          <Badge key={format} variant="secondary" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button size="sm" className="w-full">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};