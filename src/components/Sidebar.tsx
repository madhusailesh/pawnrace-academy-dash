import { 
  Calendar, 
  Users, 
  BookOpen, 
  Settings, 
  TrendingUp, 
  Video,
  PlusCircle,
  Clock,
  Award,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  userRole: 'student' | 'coach';
}

const Sidebar = ({ userRole }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const studentMenuItems = [
    { icon: Video, label: "Attend Class", path: "/live-class" },
    { icon: Calendar, label: "Class Schedule", path: "/student/schedule" },
    { icon: BookOpen, label: "Coach Info", path: "/student/coaches" },
    { icon: TrendingUp, label: "My Progress", path: "/student/progress" },
    { icon: Settings, label: "Settings", path: "/student/settings" },
  ];

  const coachMenuItems = [
    { icon: PlusCircle, label: "Schedule Class", path: "/coach/schedule" },
    { icon: Calendar, label: "Student Schedule", path: "/coach/calendar" },
    { icon: Video, label: "Live Class Panel", path: "/live-class" },
    { icon: Users, label: "My Students", path: "/coach/students" },
    { icon: Settings, label: "Settings", path: "/coach/settings" },
  ];

  const menuItems = userRole === 'student' ? studentMenuItems : coachMenuItems;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-card border-r border-border h-[calc(100vh-4rem)] flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">
          {userRole === 'student' ? '🧑‍🎓 Student Portal' : '🧑‍🏫 Coach Portal'}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {userRole === 'student' ? 'Learn and improve' : 'Teach and guide'}
        </p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Button
              key={item.path}
              variant={active ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start h-11 text-left",
                active && userRole === 'student' && "bg-student/10 text-student border border-student/20",
                active && userRole === 'coach' && "bg-coach/10 text-coach border border-coach/20",
                !active && "hover:bg-muted/50"
              )}
              onClick={() => navigate(item.path)}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-border">
        <div className="bg-gradient-glass rounded-lg p-4 border border-border/50">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-lg",
              userRole === 'student' ? "bg-student/10" : "bg-coach/10"
            )}>
              <Award className={cn(
                "h-5 w-5",
                userRole === 'student' ? "text-student" : "text-coach"
              )} />
            </div>
            <div>
              <p className="text-sm font-medium">
                {userRole === 'student' ? 'Classes Attended' : 'Classes Taught'}
              </p>
              <p className="text-lg font-bold text-accent">
                {userRole === 'student' ? '12' : '47'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;