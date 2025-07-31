import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomeRedirect from "./pages/HomeRedirect";
import StudentDashboard from "./pages/StudentDashboard";
import CoachDashboard from "./pages/CoachDashboard";
import LiveClass from "./pages/LiveClass";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/coach/dashboard" element={<CoachDashboard />} />
          <Route path="/live-class" element={<LiveClass />} />
          {/* Future routes for additional pages */}
          <Route path="/student/schedule" element={<StudentDashboard />} />
          <Route path="/student/coaches" element={<StudentDashboard />} />
          <Route path="/student/progress" element={<StudentDashboard />} />
          <Route path="/student/settings" element={<StudentDashboard />} />
          <Route path="/coach/schedule" element={<CoachDashboard />} />
          <Route path="/coach/calendar" element={<CoachDashboard />} />
          <Route path="/coach/students" element={<CoachDashboard />} />
          <Route path="/coach/settings" element={<CoachDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
