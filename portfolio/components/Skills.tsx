"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState, useEffect } from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

import { TbBinaryTree2 } from "react-icons/tb";

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
};

// ─────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────

const skills: Skill[] = [
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#68A063",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
    category: "Database",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
    category: "Language",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#FFFFFF",
    category: "Backend",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#E34F26",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38BDF8",
    category: "Frontend",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
    category: "DevOps",
  },
  {
    name: "VS Code",
    icon: <FaCode />,
    color: "#007ACC",
    category: "Tools",
  },
  {
    name: "DSA",
    icon: <TbBinaryTree2 />,
    color: "#A78BFA",
    category: "CS",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "#FF6C37",
    category: "Tools",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#1572B6",
    category: "Frontend",
  },
];

// ─────────────────────────────────────────────────────────────
// MOVING TECH TEXT
// ─────────────────────────────────────────────────────────────

const movingSkills = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "JavaScript",
  "REST APIs",
  "GitHub",
  "Data Structures & Algorithms",
  "Responsive UI",
  "Framer Motion",
  "TypeScript",
  "Frontend",
  "Backend",
  "MERN Stack",
];

// ─────────────────────────────────────────────────────────────
// STARS DATA
// ─────────────────────────────────────────────────────────────

const STARS = Array.from({ length: 45 }, (_, i) => ({
  id: i,

  size: (i % 2) + 1,

  left: (i * 23) % 100,

  top: (i * 17) % 100,

  duration: 8 + (i % 5),

  delay: i * 0.3,
}));

// ─────────────────────────────────────────────────────────────
// PARTICLES DATA
// ─────────────────────────────────────────────────────────────

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: (i * 17) % 100,
  y: (i * 11) % 100,
  size: (i % 3) + 1,
  duration: 6 + (i % 5),
  delay: i * 0.3,
}));

// ─────────────────────────────────────────────────────────────
// STARS BACKGROUND
// ─────────────────────────────────────────────────────────────

function StarsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {STARS.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size + 1.5,
            height: star.size + 1.5,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: 0.35,

            boxShadow: `
              0 0 4px rgba(255,255,255,0.5),
              0 0 8px rgba(6,182,212,0.15)
            `,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────
// PARTICLES
// ─────────────────────────────────────────────────────────────

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MOUSE SPOTLIGHT
// ─────────────────────────────────────────────────────────────

function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current?.parentElement;

      if (!el) return;

      const rect = el.getBoundingClientRect();

      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none opacity-40 transition-all duration-700"
      style={{
        background: `radial-gradient(
          ellipse 60% 50% at ${pos.x}% ${pos.y}%,
          rgba(6,182,212,0.15) 0%,
          transparent 70%
        )`,
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// TILT CARD
// ─────────────────────────────────────────────────────────────

function TiltCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [12, -12]),
    {
      stiffness: 300,
      damping: 30,
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-12, 12]),
    {
      stiffness: 300,
      damping: 30,
    }
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer"
    >
      {/* Glow */}
      <motion.div
        animate={
          hovered
            ? { opacity: 1, scale: 1.1 }
            : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl blur-xl"
        style={{
          background: `radial-gradient(circle, ${skill.color}55 0%, transparent 70%)`,
        }}
      />

      {/* Card */}
      <div
        className="relative overflow-hidden rounded-2xl border bg-[#080C14] p-6 transition-all duration-300"
        style={{
          borderColor: hovered
            ? `${skill.color}60`
            : "rgba(255,255,255,0.08)",
          boxShadow: hovered
            ? `0 0 40px ${skill.color}30`
            : "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Top accent */}
        <div
          className="absolute right-0 top-0 h-12 w-12 rounded-bl-2xl opacity-30"
          style={{
            background: `linear-gradient(225deg, ${skill.color}, transparent)`,
          }}
        />

        {/* Category */}
        <div className="mb-4 flex items-center gap-2">
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: skill.color }}
          />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            {skill.category}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          animate={
            hovered
              ? { scale: 1.2, rotate: 5 }
              : { scale: 1, rotate: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="mb-4 text-4xl"
          style={{
            color: skill.color,
          }}
        >
          {skill.icon}
        </motion.div>

        {/* Name */}
        <p className="text-sm font-semibold tracking-wide text-white/70 group-hover:text-white">
          {skill.name}
        </p>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
          animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden px-6 py-32"
      style={{
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0  bg-[#04080F]">
        <MouseSpotlight />

        <StarsBackground />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.06),transparent_55%)]" />
        <ParticleField />

        {/* Blur blobs */}
        <div className="absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.08] blur-[120px]" />

        <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-teal-400/[0.08] blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(6,182,212,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-l from-cyan-400 to-transparent" />

            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
              My Arsenal
            </span>

            <div className="h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>

          <h2 className="text-5xl font-black leading-none tracking-tight text-white md:text-6xl">
            <span className="block">Technologies</span>

            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
              &amp; Tools
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/40">
            Crafting fast, scalable, and beautiful digital experiences
            with a full-stack mindset.
          </p>
        </motion.div>

        {/* MARQUEE */}
        <div className="relative mb-20 overflow-hidden py-3">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-8"
          >
            {[...movingSkills, ...movingSkills].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                <span className="text-lg font-bold uppercase tracking-widest text-white/25">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <TiltCard
              key={index}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}