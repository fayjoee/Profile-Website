import NextImage from "next/image";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AntigravityCard } from "@/components/ui/AntigravityCard";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { ArrowRight, Code2, Frame, Cpu, BarChart3, TestTubeDiagonal, GitPullRequest, ExternalLink, Github, Mail, Linkedin, Download } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black selection:bg-[#9CF527] selection:text-black">
      <AnimatedGrid className="fixed" />
      <GrainOverlay />

      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-4 overflow-hidden">

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 pt-32 md:pt-20">

          {/* PROFILE IMAGE RIGHT SIDE (Desktop) / TOP (Mobile) */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end mb-8 md:mb-0">
            <ScrollReveal direction="up" delay={0.4} className="flex justify-center md:justify-end">
              <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0 rounded-full border border-[#9CF527]/50 shadow-[0_0_30px_rgba(57,255,20,0.2)] overflow-hidden animate-[bob_4s_ease-in-out_infinite] group hover:border-[#9CF527] hover:shadow-[0_0_40px_rgba(57,255,20,0.4)] transition-all duration-500 bg-[#050505]">
                <NextImage
                  src="/profile-hero.png"
                  alt="Fayyadh Tajuzzaman"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Glitch overlay on hover */}
                <div className="absolute inset-0 bg-[#9CF527] mix-blend-overlay opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-opacity" />
              </div>
            </ScrollReveal>
          </div>

          {/* TEXT CONTENT LEFT SIDE */}
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 mb-8 border border-[#9CF527]/30 bg-[#111] rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#9CF527] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_8px_#9CF527]" />
                <span className="text-xs font-mono tracking-wider text-[#9CF527]">SYSTEM_ONLINE</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="w-full">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white uppercase mb-6">
                FAYYADH<br />
                <span className="text-transparent glow-text" style={{ WebkitTextStroke: '2px #9CF527', WebkitTextFillColor: 'transparent' }}>TAJUZZAMAN.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.8} className="h-16 md:h-12 lg:h-8 mb-6 max-w-xl">
              <span className="font-mono text-sm md:text-base text-[#9CF527] font-bold">{">"} </span>
              <TypewriterText
                text="Computer Engineering | IoT & Embedded Systems | Aspiring Network Engineer"
                delay={1.5}
                className="text-sm md:text-base"
              />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1.2} className="mb-10 max-w-lg">
              <p className="text-gray-400 font-light border-none md:border-l-2 md:border-[#9CF527] py-1 md:pl-4 text-sm md:text-base leading-relaxed">
                &quot;Future Network Engineer | IoT Explorer | Dedicated to turning complex systems into smart solutions.&quot;
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1.4}>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <GlowingButton href="#projects" variant="primary">
                  View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </GlowingButton>
                <GlowingButton href="#contact" variant="secondary">
                  Contact Me
                </GlowingButton>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-delayed"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* SECTION 00: SYSTEM_LOG (About) */}
      <section id="about" className="relative z-10 min-h-screen py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 mb-20">
              <h2 className="text-2xl md:text-4xl font-mono font-bold text-white tracking-widest">
                00. About Me
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#9CF527]/50 to-transparent" />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mb-20 flex flex-col gap-6">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I am a Computer Engineering student with a strong interest in system integration, digital systems, and intelligent technology. My technical capabilities span both software development and hardware implementation, allowing me to approach problems from a holistic engineering perspective.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                On the software side, I work with Python, C/C++, SQL, HTML, CSS, and JavaScript to build structured and functional systems. I am particularly interested in developing data-driven applications and IoT-based monitoring systems that connect sensors, process information, and generate meaningful insights.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                In hardware and embedded systems, I have experience working with Arduino and ESP32, focusing on digital logic, sensor integration, computer architecture fundamentals, and IoT monitoring systems. I am comfortable designing and analyzing combinational and sequential logic circuits, including practical simulation using tools such as Multisim and Proteus before hardware deployment.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.8}>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Beyond core engineering skills, I also utilize Figma, Component UI design principles, and User-Centered Design (UCD) approaches to ensure systems are not only functional but also usable. My supporting competencies include Linux environment usage, Git version control, networking fundamentals, and systematic troubleshooting.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1.0}>
              <p className="text-lg text-gray-300 leading-relaxed font-light font-bold text-[#9CF527]/90">
                I continuously strive to integrate hardware and software into efficient, scalable, and well-structured solutions, while strengthening both analytical thinking and practical implementation skills.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 01: TECH STACK */}
      <section id="skills" className="relative z-10 py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 mb-20 direction-reverse">
              <div className="h-[1px] flex-1 bg-gradient-to-l from-[#9CF527]/50 to-transparent hidden md:block" />
              <h2 className="text-2xl md:text-4xl font-mono font-bold text-white tracking-widest uppercase">
                01. Technical_Capabilities
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#9CF527]/50 to-transparent md:hidden" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <AntigravityCard className="h-full !bg-[#050505]/80 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors">
                <Code2 className="w-8 h-8 text-[#9CF527] mb-4 glow-text" />
                <h3 className="font-mono text-lg text-white mb-4">DEV</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C / C++", "SQL", "HTML", "CSS", "JavaScript"].map((tag) => (
                    <span key={tag} className="font-mono text-xs text-gray-400 border border-[#9CF527]/20 bg-[#111] px-2 py-1 rounded-sm hover:border-[#9CF527]/60 hover:text-[#9CF527] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </AntigravityCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <AntigravityCard delay={1} className="h-full !bg-[#050505]/80 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors">
                <Cpu className="w-8 h-8 text-[#9CF527] mb-4 glow-text" />
                <h3 className="font-mono text-lg text-white mb-4">HARDWARE</h3>
                <div className="flex flex-wrap gap-2">
                  {["Arduino", "ESP32", "Digital Logic", "Sensor Integration", "Comp Arch", "IoT Monitoring"].map((tag) => (
                    <span key={tag} className="font-mono text-xs text-gray-400 border border-[#9CF527]/20 bg-[#111] px-2 py-1 rounded-sm hover:border-[#9CF527]/60 hover:text-[#9CF527] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </AntigravityCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="h-full">
              <AntigravityCard delay={2} className="h-full !bg-[#050505]/80 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors">
                <BarChart3 className="w-8 h-8 text-[#9CF527] mb-4 glow-text" />
                <h3 className="font-mono text-lg text-white mb-4">DESIGN</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Component UI", "UCD", "Multisim", "Proteus", "Canva", "Adobe Illustrator", "Adobe Photoshop", "CapCut"].map((tag) => (
                    <span key={tag} className="font-mono text-xs text-gray-400 border border-[#9CF527]/20 bg-[#111] px-2 py-1 rounded-sm hover:border-[#9CF527]/60 hover:text-[#9CF527] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </AntigravityCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5} className="h-full">
              <AntigravityCard delay={3} className="h-full !bg-[#050505]/80 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors">
                <Frame className="w-8 h-8 text-[#9CF527] mb-4 glow-text" />
                <h3 className="font-mono text-lg text-white mb-4">OTHERS</h3>
                <div className="flex flex-wrap gap-2">
                  {["Linux", "Git", "Networking", "Troubleshooting"].map((tag) => (
                    <span key={tag} className="font-mono text-xs text-gray-400 border border-[#9CF527]/20 bg-[#111] px-2 py-1 rounded-sm hover:border-[#9CF527]/60 hover:text-[#9CF527] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </AntigravityCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 02: CERTIFICATIONS */}
      <section id="certifications" className="relative z-10 py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 mb-20">
              <h2 className="text-2xl md:text-4xl font-mono font-bold text-white tracking-widest uppercase">
                02. CERTIFICATIONS
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#9CF527]/50 to-transparent" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Arduino */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="group flex flex-col bg-[#050505] border border-[#9CF527]/20 hover:border-[#9CF527]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] rounded-sm overflow-hidden">
                <div className="relative w-full h-44 bg-[#0A0A0A] border-b border-[#9CF527]/10 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30 group-hover:opacity-10 transition-opacity">
                    <ExternalLink className="w-8 h-8 text-[#9CF527]" />
                    <span className="font-mono text-[#9CF527] text-xs">cert_preview.png</span>
                  </div>
                  <NextImage src="/certs/arduino-bootcamp.jpg" alt="Arduino UNO Bootcamp" fill className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white leading-snug">Arduino UNO Bootcamp For Beginners - Complete Course</h3>
                    <a href="#" className="shrink-0 text-[#9CF527] hover:scale-110 transition-transform mt-0.5"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#9CF527]/70 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">UDEMY</span>
                    <span className="font-mono text-xs text-gray-600">· 2025</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Python */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="group flex flex-col bg-[#050505] border border-[#9CF527]/20 hover:border-[#9CF527]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] rounded-sm overflow-hidden">
                <div className="relative w-full h-44 bg-[#0A0A0A] border-b border-[#9CF527]/10 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30 group-hover:opacity-10 transition-opacity">
                    <ExternalLink className="w-8 h-8 text-[#9CF527]" />
                    <span className="font-mono text-[#9CF527] text-xs">cert_preview.png</span>
                  </div>
                  <NextImage src="/certs/python-zero-to-hero.jpg" alt="Python from Zero-to-Hero" fill className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white leading-snug">Python from Zero-to-Hero (Beginner Level)</h3>
                    <a href="#" className="shrink-0 text-[#9CF527] hover:scale-110 transition-transform mt-0.5"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#9CF527]/70 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">UDEMY</span>
                    <span className="font-mono text-xs text-gray-600">· 2026</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Computer Engineering */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="group flex flex-col bg-[#050505] border border-[#9CF527]/20 hover:border-[#9CF527]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] rounded-sm overflow-hidden">
                <div className="relative w-full h-44 bg-[#0A0A0A] border-b border-[#9CF527]/10 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30 group-hover:opacity-10 transition-opacity">
                    <ExternalLink className="w-8 h-8 text-[#9CF527]" />
                    <span className="font-mono text-[#9CF527] text-xs">cert_preview.png</span>
                  </div>
                  <NextImage src="/certs/computer-engineering-it.jpg" alt="Computer Engineering IT Fundamentals" fill className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white leading-snug">Computer Engineering IT Fundamentals organization tutorials</h3>
                    <a href="#" className="shrink-0 text-[#9CF527] hover:scale-110 transition-transform mt-0.5"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#9CF527]/70 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">UDEMY</span>
                    <span className="font-mono text-xs text-gray-600">· 2026</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 03: EXPERIENCE & EDUCATION */}
      <section id="experience" className="relative z-10 py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 mb-20 direction-reverse">
              <div className="h-[1px] flex-1 bg-gradient-to-l from-[#9CF527]/50 to-transparent hidden md:block" />
              <h2 className="text-2xl md:text-4xl font-mono font-bold text-white tracking-widest uppercase">
                03. EXP & EDU
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#9CF527]/50 to-transparent md:hidden" />
            </div>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto pt-8 md:pt-12">
            {/* Continuous Vertical Line */}
            <div className="absolute left-[27px] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#9CF527] to-transparent opacity-50 z-0" />

            <div className="flex flex-col gap-10 relative z-10">

              {/* Item 1: HMI */}
              <ScrollReveal direction="up" delay={0.2} className="relative pl-16">
                <div className="absolute left-[23px] top-[28px] w-2 h-2 bg-[#9CF527] rounded-full shadow-[0_0_8px_#9CF527]" />
                <AntigravityCard className="!p-6 !bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors group">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <GitPullRequest className="w-4 h-4 text-[#9CF527]" />
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Experience</span>
                    </div>
                    <span className="font-mono text-xs text-[#9CF527]/60 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">Feb 2026 — Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-white leading-none mb-4">Member</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-[#9CF527]/30 flex items-center justify-center group-hover:border-[#9CF527] transition-all overflow-hidden shrink-0 relative">
                      <NextImage src="/logos/hmi.png" alt="HMI" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-mono text-[#9CF527] glow-text leading-tight truncate">Himpunan Mahasiswa Islam</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">Team member involved in organizational activities and community development.</p>
                </AntigravityCard>
              </ScrollReveal>

              {/* Item 2: Metadigital */}
              <ScrollReveal direction="up" delay={0.3} className="relative pl-16">
                <div className="absolute left-[23px] top-[28px] w-2 h-2 bg-[#9CF527] rounded-full shadow-[0_0_8px_#9CF527]" />
                <AntigravityCard className="!p-6 !bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors group">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <GitPullRequest className="w-4 h-4 text-[#9CF527]" />
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Experience</span>
                    </div>
                    <span className="font-mono text-xs text-[#9CF527]/60 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">Dec 2025 — Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-white leading-none mb-4">Member</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-[#9CF527]/30 flex items-center justify-center group-hover:border-[#9CF527] transition-all overflow-hidden shrink-0 relative">
                      <NextImage src="/logos/metadigital.jpg" alt="Metadigital" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-mono text-[#9CF527] glow-text leading-tight truncate">Metadigital office</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">Team member contributing to digital solutions and technology operations.</p>
                </AntigravityCard>
              </ScrollReveal>

              {/* Item 3: Lab TA */}
              <ScrollReveal direction="up" delay={0.4} className="relative pl-16">
                <div className="absolute left-[23px] top-[28px] w-2 h-2 bg-[#9CF527] rounded-full shadow-[0_0_8px_#9CF527]" />
                <AntigravityCard className="!p-6 !bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors group">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TestTubeDiagonal className="w-4 h-4 text-[#9CF527]" />
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Experience</span>
                    </div>
                    <span className="font-mono text-xs text-[#9CF527]/60 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">Aug 2025 — Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-white leading-none mb-4">Laboratory Teaching Assistant Digital Systems</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-[#9CF527]/30 flex items-center justify-center group-hover:border-[#9CF527] transition-all overflow-hidden shrink-0 relative">
                      <NextImage src="/logos/usk.png" alt="USK" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-mono text-[#9CF527] glow-text leading-tight truncate">Universitas Syiah Kuala</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">Facilitated hands-on sessions for Digital Systems, specializing in C/C++ and Programming instruction.</p>
                </AntigravityCard>
              </ScrollReveal>

              {/* Item 4: HMTK Internship */}
              <ScrollReveal direction="up" delay={0.5} className="relative pl-16">
                <div className="absolute left-[23px] top-[28px] w-2 h-2 bg-[#9CF527] rounded-full shadow-[0_0_8px_#9CF527]" />
                <AntigravityCard className="!p-6 !bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors group">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <GitPullRequest className="w-4 h-4 text-[#9CF527]" />
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Internship</span>
                    </div>
                    <span className="font-mono text-xs text-[#9CF527]/60 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">Sep 2025</span>
                  </div>
                  <h4 className="text-xl font-bold text-white leading-none mb-4">Himpunan Mahasiswa Teknik Komputer USK</h4>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-[#9CF527]/30 flex items-center justify-center group-hover:border-[#9CF527] transition-all overflow-hidden shrink-0 relative">
                      <NextImage src="/logos/himatekkom.png" alt="HMTK" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-mono text-[#9CF527] glow-text leading-tight truncate">Internal Organizational Internship</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">BINER 9.0 | Publication & Documentation</h5>
                      <ul className="text-gray-400 text-xs leading-relaxed space-y-1 ml-4 list-disc">
                        <li>Designed Instagram content increasing event visibility.</li>
                        <li>Managed sound systems for seamless audio delivery.</li>
                        <li>Captured professional cinematography highlights.</li>
                        <li>Produced comprehensive post-event media archives.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">CMD 2025 | Venue & Logistics</h5>
                      <ul className="text-gray-400 text-xs leading-relaxed space-y-1 ml-4 list-disc">
                        <li>Managed end-to-end venue selection and operations.</li>
                        <li>Designed site maps for optimized crowd flow and safety.</li>
                        <li>Coordinated vendors for AV, lighting, and staging equipment.</li>
                        <li>Oversaw inventory tracking and asset accountability.</li>
                      </ul>
                    </div>
                  </div>
                </AntigravityCard>
              </ScrollReveal>

              {/* Item 5: Education (University) */}
              <ScrollReveal direction="up" delay={0.6} className="relative pl-16">
                <div className="absolute left-[23px] top-[28px] w-2 h-2 bg-[#9CF527] rounded-full shadow-[0_0_8px_#9CF527]" />
                <AntigravityCard className="!p-6 !bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors group">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TestTubeDiagonal className="w-4 h-4 text-[#9CF527]" />
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Education</span>
                    </div>
                    <span className="font-mono text-xs text-[#9CF527]/60 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">Sep 2023 — Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-white leading-none mb-4">Computer Engineering</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-[#9CF527]/30 flex items-center justify-center group-hover:border-[#9CF527] transition-all overflow-hidden shrink-0 relative">
                      <NextImage src="/logos/usk.png" alt="USK" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-mono text-[#9CF527] glow-text leading-tight truncate">Universitas Syiah Kuala</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">Focusing on system architecture, data-driven software engineering, and hardware-software integration.</p>
                </AntigravityCard>
              </ScrollReveal>

              {/* Item 6: High School */}
              <ScrollReveal direction="up" delay={0.7} className="relative pl-16">
                <div className="absolute left-[23px] top-[28px] w-2 h-2 bg-[#9CF527] rounded-full shadow-[0_0_8px_#9CF527]" />
                <AntigravityCard className="!p-6 !bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors group">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TestTubeDiagonal className="w-4 h-4 text-[#9CF527]" />
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Education</span>
                    </div>
                    <span className="font-mono text-xs text-[#9CF527]/60 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">2021 — 2024</span>
                  </div>
                  <h4 className="text-xl font-bold text-white leading-none mb-4">SMAN Modal Bangsa / MIPA</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-[#9CF527]/30 flex items-center justify-center group-hover:border-[#9CF527] transition-all overflow-hidden shrink-0 relative">
                      <NextImage src="/logos/mosa.png" alt="SMAN" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-mono text-[#9CF527] glow-text leading-tight truncate">Aceh Besar, Aceh</p>
                  </div>
                </AntigravityCard>
              </ScrollReveal>

              {/* Item 7: Junior High School */}
              <ScrollReveal direction="up" delay={0.8} className="relative pl-16">
                <div className="absolute left-[23px] top-[28px] w-2 h-2 bg-[#9CF527] rounded-full shadow-[0_0_8px_#9CF527]" />
                <AntigravityCard className="!p-6 !bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors group">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TestTubeDiagonal className="w-4 h-4 text-[#9CF527]" />
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Education</span>
                    </div>
                    <span className="font-mono text-xs text-[#9CF527]/60 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">2018 — 2021</span>
                  </div>
                  <h4 className="text-xl font-bold text-white leading-none mb-4">MTSs Tgk.Chiek Oemar Diyan</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-[#9CF527]/30 flex items-center justify-center group-hover:border-[#9CF527] transition-all overflow-hidden shrink-0 relative">
                      <NextImage src="/logos/oemar-diyan.png" alt="MTSs" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-mono text-[#9CF527] glow-text leading-tight truncate">Aceh Besar, Aceh</p>
                  </div>
                </AntigravityCard>
              </ScrollReveal>

              {/* Item 8: Elementary School */}
              <ScrollReveal direction="up" delay={0.9} className="relative pl-16">
                <div className="absolute left-[23px] top-[28px] w-2 h-2 bg-[#9CF527] rounded-full shadow-[0_0_8px_#9CF527]" />
                <AntigravityCard className="!p-6 !bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] transition-colors group">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TestTubeDiagonal className="w-4 h-4 text-[#9CF527]" />
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Education</span>
                    </div>
                    <span className="font-mono text-xs text-[#9CF527]/60 border border-[#9CF527]/20 px-2 py-0.5 rounded-sm">2012 — 2018</span>
                  </div>
                  <h4 className="text-xl font-bold text-white leading-none mb-4">SDN Carturtunggal 7</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-[#9CF527]/30 flex items-center justify-center group-hover:border-[#9CF527] transition-all overflow-hidden shrink-0 relative">
                      <NextImage src="/logos/education-general.png" alt="SDN" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-mono text-[#9CF527] glow-text leading-tight truncate">Sleman, Yogyakarta</p>
                  </div>
                </AntigravityCard>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: PROJECTS */}
      <section id="projects" className="relative z-10 py-32 px-4 border-t border-[#9CF527]/30 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 mb-20">
              <h2 className="text-2xl md:text-4xl font-mono font-bold text-white tracking-widest uppercase">
                04. Selected_Projects
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#9CF527]/50 to-transparent" />
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-16">
            {/* Project 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <AntigravityCard delay={0.5} className="!bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] !p-8 md:!p-12 transition-colors">
                <div className="absolute top-0 flex gap-4 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <ExternalLink className="w-6 h-6 text-[#9CF527] cursor-pointer hover:scale-110 transition-transform shadow-[0_0_8px_#9CF527] rounded-full" />
                  <Github className="w-6 h-6 text-[#9CF527] cursor-pointer hover:scale-110 transition-transform shadow-[0_0_8px_#9CF527] rounded-full" />
                </div>

                <h3 className="text-4xl md:text-6xl font-black text-transparent mb-4 uppercase tracking-tighter" style={{ WebkitTextStroke: '2px #ffffff' }}>
                  Cultrivia
                </h3>
                <div className="font-mono text-sm text-[#9CF527] mb-8 border-l-2 border-[#9CF527] pl-4 glow-text">Focus: HCI & Gamification</div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative">
                    <div className="hidden md:block absolute right-[-16px] top-0 h-full w-[1px] bg-gradient-to-b from-[#9CF527]/50 to-transparent" />
                    <h4 className="font-mono text-white mb-2 text-sm">/ PROBLEM</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Lack of engaging educational tools for interactive culture preservation and learning.</p>
                  </div>
                  <div className="relative">
                    <div className="hidden md:block absolute right-[-16px] top-0 h-full w-[1px] bg-gradient-to-b from-[#9CF527]/50 to-transparent" />
                    <h4 className="font-mono text-white mb-2 text-sm">/ APPROACH</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Applied User-Centered Design (UCD) principles to create an interactive culture trivia puzzle system.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-white mb-2 text-sm">/ OUTCOME</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">A highly usable, gamified interface increasing retention and engagement metrics.</p>
                  </div>
                </div>
              </AntigravityCard>
            </ScrollReveal>

            {/* Project 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <AntigravityCard delay={1.5} className="!bg-[#050505]/90 !border-[#9CF527]/30 hover:!border-[#9CF527] !p-8 md:!p-12 transition-colors">
                <div className="absolute top-0 right-0 p-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <ExternalLink className="w-6 h-6 text-[#9CF527] cursor-pointer hover:scale-110 transition-transform shadow-[0_0_8px_#9CF527] rounded-full" />
                  <Github className="w-6 h-6 text-[#9CF527] cursor-pointer hover:scale-110 transition-transform shadow-[0_0_8px_#9CF527] rounded-full" />
                </div>

                <h3 className="text-4xl md:text-6xl font-black text-transparent mb-4 uppercase tracking-tighter" style={{ WebkitTextStroke: '2px #ffffff' }}>
                  Climasim
                </h3>
                <div className="font-mono text-sm text-[#9CF527] mb-8 border-l-2 border-[#9CF527] pl-4 glow-text">Focus: Climate Simulation</div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative">
                    <div className="hidden md:block absolute right-[-16px] top-0 h-full w-[1px] bg-gradient-to-b from-[#9CF527]/50 to-transparent" />
                    <h4 className="font-mono text-white mb-2 text-sm">/ PROBLEM</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Difficulties in visualizing complex, multi-variable environmental risk indicators.</p>
                  </div>
                  <div className="relative">
                    <div className="hidden md:block absolute right-[-16px] top-0 h-full w-[1px] bg-gradient-to-b from-[#9CF527]/50 to-transparent" />
                    <h4 className="font-mono text-white mb-2 text-sm">/ APPROACH</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Developed algorithms modeling environmental variables. Engineered a data-driven simulation dashboard.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-white mb-2 text-sm">/ OUTCOME</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Accurate trend visualization providing clear cause-effect mapping for risk assessment.</p>
                  </div>
                </div>
              </AntigravityCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 05: CONTACT PROTOCOLS */}
      <section id="contact" className="relative z-10 pt-48 pb-16 px-4 border-t border-[#9CF527]/30 bg-[#050505] border-b-[8px] border-b-[#9CF527]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <ScrollReveal direction="up" delay={0.2} className="w-full">
            <div className="inline-flex items-center space-x-2 px-3 py-1 mb-8 border border-[#9CF527]/30 bg-[#9CF527]/5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-[#9CF527] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_8px_#9CF527]" />
              <span className="text-xs font-mono tracking-wider text-[#9CF527] glow-text">STATUS: OPEN FOR COLLABORATION</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-16 tracking-tighter uppercase font-mono">
              <span className="text-[#9CF527] mr-4 glow-text">{">"}</span>INITIALIZE_<br className="md:hidden" />CONTACT
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <a href="mailto:fayyadhtz@gmail.com" className="flex flex-col items-center justify-center gap-3 p-6 border border-[#9CF527]/30 bg-black/40 hover:bg-[#9CF527] hover:text-black hover:border-[#9CF527] transition-all group rounded-sm hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                <Mail className="w-8 h-8 text-[#9CF527] group-hover:text-black mb-2 transition-colors" />
                <span className="font-mono text-sm font-medium">email</span>
              </a>
              <a href="https://github.com/fayjoee" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 border border-[#9CF527]/30 bg-black/40 hover:bg-[#9CF527] hover:text-black hover:border-[#9CF527] transition-all group rounded-sm hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                <Github className="w-8 h-8 text-[#9CF527] group-hover:text-black mb-2 transition-colors" />
                <span className="font-mono text-sm font-medium">github</span>
              </a>
              <a href="https://www.linkedin.com/in/fayyadhtz/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 border border-[#9CF527]/30 bg-black/40 hover:bg-[#9CF527] hover:text-black hover:border-[#9CF527] transition-all group rounded-sm hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                <Linkedin className="w-8 h-8 text-[#9CF527] group-hover:text-black mb-2 transition-colors" />
                <span className="font-mono text-sm font-medium">linkedin</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center gap-3 p-6 border border-[#9CF527]/30 bg-black/40 hover:bg-[#9CF527] hover:text-black hover:border-[#9CF527] transition-all group rounded-sm hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                <Download className="w-8 h-8 text-[#9CF527] group-hover:text-black mb-2 transition-colors" />
                <span className="font-mono text-sm font-medium">cv</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-48 max-w-6xl mx-auto flex justify-between items-center text-xs font-mono text-[#9CF527]/50">
          <p>© {new Date().getFullYear()} FAYYADH TZ. ALL RIGHTS RESERVED.</p>
          <p>SYS_VER 2.0.0</p>
        </div>
      </section>

    </main>
  );
}
