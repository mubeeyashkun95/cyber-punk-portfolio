import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'MetaVerse Explorer',
      description: 'An immersive 3D virtual world built with React Three Fiber and WebXR, featuring real-time multiplayer interactions and procedural world generation.',
      image: '/placeholder.svg',
      tech: ['React', 'Three.js', 'WebXR', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive 3D visualization of neural networks with real-time training data and customizable architectures for educational purposes.',
      image: '/placeholder.svg',
      tech: ['TypeScript', 'Three.js', 'D3.js', 'Python'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
    },
    {
      title: 'Quantum Portfolio',
      description: 'A particle physics inspired portfolio with quantum-like animations and interactions, showcasing advanced WebGL techniques.',
      image: '/placeholder.svg',
      tech: ['Next.js', 'GLSL', 'Framer Motion', 'WebGL'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
    },
    {
      title: 'AI Music Studio',
      description: 'A collaborative music creation platform with 3D audio visualization and AI-powered composition assistance.',
      image: '/placeholder.svg',
      tech: ['Vue.js', 'Web Audio API', 'TensorFlow.js', 'Three.js'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work in 3D web development, interactive experiences, 
            and cutting-edge digital solutions.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden bg-card/50 backdrop-blur-sm border-cyber-blue/20 shadow-cyber hover:shadow-neon transition-all duration-500 ${
                project.featured ? 'md:grid md:grid-cols-2' : ''
              }`}>
                <div className={`relative ${project.featured ? 'h-80 md:h-auto' : 'h-64'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-cyber-blue text-glow">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-bold bg-gradient-cyber text-primary-foreground rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-muted text-cyber-purple font-medium rounded-full border border-cyber-purple/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="neon" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};