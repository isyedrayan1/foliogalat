"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "AI Task Manager",
    description: "An intelligent task management system that uses AI to prioritize and organize your daily workflow automatically.",
    image: "/images/project1.jpg",
    tags: ["React", "TypeScript", "AI", "Node.js"],
    category: "Web App",
    status: "Live",
    githubUrl: "https://github.com/galatfamily/ai-task-manager",
    liveUrl: "https://ai-task-manager.galatfamily.com",
    featured: true,
  },
  {
    id: 2,
    title: "Community Hub",
    description: "Open-source platform connecting developers worldwide to collaborate on meaningful projects and share knowledge.",
    image: "/images/project2.jpg",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    category: "Platform",
    status: "Beta",
    githubUrl: "https://github.com/galatfamily/community-hub",
    liveUrl: "https://community.galatfamily.com",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Finance Tracker",
    description: "Personal finance management tool with real-time analytics and budget predictions using machine learning.",
    image: "/images/project3.jpg",
    tags: ["Vue.js", "Python", "ML", "Firebase"],
    category: "Mobile App",
    status: "Development",
    githubUrl: "https://github.com/galatfamily/finance-tracker",
    featured: false,
  },
  {
    id: 4,
    title: "Code Collaborator",
    description: "Real-time code collaboration platform with integrated video chat and project management features.",
    image: "/images/project4.jpg",
    tags: ["React", "Socket.io", "WebRTC", "MongoDB"],
    category: "Tool",
    status: "Live",
    githubUrl: "https://github.com/galatfamily/code-collaborator",
    liveUrl: "https://collaborate.galatfamily.com",
    featured: false,
  },
  {
    id: 5,
    title: "Green Energy Monitor",
    description: "IoT-based system for monitoring and optimizing energy consumption in smart homes and offices.",
    image: "/images/project5.jpg",
    tags: ["IoT", "React Native", "AWS", "Python"],
    category: "IoT",
    status: "Live",
    githubUrl: "https://github.com/galatfamily/energy-monitor",
    liveUrl: "https://energy.galatfamily.com",
    featured: true,
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Comprehensive e-learning platform with interactive courses, progress tracking, and community features.",
    image: "/images/project6.jpg",
    tags: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    category: "Education",
    status: "Beta",
    githubUrl: "https://github.com/galatfamily/lms",
    liveUrl: "https://learn.galatfamily.com",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <CardSpotlight className="h-full flex flex-col bg-black/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
        {/* Project Image */}
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-gray-800">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          )}
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <Badge 
              className={cn(
                "text-xs",
                project.status === "Live" && "bg-green-500/20 text-green-400 border-green-500/30",
                project.status === "Beta" && "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                project.status === "Development" && "bg-blue-500/20 text-blue-400 border-blue-500/30"
              )}
            >
              {project.status}
            </Badge>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <span className="text-sm text-gray-400">{project.category}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </Button>
            )}
          </div>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

export const ProjectSection = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const featuredProjects = projects.filter(p => p.featured);
  const displayProjects = viewMode === 'grid' ? projects : featuredProjects;

  return (
    <section className="min-h-screen w-full bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the innovative solutions we've built to solve real-world problems and contribute to the open-source community.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-lg p-1 backdrop-blur-sm border border-white/20">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  "px-6 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  viewMode === 'grid'
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                )}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={cn(
                  "px-6 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  viewMode === 'carousel'
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                )}
              >
                Featured
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-4xl mx-auto">
                      <ProjectCard project={project} index={index} />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-white/30 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-none">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};