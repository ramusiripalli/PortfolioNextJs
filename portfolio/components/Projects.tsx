"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";

import {
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

import {
  HiOutlineExternalLink,
} from "react-icons/hi";

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  gitHubLink: string;
};

// ─────────────────────────────────────────────────────────────
// FLOATING ORBS
// ─────────────────────────────────────────────────────────────

const ORBS = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  size: 260 + i * 60,
  left: (i * 17) % 100,
  top: (i * 13) % 100,
  duration: 14 + i * 2,
}));

// ─────────────────────────────────────────────────────────────
// AURORA BACKGROUND
// ─────────────────────────────────────────────────────────────

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* ORBS */}
      {ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      ))}

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.10),transparent_40%)]" />

      {/* NOISE */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* VIGNETTE */}
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.9)_100%)]" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className={`grid items-center gap-20 lg:grid-cols-2 ${
        index % 2 !== 0 ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* IMAGE SIDE */}
      <motion.div
        whileHover={{
          rotateY: 8,
          rotateX: 4,
          scale: 1.03,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        className={`relative ${
          index % 2 !== 0 ? "lg:col-start-2" : ""
        }`}
      >
        {/* GLOW */}
        <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-400/30 to-teal-400/30 blur-3xl opacity-60" />

        {/* ROTATING BORDER */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-[2px] rounded-[38px] bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-teal-400/30"
        />

        {/* MAIN CARD */}
        <div className="group relative overflow-hidden rounded-[36px] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] backdrop-blur-2xl shadow-[0_10px_50px_rgba(15,23,42,0.08)] dark:shadow-[0_0_80px_rgba(34,211,238,0.12)] transition-all duration-500">
          
          {/* SHINE */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 z-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/70 dark:from-[#020617]/80 via-transparent to-transparent" />

          {/* IMAGE */}
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* LABEL */}
          <div className="absolute left-6 top-6 z-30 rounded-full border border-cyan-400/20 bg-white/80 dark:bg-[#020617]/70 px-5 py-2 backdrop-blur-xl">
            
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-300">
              Featured Project
            </span>
          </div>
        </div>
      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className={`${
          index % 2 !== 0
            ? "lg:col-start-1 lg:row-start-1"
            : ""
        }`}
      >
        {/* TOP LABEL */}
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-cyan-500 dark:text-cyan-300">
          Full Stack Experience
        </p>

        {/* TITLE */}
        <h3 className="mb-8 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-6xl">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <div className="relative mb-10 overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_8px_40px_rgba(15,23,42,0.06)] dark:shadow-none transition-all duration-500">
          
          {/* SIDE LINE */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 to-teal-400" />

          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-teal-400/[0.04]" />

          <p className="relative z-10 text-lg leading-relaxed text-slate-600 dark:text-white/65">
            {project.description}
          </p>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mb-12 flex flex-wrap gap-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.div
              key={techIndex}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              className="rounded-full border border-slate-200 dark:border-cyan-400/15 bg-white dark:bg-white/[0.04] px-5 py-3 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <span className="text-md font-medium text-cyan-600 dark:text-cyan-400">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-5">
          
          {/* LIVE DEMO */}
          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-400 px-8 py-4 font-bold text-[#020619] shadow-[0_0_50px_rgba(6,182,212,0.35)]"
          >
            <HiOutlineExternalLink className="text-lg transition duration-300 group-hover:rotate-12" />

            Live Demo

            <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
          </motion.a>

          {/* GITHUB */}
          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href={project.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-cyan-400/20 bg-white dark:bg-white/[0.04] px-8 py-4 text-cyan-700 dark:text-cyan-200 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-400/[0.06] hover:shadow-md"
          >
            <FaGithub className="text-lg transition duration-300 group-hover:rotate-12" />

            GitHub
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-40"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        <AuroraBackground />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl">
        
        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="mb-36 text-center"
        >
          {/* TOP TEXT */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.5em] text-cyan-500 dark:text-cyan-300">
              Premium Projects
            </span>

            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-5xl font-black leading-none tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Modern

            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
              Creative Builds
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-white/55">
            Crafting immersive digital products with premium UI,
            scalable architecture, and seamless user experiences.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="space-y-44">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}