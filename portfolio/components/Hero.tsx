"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  GitBranch,
  Link,
  FileText,
  Code2,
  MailIcon,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 pt-36 pb-20 md:min-h-screen flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-cyan-400/20 blur-3xl"
        />

        <div className="absolute -bottom-40 -right-40 w-[38rem] h-[38rem] rounded-full bg-teal-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Typing Animation */}
          <div className="mb-6 text-sm md:text-lg uppercase tracking-[0.3em] text-cyan-300">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Problem Solver",
                2000,
                "Frontend Engineer",
                2000,
                "DSA Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Ramu
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-[1rem] md:text-[1.1rem] leading-relaxed text-gray-300/80">
            Full Stack MERN Developer focused on building scalable,
            modern, and user-centric web applications with clean code
            and high-performance UI.
          </p>

          

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ramu-siripalli-3711bb119/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <Link className="h-5 w-5 text-cyan-300 transition group-hover:scale-110" />

              <span className="text-sm font-medium text-gray-200">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ramusiripalli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <GitBranch className="h-5 w-5 text-cyan-300 transition group-hover:scale-110" />

              <span className="text-sm font-medium text-gray-200">
                GitHub
              </span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Ramu2772/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <Code2 className="h-5 w-5 text-cyan-300 transition group-hover:scale-110" />

              <span className="text-sm font-medium text-gray-200">
                LeetCode
              </span>
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1YAN-ImP4zhP7X_WfnvwXo7sFDNRv5tHR/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <FileText className="h-5 w-5 text-cyan-300 transition group-hover:scale-110" />

              <span className="text-sm font-semibold text-cyan-200">
                Resume
              </span>
            </a>

          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Main Glow */}
          <div className="absolute w-[24rem] h-[24rem] md:w-[30rem] md:h-[30rem] rounded-full bg-cyan-400/20 blur-3xl" />

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[340px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.12)]"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-teal-400/10" />

            {/* Top Shine */}
            <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Dots */}
              <div className="mb-10 flex gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>

              {/* Fake Code */}
              <div className="space-y-5 font-mono text-sm">
                <p className="text-cyan-300">
                  {"const developer = {"}
                </p>

                <p className="ml-4 text-gray-300">
                  {'name: "Ramu Siripalli",'}
                </p>

                <p className="ml-4 text-gray-300">
                  {'role: "Full Stack Developer",'}
                </p>

                <p className="ml-4 text-gray-300">
                  {'skills: ["React.js", "Node.js",'}
                </p>

                <p className="ml-4 text-gray-300">
                  {'"MongoDB", "TypeScript"]'}
                </p>

                <p className="ml-4 text-gray-300">
                  {'focus: "Scalable Web Applications"'}
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