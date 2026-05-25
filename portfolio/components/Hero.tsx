"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-20 md:min-h-screen flex items-center">

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

            MERN Stack Developer passionate about building modern,
            scalable, and user-centric web applications. I love solving
            complex DSA problems, crafting smooth interactive interfaces,
            and creating high-performance digital experiences with clean
            and efficient code.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <button className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300">
              View Projects
            </button>

            <button className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-8 py-4 font-medium text-cyan-300 backdrop-blur-xl transition hover:border-cyan-300 hover:bg-cyan-400/10">
              Download Resume
            </button>

          </div>

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
                  {'role: "MERN Stack Developer",'}
                </p>

                <p className="ml-4 text-gray-300">
                  {'skills: ["MongoDB", "Express",'}
                </p>

                <p className="ml-4 text-gray-300">
                  {'"React", "Node.js", "DSA"],'}
                </p>

                <p className="ml-4 text-gray-300">
                  {'passion: "Building Premium UI"'}
                </p>

                <p className="text-cyan-300">
                  {"}"}
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}