"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/ui/footer";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Instagram
} from "lucide-react";

export const FooterSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/thegalatfamily",
      label: "Instagram"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/thegalatfamily",
      label: "GitHub"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/thegalatfamily",
      label: "Twitter"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/thegalatfamily",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:thegalatfamily@gmail.com",
      label: "Email"
    },
    
  ];

  const mainLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#blog", label: "Blog" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

 

  return (
    <section className="relative w-full bg-transparent text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/10 bg-black/30 backdrop-blur-sm"
          >
            <div className="max-w-7xl mx-auto ">
              <Footer
                brandName="Galat Family"
                brandClassName="font-laser-flip"
                socialLinks={socialLinks}
                mainLinks={mainLinks}
                legalLinks={legalLinks}
                copyright={{
                  text: "© 2024 Galat Family. All rights reserved.",
                  license: "Crafted with ❤️ for the community"
                }}
                
              />
              <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-laser-flip font-black uppercase pb-4 text-white">
              GALAT FAMILY
            </h1>
          </div>
            </div>
          </motion.div>
    </section>
  );
};