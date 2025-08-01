import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LMSNavigation } from "@/components/lms/LMSNavigation";
import { Dashboard } from "@/pages/lms/Dashboard";
import { Courses } from "@/pages/lms/Courses";
import { Assignments } from "@/pages/lms/Assignments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lms/*" element={
            <div className="min-h-screen bg-background">
              <LMSNavigation />
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="courses" element={<Courses />} />
                <Route path="assignments" element={<Assignments />} />
                <Route path="grades" element={<div className="p-6"><h1 className="text-4xl font-bold bg-gradient-cyber bg-clip-text text-transparent text-center">Grades Dashboard Coming Soon</h1></div>} />
                <Route path="schedule" element={<div className="p-6"><h1 className="text-4xl font-bold bg-gradient-cyber bg-clip-text text-transparent text-center">Schedule View Coming Soon</h1></div>} />
                <Route path="community" element={<div className="p-6"><h1 className="text-4xl font-bold bg-gradient-cyber bg-clip-text text-transparent text-center">Community Hub Coming Soon</h1></div>} />
                <Route path="settings" element={<div className="p-6"><h1 className="text-4xl font-bold bg-gradient-cyber bg-clip-text text-transparent text-center">Settings Panel Coming Soon</h1></div>} />
              </Routes>
            </div>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
