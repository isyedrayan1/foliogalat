"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "Community Learning Hub",
        description:
            "Open-source platform where developers worldwide collaborate, share knowledge, and build meaningful projects together.",
        tags: ["React", "Node.js", "PostgreSQL", "Docker"],
        type: "opensource",
        url: "https://github.com/galatfamily/community-hub",
    },
    {
        id: 2,
        title: "Smart Automation Suite",
        description:
            "AI-powered automation platform that streamlines business workflows and increases productivity by 300%.",
        tags: ["Python", "AI/ML", "FastAPI", "Redis"],
        type: "galatfamily",
        url: "https://automation.galatfamily.com",
    },
    {
        id: 3,
        title: "Developer Tools Kit",
        description:
            "Collection of essential development tools and utilities that every programmer needs for efficient coding.",
        tags: ["TypeScript", "Electron", "Vue.js", "Rust"],
        type: "opensource",
        url: "https://github.com/galatfamily/dev-toolkit",
    },
    {
        id: 4,
        title: "Enterprise Analytics",
        description:
            "Comprehensive business intelligence platform providing real-time insights and predictive analytics.",
        tags: ["Next.js", "D3.js", "MongoDB", "WebSockets"],
        type: "galatfamily",
        url: "https://analytics.galatfamily.com",
    },
];

const ProjectCard = ({ 
    project, 
    index, 
    isMobile 
}: { 
    project: typeof projects[0]; 
    index: number;
    isMobile: boolean;  // Add this type
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative h-[400px] sm:h-[450px] lg:h-[500px] w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <CardSpotlight className="h-full w-full p-0 bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 rounded-xl overflow-hidden">
                {/* Simple Card Background */}
                <div className="relative w-full h-full overflow-hidden">
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                        <Badge
                            className={cn(
                                "text-xs font-medium backdrop-blur-md border-2",
                                project.type === "opensource"
                                    ? "bg-green-500/20 text-green-300 border-green-500/50"
                                    : "bg-blue-500/20 text-blue-300 border-blue-500/50"
                            )}
                        >
                            {project.type === "opensource"
                                ? "Open Source"
                                : "Galat Family"}
                        </Badge>
                    </div>

                    {/* Main Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                        {/* Title */}
                        <motion.h3
                            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black uppercase text-white mb-3 sm:mb-4 leading-tight"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            {project.title}
                        </motion.h3>

                        {/* Description - appears on hover for desktop, always visible on mobile */}
                        <motion.div
                            className="space-y-3 sm:space-y-4 overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: (isMobile || isHovered) ? "auto" : 0,
                                opacity: (isMobile || isHovered) ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                {project.tags.slice(0, 3).map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 sm:px-3 py-1 text-xs rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="px-2 sm:px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20">
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Action Button */}
                            <Button
                                className={cn(
                                    "w-full mt-3 sm:mt-4 transition-all duration-300 border-2 backdrop-blur-md font-semibold text-xs sm:text-sm",
                                    project.type === "opensource"
                                        ? "bg-green-500/20 border-green-500/50 text-green-300 hover:bg-green-500/30 hover:border-green-400"
                                        : "bg-blue-500/20 border-blue-500/50 text-blue-300 hover:bg-blue-500/30 hover:border-blue-400"
                                )}
                                onClick={() => window.open(project.url, "_blank")}
                            >
                                {project.type === "opensource" ? (
                                    <>
                                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                        Contribute
                                    </>
                                ) : (
                                    <>
                                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                        Learn More
                                    </>
                                )}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </CardSpotlight>
        </motion.div>
    );
};

export const ProjectSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="w-full bg-transparent text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mozilla-headline mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Our Projects
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                        Discover our innovative solutions:{" "}
                        <span className="text-green-400 font-semibold">Open Source</span>{" "}
                        projects for the community and{" "}
                        <span className="text-blue-400 font-semibold">Galat Family</span>{" "}
                        exclusive developments.
                    </p>

                    {/* Project Type Indicators */}
                    <div className="flex justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/60"></div>
                            <span className="text-xs sm:text-sm text-gray-300">Open Source</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500/60"></div>
                            <span className="text-xs sm:text-sm text-gray-300">Galat Family</span>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid - Fixed mobile layout */}
                <div className={cn(
                    "grid gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 ",
                    // Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns
                    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                )}>
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index} 
                            isMobile={isMobile}  // Add this prop
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                   
                    <motion.div>
                                <Button className="pointer text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
                                   <ExternalLink className="w-4 h-4 mr-2" />
                                  Explore
                                </Button>
                              </motion.div>
                </motion.div>
            </div>
        </section>
    );
};