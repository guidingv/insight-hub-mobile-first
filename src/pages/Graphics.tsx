import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Plus, Image, Send, Sparkles } from "lucide-react";

export const Graphics = () => {
  const [activeTab, setActiveTab] = useState("templates");
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', message: string }[]>([]);

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

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    setChatHistory(prev => [...prev, { role: 'user', message: chatMessage }]);
    setChatMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'ai', 
        message: `I'll help you create a graphic based on: "${chatMessage}". What style, colors, and dimensions would you prefer?` 
      }]);
    }, 1000);
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Graphics Studio</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Create stunning visuals and graphics with AI
          </p>
        </div>
        <Button onClick={() => setActiveTab("chat")} className="w-full sm:w-auto">
          <Sparkles className="mr-2 h-4 w-4" />
          Chat with AI
        </Button>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="chat">AI Chat</TabsTrigger>
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

        <TabsContent value="chat" className="space-y-4 md:space-y-6">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                AI Graphics Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-4 md:p-6">
              {/* Chat History */}
              <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                {chatHistory.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Start a conversation to create custom graphics in your style</p>
                  </div>
                ) : (
                  chatHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              {/* Message Input */}
              <div className="flex gap-2">
                <Textarea
                  placeholder="Describe the graphic you want to create..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 min-h-[80px]"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!chatMessage.trim()}
                  className="self-end"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};