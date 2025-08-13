import { DemoOne } from "@/components/sections/hersection";
import { NavbarDemo } from "@/components/sections/site-header";
import { WhoWeAre } from "@/components/sections/whoweare";
{/*import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";*/}
import {ProjectSection} from "@/components/sections/projectsection";
import { ServicesSection } from "@/components/sections/services";
import { FooterSection } from "@/components/sections/footerSection";

{/*const stickyScrollContent = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <p>Collaborative Editing</p>
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <p>Version control</p>
      </div>
    ),
  },
];*/}

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavbarDemo />
      <main className="min-h-screen flex flex-col bg-transparent w-full">
        <div className="w-full">
          <DemoOne />
        </div>

        
          <WhoWeAre />
        

          <ProjectSection />
       
          <ServicesSection />


          {/*<StickyScroll content={stickyScrollContent} />*/}

      
        <FooterSection />
      </main>
    </div>
  );
}