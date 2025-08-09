import { Scene } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { 
  LucideIcon, 
  Users, 
  GitBranch, 
  Target, 
  Lightbulb, 
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working together as the Galat Family to solve real problems.",
    status: "Active",
    tags: ["Team", "Unity"],
  },
  {
    icon: Target,
    title: "Real Solutions",
    description: "Building practical solutions that make a difference in people's lives.",
    status: "Impact",
    tags: ["Solutions", "Real-World"],
  },
  {
    icon: GitBranch,
    title: "Open Source",
    description: "Sharing knowledge and code so everyone can learn and contribute.",
    status: "Community",
    tags: ["Open Source", "Learning"],
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creating new ideas through collective creativity and collaboration.",
    status: "Creative",
    tags: ["Innovation", "Ideas"],
  },
];

const quickLinks = [
  {
    icon: Github,
    href: "https://github.com/thegalatfamily",
    label: "GitHub"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/thegalatfamily",
    label: "Twitter"
  },
  {
    icon: Instagram,
    href: "https://instagram.com/thegalatfamily",
    label: "Instagram"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/thegalatfamily",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:galatfamily@gmail.com",
    label: "Email"
  },
];

const DemoOne = () => {
  return (
    <div className="min-h-svh w-screen bg-transparent text-white flex flex-col items-center justify-center p-8">
        
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
        
          <div className="space-y-6 flex items-center justify-center flex-col">
            <h1 className="text-3xl md:text-6xl font-laser-flip tracking-tight mt-28 max-w-3xl">
              GALAT FAMILY
            </h1>
            <p className="text-2xl font-poppins text-neutral-500 max-w-2xl">
              Building the Future of AI and Web Solutions Together
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button className="pointer font-poppins text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
                Explore
              </Button>
              <InteractiveHoverButton className="px-8 py-3 font-poppins rounded-xl bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm font-medium text-sm">
  Contribute
</InteractiveHoverButton>
            </div>

            {/* Quick Links */}
            <div className="flex items-center justify-center gap-4 pt-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 font-poppins md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-4 rounded-xl overflow-hidden transition-all duration-300 border border-white/10 bg-black hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 will-change-transform h-40 md:h-48 flex flex-col justify-start"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
              </div>

              {/* Content - Redesigned */}
              <div className="relative flex flex-col items-center justify-center h-full text-center space-y-4">
              

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="font-brotesque-hollow  text-white text-base tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Border Gradient */}
              <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
      
      <div className='absolute inset-0'>
        <Scene />
      </div>
    </div>
  );
};

export { DemoOne };