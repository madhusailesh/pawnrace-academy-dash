import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description?: string;
  value?: string | number;
  icon?: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  actionLabel?: string;
  onAction?: () => void;
  variant?: 'default' | 'student' | 'coach';
  className?: string;
  children?: React.ReactNode;
}

const DashboardCard = ({
  title,
  description,
  value,
  icon: Icon,
  trend = 'neutral',
  trendValue,
  actionLabel,
  onAction,
  variant = 'default',
  className,
  children
}: DashboardCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'student':
        return 'border-student/20 hover:border-student/40 hover:shadow-student/10';
      case 'coach':
        return 'border-coach/20 hover:border-coach/40 hover:shadow-coach/10';
      default:
        return 'border-border hover:border-accent/40 hover:shadow-accent/10';
    }
  };

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      getVariantClasses(),
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium">
            {title}
          </CardTitle>
          {description && (
            <CardDescription>
              {description}
            </CardDescription>
          )}
        </div>
        {Icon && (
          <div className={cn(
            "p-2 rounded-lg",
            variant === 'student' && "bg-student/10 text-student",
            variant === 'coach' && "bg-coach/10 text-coach",
            variant === 'default' && "bg-accent/10 text-accent"
          )}>
            <Icon className="h-4 w-4" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        {value && (
          <div className="text-2xl font-bold">
            {value}
            {trendValue && (
              <span className={cn("text-xs ml-2", getTrendColor())}>
                {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} {trendValue}
              </span>
            )}
          </div>
        )}
        
        {children}
        
        {actionLabel && onAction && (
          <Button 
            onClick={onAction}
            variant={variant === 'default' ? 'default' : 'outline'}
            size="sm"
            className={cn(
              "mt-4 w-full",
              variant === 'student' && "border-student/40 text-student hover:bg-student/10",
              variant === 'coach' && "border-coach/40 text-coach hover:bg-coach/10"
            )}
          >
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;