import { Assignment3D } from '@/components/lms/Assignment3D';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Clock, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Upload,
  Download,
  Eye,
  Star
} from 'lucide-react';

export const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: "React Components Lab",
      course: "React Fundamentals",
      type: "Coding",
      status: "graded",
      grade: 95,
      maxGrade: 100,
      dueDate: "2024-12-15",
      submittedDate: "2024-12-14",
      description: "Build a complete React application using functional components and hooks.",
      requirements: ["Create 5 components", "Implement useState", "Add proper styling"],
      timeLimit: "3 hours",
      attempts: 1,
      maxAttempts: 3
    },
    {
      id: 2,
      title: "State Management Quiz",
      course: "React Fundamentals", 
      type: "Quiz",
      status: "submitted",
      dueDate: "2024-12-18",
      submittedDate: "2024-12-17",
      description: "Test your understanding of React state management concepts.",
      requirements: ["20 multiple choice questions", "1 hour time limit"],
      timeLimit: "1 hour",
      attempts: 1,
      maxAttempts: 2
    },
    {
      id: 3,
      title: "Final Project",
      course: "React Fundamentals",
      type: "Project",
      status: "pending",
      dueDate: "2024-12-22",
      description: "Create a full-stack web application showcasing all course concepts.",
      requirements: ["Frontend with React", "Backend API", "Database integration", "Deployment"],
      timeLimit: "2 weeks",
      attempts: 0,
      maxAttempts: 1
    },
    {
      id: 4,
      title: "Hooks Exercise",
      course: "Advanced React",
      type: "Coding",
      status: "graded",
      grade: 87,
      maxGrade: 100,
      dueDate: "2024-12-20",
      submittedDate: "2024-12-19",
      description: "Implement custom hooks for common functionality patterns.",
      requirements: ["Create 3 custom hooks", "Write unit tests", "Documentation"],
      timeLimit: "4 hours",
      attempts: 2,
      maxAttempts: 3
    },
    {
      id: 5,
      title: "Database Normalization",
      course: "Database Design",
      type: "Theory",
      status: "overdue",
      dueDate: "2024-12-10",
      description: "Design a normalized database schema for an e-commerce system.",
      requirements: ["ER diagram", "3NF normalization", "SQL DDL statements"],
      timeLimit: "2 hours",
      attempts: 0,
      maxAttempts: 2
    }
  ];

  const pendingAssignments = assignments.filter(a => a.status === 'pending' || a.status === 'overdue');
  const submittedAssignments = assignments.filter(a => a.status === 'submitted');
  const gradedAssignments = assignments.filter(a => a.status === 'graded');

  const overallGrade = gradedAssignments.length > 0 
    ? Math.round(gradedAssignments.reduce((sum, a) => sum + (a.grade || 0), 0) / gradedAssignments.length)
    : 0;

  return (
    <div className="min-h-screen bg-background p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
          Assignments Hub
        </h1>
        <p className="text-xl text-muted-foreground">
          Track your progress and manage submissions
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardContent className="p-6 text-center">
            <FileText className="w-8 h-8 mx-auto mb-4 text-cyber-blue" />
            <div className="text-3xl font-bold text-foreground mb-2">{assignments.length}</div>
            <div className="text-sm text-muted-foreground">Total Assignments</div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-4 text-cyber-green" />
            <div className="text-3xl font-bold text-foreground mb-2">{gradedAssignments.length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 mx-auto mb-4 text-cyber-purple" />
            <div className="text-3xl font-bold text-foreground mb-2">{pendingAssignments.length}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardContent className="p-6 text-center">
            <Star className="w-8 h-8 mx-auto mb-4 text-cyber-pink" />
            <div className="text-3xl font-bold text-foreground mb-2">{overallGrade}%</div>
            <div className="text-sm text-muted-foreground">Average Grade</div>
          </CardContent>
        </Card>
      </div>

      {/* 3D Assignment Visualization */}
      <Card className="border-cyber-blue/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-cyber-blue">
            Assignment Galaxy
          </CardTitle>
          <CardDescription className="text-center">
            Navigate through your assignments in 3D space
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Assignment3D />
        </CardContent>
      </Card>

      {/* Assignment Tabs */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">
            Pending ({pendingAssignments.length})
          </TabsTrigger>
          <TabsTrigger value="submitted">
            Submitted ({submittedAssignments.length})
          </TabsTrigger>
          <TabsTrigger value="graded">
            Graded ({gradedAssignments.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          <div className="space-y-4">
            {pendingAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="submitted" className="space-y-6">
          <div className="space-y-4">
            {submittedAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="graded" className="space-y-6">
          <div className="space-y-4">
            {gradedAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const AssignmentCard = ({ assignment }: { assignment: any }) => {
  const getStatusColor = () => {
    switch (assignment.status) {
      case 'graded': return 'text-cyber-green';
      case 'submitted': return 'text-cyber-purple';
      case 'overdue': return 'text-red-500';
      default: return 'text-cyber-blue';
    }
  };

  const getStatusBadge = () => {
    switch (assignment.status) {
      case 'graded': return <Badge className="bg-cyber-green/20 text-cyber-green">Graded</Badge>;
      case 'submitted': return <Badge className="bg-cyber-purple/20 text-cyber-purple">Submitted</Badge>;
      case 'overdue': return <Badge variant="destructive">Overdue</Badge>;
      default: return <Badge className="bg-cyber-blue/20 text-cyber-blue">Pending</Badge>;
    }
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-cyber transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">{assignment.title}</h3>
              {getStatusBadge()}
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <FileText className="w-4 h-4" />
                <span>{assignment.course}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{assignment.timeLimit}</span>
              </span>
            </div>
            
            <p className="text-muted-foreground">{assignment.description}</p>
            
            {assignment.requirements && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Requirements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {assignment.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="space-y-4 lg:w-64">
            {assignment.grade !== undefined && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Grade</span>
                  <span className="font-medium">{assignment.grade}/{assignment.maxGrade}</span>
                </div>
                <Progress value={(assignment.grade / assignment.maxGrade) * 100} className="h-2" />
              </div>
            )}
            
            <div className="flex flex-col space-y-2">
              {assignment.status === 'pending' && (
                <Button variant="cyber" className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Submit Assignment
                </Button>
              )}
              
              {assignment.status === 'submitted' && (
                <Button variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View Submission
                </Button>
              )}
              
              {assignment.status === 'graded' && (
                <>
                  <Button variant="neon" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Feedback
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </>
              )}
              
              {assignment.status === 'overdue' && (
                <Button variant="destructive" className="w-full">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Contact Instructor
                </Button>
              )}
            </div>
            
            <div className="text-xs text-muted-foreground text-center">
              Attempts: {assignment.attempts}/{assignment.maxAttempts}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};