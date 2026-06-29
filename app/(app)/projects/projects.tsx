"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const ALL_PROJECTS = [
  {
    img: "/draftlyv2.png",
    title: "Draftly",
    description:
      "A modern workspace for tasks, mind maps, and productivity-focused workflows.",
    tech: [
      "Next.js",
      "Tailwind",
      "Shadcn UI",
      "Framer Motion",
      "Supabase",
      "Prisma",
      "React Query",
    ],
    link: "https://draftly.manavvalani.in/en",
    github: "https://github.com/Manav948/draftly",
    status: "Running",
  },
  {
    img: "/codeVerse.png",
    title: "CodeVerse",
    description:
      "CodeVerse is a developer-focused platform to publish posts, manage coding tasks, store reusable code snippets, and build a public learning journey in one unified ecosystem.",
    tech: [
      "Next.js",
      "Tailwind",
      "Shadcn UI",
      "Framer Motion",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "React Query",
    ],
    link: "https://codeverse.manavvalani.in/",
    github: "https://github.com/Manav948/CodeVerse",
    status: "Running",
  },
  {
    img: "/devpulse.png",
    title: "DevPulse",
    description:
      "DevPulse is a real-time API and website monitoring platform that helps developers track uptime, response time, failures, and performance of their APIs and services.",
    tech: [
      "Node",
      "Express",
      "MongoDB",
      "React",
      "GSAP",
    ],
    link: "https://devpulse.manavvalani.in",
    github: "https://github.com/Manav948/devpulse",
    status: "Running",
  },
  {
    img: "/imagino2.0.png",
    title: "Imagino",
    description:
      "Imagino is an AI image & logo generator that allows users to create visuals using text prompts.",
    tech: ["React", "Tailwind", "Framer Motion", "MongoDB", "Express", "Node"],
    link: "https://imagino.manavvalani.in/",
    github: "https://github.com/Manav948/imagino",
    status: "Running",
  },
  {
    img: "/FeedBacklyv.20.png",
    title: "FeedBackly",
    description:
      "A Next.js-based application allowing users to receive anonymous feedback via shareable links.",
    tech: ["Next.js", "Tailwind", "React", "Lenis", "MongoDB"],
    link: "https://feedbackly.manavvalani.in/",
    github: "https://github.com/Manav948/feedbackly",
    status: "Running",
  },
  {
    img: "/assitant3.png",
    title: "AI-Assistant",
    description:
      "A full-stack AI-powered voice assistant built with React, Node.js, Express, and MongoDB. Features real-time speech recognition, wake word detection, and natural language responses using the Google Gemini API.",
    tech: ["React", "Tailwind", "Framer Motion", "MongoDB", "Express", "Node"],
    link: "https://ai-assistant-neon-one.vercel.app/",
    github: "https://github.com/Manav948/ai-assistant",
    status: "Running",
  },
  {
    img: "/rejouice.png",
    title: "Rejouice",
    description:
      "A front-end clone of the Rejouice website, built with React. for animation i used gsap , locomotive js and framermotion The project focuses on smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://rejouice-clone-six.vercel.app/",
    github: "https://github.com/Manav948/rejouice-clone",
    status: "Running",
  },
  {
    img: "/sundown-studio.png",
    title: "SunDown Studio",
    description:
      "A front-end clone of Sundown Studio is a creative digital space where design meets motion. Built with React, Tailwind, and Framer Motion, it showcases smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://sun-down-studio-omega.vercel.app/",
    github: "https://github.com/Manav948/sun-down-studio",
    status: "Running",
  },
  {
    img: "/ThinkBoard.png",
    title: "ThinkBoard",
    description:
      "ThinkBoard is a FullStack Application there use can create a Task and update and delete and maintain daily records",
    tech: ["React", "Tailwind", "MongoDB", "Express", "Node"],
    link: "https://think-board-lsdj.vercel.app/",
    github: "https://github.com/Manav948/ThinkBoard",
    status: "Running",
  },
  {
    img: "/MovieHub.png",
    title: "MovieHub",
    description:
      "A Front-end MovieHub built using React and Vite. It allows users to browse, search, and view details about various movies.",
    tech: ["React", "Tailwind"],
    link: "https://movie-hub-lac-psi.vercel.app/",
    github: "https://github.com/Manav948/MovieHub",
    status: "Running",
  },
];

export const AllProject = () => {
  return (
    <div className="w-full flex flex-col gap-8 select-none">


      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[12px] font-bold text-neutral-400 dark:text-neutral-500">
          <Link href="/" className="hover:text-[#e18845] dark:hover:text-[#fec195] transition-colors duration-200">
            Home
          </Link>
          <span className="font-normal">/</span>
          <span className="text-neutral-600 dark:text-neutral-350">Projects</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 mt-1">
          Projects
        </h1>
        <p className="text-[13px] sm:text-[13.5px] text-neutral-550 dark:text-neutral-450 leading-relaxed max-w-xl font-normal font-sans">
          A curated collection of fullstack applications, client clones, AI integrations, and developer utilities that I have built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
        {ALL_PROJECTS.map((project) => (
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

    </div>
  );
};

export default AllProject;
