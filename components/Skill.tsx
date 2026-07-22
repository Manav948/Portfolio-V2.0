"use client";

import React from "react";
import { getTechIcon } from "@/components/ui/TechIcons";


const SKILLS = [

  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "GSAP", category: "Frontend" },
  { name: "Shadcn UI", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },


  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },


  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "Prisma", category: "Database" },


  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "AWS", category: "Tools" },
  // { name: "Cloudflare", category: "Tools" },
];


const SkillBadge = ({ name }: { name: string }) => (
  <div className="group/badge inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-neutral-200/80 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm transition-all duration-200 cursor-default select-none">
    <span className="shrink-0 w-4.5 h-4.5 flex items-center justify-center">
      {getTechIcon(name, "w-full h-full")}
    </span>
    <span className="text-[13px] font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap leading-none">
      {name}
    </span>
  </div>
);


const Skill = () => {
  return (
    <section className="w-full flex flex-col gap-5">

      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Tech Stack
        </h2>
        <p className="text-[13.5px] text-[#e18845] dark:text-[#fb923c] font-medium font-satisfy">
          the tech arsenal behind my builds!
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skill;
