import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  Award, 
  Settings, 
  Bell,
  Search,
  User,
  Menu,
  X
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/lms' },
  { icon: BookOpen, label: 'Courses', path: '/lms/courses' },
  { icon: FileText, label: 'Assignments', path: '/lms/assignments' },
  { icon: Award, label: 'Grades', path: '/lms/grades' },
  { icon: Calendar, label: 'Schedule', path: '/lms/schedule' },
  { icon: Users, label: 'Community', path: '/lms/community' },
  { icon: Settings, label: 'Settings', path: '/lms/settings' },
];

export const LMSNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between p-4 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center space-x-8">
          <Link to="/lms" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Xpert LMS
            </span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "cyber" : "ghost"}
                    size="sm"
                    className={cn(
                      "flex items-center space-x-2 transition-all duration-300",
                      isActive && "shadow-cyber"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, assignments..."
              className="pl-10 pr-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
          
          <Button variant="outline" size="sm" className="relative">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
          </Button>
          
          <Button variant="outline" size="sm">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link to="/lms" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Xpert LMS
            </span>
          </Link>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-card/95 backdrop-blur-sm">
            <div className="p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant={isActive ? "cyber" : "ghost"}
                      size="sm"
                      className={cn(
                        "w-full justify-start space-x-2",
                        isActive && "shadow-cyber"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-border mt-4">
                <div className="relative mb-2">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};