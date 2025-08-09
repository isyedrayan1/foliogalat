"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { MessageCircle, Eye, Code, Zap, Brain } from "lucide-react";

function ServicesSection() {
  const services = [
    {
      name: "Web Development",
      icon: <Code className="w-6 h-6" />,
      description: "Full-stack solutions",
    },
    {
      name: "Automations & Workflows",
      icon: <Zap className="w-6 h-6" />,
      description: "Process optimization",
    },
    {
      name: "AI Solutions",
      icon: <Brain className="w-6 h-6" />,
      description: "Intelligent systems",
    },
  ];

  return (
    <section className="min-h-[60vh] w-full bg-transparent text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout - Desktop: side by side, Mobile: stacked */}
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-mozilla-headline mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Empowering businesses with cutting-edge technology solutions that
                drive growth,
                <br className="hidden sm:block" /> efficiency, and innovation in
                the digital landscape.
              </p>
            </div>

            {/* Brief Description */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Transforming Ideas into Reality
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                At Galat Family, we specialize in creating comprehensive digital
                solutions
                <br className="hidden sm:block" /> that bridge the gap between
                innovation and practical business needs. From modern web
                applications to intelligent automation systems, we deliver
                excellence in every project.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Our expertise spans across full-stack development, process
                automation,
                <br className="hidden sm:block" /> and artificial intelligence
                implementation, ensuring your business stays ahead in the
                competitive digital landscape.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="pointer text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
                                  
                                  See our Work
                                </Button>
                                <Button className="pointer text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
                                                                    Contact Us
                                                                </Button>
            </div>

            {/* Additional info */}
            <p className="text-sm text-gray-400">
              Quick response • Tailored solutions
            </p>
          </motion.div>

          {/* Right Column - CardSpotlight with Services */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardSpotlight className="h-auto w-full max-w-md  mx-auto p-6 bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 rounded-xl">
              <div className="space-y-4 relative z-10">
                {/* Card Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-mozilla-headline text-white mb-3">
                    What We Offer
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
                </div>

                {/* Services List */}
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      {/* Service Item */}
                      <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-white/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-green-500/30 transition-all duration-300">
                          <div className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                            {service.icon}
                          </div>
                        </div>

                        {/* Service Details */}
                        <div className="flex-1">
                          <h4 className="text-base md:text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-0.5">
                            {service.name}
                          </h4>
                          <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { ServicesSection };