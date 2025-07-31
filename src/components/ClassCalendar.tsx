import { Calendar, Clock, User, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ClassSession {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: number; // in minutes
  coach?: string;
  students?: string[];
  status: 'upcoming' | 'live' | 'completed';
  topic: string;
}

interface ClassCalendarProps {
  userRole: 'student' | 'coach';
  classes?: ClassSession[];
}

// Dummy data
const dummyClasses: ClassSession[] = [
  {
    id: '1',
    title: 'Opening Principles',
    date: '2024-08-01',
    time: '14:00',
    duration: 60,
    coach: 'GM Sarah Chen',
    students: ['John Doe', 'Jane Smith'],
    status: 'upcoming',
    topic: 'Chess Fundamentals'
  },
  {
    id: '2',
    title: 'Tactical Patterns',
    date: '2024-08-01',
    time: '16:00',
    duration: 90,
    coach: 'IM Michael Rodriguez',
    students: ['Alex Johnson', 'Emma Wilson', 'Chris Brown'],
    status: 'live',
    topic: 'Tactics & Combinations'
  },
  {
    id: '3',
    title: 'Endgame Mastery',
    date: '2024-08-02',
    time: '10:00',
    duration: 75,
    coach: 'FM Lisa Thompson',
    students: ['David Kim', 'Sophie Martinez'],
    status: 'upcoming',
    topic: 'Endgame Theory'
  },
  {
    id: '4',
    title: 'Positional Play',
    date: '2024-07-30',
    time: '15:00',
    duration: 60,
    coach: 'GM Robert White',
    students: ['John Doe'],
    status: 'completed',
    topic: 'Strategic Understanding'
  }
];

const ClassCalendar = ({ userRole, classes = dummyClasses }: ClassCalendarProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-destructive text-destructive-foreground';
      case 'upcoming': return 'bg-accent text-accent-foreground';
      case 'completed': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          {userRole === 'student' ? 'My Classes' : 'Class Schedule'}
        </CardTitle>
        <CardDescription>
          {userRole === 'student' 
            ? 'Your upcoming and recent chess lessons'
            : 'Manage your teaching schedule'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {classes.map((classSession) => (
            <div
              key={classSession.id}
              className={cn(
                "p-4 rounded-lg border transition-all duration-200 hover:shadow-md",
                classSession.status === 'live' && "bg-destructive/5 border-destructive/20",
                classSession.status === 'upcoming' && "bg-accent/5 border-accent/20",
                classSession.status === 'completed' && "bg-muted/5 border-muted/20"
              )}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{classSession.title}</h4>
                    <Badge variant="outline" className={getStatusColor(classSession.status)}>
                      {classSession.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(classSession.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {classSession.time} ({classSession.duration}min)
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    {userRole === 'student' && classSession.coach && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <User className="h-4 w-4" />
                        {classSession.coach}
                      </div>
                    )}
                    {userRole === 'coach' && classSession.students && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <User className="h-4 w-4" />
                        {classSession.students.length} student{classSession.students.length !== 1 ? 's' : ''}
                      </div>
                    )}
                    <Badge variant="secondary">{classSession.topic}</Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {classSession.status === 'live' && (
                    <Button size="sm" className="bg-destructive hover:bg-destructive/90">
                      <Video className="h-4 w-4 mr-2" />
                      Join Live
                    </Button>
                  )}
                  {classSession.status === 'upcoming' && (
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4 mr-2" />
                      {userRole === 'student' ? 'Join Class' : 'Start Class'}
                    </Button>
                  )}
                  {classSession.status === 'completed' && (
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassCalendar;