import React from "react";
import BookCall from "@/components/ui/BookCall";
import HeatMap from "./ui/HeatMap";
import Button from "./ui/Button";

const About = () => {
  return (
    <section className="relative w-full pt-8 pb-16">
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-16 flex flex-col gap-10 z-10">


        <div className="flex flex-col gap-5">

          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="w-7.5 h-7.5 sm:w-17 sm:h-17 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <img
                  src="/me.png"
                  alt="Manav Valani"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-[3px] border-white dark:border-neutral-950 rounded-full z-20" />
            </div>

            <div className="flex flex-col gap-0.5">
              <h1 className="text-[26px] sm:text-[30px] font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
                Manav Valani
              </h1>
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
                  Fullstack Developer
                </span>
                <span className="text-neutral-300 dark:text-neutral-700">·</span>
                <span className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
                  Dhoraji,Rajkot, India
                </span>
              </div>
            </div>
          </div>


          <p className="text-[17px] sm:text-[18px] leading-[1.75] text-neutral-600 dark:text-neutral-350 font-normal max-w-xl">
            A fullstack developer who enjoy building things people can{" "}
            <span className="font-satisfy text-[#e18845] dark:text-[#fb923c] text-[20px] sm:text-[22px] inline-block rotate-[-0.5deg]">
              click,
            </span>{" "}
            <span className="font-satisfy text-sky-500 dark:text-sky-400 text-[20px] sm:text-[22px] inline-block rotate-[0.5deg]">
              break,
            </span>{" "}
            use and hopefully{" "}
            <span className="font-satisfy text-rose-500 dark:text-rose-400 text-[20px] sm:text-[22px] inline-block rotate--1">
              love.
            </span>
          </p>


          <div className="flex items-center gap-3 flex-wrap">
            <BookCall href="https://calendly.com/manav-valani" />
            <Button
              href="/projects"
            >
              View Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 opacity-60">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Button>
          </div>
        </div>

        <div>
          <HeatMap />
        </div>

      </div>
    </section>
  );
};

export default About;