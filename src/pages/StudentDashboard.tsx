import { Calendar, BookOpen, TrendingUp, Clock, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import ClassCalendar from "@/components/ClassCalendar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // Dummy coach data
  const coaches = [
    {
      id: '1',
      name: 'GM Sarah Chen',
      rating: 2650,
      specialty: 'Opening Theory',
      avatar: '/placeholder.svg',
      lessonsWithYou: 8
    },
    {
      id: '2',
      name: 'IM Michael Rodriguez',
      rating: 2480,
      specialty: 'Tactical Training',
      avatar: '/placeholder.svg',
      lessonsWithYou: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="student" userName="John Doe" />
      
      <div className="flex">
        <Sidebar userRole="student" />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-student/10 to-student/5 rounded-lg p-6 border border-student/20">
            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-muted-foreground mb-4">
              Ready to improve your chess skills? You have 2 upcoming lessons this week.
            </p>
            <Button 
              onClick={() => navigate('/live-class')}
              className="bg-student hover:bg-student/90"
            >
              Join Live Class
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard
              title="Classes Attended"
              value="12"
              trend="up"
              trendValue="+2 this week"
              icon={Calendar}
              variant="student"
            />
            <DashboardCard
              title="Current Rating"
              value="1,247"
              trend="up"
              trendValue="+45"
              icon={TrendingUp}
              variant="student"
            />
            <DashboardCard
              title="Study Time"
              value="24h"
              trend="up"
              trendValue="+3h this week"
              icon={Clock}
              variant="student"
            />
            <DashboardCard
              title="Achievements"
              value="7"
              trend="up"
              trendValue="+1 new"
              icon={Award}
              variant="student"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Class Schedule */}
            <div className="lg:col-span-2">
              <ClassCalendar userRole="student" />
            </div>

            {/* Progress & Coaches */}
            <div className="space-y-6">
              {/* Progress Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-student" />
                    Learning Progress
                  </CardTitle>
                  <CardDescription>Your improvement this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Tactical Skills</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Opening Knowledge</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Endgame Mastery</span>
                      <span>61%</span>
                    </div>
                    <Progress value={61} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Strategy & Planning</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Your Coaches */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-student" />
                    Your Coaches
                  </CardTitle>
                  <CardDescription>Learn from the best</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {coaches.map((coach) => (
                    <div
                      key={coach.id}
                      className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <Avatar>
                        <AvatarImage src={coach.avatar} alt={coach.name} />
                        <AvatarFallback className="bg-student/10 text-student">
                          {coach.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{coach.name}</p>
                        <p className="text-sm text-muted-foreground">{coach.specialty}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Rating: {coach.rating}</span>
                          <span>•</span>
                          <span>{coach.lessonsWithYou} lessons</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;