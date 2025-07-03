import { BarChart3, Users, Target, TrendingUp, Settings, PenTool, Search, Lightbulb, Image } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "strategy", label: "Strategy", icon: Target },
  { id: "competitors", label: "Competitors", icon: Search },
  { id: "content", label: "Content", icon: PenTool },
  { id: "graphics", label: "Graphics", icon: Image },
  { id: "leads", label: "Lead Tracker", icon: Users },
  { id: "icp", label: "ICP Generator", icon: Target },
  { id: "trends", label: "Trends", icon: TrendingUp },
  { id: "ai-seo", label: "AI SEO", icon: TrendingUp },
  { id: "idea-hub", label: "Idea Hub", icon: Lightbulb },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col shadow-card hidden lg:flex">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          MarketingHub
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          All-in-one marketing toolkit
        </p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};