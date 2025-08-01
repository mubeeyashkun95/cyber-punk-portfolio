import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation to LMS */}
      <div className="fixed top-4 right-4 z-50">
        <Link to="/lms">
          <Button variant="cyber" className="shadow-cyber">
            <BookOpen className="w-4 h-4 mr-2" />
            Enter Xpert LMS
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
