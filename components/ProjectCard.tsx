"use client";

import React, { useRef, useState } from "react";
import { Globe } from "lucide-react";
import { getTechIcon } from "@/components/ui/TechIcons";

export interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  status?: string;
}

const GithubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 496 512" className="w-[17px] h-[17px]">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
  </svg>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  description,
  tech,
  link,
  github,
  status = "Running",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const githubUrl =
    github ||
    `https://github.com/Manav948/${title.toLowerCase().replace(/\s+/g, "-")}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !blobRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    blobRef.current.style.transform = `translate(${x - 75}px, ${y - 75}px)`;
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative w-full rounded-[18px] border border-neutral-200/80 dark:border-neutral-800/60 bg-neutral-100 dark:bg-neutral-950 shadow-sm hover:shadow-xl hover:translate-y-[-3px] hover:border-neutral-300 dark:hover:border-neutral-700/60 transition-all duration-300 overflow-hidden"
    >
      
      <div
        ref={blobRef}
        className="pointer-events-none absolute z-0 w-[150px] h-[150px] rounded-full blur-2xl transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, #f97316 0%, #fb923c 40%, #fec195 100%)",
          opacity: hovered ? 0.55 : 0,
          willChange: "transform, opacity",
          top: 0,
          left: 0,
        }}
      />

    
      <div className="relative z-10 m-[1.5px] rounded-[16.5px] bg-white dark:bg-neutral-900 overflow-hidden flex flex-col">
        
        <div className="relative w-full h-44 overflow-hidden bg-neutral-950">
          <img
            src={img}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
          
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-white/20 to-transparent dark:from-neutral-900/30 pointer-events-none" />
        </div>

       
        <div className="h-px bg-neutral-100 dark:bg-neutral-800/60" />

       
        <div className="p-5 flex flex-col gap-3 flex-1">
      
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[15px] font-bold text-neutral-900 dark:text-neutral-50 tracking-tight leading-snug">
              {title}
            </h3>
            <div className="flex items-center gap-2.5 shrink-0 text-neutral-400 dark:text-neutral-500 mt-0.5">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e18845] dark:hover:text-[#fb923c] transition-colors duration-200"
                  title="Live Website"
                >
                  <Globe className="w-[17px] h-[17px]" />
                </a>
              )}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e18845] dark:hover:text-[#fb923c] transition-colors duration-200"
                title="GitHub Repository"
              >
                <GithubIcon />
              </a>
            </div>
          </div>

          
          <p className="text-[12.5px] leading-[1.65] text-neutral-500 dark:text-neutral-450 font-normal line-clamp-2 min-h-[41px]">
            {description}
          </p>

         
          <div className="flex items-center justify-between gap-2 mt-auto pt-2 border-t border-neutral-100 dark:border-neutral-800/50">
           
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10.5px] font-semibold text-emerald-600 dark:text-emerald-400">
                {status}
              </span>
            </div>

          
            <div className="flex items-center gap-1 flex-wrap justify-end">
              {tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 text-[9.5px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 px-[6px] py-[3px] rounded-md border border-neutral-200/70 dark:border-neutral-700/40 whitespace-nowrap"
                >
                  <span className="w-[11px] h-[11px] shrink-0 flex items-center justify-center">
                    {getTechIcon(t, "w-full h-full")}
                  </span>
                  {t}
                </span>
              ))}
              {tech.length > 3 && (
                <span
                  className="text-[9.5px] font-semibold text-neutral-400 dark:text-neutral-500 whitespace-nowrap"
                  title={tech.slice(3).join(", ")}
                >
                  +{tech.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
