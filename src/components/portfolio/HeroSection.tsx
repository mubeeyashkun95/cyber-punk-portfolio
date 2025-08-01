import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';
import { GeometricShapes } from '@/components/3d/GeometricShapes';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D camera={{ position: [0, 0, 8], fov: 75 }}>
          <GeometricShapes />
        </Scene3D>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className="bg-gradient-holographic bg-clip-text text-transparent">
              John Doe
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-cyber-blue text-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Full-Stack Developer & 3D Artist
          </motion.p>
          
          <motion.p 
            className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Crafting immersive digital experiences through cutting-edge web technologies 
            and stunning 3D visualizations. Welcome to the future of web development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button variant="cyber" size="lg" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button variant="neon" size="lg">
              Download CV
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button variant="ghost" size="icon" className="text-cyber-blue hover:text-cyber-purple transition-smooth">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-cyber-blue hover:text-cyber-purple transition-smooth">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-cyber-blue hover:text-cyber-purple transition-smooth">
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToProjects}
        >
          <ChevronDown className="h-8 w-8 text-cyber-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
};