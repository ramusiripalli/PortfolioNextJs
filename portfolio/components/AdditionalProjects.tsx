"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const additionalProjects = [
  {
    title: "Hunger Kart",
    description:
      "Hunger Kart is a modern food and grocery delivery platform designed with accessibility-first principles to ensure an inclusive user experience for everyone. The application enables users, including visually impaired individuals, to navigate, explore, and place orders effortlessly with an intuitive and user-friendly interface.",
    tech: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/ramusiripalli/RamuEatsDeliveryApp",
    live: "https://hungerkart.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and fully responsive portfolio website designed with smooth animations and premium user interface. The platform showcases projects, experience, achievements, and contact information with seamless dark and light theme support.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ramusiripalli/PortfolioNextJs",
    live: "https://ramusiripalli-portfolio.vercel.app/",
  },
  {
    title: "Alexa Weather Skill",
    description:
      "Alexa Weather Skill is a voice-enabled application built for Amazon Alexa devices that provides real-time weather updates and forecasts through simple voice commands",
    tech: ["Alexa Skill", "Weather API", "Node js"],
    github: "https://github.com/ramusiripalli/alexa1",
    live: "https://www.amazon.in/lovely-professional-university-Bangalore-Weather/dp/B07XNYN7BK/ref=sr_1_1?dchild=1&keywords=Bangalore+weather&qid=1630125957&s=digital-skills&sr=1-1",
  },
];

export default function AdditionalProjects() {
  return (
    <section
      id="additional-projects"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#020617]" />

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
          className="mb-20 text-center"
        >
          {/* TOP LABEL */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.45em] text-cyan-500 dark:text-cyan-300">
              More Projects
            </span>

            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Additional

            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
              Creative Works
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-white/55">
            A collection of modern applications crafted with scalable
            architecture, smooth experiences, and premium UI design.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[32px]
              border border-slate-200 dark:border-white/10
              bg-white/90 dark:bg-white/[0.04]
              backdrop-blur-xl
              shadow-[0_6px_30px_rgba(15,23,42,0.08)]
              dark:shadow-[0_0_40px_rgba(34,211,238,0.08)]
              transition-all duration-500"
            >
              {/* GLOW */}
              <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-cyan-400/20 to-teal-400/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              {/* INNER */}
              <div className="relative z-10 p-8">
                {/* LABEL */}
                <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
                    Project
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mb-5 text-3xl font-black text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <div
                  className="relative mb-7 overflow-hidden rounded-[24px]
                  border border-slate-200 dark:border-white/10
                  bg-white dark:bg-white/[0.03]
                  p-6"
                >
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 to-teal-400" />

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-white/65">
                    {project.description}
                  </p>
                </div>

                {/* TECH STACK */}
                <div className="mb-8 flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="rounded-full border border-slate-200 dark:border-cyan-400/15
                      bg-white dark:bg-white/[0.04]
                      px-4 py-2 backdrop-blur-md"
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
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl
                    bg-gradient-to-r from-cyan-400 to-sky-400
                    px-6 py-4 font-semibold text-[#020619]
                    shadow-[0_0_30px_rgba(6,182,212,0.20)]
                    transition duration-300 hover:scale-[1.02]"
                  >
                    <ExternalLink className="text-lg transition duration-300 group-hover:rotate-12" />

                    Live Demo

                    <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                  </a>

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl
                    border border-slate-200 dark:border-cyan-400/20
                    bg-white dark:bg-white/[0.04]
                    px-6 py-4 text-cyan-700 dark:text-cyan-200
                    backdrop-blur-md shadow-sm transition duration-300
                    hover:border-cyan-300
                    hover:bg-cyan-50 dark:hover:bg-cyan-400/[0.06]"
                  >
                    <FaGithub className="text-lg transition duration-300 group-hover:rotate-12" />

                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}