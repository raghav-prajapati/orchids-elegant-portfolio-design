"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Code2, 
  Paintbrush, 
  Cpu, 
  Globe, 
  Zap, 
  Smartphone,
  Mail,
  Instagram,
  ArrowRight,
  Download
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Progress Lines Animation
    const skillLines = gsap.utils.toArray(".skill-line-inner") as HTMLElement[];
    skillLines.forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
          },
        }
      );
    });

    // GSAP Experience Line Animation
    gsap.fromTo(
      ".experience-line",
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".experience-container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-white selection:bg-brown selection:text-white">
      <Preloader />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-8 pt-20 overflow-hidden">
        {/* Anime Background Patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#8B5E3C 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Japanese Decorative Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="absolute -left-20 top-0 text-[15vw] font-bold text-black select-none pointer-events-none hidden lg:block"
            style={{ writingMode: 'vertical-rl' }}
          >
            開発者
          </motion.div>

          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-brown" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-brown">フロントエンド</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black leading-[1.1] mb-8">
                Designing <span className="italic text-brown font-light">clean</span> & modern web interfaces.
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 font-sans max-w-lg mb-12 leading-relaxed">
                Frontend Developer focused on usability, animation & performance. Crafting digital experiences that balance aesthetics with functionality.
              </p>
              <div className="flex flex-wrap gap-6">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-black text-white text-sm uppercase tracking-widest font-sans flex items-center gap-3 group relative overflow-hidden border-2 border-black"
                >
                  <span className="relative z-10">View Work</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-brown translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-brown text-brown text-sm uppercase tracking-widest font-sans flex items-center gap-3 hover:bg-brown hover:text-white transition-all duration-300"
                >
                  Download CV <Download className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 3, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
            >
              {/* Manga Style Border Layers */}
              <div className="absolute inset-0 border-4 border-black transform translate-x-4 translate-y-4 -z-10" />
              <div className="absolute inset-0 border-2 border-brown transform -translate-x-2 -translate-y-2 -z-10 opacity-50" />
              
              <div className="relative w-full h-full overflow-hidden border-4 border-black bg-beige group">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_20251224_231314_440-1766909752864.webp?width=8000&height=8000&resize=contain"
                  alt="Raghav Prajapati"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                {/* Halftone Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" 
                     style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '4px 4px' }} />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brown to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-beige/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-sm uppercase tracking-[0.4em] text-brown font-sans mb-6">Who I Am</h2>
              <p className="text-3xl md:text-4xl font-serif text-black leading-snug mb-8">
                I am a passionate <span className="italic">Frontend Developer</span> dedicated to building clean, accessible, and high-performance web applications.
              </p>
              <p className="text-zinc-600 font-sans leading-relaxed mb-6">
                With a strong foundation in design principles and a keen eye for detail, I bridge the gap between imagination and reality. My approach is centered on usability and performance, ensuring that every pixel serves a purpose.
              </p>
              <p className="text-zinc-600 font-sans leading-relaxed">
                Whether it's a minimal landing page or a complex web dashboard, I strive for excellence in every line of code I write.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative p-12 bg-white border border-zinc-100 shadow-2xl shadow-brown/5"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif mb-2">Philosophy</h3>
                  <p className="text-zinc-500 text-sm italic">"Simplicity is the ultimate sophistication."</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Process</h3>
                  <p className="text-zinc-500 text-sm">Strategy → Design → Development → Optimization</p>
                </div>
                <div className="pt-8 border-t border-zinc-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brown flex items-center justify-center">
                    <Zap className="w-5 h-5 text-brown" />
                  </div>
                  <div>
                    <p className="text-black font-serif">Performance First</p>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest">Optimized & Fast</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-8 bg-white" ref={skillsRef}>
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.4em] text-brown font-sans mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-black">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "React / Next.js", icon: <Code2 />, level: "95%" },
              { name: "TypeScript", icon: <Globe />, level: "90%" },
              { name: "Tailwind CSS", icon: <Paintbrush />, level: "98%" },
              { name: "Three.js / Canvas", icon: <Cpu />, level: "75%" },
              { name: "Animation (GSAP/Framer)", icon: <Zap />, level: "92%" },
              { name: "UI/UX Design", icon: <Smartphone />, level: "85%" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-zinc-400 group-hover:text-brown transition-colors">
                      {skill.icon}
                    </div>
                    <span className="font-serif text-lg">{skill.name}</span>
                  </div>
                  <span className="text-zinc-400 text-sm font-sans">{skill.level}</span>
                </div>
                <div className="h-[2px] w-full bg-zinc-100 overflow-hidden">
                  <div 
                    className="skill-line-inner h-full bg-brown origin-left" 
                    style={{ width: skill.level }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-beige/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-brown font-sans mb-4">Selected Works</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-black">Portfolio Showcase</h3>
            </div>
            <p className="text-zinc-500 font-sans max-w-sm">
              A collection of projects that demonstrate my ability to handle complex challenges and deliver elegant solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Luxura E-commerce",
                desc: "High-end fashion marketplace with seamless transitions.",
                tech: "NEXT.JS • STRIPE • FRAMER MOTION",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
              },
              {
                title: "Architectural Portfolio",
                desc: "Minimalist showcase for a premium architecture firm.",
                tech: "REACT • GSAP • THREE.JS",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
              },
              {
                title: "Crypto Dashboard",
                desc: "Real-time analytics platform for digital assets.",
                tech: "TS • TAILWIND • RECHARTS",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200",
              },
              {
                title: "Nexus SAAS",
                desc: "Enterprise level management software interface.",
                tech: "NEXT.JS • PRISMA • SHADCN",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-8 border border-zinc-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 border-[0px] border-brown group-hover:border-[1px] transition-all duration-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brown font-sans font-bold">{project.tech}</span>
                  <h4 className="text-2xl font-serif text-black">{project.title}</h4>
                  <p className="text-zinc-500 font-sans text-sm max-w-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.4em] text-brown font-sans mb-4">Journey</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-black">Experience</h3>
          </div>

          <div className="relative max-w-4xl mx-auto experience-container">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-100 -translate-x-1/2">
              <div className="experience-line absolute top-0 left-0 w-full bg-brown origin-top" />
            </div>

            <div className="space-y-24">
              {[
                {
                  role: "Senior Frontend Engineer",
                  company: "Digital Studio",
                  period: "2022 - Present",
                  desc: "Leading the development of complex web applications using Next.js and React. Mentoring junior developers and implementing best practices for performance.",
                },
                {
                  role: "Frontend Developer",
                  company: "Creative Agency",
                  period: "2020 - 2022",
                  desc: "Developed pixel-perfect landing pages and interactive marketing sites. Collaborated closely with designers to bring high-fidelity mockups to life.",
                },
                {
                  role: "Junior Web Developer",
                  company: "Startup Inc",
                  period: "2018 - 2020",
                  desc: "Focused on building responsive UI components and integrating with RESTful APIs. Gained experience in version control and agile methodologies.",
                },
              ].map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-brown -translate-x-1/2 z-10" />
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <span className="text-brown font-sans text-xs uppercase tracking-widest font-bold">{item.period}</span>
                      <h4 className="text-2xl font-serif mt-2 mb-2">{item.role}</h4>
                      <p className="text-zinc-400 font-serif italic mb-4">{item.company}</p>
                      <p className="text-zinc-500 font-sans text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 bg-beige/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "UI Development", desc: "Building high-quality, responsive user interfaces with modern frameworks." },
              { title: "Landing Pages", desc: "Creating high-converting landing pages that tell your brand story." },
              { title: "Performance Opt.", desc: "Optimizing web applications for maximum speed and SEO performance." },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-zinc-100 hover:shadow-2xl hover:shadow-brown/10 transition-all duration-500"
              >
                <div className="w-12 h-12 border border-brown/20 flex items-center justify-center mb-8">
                  <div className="w-2 h-2 bg-brown" />
                </div>
                <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
                <p className="text-zinc-500 text-sm font-sans leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-white overflow-hidden relative">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm uppercase tracking-[0.5em] text-brown font-sans mb-8 font-bold">Get In Touch</h2>
            <h3 className="text-5xl md:text-8xl font-serif text-black mb-16 leading-none">
              Let's work <span className="italic">together</span>.
            </h3>
            
            <div className="flex flex-col items-center gap-12">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "mailto:sp213826@gmail.com"}
                className="group relative px-12 py-6 bg-black text-white text-xl md:text-2xl font-serif border-4 border-black transition-all"
              >
                <span className="relative z-10">Start a Conversation</span>
                <div className="absolute inset-0 bg-brown translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              </motion.button>

              <div className="flex gap-8">
                {[
                  { name: "Instagram", icon: <Instagram />, href: "https://www.instagram.com/4qx.5" },
                  { name: "Twitter", icon: <Zap />, href: "#" }, // Placeholder for anime feel
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "#8B5E3C" }}
                    className="flex items-center gap-3 text-zinc-400 font-sans uppercase tracking-[0.2em] text-[10px] font-bold"
                  >
                    <span className="p-3 border-2 border-black rounded-none bg-white text-black group-hover:bg-brown group-hover:text-white transition-all">{social.icon}</span>
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-black opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
          CONTACT CONTACT CONTACT
        </div>
        <div className="absolute bottom-10 right-10 text-8xl font-bold text-brown opacity-10 select-none pointer-events-none" style={{ writingMode: 'vertical-rl' }}>
          連絡
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-brown/10 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-400 text-xs font-sans uppercase tracking-widest">
            © {new Date().getFullYear()} Raghav Prajapati. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-zinc-300 text-[10px] uppercase tracking-[0.3em]">Privacy Policy</span>
            <span className="text-zinc-300 text-[10px] uppercase tracking-[0.3em]">Terms of Service</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
