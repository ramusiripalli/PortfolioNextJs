"use client";

import { motion } from "framer-motion";

import {
  GraduationCap,
  BriefcaseBusiness,
  ChevronRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// EXPERIENCE DATA
// ─────────────────────────────────────────────────────────────

const experiences = [
  {
    company: "Alepo Technology Solutions",
    role: "Junior Software Engineer",
    period: "Apr 2022 – Mar 2023",
    type: "Full-time",
    points: [
      "Developed scalable telecom web applications using React.js, Node.js, MongoDB, and Tailwind CSS.",
      "Optimized RESTful APIs and database operations, improving performance by 30%.",
      "Built reusable React components with JWT authentication, lazy loading, and code splitting.",
      "Integrated real-time billing and usage tracking systems using secure backend APIs.",
      "Collaborated in Agile/Scrum teams using Git, GitHub, Jira, and Confluence.",
    ],
  },

  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst",
    period: "Feb 2020 – Sept 2021",
    type: "Full-time",
    points: [
      "Developed custom SharePoint Framework (SPFx) web parts using React.js and TypeScript.",
      "Implemented CRUD operations with SharePoint REST APIs and React Hooks.",
      "Led Microsoft Streams, Office 365, and Microsoft Teams migration projects.",
      "Built automated SharePoint workflows and React.js components.",
      "Managed a team of 10 analysts in Agile environment.",
    ],
  },

  {
    company: "Edii Technology Solutions",
    role: "Full Stack MERN Intern",
    period: "Aug 2019 – Jan 2020",
    type: "Internship",
    points: [
      "Developed and optimized full-stack features for the EDII platform.",
      "Improved school-parent communication systems by 30%.",
      "Automated API testing workflows using Swagger and Postman.",
      "Deployed applications on AWS EC2.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// FLOATING PARTICLES
// ─────────────────────────────────────────────────────────────

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  size: 220 + i * 40,
  left: (i * 17) % 100,
  top: (i * 13) % 100,
  duration: 12 + i * 2,
}));

// ─────────────────────────────────────────────────────────────
// PREMIUM BACKGROUND
// ─────────────────────────────────────────────────────────────

function PremiumBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Blur Orbs */}
      {PARTICLES.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      ))}

      {/* Floating Particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute rounded-full bg-pink-400 dark:bg-cyan-300"
          style={{
            width: 6 + (i % 4),
            height: 6 + (i % 4),
            left: `${(i * 13) % 100}%`,
            top: `${(i * 17) % 100}%`,
            boxShadow: "0 0 12px rgba(34,211,238,0.5)",
          }}
        />
      ))}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Top Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.10),transparent_40%)]" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.92)_100%)]" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// EXPERIENCE CARD
// ─────────────────────────────────────────────────────────────

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

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
      className={`relative flex ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* TIMELINE */}
      <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400/10 via-cyan-400 to-cyan-400/10 lg:block" />

      {/* TIMELINE DOT */}
      <div className="absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-50 dark:border-[#020617] bg-cyan-400 shadow-[0_0_25px_#22d3ee] lg:block" />

      {/* CARD WRAPPER */}
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        className={`relative w-full lg:w-[46%] ${
          isLeft ? "lg:mr-auto" : "lg:ml-auto"
        }`}
      >
        {/* MOVING BORDER ARROW */}
        <motion.div
          animate={{
            top: ["0%", "0%", "100%", "100%", "0%"],
            left: ["0%", "100%", "100%", "0%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute z-30 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-80" />

            <ChevronRight className="relative h-8 w-8 text-cyan-400 dark:text-cyan-300 drop-shadow-[0_0_12px_#22d3ee]" />
          </div>
        </motion.div>

        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-[32px] border border-slate-900 dark:border-white/10 bg-white/90 dark:bg-[#07111f]/80 p-8 backdrop-blur-2xl shadow-[0_8px_40px_rgba(15,23,42,0.08)] dark:shadow-[0_0_60px_rgba(34,211,238,0.08)] transition-all duration-500">
          
          {/* MOVING LIGHT */}
          <motion.div
            animate={{
              x: ["-100%", "180%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 z-10 w-[40%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent blur-2xl"
          />

          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-teal-400/[0.04]" />

          {/* TOP SHINE */}
          <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-20">
            
            {/* HEADER */}
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              
              <div>
                {/* TYPE BADGE */}
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-100 dark:bg-cyan-400/10 px-4 py-2 backdrop-blur-xl">
                  
                  <BriefcaseBusiness className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-cyan-300">
                    {exp.type}
                  </span>
                </div>

                {/* ROLE */}
                <h3 className="text-3xl font-black leading-tight text-slate-900 dark:text-white">
                  {exp.role}
                </h3>

                {/* COMPANY */}
                <p className="mt-3 text-lg font-medium text-cyan-600 dark:text-cyan-300">
                  {exp.company}
                </p>
              </div>

              {/* PERIOD */}
              <span className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-5 py-3 text-sm tracking-[0.25em] text-slate-600 dark:text-white/50 backdrop-blur-xl">
                {exp.period}
              </span>
            </div>

            {/* POINTS */}
            <ul className="space-y-5">
              {exp.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-[15px] leading-8 text-slate-600 dark:text-white/60"
                >
                  <span className="mt-3 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-40"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        <PremiumBackground />
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
          {/* TOP LABEL */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.5em] text-cyan-500 dark:text-cyan-300">
              My Journey
            </span>

            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black leading-none tracking-tight text-slate-900 dark:text-white md:text-6xl">
            Work

            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-white/55">
            Building scalable applications, crafting premium user
            experiences, and solving real-world engineering problems.
          </p>
        </motion.div>

        {/* EXPERIENCE LIST */}
        <div className="relative space-y-24">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              index={index}
            />
          ))}
        </div>

        {/* EDUCATION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="relative mt-40"
        >
          {/* CARD */}
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#07111f]/80 p-10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(15,23,42,0.08)] dark:shadow-none transition-all duration-500">
            
            {/* MOVING LIGHT */}
            <motion.div
              animate={{
                x: ["-100%", "180%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 z-10 w-[40%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-violet-300/10 to-transparent blur-2xl"
            />

            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-cyan-400/[0.05]" />

            {/* SHINE */}
            <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />

            <div className="relative z-20 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              
              {/* LEFT */}
              <div>
                {/* BADGE */}
                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-100 dark:bg-violet-500/10 px-5 py-2">
                  
                  <GraduationCap className="h-4 w-4 text-violet-600 dark:text-violet-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">
                    Education
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                  B.Tech in Computer Science Engineering
                </h3>

                {/* COLLEGE */}
                <p className="mt-4 text-lg text-slate-600 dark:text-white/60">
                  Lovely Professional University
                </p>
              </div>

              {/* YEAR */}
              <div className="rounded-2xl border border-violet-400/20 bg-violet-100 dark:bg-violet-500/10 px-8 py-5 text-sm font-semibold tracking-[0.3em] text-violet-600 dark:text-violet-300 backdrop-blur-xl">
                2015 – 2019
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}