"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

     {/* Background Glow Effects */}
<div className="absolute inset-0 overflow-hidden -z-10">

  {/* Top Left Glow */}
  <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-400/30 rounded-full blur-[140px]" />

  {/* Bottom Right Glow */}
  <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-teal-400/25 rounded-full blur-[140px]" />

  {/* Center Glow */}
  <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-cyan-300/10 rounded-full blur-[120px]" />

</div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-300 text-lg mb-4 tracking-widest uppercase"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Ramu
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-lg text-white leading-relaxed max-w-xl"
          >
             MERN Stack Developer passionate about building modern,
            scalable, and user-centric web applications. I love solving
            complex DSA problems, crafting smooth interactive interfaces,
            and creating high-performance digital experiences with clean
            and efficient code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-5 mt-10"
          >

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl bg-cyan-400 px-8 py-4 text-black font-semibold shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-md px-8 py-4 text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              Download Resume
            </motion.button>

          </motion.div>

        </motion.div>

        {/* Right Side Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >

          {/* Glow Orb */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-3xl"></div>

          {/* Glass Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[320px] h-[380px] rounded-[32px] border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden"
          >

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-teal-400/10"></div>

            {/* Fake Code Content */}
            <div className="relative z-10 p-8">

              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

            <div className="space-y-4 text-sm font-mono">

  <p className="text-cyan-300">
    {"const developer = {"}
  </p>

  <p className="text-gray-300 ml-4">
    {'name: "Ramu",'}
  </p>

  <p className="text-gray-300 ml-4">
    {'role: "Software Engineer",'}
  </p>

  <p className="text-gray-300 ml-4">
    {'skills: ["React", "Next.js", "DSA"],'}
  </p>

  <p className="text-gray-300 ml-4">
    {'passion: "Building Modern UI"'}
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