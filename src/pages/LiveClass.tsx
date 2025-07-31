import { Video, MessageSquare, Mic, MicOff, VideoOff, Users, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChessBoardMock from "@/components/ChessBoardMock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const LiveClass = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  // Dummy chat messages
  const chatMessages = [
    { id: 1, user: 'Coach Sarah', message: 'Welcome everyone! Today we will study tactical patterns.', time: '14:01', isCoach: true },
    { id: 2, user: 'John', message: 'Thank you coach!', time: '14:02', isCoach: false },
    { id: 3, user: 'Coach Sarah', message: 'Let\'s start with this position. What do you see?', time: '14:03', isCoach: true },
    { id: 4, user: 'Emma', message: 'I think there\'s a fork possibility', time: '14:04', isCoach: false },
    { id: 5, user: 'Alex', message: 'Yes, with the knight!', time: '14:04', isCoach: false },
    { id: 6, user: 'Coach Sarah', message: 'Excellent! Let\'s explore that idea.', time: '14:05', isCoach: true }
  ];

  // Dummy participants
  const participants = [
    { id: 1, name: 'Coach Sarah', role: 'coach', avatar: '/placeholder.svg', isOnline: true },
    { id: 2, name: 'John Doe', role: 'student', avatar: '/placeholder.svg', isOnline: true },
    { id: 3, name: 'Emma Wilson', role: 'student', avatar: '/placeholder.svg', isOnline: true },
    { id: 4, name: 'Alex Johnson', role: 'student', avatar: '/placeholder.svg', isOnline: false },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      // Future: Send message to chat
      console.log('Sending message:', chatMessage);
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="coach" userName="Sarah Chen" />
      
      <div className="h-[calc(100vh-4rem)] flex">
        {/* Left Sidebar - Chess Board */}
        <div className="w-1/2 p-4">
          <ChessBoardMock isLiveClass={true} userRole="coach" />
        </div>

        {/* Right Side - Video & Chat */}
        <div className="w-1/2 flex flex-col">
          {/* Video Section */}
          <div className="h-1/2 p-4 pb-2">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Live Video Session
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive" className="animate-pulse">
                      🔴 LIVE
                    </Badge>
                    <Badge variant="outline">
                      <Users className="h-3 w-3 mr-1" />
                      {participants.filter(p => p.isOnline).length}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-full space-y-4">
                {/* Main Video Area */}
                <div className="bg-muted/30 rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <div className="text-center">
                    <Video className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Video call interface will load here
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Coach camera & student cameras
                    </p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant={isMicOn ? "default" : "destructive"}
                    size="icon"
                    onClick={() => setIsMicOn(!isMicOn)}
                  >
                    {isMicOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant={isVideoOn ? "default" : "destructive"}
                    size="icon"
                    onClick={() => setIsVideoOn(!isVideoOn)}
                  >
                    {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>

                {/* Participants List */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Participants</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {participants.map((participant) => (
                      <div
                        key={participant.id}
                        className={`flex items-center gap-2 p-2 rounded text-xs ${
                          participant.isOnline ? 'bg-success/10 text-success' : 'bg-muted/50 text-muted-foreground'
                        }`}
                      >
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={participant.avatar} alt={participant.name} />
                          <AvatarFallback className="text-xs">
                            {participant.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="truncate">{participant.name}</span>
                        {participant.role === 'coach' && '👑'}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Section */}
          <div className="h-1/2 p-4 pt-2">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Live Chat & Moves
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col space-y-4">
                {/* Chat Messages */}
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-3">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-2 ${msg.isCoach ? 'flex-row' : 'flex-row'}`}
                      >
                        <Avatar className="h-8 w-8 flex-shrink-0">
                          <AvatarFallback className={`text-xs ${
                            msg.isCoach ? 'bg-coach/10 text-coach' : 'bg-student/10 text-student'
                          }`}>
                            {msg.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{msg.user}</span>
                            {msg.isCoach && <Badge variant="outline" className="text-xs">Coach</Badge>}
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    placeholder="Type a message or chess move..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;