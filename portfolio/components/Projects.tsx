"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-32"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-20 left-10 w-[35rem] h-[35rem] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-teal-400/10 blur-3xl" />

      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-28"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-cyan-300">
            Projects
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">

            Premium
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              {" "}Creative Builds
            </span>

          </h2>

        </motion.div>

        {/* Projects */}
        <div className="space-y-32">

          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 120,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className={`grid items-center gap-16 md:grid-cols-2 ${
                index % 2 !== 0 ? "md:grid-flow-dense" : ""
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
                  stiffness: 200,
                  damping: 15,
                }}
                className={`relative perspective-[1000px] ${
                  index % 2 !== 0 ? "md:col-start-2" : ""
                }`}
              >

                {/* Glow */}
                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-cyan-400/20 to-teal-400/20 blur-2xl opacity-60" />

                {/* Glass Card */}
                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.10)]">

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-teal-400/10" />

                  {/* Shine */}
                  <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={700}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                </div>

              </motion.div>

              {/* CONTENT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`${
                  index % 2 !== 0 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Mern Stack Application
                </p>

                <h3 className="mb-8 text-4xl md:text-5xl font-bold leading-tight text-white">
                  {project.title}
                </h3>

                {/* Description Card */}
                <div className="mb-8 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.06)]">

                  <p className="leading-relaxed text-gray-300/80 text-lg">
                    {project.description}
                  </p>

                </div>

                {/* Technologies */}
                <div className="mb-10 flex flex-wrap gap-4">

                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{
                        scale: 1.20,
                      }}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-cyan-300 backdrop-blur-xl"
                    >
                      {tech}
                    </motion.span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-5">

                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
                  >

                    <FaLink />
                    Live Demo

                  </motion.a>

                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={project.gitHubLink}
                    target="_blank"
                    className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-8 py-4 text-cyan-300 backdrop-blur-xl transition hover:border-cyan-300 hover:bg-cyan-400/10"
                  >

                    <FaGithub />
                    GitHub

                  </motion.a>

                </div>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}