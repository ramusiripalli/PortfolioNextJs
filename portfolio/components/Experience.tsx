"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
    company: "Alepo Technology Solutions",
    role: " Junior Software Engineer",
    period: "April 2022 – March 2023 ",
    type: "Full-time",
    points: [
      "Developed scalable telecom web applications using React.js, Node.js, MongoDB, and Tailwind CSS.",
      "Optimized RESTful APIs and database operations, improving performance by 30%.",
      "Built reusable React components with JWT authentication, lazy loading, and code splitting",
      "Integrated real-time billing and usage tracking systems using secure backend APIs",
      "Collaborated in Agile/Scrum teams using Git, GitHub, Jira, and Confluence"
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst",
    period: "Feb 2020 – Sept 2021",
    type: "Full-time",
    points: [
      "Developed custom SharePoint Framework (SPFx) web parts using React.js and TypeScript for interactive SharePoint Online solutions.",
      "Implemented CRUD operations with SharePoint REST APIs and React Hooks for efficient real-time data management.",
      "Led Microsoft Streams, Office 365, and Microsoft Teams migration projects with zero data loss and minimal downtime.",
      "Built automated SharePoint workflows and React.js components to improve collaboration and reduce manual processes.",
      "Managed a team of 10 analysts in an Agile environment, handling sprint planning, task allocation, and delivery tracking."
    ],
  },
  {
    company: "Edii Technology Solutions",
    role: "Full Stack MERN Intern",
    period: "Aug 2019 – Jan 2020",
    type: "Internship",
    points: [
      "Developed and optimized full-stack features for the EDII platform using modern web technologies.",
      "Improved school-parent communication systems, increasing user engagement by 30%",
      "Automated API testing workflows using Swagger and Postman, improving efficiency by 25%.",
      "Deployed applications on AWS EC2",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(2);

  const exp = experiences[active];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#030712] py-24 text-white"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* GLOW */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADING */}
        <p>&nbsp;</p>
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[2px] w-10 bg-cyan-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Where I&apos;ve Worked
            </p>
          </div>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* LEFT TABS */}
          <div className="flex flex-col gap-2">
            {experiences.map((item, index) => (
              <button
                key={item.company}
                onClick={() => setActive(index)}
                className={`group relative overflow-hidden rounded-r-2xl border-l-2 px-5 py-5 text-left transition-all duration-300 ${
                  active === index
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-white/10 hover:border-cyan-400/40 hover:bg-white/5"
                }`}
              >
                {/* ACTIVE GLOW */}
                {active === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent" />
                )}

                <div className="relative z-10">
                  <h3
                    className={`text-base font-semibold transition-colors ${
                      active === index
                        ? "text-cyan-400"
                        : "text-white group-hover:text-cyan-300"
                    }`}
                  >
                    {item.company}
                  </h3>

                  <p className="mt-1 text-xs tracking-wider text-gray-500">
                    {item.period}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1225] via-[#08111F] to-[#0B1225] p-8 shadow-[0_0_80px_rgba(0,255,255,0.08)] backdrop-blur-xl">
            {/* CARD GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.12),transparent_40%)]" />

            <div className="relative z-10">
              {/* HEADER */}
              <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <h3 className="text-3xl font-black tracking-tight">
                    {exp.role}
                  </h3>

                  <p className="mt-3 text-lg font-medium text-cyan-400">
                    @ {exp.company}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 md:items-end">
                  <span className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
                    {exp.type}
                  </span>

                  <span className="text-sm tracking-[0.2em] text-gray-500">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* POINTS */}
              <ul className="space-y-6">
                {exp.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] leading-8 text-gray-400"
                  >
                    <span className="mt-3 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-24">
          <div className="mb-8 flex items-center gap-4">
            <GraduationCap className="h-5 w-5 text-cyan-400" />

            <h3 className="text-xl font-semibold text-cyan-300">
              Education
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1225] to-[#08111F] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_40%)]" />

            <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h4 className="text-2xl font-bold">
                  B.Tech in Computer Science Engineering
                </h4>

                <p className="mt-3 text-gray-400">
                 Lovely Professional University
                </p>
              </div>

              <span className="w-fit rounded-xl border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm tracking-[0.2em] text-violet-300">
                2015 – 2019
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}