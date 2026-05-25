"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between rounded-2xl border border-cyan-400/10 bg-black/30 backdrop-blur-xl px-5 py-4 shadow-[0_0_40px_rgba(34,211,238,0.10)]">

          {/* Logo */}
          <h1 className="text-xl md:text-3xl font-bold tracking-tight">
            <span className="text-white">Ramu</span>{" "}
            <span className="text-cyan-400">Siripalli</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">

            <li>
              <a href="#about" className="transition hover:text-cyan-300">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="transition hover:text-cyan-300">
                Skills
              </a>
            </li>

             <li>
              <a href="#experience" className="transition hover:text-cyan-300">
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" className="transition hover:text-cyan-300">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="transition hover:text-cyan-300">
                Contact
              </a>
            </li>

          </ul>

          {/* Desktop Resume Button */}
          <a
          href="https://drive.google.com/file/d/1YAN-ImP4zhP7X_WfnvwXo7sFDNRv5tHR/view"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-xl bg-cyan-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300">
          Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyan-300"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-2xl border border-cyan-400/10 bg-black/40 backdrop-blur-xl p-6 md:hidden"
          >

            <div className="flex flex-col gap-6 text-gray-300">

              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

              <button className="rounded-xl bg-cyan-400 py-3 text-black font-semibold">
                Resume
              </button>

            </div>

          </motion.div>
        )}

      </div>
    </motion.nav>
  );
}