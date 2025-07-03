import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  gradient: string;
  description?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral",
  icon: Icon,
  gradient,
  description 
}: MetricCardProps) => {
  return (
    <div className={cn("rounded-xl p-6 text-white shadow-hover hover:shadow-glow transition-all duration-300", gradient)}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-white/20 rounded-lg">
          <Icon className="h-6 w-6" />
        </div>
        {change && (
          <span className={cn(
            "text-sm font-medium px-2 py-1 rounded-full",
            changeType === "positive" && "bg-white/20 text-white",
            changeType === "negative" && "bg-white/20 text-white",
            changeType === "neutral" && "bg-white/20 text-white"
          )}>
            {change}
          </span>
        )}
      </div>
      
      <div>
        <h3 className="text-white/80 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold mb-2">{value}</p>
        {description && (
          <p className="text-white/70 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};