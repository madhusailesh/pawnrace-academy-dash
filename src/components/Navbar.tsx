import { Bell, Home, User, Settings, LogOut, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  userRole?: 'student' | 'coach';
  userName?: string;
  userAvatar?: string;
}

const Navbar = ({ userRole = 'student', userName = 'John Doe', userAvatar }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    window.open('https://pawnrace.vercel.app', '_blank');
  };

  const handleDashboardClick = () => {
    navigate(userRole === 'student' ? '/student/dashboard' : '/coach/dashboard');
  };

  const handleLogout = () => {
    // Future: Clear auth tokens
    navigate('/login');
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          onClick={handleDashboardClick}
        >
          <Crown className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PawnRace
          </span>
        </div>

        {/* Home Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleHomeClick}
          className="text-muted-foreground hover:text-foreground"
        >
          <Home className="h-4 w-4 mr-2" />
          Home
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Role Badge */}
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          userRole === 'coach' 
            ? 'bg-coach/10 text-coach border border-coach/20' 
            : 'bg-student/10 text-student border border-student/20'
        }`}>
          {userRole === 'coach' ? '🧑‍🏫 Coach' : '🧑‍🎓 Student'}
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full border-2 border-background"></span>
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-10 w-10 rounded-full p-0">
              <Avatar className="h-9 w-9">
                <AvatarImage src={userAvatar} alt={userName} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  {userName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="text-sm font-medium">{userName}</p>
                <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDashboardClick}>
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;