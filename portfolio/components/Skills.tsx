"use client";

import { motion } from "framer-motion";

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

const skills = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "VS Code",
    icon: <FaCode />,
  },
  {
    name: "DSA",
    icon: <TbBinaryTree2 />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
];

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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-36"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[#020617]">

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow Effects */}
        <div className="absolute left-0 top-0 h-full w-[30rem] bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-full w-[30rem] bg-teal-400/10 blur-3xl" />

      </div>

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
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
          }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-cyan-300">
            My Skills
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">

            Technologies &
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              {" "}Tools
            </span>

          </h2>


        </motion.div>

        {/* MOVING SKILLS */}
        <div className="relative mb-24 overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#020617] to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#020617] to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-12"
          >

            {[...movingSkills, ...movingSkills].map((tech, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 whitespace-nowrap"
              >

                {/* Dot */}
                <div className="h-2 w-2 rounded-full bg-cyan-400 transition duration-300 group-hover:scale-150" />

                {/* Text */}
                <p className="text-xl md:text-2xl font-semibold uppercase tracking-wider text-gray-500 transition duration-300 group-hover:text-cyan-300">

                  {tech}

                </p>

              </div>
            ))}

          </motion.div>

        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="group relative"
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]">

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 5,
                    scale: 1.15,
                  }}
                  className="mb-5 text-5xl text-cyan-300"
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <p className="text-center text-sm font-medium text-gray-300 transition duration-300 group-hover:text-cyan-100">
                  {skill.name}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}