"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const PROJECTS_DATA = [
  {
    img: "/draftlyv2.png",
    title: "Draftly",
    description:
      "A modern workspace for tasks, mind maps, and productivity-focused workflows.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://draftly.manavvalani.in/en",
    github: "https://github.com/Manav948/draftly",
    status: "Running"
  },
  {
    img: "/codeVerse.png",
    title: "CodeVerse",
    description:
      "A developer platform to publish posts, manage coding tasks, store reusable snippets and document a learning journey.",
    tech: [
      "Next.js",
      "Tailwind",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "React Query",
      "Framer Motion",
    ],
    link: "https://codeverse.manavvalani.in/",
    github: "https://github.com/Manav948/CodeVerse",
    status: "Running"
  },
  {
    img: "/FeedBacklyv.20.png",
    title: "FeedBackly",
    description:
      "Application that allows users to receive anonymous feedback using shareable links.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    link: "https://feedbackly.manavvalani.in/",
    github: "https://github.com/Manav948/feedbackly",
    status: "Running"
  },
  {
    img: "/imagino2.0.png",
    title: "Imagino",
    description:
      "AI image and logo generator that converts prompts into visuals.",
    tech: ["Tailwind", "MongoDB", "Express", "Node"],
    link: "https://imagino.manavvalani.in/",
    github: "https://github.com/Manav948/imagino",
    status: "Running"
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      
      
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Projects
        </h2>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.title}
            img={project.img}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            github={project.github}
            status={project.status}
          />
        ))}
      </div>


      <div className="flex justify-center mt-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl text-[14px] font-sans font-semibold text-neutral-700 dark:text-neutral-300 transition-all duration-300 focus:outline-none"
        >
          <span>View All</span>
          <span className="text-[10px]">↗</span>
        </Link>
      </div>

    </div>
  );
};

export default Projects;
