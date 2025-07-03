import { BarChart3, Users, Target, TrendingUp, Settings, Zap, PenTool, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "competitors", label: "Competitors", icon: Search },
  { id: "content", label: "Content Studio", icon: PenTool },
  { id: "leads", label: "Lead Tracker", icon: Users },
  { id: "campaigns", label: "Campaigns", icon: Target },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
  { id: "automation", label: "Automation", icon: Zap },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col shadow-card">
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
      
      <div className="p-4 border-t border-border">
        <div className="bg-gradient-purple rounded-lg p-4">
          <h3 className="font-semibold text-white mb-2">Upgrade to Pro</h3>
          <p className="text-white/80 text-sm mb-3">
            Unlock advanced features and unlimited campaigns
          </p>
          <button className="w-full bg-white text-marketing-purple py-2 px-4 rounded-md font-medium text-sm hover:bg-white/90 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};