"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-36"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[#020617]">

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow Effects */}
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] bg-teal-400/10 blur-3xl" />

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
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">

            Let&apos;s
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              {" "}Connect
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300/70">
            Open to internships, freelance opportunities,
            collaborations, and exciting software engineering projects.
          </p>

        </motion.div>

        {/* MAIN CARD */}
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
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl md:p-14"
        >

          {/* Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-teal-400/5" />

          <div className="grid gap-14 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="relative z-10">

              <h3 className="mb-8 text-4xl font-bold text-white">
                Get In Touch
              </h3>

              <p className="mb-10 leading-relaxed text-gray-300/70">
                I&apos;m passionate about building modern web applications,
                solving real-world problems, and creating premium digital
                experiences. Feel free to reach out anytime.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex flex-wrap gap-5">

                {/* GitHub */}
                <motion.a
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  href="https://github.com/ramusiripalli"
                  target="_blank"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl text-cyan-300 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]"
                >

                  <FaGithub />

                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  href="https://www.linkedin.com/in/ramu-siripalli-3711bb119/"
                  target="_blank"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl text-cyan-300 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]"
                >

                  <FaLinkedin />

                </motion.a>

                

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative z-10 flex flex-col justify-center">

              <div className="space-y-6">

                {/* PHONE */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300">

                    <MdPhone />

                  </div>

                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Phone
                    </p>

                    <h3 className="text-xl text-white">
                      +91 7888588047
                    </h3>
                  </div>

                </motion.div>

                {/* EMAIL */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300">

                    <MdEmail />

                  </div>

                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Email
                    </p>

                    <h3 className="text-xl text-white break-all">
                      ramusiripalli2425@gmail.com
                    </h3>
                  </div>

                </motion.div>

                {/* LOCATION */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300">

                    <MdLocationOn />

                  </div>

                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Location
                    </p>

                    <h3 className="text-xl text-white">
                      Hyderabad, India
                    </h3>
                  </div>

                </motion.div>

                {/* AVAILABILITY */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-2xl"
                >

                  <div className="mb-3 flex items-center gap-3">

                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Availability
                    </p>

                  </div>

                  <h3 className="text-xl text-white">
                    Open for Freelancing & Full Time
                  </h3>

                </motion.div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}