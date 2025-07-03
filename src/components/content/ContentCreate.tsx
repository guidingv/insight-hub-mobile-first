import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, FileText, Image, Video, Mail, Wand2, Copy, Save, Calendar } from "lucide-react";

export const ContentCreate = () => {
  const [contentType, setContentType] = useState("social");
  const [aiPrompt, setAiPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [contentBody, setContentBody] = useState("");

  const contentTypes = [
    { value: "social", label: "Social Media Post", icon: FileText },
    { value: "blog", label: "Blog Post", icon: FileText },
    { value: "email", label: "Email Newsletter", icon: Mail },
    { value: "ad", label: "Advertisement", icon: Image },
    { value: "video", label: "Video Script", icon: Video }
  ];

  const templates = [
    {
      id: 1,
      name: "Product Announcement",
      type: "social",
      preview: "🚀 Excited to announce... [Product Name] is here!",
      category: "Product"
    },
    {
      id: 2,
      name: "Customer Testimonial",
      type: "social",
      preview: "💬 Here's what our customers are saying about...",
      category: "Social Proof"
    },
    {
      id: 3,
      name: "Educational Post",
      type: "social",
      preview: "💡 Did you know? Here are 5 tips to...",
      category: "Educational"
    },
    {
      id: 4,
      name: "Welcome Email",
      type: "email",
      preview: "Welcome to [Company]! We're thrilled to have you...",
      category: "Onboarding"
    },
    {
      id: 5,
      name: "How-to Blog",
      type: "blog",
      preview: "Step-by-step guide to mastering...",
      category: "Tutorial"
    }
  ];

  const aiSuggestions = [
    "Write a social media post about AI in marketing",
    "Create an email newsletter about year-end trends",
    "Generate a blog post about customer success",
    "Write ad copy for a new product launch",
    "Create a video script for product demo"
  ];

  const handleAiGenerate = () => {
    // Simulate AI generation
    const mockGenerations = [
      "🚀 The future of marketing is here! Our AI-powered platform helps businesses create content 10x faster while maintaining quality. Ready to transform your content strategy? #MarketingAI #ContentCreation",
      "Looking back at an incredible year of growth and innovation! Our team shipped 15 new features, served 50K+ customers, and couldn't have done it without our amazing community. Here's to an even better 2024! 🎉",
      "Customer spotlight: How @TechStartup increased their lead generation by 300% using our platform. Their secret? Consistent, data-driven content that resonates with their audience. What's your content strategy? 💡"
    ];
    const randomContent = mockGenerations[Math.floor(Math.random() * mockGenerations.length)];
    setGeneratedContent(randomContent);
  };

  const handleUseTemplate = (template: any) => {
    setContentTitle(template.name);
    setContentBody(template.preview);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="create" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create Content</TabsTrigger>
          <TabsTrigger value="ai">AI Generator</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Content Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contentType">Content Type</Label>
                    <Select value={contentType} onValueChange={setContentType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {contentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter content title..."
                      value={contentTitle}
                      onChange={(e) => setContentTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your content here..."
                      className="min-h-[200px]"
                      value={contentBody}
                      onChange={(e) => setContentBody(e.target.value)}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Draft
                    </Button>
                    <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                    </Button>
                    <Button variant="outline">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Settings */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Content Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Target Audience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Audience</SelectItem>
                        <SelectItem value="business">Business Leaders</SelectItem>
                        <SelectItem value="developers">Developers</SelectItem>
                        <SelectItem value="marketers">Marketers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Tone</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="authoritative">Authoritative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Marketing</Badge>
                      <Badge variant="secondary">Product</Badge>
                      <Badge variant="secondary">AI</Badge>
                      <Button variant="outline" size="sm">+ Add Tag</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-marketing-purple" />
                AI Content Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="aiPrompt">Describe the content you want to create</Label>
                <Textarea
                  id="aiPrompt"
                  placeholder="e.g., Write a social media post about our new AI features that will save time for marketers..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleAiGenerate}>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Content
                </Button>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social">Social Post</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="blog">Blog Post</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {generatedContent && (
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Generated Content:</h4>
                  <p className="text-sm mb-3">{generatedContent}</p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setContentBody(generatedContent)}>
                      Use This Content
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleAiGenerate}>
                      Regenerate
                    </Button>
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-medium mb-2">Quick Prompts:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start text-left h-auto p-3"
                      onClick={() => setAiPrompt(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => handleUseTemplate(template)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{template.name}</h4>
                      <Badge variant="secondary">{template.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {template.preview}
                    </p>
                    <Badge variant="outline">{template.type}</Badge>
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