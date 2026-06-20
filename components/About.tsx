import React from 'react'
import BookCall from '@/components/ui/BookCall'
import HeatMap from './ui/HeatMap'

const About = () => {
  return (
    <section className="relative w-full pt-6 pb-20">
      {/* Content Container */}
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-16 flex flex-col items-start gap-8 z-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

          <div className="relative w-20 h-20">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-linear-to-tr from-[#fec195] to-[#ffcca9] dark:from-neutral-800 dark:to-neutral-900">
              <img
                src="/me.png"
                alt="Manav Valani"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
            <span className="absolute bottom-[-2px] right-[-2px] w-5 h-5 bg-emerald-500 border-4 border-white dark:border-black rounded-full z-20" />
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 mt-1">
              Hi, I’m <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-800 via-neutral-600 to-neutral-800 dark:from-white dark:via-neutral-300 dark:to-neutral-100">Manav Valani</span>
            </h1>
          </div>
        </div>

        <div className="text-2xl sm:text-3xl leading-relaxed text-neutral-600 dark:text-neutral-300 font-light max-w-2xl">
          A fullstack developer who enjoy building things people can{" "}
          <span className="font-satisfy text-[#e18845] dark:text-[#fec195] text-4xl inline-block rotate-1 font-normal">
            click
          </span>
          ,{" "}
          <span className="font-satisfy text-sky-500 dark:text-sky-400 text-4xl inline-block rotate-2 font-normal">
            use
          </span>
          , break, and hopefully{" "}
          <span className="font-satisfy text-rose-500 dark:text-rose-400 text-4xl inline-block rotate-[-1.5deg] font-normal">
            love.
          </span>
        </div>


        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto">
          <BookCall href="https://calendly.com/manav-valani" />
          <a
            href="https://github.com/Manav948"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-[14px] border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl text-[15px] font-semibold text-neutral-700 dark:text-neutral-300 transition-all duration-300 focus:outline-none"
          >
            Explore Projects
          </a>
        </div>

        <div>
          <HeatMap />
        </div>

      </div>
    </section>
  )
}

export default About