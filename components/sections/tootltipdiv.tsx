"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Ali",
    designation: "Full Stack Developer",
    image: "/images/img1.jpg",
  },
  {
    id: 2,
    name: "Sarah Khan",
    designation: "UI/UX Designer",
    image: "/images/img2.jpg",
  },
  {
    id: 3,
    name: "Hassan Ahmed",
    designation: "Frontend Developer",
    image: "/images/img3.jpg",
  },
  {
    id: 4,
    name: "Fatima Shah",
    designation: "Backend Developer",
    image: "/images/img4.jpg",
  },
  {
    id: 5,
    name: "Omar Malik",
    designation: "DevOps Engineer",
    image: "/images/img5.jpg",
  },
  {
    id: 6,
    name: "Aisha Raza",
    designation: "Product Manager",
    image: "/images/img6.jpg",
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

export const TooltipDiv = () => {
  return (
    <section className="w-full bg-transparent text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-mozilla-headline mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Meet the Galat Family
          </motion.h2>
        </motion.div>

        {/* Animated Tooltip Team Section */}
        <motion.div
          className="flex flex-row items-center justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-row items-center justify-center"
            variants={itemVariants}
          >
            <AnimatedTooltip items={teamMembers} />
          </motion.div>
        </motion.div>

        {/* Optional: Add some spacing and additional content */}
        <motion.div
          className="text-center mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.p
            className="text-sm text-gray-400 max-w-lg mx-auto"
            variants={itemVariants}
          >
            Hover over our team members to learn more about their roles and expertise in building amazing solutions together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};