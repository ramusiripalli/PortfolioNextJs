"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Navbar Container */}
        <div className="flex items-center justify-between rounded-2xl border border-red-300 dark:border-cyan-400/10 bg-white/80 dark:bg-black/30 backdrop-blur-xl px-5 py-4 shadow-[0_0_40px_rgba(34,211,238,0.10)] transition-all duration-300">
          
          {/* Logo */}
          <h1 className="text-xl md:text-3xl font-bold tracking-tight">
            <span className="text-slate-900 dark:text-white">
              Ramu
            </span>{" "}
            <span className="text-red-400 dark:text-cyan-400">
              Siripalli
            </span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700 dark:text-gray-300">
            
            <li>
              <a
                href="#about"
                className="transition hover:text-cyan-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="transition hover:text-cyan-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="transition hover:text-cyan-400"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition hover:text-cyan-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition hover:text-cyan-400"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle Button */}
            {mounted && (
  <button
    onClick={() =>
      setTheme(theme === "dark" ? "light" : "dark")
    }
    className="
      flex items-center gap-2
      rounded-xl
      px-4 py-2.5
      text-sm font-semibold
      transition-all duration-300
      hover:scale-105
      border
      border-slate-200
      dark:border-cyan-400/10
      bg-slate-100
      dark:bg-slate-900
      text-slate-800
      dark:text-white
      shadow-md
    "
  >
    {theme === "dark" ? (
      <>
        <Sun
          size={18}
          className="text-yellow-400"
        />
        <span>Light</span>
      </>
    ) : (
      <>
        <Moon
          size={18}
          className="text-cyan-400"
        />
        <span>Dark</span>
      </>
    )}
  </button>
)}
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1YAN-ImP4zhP7X_WfnvwXo7sFDNRv5tHR/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-400"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-cyan-400"
            >
              {menuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 rounded-2xl border border-slate-200 dark:border-cyan-400/10 bg-white/90 dark:bg-black/40 backdrop-blur-xl p-6 md:hidden"
            >
              <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300">

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>

                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>

                <a
                  href="#experience"
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </a>

                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>

                <a
                  href="https://drive.google.com/file/d/1YAN-ImP4zhP7X_WfnvwXo7sFDNRv5tHR/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-500 py-3 text-center text-white font-semibold transition hover:bg-cyan-400"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}