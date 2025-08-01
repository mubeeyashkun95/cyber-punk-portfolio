import { Dashboard3D } from '@/components/lms/Dashboard3D';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Target,
  TrendingUp,
  Calendar,
  Users,
  Award
} from 'lucide-react';

export const Dashboard = () => {
  const upcomingAssignments = [
    { title: "React Hooks Assignment", course: "Advanced React", dueDate: "Dec 18", priority: "high" },
    { title: "Database Design Project", course: "SQL Fundamentals", dueDate: "Dec 20", priority: "medium" },
    { title: "UI/UX Case Study", course: "Design Systems", dueDate: "Dec 22", priority: "low" },
  ];

  const recentAchievements = [
    { title: "JavaScript Master", icon: Trophy, description: "Completed all JS fundamentals" },
    { title: "Quick Learner", icon: Target, description: "Finished course in record time" },
    { title: "Community Helper", icon: Users, description: "Helped 10+ students" },
  ];

  const stats = [
    { label: "Courses Enrolled", value: "12", icon: BookOpen, color: "text-cyber-blue" },
    { label: "Hours Studied", value: "156", icon: Clock, color: "text-cyber-purple" },
    { label: "Assignments Done", value: "89", icon: Target, color: "text-cyber-pink" },
    { label: "Certificates", value: "5", icon: Award, color: "text-cyber-green" },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
          Welcome back, Alex!
        </h1>
        <p className="text-xl text-muted-foreground">
          Ready to continue your learning journey?
        </p>
      </div>

      {/* 3D Dashboard */}
      <Card className="border-cyber-blue/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-cyber-blue">Learning Universe</CardTitle>
          <CardDescription className="text-center">
            Explore your courses and progress in 3D space
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Dashboard3D />
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:shadow-cyber transition-all duration-300">
            <CardContent className="p-6 text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Progress */}
        <Card className="lg:col-span-2 bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-cyber-blue" />
              <span>Current Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">React Fundamentals</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Advanced JavaScript</span>
                  <span className="text-sm text-muted-foreground">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Database Design</span>
                  <span className="text-sm text-muted-foreground">67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
            </div>
            
            <Button className="w-full" variant="cyber">
              <BookOpen className="w-4 h-4 mr-2" />
              Continue Learning
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-cyber-purple" />
              <span>Upcoming</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAssignments.map((assignment, index) => (
              <div key={index} className="p-3 bg-background/50 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{assignment.title}</h4>
                  <Badge 
                    variant={assignment.priority === 'high' ? 'destructive' : 
                            assignment.priority === 'medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {assignment.priority}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{assignment.course}</p>
                <p className="text-xs text-cyber-blue">Due: {assignment.dueDate}</p>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              View All Assignments
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card className="bg-card/80 backdrop-blur-sm border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-cyber-green" />
            <span>Recent Achievements</span>
          </CardTitle>
          <CardDescription>Celebrate your learning milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="p-4 bg-background/50 rounded-lg border border-border text-center hover:shadow-neon transition-all duration-300">
                <achievement.icon className="w-8 h-8 mx-auto mb-3 text-cyber-green" />
                <h4 className="font-medium mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};