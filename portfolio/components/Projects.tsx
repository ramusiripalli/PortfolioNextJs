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
// LIGHTWEIGHT ORBS
// ─────────────────────────────────────────────────────────────

const ORBS = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  size: 220 + i * 60,
  left: (i * 33) % 100,
  top: (i * 27) % 100,
  duration: 18 + i * 2,
}));

// ─────────────────────────────────────────────────────────────
// OPTIMIZED BACKGROUND
// ─────────────────────────────────────────────────────────────

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* LIGHTWEIGHT ORBS */}
      {ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full transform-gpu"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)",
            filter: "blur(55px)",
          }}
        />
      ))}

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_40%)]" />
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
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        index % 2 !== 0 ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* IMAGE SIDE */}
      <motion.div
        whileHover={{
          y: -5,
          scale: 1.01,
        }}
        transition={{
          duration: 0.3,
        }}
        className={`relative transform-gpu ${
          index % 2 !== 0 ? "lg:col-start-2" : ""
        }`}
      >
        {/* SOFT GLOW */}
        <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-cyan-400/20 to-teal-400/20 blur-2xl opacity-50" />

        {/* MAIN CARD */}
        <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_6px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_0_40px_rgba(34,211,238,0.10)] transition-all duration-300">
          
          {/* OVERLAY */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/60 dark:from-[#020617]/70 via-transparent to-transparent" />

          {/* IMAGE */}
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            quality={80}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />

          {/* LABEL */}
          <div className="absolute left-5 top-5 z-30 rounded-full border border-cyan-400/20 bg-white/80 dark:bg-[#020617]/70 px-4 py-2 backdrop-blur-md">
            
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
              Featured
            </span>
          </div>
        </div>
      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className={`${
          index % 2 !== 0
            ? "lg:col-start-1 lg:row-start-1"
            : ""
        }`}
      >
        {/* LABEL */}
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-cyan-500 dark:text-cyan-300">
          Full Stack Project
        </p>

        {/* TITLE */}
        <h3 className="mb-6 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <div className="relative mb-8 overflow-hidden rounded-[28px] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] p-7 backdrop-blur-xl shadow-[0_4px_25px_rgba(15,23,42,0.05)]">
          
          {/* LEFT BAR */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 to-teal-400" />

          <p className="relative z-10 text-base leading-relaxed text-slate-600 dark:text-white/65">
            {project.description}
          </p>
        </div>

        {/* TECH STACK */}
        <div className="mb-10 flex flex-wrap gap-3">
          {project.technologies.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="rounded-full border border-slate-200 dark:border-cyan-400/15 bg-white dark:bg-white/[0.04] px-4 py-2 backdrop-blur-md shadow-sm transition duration-300 hover:shadow-md"
            >
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">
          
          {/* LIVE */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-400 px-7 py-4 font-semibold text-[#020619] shadow-[0_0_30px_rgba(6,182,212,0.20)] transition duration-300 hover:scale-[1.02]"
          >
            <HiOutlineExternalLink className="text-lg transition duration-300 group-hover:rotate-12" />

            Live Demo

            <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
          </a>

          {/* GITHUB */}
          <a
            href={project.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-cyan-400/20 bg-white dark:bg-white/[0.04] px-7 py-4 text-cyan-700 dark:text-cyan-200 backdrop-blur-md shadow-sm transition duration-300 hover:border-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-400/[0.06]"
          >
            <FaGithub className="text-lg transition duration-300 group-hover:rotate-12" />

            GitHub
          </a>
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
      className="relative overflow-hidden px-6 py-32"
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
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mb-28 text-center"
        >
          {/* TOP TEXT */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.45em] text-cyan-500 dark:text-cyan-300">
              Premium Projects
            </span>

            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          {/* TITLE */}
          <h2 className="text-5xl font-black leading-none tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Modern

            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
              Creative Builds
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-white/55">
            Crafting immersive digital products with premium UI,
            scalable architecture, and seamless user experiences.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-32">
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