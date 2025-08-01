import { useState } from 'react';
import { Course3D } from '@/components/lms/Course3D';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Search,
  Filter,
  Play,
  CheckCircle,
  Award
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "Sarah Chen",
    duration: "12 hours",
    students: "2.5k",
    rating: 4.8,
    progress: 85,
    status: "enrolled",
    level: "Beginner",
    category: "Frontend",
    thumbnail: "/placeholder.svg",
    description: "Learn the core concepts of React including components, state, props, and hooks.",
    modules: 8,
    assignments: 5,
    certificates: true
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Mike Rodriguez",
    duration: "18 hours",
    students: "1.8k",
    rating: 4.9,
    progress: 92,
    status: "enrolled",
    level: "Advanced",
    category: "Programming",
    thumbnail: "/placeholder.svg",
    description: "Master advanced JavaScript concepts like closures, async/await, and design patterns.",
    modules: 12,
    assignments: 8,
    certificates: true
  },
  {
    id: 3,
    title: "Database Design",
    instructor: "Dr. Lisa Wang",
    duration: "15 hours",
    students: "3.2k",
    rating: 4.7,
    progress: 67,
    status: "enrolled",
    level: "Intermediate",
    category: "Backend",
    thumbnail: "/placeholder.svg",
    description: "Design efficient databases and learn SQL optimization techniques.",
    modules: 10,
    assignments: 6,
    certificates: true
  },
  {
    id: 4,
    title: "UI/UX Design Systems",
    instructor: "Emma Thompson",
    duration: "20 hours",
    students: "4.1k",
    rating: 4.6,
    progress: 0,
    status: "available",
    level: "Intermediate",
    category: "Design",
    thumbnail: "/placeholder.svg",
    description: "Create consistent and scalable design systems for modern applications.",
    modules: 14,
    assignments: 10,
    certificates: true
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    instructor: "Dr. John Smith",
    duration: "25 hours",
    students: "1.5k",
    rating: 4.9,
    progress: 0,
    status: "available",
    level: "Beginner",
    category: "AI/ML",
    thumbnail: "/placeholder.svg",
    description: "Introduction to machine learning algorithms and practical applications.",
    modules: 16,
    assignments: 12,
    certificates: true
  },
  {
    id: 6,
    title: "DevOps Fundamentals",
    instructor: "Alex Kumar",
    duration: "22 hours",
    students: "2.7k",
    rating: 4.8,
    progress: 100,
    status: "completed",
    level: "Intermediate",
    category: "DevOps",
    thumbnail: "/placeholder.svg",
    description: "Learn CI/CD, containerization, and cloud deployment strategies.",
    modules: 15,
    assignments: 9,
    certificates: true
  }
];

export const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Frontend', 'Backend', 'Design', 'AI/ML', 'DevOps', 'Programming'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const enrolledCourses = courses.filter(c => c.status === 'enrolled');
  const availableCourses = courses.filter(c => c.status === 'available');
  const completedCourses = courses.filter(c => c.status === 'completed');

  return (
    <div className="min-h-screen bg-background p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
          Course Library
        </h1>
        <p className="text-xl text-muted-foreground">
          Expand your skills with our comprehensive course collection
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="bg-card/80 backdrop-blur-sm border-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses, instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "cyber" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3D Course Visualization */}
      {selectedCourse && (
        <Card className="border-cyber-blue/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-cyber-blue">
              {selectedCourse.title} - 3D Learning Path
            </CardTitle>
            <CardDescription className="text-center">
              Navigate through course modules in immersive 3D space
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Course3D courseData={selectedCourse} />
          </CardContent>
        </Card>
      )}

      {/* Course Tabs */}
      <Tabs defaultValue="enrolled" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="enrolled">
            Enrolled ({enrolledCourses.length})
          </TabsTrigger>
          <TabsTrigger value="available">
            Available ({availableCourses.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedCourses.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="enrolled" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={() => setSelectedCourse(course)}
                isSelected={selectedCourse.id === course.id}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={() => setSelectedCourse(course)}
                isSelected={selectedCourse.id === course.id}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={() => setSelectedCourse(course)}
                isSelected={selectedCourse.id === course.id}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const CourseCard = ({ 
  course, 
  onSelect, 
  isSelected 
}: { 
  course: any; 
  onSelect: () => void;
  isSelected: boolean;
}) => {
  return (
    <Card 
      className={`bg-card/80 backdrop-blur-sm border-border hover:shadow-cyber transition-all duration-300 cursor-pointer ${
        isSelected ? 'ring-2 ring-cyber-blue shadow-cyber' : ''
      }`}
      onClick={onSelect}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant={course.level === 'Beginner' ? 'default' : 
                         course.level === 'Intermediate' ? 'secondary' : 'destructive'}>
            {course.level}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">{course.rating}</span>
          </div>
        </div>
        
        <CardTitle className="text-lg">{course.title}</CardTitle>
        <CardDescription>{course.instructor}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
        </div>
        
        {course.status === 'enrolled' && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div 
                className="bg-gradient-cyber h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex space-x-4 text-xs text-muted-foreground">
            <span>{course.modules} modules</span>
            <span>{course.assignments} assignments</span>
            {course.certificates && <Award className="w-4 h-4 text-cyber-green" />}
          </div>
          
          {course.status === 'enrolled' && (
            <Button size="sm" variant="cyber">
              <Play className="w-4 h-4 mr-1" />
              Continue
            </Button>
          )}
          
          {course.status === 'available' && (
            <Button size="sm" variant="outline">
              Enroll Now
            </Button>
          )}
          
          {course.status === 'completed' && (
            <Button size="sm" variant="neon" disabled>
              <CheckCircle className="w-4 h-4 mr-1" />
              Completed
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};