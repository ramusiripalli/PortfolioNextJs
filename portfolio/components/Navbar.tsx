"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-5">

        <div className="flex items-center justify-between rounded-2xl border border-cyan-400/10 bg-cyan-400/5 backdrop-blur-xl px-6 py-4 shadow-[0_0_40px_rgba(34,211,238,0.12)]">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-2xl md:text-3xl font-bold tracking-wide"
          >
            <span className="text-white">Ramu</span>{" "}
            <span className="text-cyan-400">Siripalli</span>
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">

            <li className="cursor-pointer transition duration-300 hover:text-cyan-300">
              About
            </li>

            <li className="cursor-pointer transition duration-300 hover:text-cyan-300">
              Skills
            </li>

            <li className="cursor-pointer transition duration-300 hover:text-cyan-300">
              Projects
            </li>

            <li className="cursor-pointer transition duration-300 hover:text-cyan-300">
              Contact
            </li>

          </ul>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
          >
            Resume
          </motion.button>

        </div>

      </div>
    </motion.nav>
  );
}