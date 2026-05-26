"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";

export default function Contact() {

  /* ================= SAFE STARS ================= */

  const stars = Array.from({ length: 90 }).map((_, i) => ({
    top: (i * 13) % 100,
    left: (i * 29) % 100,
    size: (i % 3) + 1,
    opacity: 0.4 + ((i % 5) * 0.1),
    duration: 2 + (i % 4),
  }));

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-36"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-30 bg-[#020617]" />

      {/* Grid */}
      <div className="absolute inset-0 -z-20 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Aurora Glow */}
      <div className="absolute left-1/2 top-0 -z-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" />

      <div className="absolute bottom-0 left-0 -z-20 h-[400px] w-[400px] rounded-full bg-teal-400/10 blur-[120px]" />

      <div className="absolute right-0 top-1/2 -z-20 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-[120px]" />

      {/* Floating Orbs */}

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-20 top-32 -z-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 -z-10 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl"
      />

      {/* ================= PREMIUM STARS ================= */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {stars.map((star, i) => (
          <motion.span
            key={i}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              boxShadow: `
                0 0 8px rgba(255,255,255,0.9),
                0 0 18px rgba(34,211,238,0.7),
                0 0 30px rgba(34,211,238,0.5)
              `,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={false}
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

          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-cyan-300">
            Contact
          </p>

          <h2 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Let&apos;s
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text text-transparent">
              {" "}Connect
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-sgray-700 dark:text-gray-300/70">
            Open to internships, freelance opportunities,
            collaborations, and exciting software engineering projects.
          </p>

        </motion.div>

        {/* ================= MAIN CARD ================= */}

        <motion.div
          initial={false}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="group relative z-10 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-3xl md:p-14"
        >

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-[40px] border border-cyan-400/20" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-teal-400/10 opacity-80" />

          {/* Moving Light */}

          <motion.div
            animate={{
              x: ["-20%", "120%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-32 rotate-12 bg-white/10 blur-3xl"
          />

          <div className="grid gap-14 lg:grid-cols-2">

            {/* ================= LEFT ================= */}

            <div className="relative z-10">

              <h3 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
                Get In Touch
              </h3>

              <p className="mb-10 leading-relaxed text-sgray-700 dark:text-gray-300/70">
                I&apos;m passionate about building modern web applications,
                solving real-world problems, and creating premium digital
                experiences. Feel free to reach out anytime.
              </p>

              {/* Social Icons */}

              <div className="flex flex-wrap gap-5">

                {/* GitHub */}

                <motion.a
                  whileHover={{
                    y: -6,
                    scale: 1.06,
                  }}
                  href="https://github.com/ramusiripalli"
                  target="_blank"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl text-cyan-300 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]"
                >
                  <FaGithub className="transition duration-300 group-hover:rotate-12" />
                </motion.a>

                {/* LinkedIn */}

                <motion.a
                  whileHover={{
                    y: -6,
                    scale: 1.06,
                  }}
                  href="https://www.linkedin.com/in/ramu-siripalli-3711bb119/"
                  target="_blank"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl text-cyan-300 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]"
                >
                  <FaLinkedin className="transition duration-300 group-hover:rotate-12" />
                </motion.a>

              </div>
            </div>

            {/* ================= RIGHT ================= */}

            <div className="relative z-10 flex flex-col justify-center">

              <div className="space-y-6">

                <ContactCard
                  icon={<MdPhone />}
                  title="Phone"
                  value="+91 7888588047"
                />

                <ContactCard
                  icon={<MdEmail />}
                  title="Email"
                  value="ramusiripalli2425@gmail.com"
                />

                <ContactCard
                  icon={<MdLocationOn />}
                  title="Location"
                  value="Hyderabad, India"
                />

                {/* Availability */}

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-2xl transition duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                >

                  <div className="mb-3 flex items-center gap-3">

                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Availability
                    </p>

                  </div>

                  <h3 className="text-xl text-slate-900 dark:text-white">
                    Open for Freelancing & Full Time Opportunities
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

/* ================= CONTACT CARD ================= */

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
    >

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>

      <div>

        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
          {title}
        </p>

        <h3 className="break-all text-xl text-slate-900 dark:text-white">
          {value}
        </h3>

      </div>

    </motion.div>
  );
}