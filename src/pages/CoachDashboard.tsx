import { Users, Calendar, TrendingUp, Clock, DollarSign, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import ClassCalendar from "@/components/ClassCalendar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoachDashboard = () => {
  const navigate = useNavigate();

  // Dummy student data
  const students = [
    {
      id: '1',
      name: 'John Doe',
      rating: 1247,
      level: 'Intermediate',
      avatar: '/placeholder.svg',
      lastLesson: '2024-07-29',
      progress: 'Improving tactics'
    },
    {
      id: '2',
      name: 'Jane Smith',
      rating: 1456,
      level: 'Advanced',
      avatar: '/placeholder.svg',
      lastLesson: '2024-07-30',
      progress: 'Working on endgames'
    },
    {
      id: '3',
      name: 'Alex Johnson',
      rating: 1123,
      level: 'Beginner',
      avatar: '/placeholder.svg',
      lastLesson: '2024-07-28',
      progress: 'Learning openings'
    },
    {
      id: '4',
      name: 'Emma Wilson',
      rating: 1589,
      level: 'Advanced',
      avatar: '/placeholder.svg',
      lastLesson: '2024-07-31',
      progress: 'Strategic planning'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-warning/10 text-warning border-warning/20';
      case 'Intermediate': return 'bg-student/10 text-student border-student/20';
      case 'Advanced': return 'bg-coach/10 text-coach border-coach/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="coach" userName="Sarah Chen" />
      
      <div className="flex">
        <Sidebar userRole="coach" />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-coach/10 to-coach/5 rounded-lg p-6 border border-coach/20">
            <h1 className="text-3xl font-bold mb-2">Good morning, Sarah! ☀️</h1>
            <p className="text-muted-foreground mb-4">
              You have 3 classes scheduled today. Your students are making great progress!
            </p>
            <div className="flex gap-3">
              <Button 
                onClick={() => navigate('/live-class')}
                className="bg-coach hover:bg-coach/90"
              >
                Start Live Class
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/coach/schedule')}
                className="border-coach/40 text-coach hover:bg-coach/10"
              >
                Schedule Class
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard
              title="Active Students"
              value="24"
              trend="up"
              trendValue="+3 this month"
              icon={Users}
              variant="coach"
            />
            <DashboardCard
              title="Classes Taught"
              value="156"
              trend="up"
              trendValue="+12 this week"
              icon={Calendar}
              variant="coach"
            />
            <DashboardCard
              title="Average Rating"
              value="4.9"
              trend="up"
              trendValue="+0.1"
              icon={Star}
              variant="coach"
            />
            <DashboardCard
              title="Teaching Hours"
              value="47h"
              trend="up"
              trendValue="+8h this week"
              icon={Clock}
              variant="coach"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Class Schedule */}
            <div className="lg:col-span-2">
              <ClassCalendar userRole="coach" />
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common coaching tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/coach/schedule')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule New Class
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/live-class')}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Start Impromptu Session
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/coach/students')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    View All Students
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Students */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-coach" />
                    Recent Students
                  </CardTitle>
                  <CardDescription>Latest activity from your students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {students.slice(0, 3).map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/coach/students/${student.id}`)}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback className="bg-coach/10 text-coach">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium truncate">{student.name}</p>
                          <Badge variant="outline" className={getLevelColor(student.level)}>
                            {student.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {student.progress}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Rating: {student.rating}</span>
                          <span>•</span>
                          <span>Last: {new Date(student.lastLesson).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => navigate('/coach/students')}
                  >
                    View All Students
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoachDashboard;