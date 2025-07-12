"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowDownToLine } from 'lucide-react';

import { motion, useScroll, useSpring, useMotionValue } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Code2,
  Award,
  GraduationCap,
  Briefcase,
  Menu,
  X,
  Eye,
  Database,
} from "lucide-react"

export default function ModernPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
  }>>([])
  const { scrollYProgress } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)

  // Advanced mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 700 })
  const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 700 })

  useEffect(() => {
    setIsLoaded(true)
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
    })))

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const skills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 90,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 85,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 95,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 88,
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: 82,
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      level: 80,
      color: "from-emerald-400 to-green-500",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      level: 85,
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      level: 92,
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: 78,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: 88,
      color: "from-orange-400 to-red-500",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 95,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 90,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Microsoft SQL Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      level: 80,
      color: "from-red-500 to-orange-600",
    },
    {
      name: "Data Warehousing Concepts",
      icon: "lucide:database",
      level: 85,
      color: "from-purple-500 to-indigo-600",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "PetCare Veterinary System",
      subtitle: "Full-Stack MERN Application",
      description:
        "A comprehensive veterinary appointment booking platform with real-time scheduling, patient management, and integrated payment processing. Features include doctor availability tracking, medical history management, and automated reminder notifications.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "images/petcare.jpeg",
      color: "from-emerald-500 to-teal-600",
      stats: { users: "500+", appointments: "2.5K+", rating: "4.9" },
      features: ["Real-time Booking", "Payment Integration", "PetCare Shop", "Medical Records"],
      github: "https://github.com/SadiniWanniarachchi/PetSystem.git",
    },
    {
      id: 2,
      title: "Tea Factory Management System",
      subtitle: "Full-Stack Factory Automation Tool",
      description:
        "End-to-end system for managing tea factory operations including inventory, employee, and supplier tracking. Built with MERN stack and equipped with authentication, charts, and role-based access for administrators.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "images/tea.png",
      color: "from-green-600 to-lime-500",
      stats: { users: "100+", modules: "6+", uptime: "99.9%" },
      features: [
        "Inventory Dashboard",
        "Role-based Access",
        "Modular Management Panels",
        "Chart Integration",
      ],
      github: "https://github.com/SadiniWanniarachchi/Tea-Factory.git",
    },
    {
      id: 3,
      title: "ImaaMedia Marketing Hub",
      subtitle: "React Performance Showcase",
      description:
        "High-performance marketing agency website built with React and Vite. Features stunning animations, optimized performance, and seamless user experience showcasing agency services and client success stories.",
      tech: ["React", "Vite", "Framer Motion", "Tailwind CSS", "Github Pages"],
      image: "images/ImaMedia.jpg",
      color: "from-blue-500 to-cyan-600",
      stats: { performance: "98", clients: "50+", conversion: "300%" },
      features: ["Advanced Animations", "SEO Optimized", "Mobile First"],
      github: "https://github.com/ImaaMedia/ImaaMedia.git",
    },
    {
      id: 4,
      title: "GlobalEdu Consultancy Website",
      subtitle: "IGL Sri Lanka",
      description:
        "A responsive website to connect Sri Lankan students with global universities. Includes interactive forms, dynamic content, and detail pages for universities with programs and requirements.",
      tech: ["React.js", "Tailwind CSS", "React Router"],
      image: "images/IGL.jpg",
      color: "from-indigo-500 to-sky-600",
      stats: { students: "500+", universities: "200+", countries: "15+" },
      features: [
        "Multi-step Registration Form",
        "Dynamic University Pages",
        "Country Info Grids",
        "Responsive Design",
      ],
      github: "https://github.com/Webminds-designs/IGL_FRONTEND.git",
    },
    {
      id: 5,
      title: "EventEase Management Platform",
      subtitle: "Vue.js Project",
      description:
        "Modern event management application built with Vue.js 3, TypeScript, and Pinia. Offers seamless experience for creating, managing, and participating in events with advanced analytics and reporting.",
      tech: ["Vue.js 3", "TypeScript", "Pinia", "Vite", "Chart.js"],
      image: "images/eventease.jpeg",
      color: "from-purple-500 to-pink-600",
      stats: { events: "150+", attendees: "10K+", satisfaction: "96%" },
      features: ["Event Booking", "Responsive Design"],
      github: "https://github.com/SadiniWanniarachchi/EventManagement.git",
    },

  ];


  const achievements = [
    { title: "Dean's List 2024", description: "Outstanding Academic Performance", year: "2024" },
    { title: "Data Science Specialization", description: "SLIIT - CGPA 3.41", year: "2022-Present" },
    { title: "Full Stack Intern", description: "WebMind Designs", year: "2024" },
    { title: "Data Warehouse Concepts", year: "2025" },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Advanced Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 border border-white/20 rounded-full pointer-events-none z-40 hidden lg:block"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Animated Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 100}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.speed * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ width: particle.size, height: particle.size }}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center justify-between p-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-xl font-bold">
              SW
            </motion.div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="p-4 space-y-4">
              {["Hero", "About", "Work", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Desktop Floating Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {["Hero", "About", "Work", "Skills", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative"
              whileHover={{ scale: 1.5 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 1 }}
            >
              <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-white/60 transition-all duration-300" />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm text-white/0 group-hover:text-white/80 transition-all duration-300 whitespace-nowrap">
                {item}
              </span>
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section with 3D Elements */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
                <span className="text-sm text-purple-300">Available for exciting projects</span>
              </motion.div>

              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-none">
                  <motion.span
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="block"
                    style={{ transformOrigin: "center bottom" }}
                  >
                    Sadini
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
                    style={{
                      transformOrigin: "center bottom",
                      wordBreak: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    Wanniarachchi
                  </motion.span>
                </h1>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
                  animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-40"
                  animate={{ x: [-5, 5, -5], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Full Stack Developer & Data Science Student
                </p>
                <p className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0">
                  Crafting digital experiences with cutting-edge technologies and creative problem-solving
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a
                href="/Sadini_Wanniarachchi.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium overflow-hidden inline-block"
              >
                <span className="relative z-10 flex items-center space-x-2 text-white">
                  <span>Download Resume</span>
                  <ArrowDownToLine className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>


              <div className="flex items-center space-x-4">
                {[
                  { icon: Github, href: "https://github.com/SadiniWanniarachchi", color: "hover:text-purple-400" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sadini-tharindi-wanniarachchi-3b0159258/",
                    color: "hover:text-blue-400",
                  },
                  { icon: Mail, href: "mailto:sadiiw17@gmail.com", color: "hover:text-pink-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Floating Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="relative h-96 lg:h-[500px] perspective-1000 hidden md:block" /* Hidden on small screens */
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="absolute bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 cursor-pointer"
                style={{
                  top: `${index * 20}%`,
                  left: `${index * 15}%`,
                  width: "200px",
                  height: "120px",
                }}
                animate={{
                  y: [0, -30, 0],
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  rotateX: 10,
                  z: 50,
                }}
              >
                <h4 className="text-sm font-bold text-white mb-1">{achievement.title}</h4>
                <p className="text-xs text-gray-400">{achievement.description}</p>
                <span className="text-xs text-purple-300 absolute bottom-2 right-2">{achievement.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern About Section with Interactive Timeline */}
      <section id="about" className="py-32 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative solutions at the intersection of technology and creativity
            </p>
          </motion.div>

          {/* Interactive Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { number: "3.41", label: "CGPA", suffix: "/4.0" },
              { number: "5", label: "Certifications", suffix: "+" },
              { number: "10", label: "Major Projects", suffix: "+" },
              { number: "2024", label: "Dean's List", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <motion.div
                  className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                  <span className="text-lg">{stat.suffix}</span>
                </motion.div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Journey Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

            {[
              {
                year: "2022",
                title: "Started BSc IT Journey",
                description: "Began Data Science specialization at SLIIT",
                icon: GraduationCap,
                side: "left",
              },
              {
                year: "2024",
                title: "Dean's List Achievement",
                description: "Outstanding academic performance recognition",
                icon: Award,
                side: "right",
              },
              {
                year: "2024",
                title: "Full Stack Internship",
                description: "Joined WebMind Designs as Full Stack Developer",
                icon: Briefcase,
                side: "left",
              },
              {
                year: "Present",
                title: "Building the Future",
                description: "Creating innovative solutions with modern tech",
                icon: Sparkles,
                side: "right",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center mb-16 ${item.side === "left" ? "lg:justify-start" : "lg:justify-end"}`}
              >
                <div
                  className={`w-full lg:w-1/2 ${item.side === "left" ? "lg:pr-8 text-center lg:text-right" : "lg:pl-8 text-center lg:text-left"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                      <item.icon className="w-6 h-6 text-purple-400" />
                      <span className="text-purple-300 font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black"
                  whileHover={{ scale: 1.5 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Projects Section */}
      <section id="work" className="py-32 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              Selected{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovative projects that push the boundaries of web development
            </p>
          </motion.div>

          {/* Staggered Project Cards */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Project Image/Mockup */}
                <motion.div
                  className="lg:w-1/2 relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10">
                    {/* Browser mockup */}
                    <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-4">
                        {project.title.toLowerCase().replace(/\s+/g, "")}.com
                      </div>
                    </div>

                    {/* Project preview */}
                    <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity"
                      />

                    </div>
                  </div>

                  {/* Floating stats */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hidden md:block" /* Hidden on small screens */
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4 text-sm">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-purple-300">{value}</div>
                          <div className="text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-purple-400 font-medium text-sm">{project.subtitle}</span>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-sm border border-purple-500/30 text-purple-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-white">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 pt-4"
                  >

                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:border-white/40 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Skills Section with Real Icons */}
      <section id="skills" className="py-32 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              Skills &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Technologies I master to bring ideas to life</p>
          </motion.div>

          {/* Orbital Skills Layout */}
          <div className="relative h-96 lg:h-[500px] mb-20 hidden md:block" /* Hidden on small screens */>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code2 className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            {skills.slice(0, 8).map((skill, index) => {
              const angle = (index * 360) / 8
              const radius = 180
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              // Helper function to render the appropriate icon
              const renderIcon = () => {
                if (typeof skill.icon === 'string') {
                  if (skill.icon.startsWith("lucide:")) {
                    return <Database className="w-10 h-10 text-white" />
                  } else {
                    return (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-10 h-10 object-contain ${skill.name === "Express.js"
                          ? "bg-white rounded-lg p-1"
                          : ""
                          }`}
                      />
                    )
                  }
                }
                return null
              }

              return (
                <motion.div
                  key={skill.name}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ x, y }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, z: 50 }}
                  animate={{
                    rotate: -angle,
                  }}
                >
                  <div className="relative group cursor-pointer">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center"
                      whileHover={{
                        boxShadow: `0 20px 40px ${skill.color.includes("purple")
                          ? "rgba(168, 85, 247, 0.4)"
                          : skill.color.includes("blue")
                            ? "rgba(59, 130, 246, 0.4)"
                            : skill.color.includes("green")
                              ? "rgba(34, 197, 94, 0.4)"
                              : "rgba(168, 85, 247, 0.4)"
                          }`,
                      }}
                    >
                      {renderIcon()}
                    </motion.div>

                    {/* Skill name tooltip */}
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {skill.name}
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Skills Grid with Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              // Helper function to render the appropriate icon
              const renderIcon = () => {
                if (typeof skill.icon === 'string') {
                  if (skill.icon.startsWith("lucide:")) {
                    return <Database className="w-8 h-8 text-white" />
                  } else {
                    return (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-8 h-8 object-contain ${skill.name === "Express.js"
                          ? "bg-white rounded-lg p-1"
                          : ""
                          }`}
                      />
                    )
                  }
                }
                return null
              }

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group cursor-pointer"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {renderIcon()}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors text-sm">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-400">{skill.level}% Proficiency</p>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <motion.div
                      className="absolute right-0 -top-6 text-xs text-purple-300 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Let's Create Something
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to turn your vision into reality? Let's collaborate and build something amazing that makes a
              difference.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.4)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>Start Our Journey</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © 2024 Sadini Wanniarachchi. Crafted with passion and innovation.
          </p>
          <div className="flex items-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/SadiniWanniarachchi", color: "hover:text-purple-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sadini-tharindi-wanniarachchi-3b0159258/", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:sadiiw17@gmail.com", color: "hover:text-pink-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                className={`w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
