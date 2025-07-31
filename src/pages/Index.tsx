import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/chess-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Crown className="h-16 w-16" />
            <h1 className="text-6xl font-bold">PawnRace</h1>
          </div>
          
          <h2 className="text-2xl mb-6 opacity-90">
            Chess Academy Dashboard
          </h2>
          
          <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">
            Access your personalized chess learning experience with expert coaches,
            interactive lessons, and comprehensive progress tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/login')}
              className="bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              Sign In to Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/signup')}
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Dashboard Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 mx-auto mb-4 text-student" />
              <h4 className="text-xl font-semibold mb-3">Student Portal</h4>
              <p className="text-muted-foreground">
                Track your progress, attend live classes, and learn from expert coaches
                with personalized lesson plans.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-coach" />
              <h4 className="text-xl font-semibold mb-3">Coach Portal</h4>
              <p className="text-muted-foreground">
                Manage students, schedule classes, conduct live sessions, and track
                teaching performance.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h4 className="text-xl font-semibold mb-3">Live Classes</h4>
              <p className="text-muted-foreground">
                Interactive chess board, video calls, real-time chat, and collaborative
                learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/30 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Start Your Chess Journey?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join PawnRace Academy and unlock your chess potential with our comprehensive dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/signup')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://pawnrace.vercel.app', '_blank')}
            >
              Visit Main Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
