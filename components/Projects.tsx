"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import Button from "./ui/Button";

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
        <Button href="/projects">
          View All
          <span className="text-[10px]">↗</span>
        </Button>
      </div>

    </div>
  );
};

export default Projects;
