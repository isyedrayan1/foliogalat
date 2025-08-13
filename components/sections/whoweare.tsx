"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid1";

import {
  Users,
  GitBranch,
  Target,
  Lightbulb,
} from "lucide-react";
import { Button } from "../ui/button";
import { TooltipDiv } from "./tootltipdiv";
import { Spotlight } from "@/components/ui/spotlight-new";

const whoWeAreItems: BentoItem[] = [
  {
    title: "Galat Family",
    meta: "United Team",
    description:
      "We are a close-knit team of passionate developers and problem-solvers working together as one family to create meaningful solutions",
    icon: <Users className="w-4 h-4 text-blue-500" />,
    status: "Growing",
    tags: ["Team", "Family", "Unity"],
    colSpan: 2,
  },
  {
    title: "Real-World Solutions",
    meta: "Impact Driven",
    description: "We identify genuine problems in our communities and build practical solutions that make a real difference in people's lives",
    icon: <Target className="w-4 h-4 text-green-500" />,
    status: "Active",
    tags: ["Solutions", "Impact", "Real-World"],
  },
  {
    title: "Open Source Community",
    meta: "Learn & Share",
    description: "Everyone contributes, everyone learns. We share our projects openly so the entire community can benefit and grow together",
    icon: <GitBranch className="w-4 h-4 text-purple-500" />,
    tags: ["Open Source", "Learning", "Sharing"],
    
  },
  {
    title: "Collaborative Innovation",
    meta: "Together We Build",
    description: "Through teamwork and collective creativity, we turn ideas into reality and create solutions that none of us could build alone",
    icon: <Lightbulb className="w-4 h-4 text-orange-500" />,
    status: "Innovative",
    tags: ["Collaboration", "Innovation", "Creativity"],
    colSpan: 2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const WhoWeAre = () => {
  return (
    <section className="relative min-h-screen w-full bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8">
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)"
        translateY={-200}
        width={400}
        height={1000}
        duration={8}
        xOffset={80}
      />
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-mozilla-headline  mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We are the <span className="text-blue-400 font-semibold">Galat Family</span> - a team of innovators dedicated to solving real-world problems through open collaboration and community-driven development.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-4"
        >
          <motion.div variants={itemVariants}>
            <BentoGrid items={whoWeAreItems} />
          </motion.div>
        </motion.div>

        {/* Tooltip Section */}
        <TooltipDiv />

        {/* Centered Button */}
        <motion.div
          className="flex justify-center mt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Button className="pointer text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
              Explore
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};