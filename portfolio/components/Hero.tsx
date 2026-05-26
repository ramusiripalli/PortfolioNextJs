"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
   GitBranch,
  Link,
  FileText,
  Code2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// STARS DATA
// ─────────────────────────────────────────────────────────────

const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: (i % 2) + 1,
  left: (i * 19) % 100,
  top: (i * 13) % 100,
  duration: 5 + (i % 5),
  delay: i * 0.2,
}));

// ─────────────────────────────────────────────────────────────
// STARS BACKGROUND
// ─────────────────────────────────────────────────────────────

function StarsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STARS.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size + 2,
            height: star.size + 2,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: 0.4,

            boxShadow: `
              0 0 8px rgba(255,255,255,0.7),
              0 0 18px rgba(6,182,212,0.25)
            `,
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
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
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#020617]">
        {/* Stars */}
        <StarsBackground />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(6,182,212,0.4) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Glow Left */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-[550px] w-[550px] rounded-full bg-cyan-500/[0.12] blur-[120px]"
        />

        {/* Glow Right */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-teal-400/[0.08] blur-[120px]"
        />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-[100px]" />

        {/* Top Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_50%)]" />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-24 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Available For Work
            </span>
          </motion.div>

          {/* Typing Animation */}
          <div className="mb-8 text-sm uppercase tracking-[0.4em] text-cyan-300 md:text-base">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Backend Developer",
                2000,
                "Problem Solver",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text text-transparent">
              Ramu
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
            Full Stack MERN Developer passionate about building
            scalable, modern, and high-performance web applications
            with exceptional UI/UX experiences.
          </p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ramu-siripalli-3711bb119/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]"
            >
              <Link className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />

              <span className="font-medium text-white/80">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ramusiripalli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]"
            >
              <GitBranch className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />

              <span className="font-medium text-white/80">
                GitHub
              </span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Ramu2772/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]"
            >
              <Code2 className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />

              <span className="font-medium text-white/80">
                LeetCode
              </span>
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1YAN-ImP4zhP7X_WfnvwXo7sFDNRv5tHR/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/20 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
            >
              <FileText className="h-5 w-5 text-cyan-200 transition-transform duration-300 group-hover:scale-110" />

              <span className="font-semibold text-cyan-100">
                Resume
              </span>

              <ArrowRight className="h-4 w-4 text-cyan-200 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute h-[26rem] w-[26rem] rounded-full bg-cyan-400/[0.15] blur-[100px]" />

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[390px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.14)]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-teal-400/10" />

            {/* Shine */}
            <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              {/* Dots */}
              <div className="mb-10 flex gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              {/* Code */}
              <div className="space-y-5 font-mono text-sm md:text-[15px]">
                <p className="text-cyan-300">
                  {"const developer = {"}
                </p>

                <p className="ml-4 text-white/75">
                  {'name: "Ramu Siripalli",'}
                </p>

                <p className="ml-4 text-white/75">
                  {'role: "Full Stack Developer",'}
                </p>

                <p className="ml-4 text-white/75">
                  {'skills: ["React.js", "Node.js",'}
                </p>

                <p className="ml-4 text-white/75">
                  {'"MongoDB", "TypeScript"],'}
                </p>

                <p className="ml-4 text-white/75">
                  {'focus: "Scalable Web Apps",'}
                </p>

                <p className="ml-4 text-white/75">
                  {'passion: "Clean UI & Performance"'}
                </p>

                <p className="text-cyan-300">{"}"}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}