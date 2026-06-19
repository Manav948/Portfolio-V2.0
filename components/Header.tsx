import React from "react";
import GithubButton from "@/components/ui/GithubButton";
import TwitterButton from "@/components/ui/TwitterButton";

interface HeaderProps {
  githubUrl?: string;
  twitterUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
  githubUrl = "https://github.com/Manav948",
  twitterUrl = "https://x.com/ManavValani",
}) => {
  return (
    <header className="w-full bg-transparent">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 sm:px-16 py-8">
          
        <div>
          <a href="/" className="focus:outline-none select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-12 h-12 text-black dark:text-white"
            >
              <path
                d="M 15 50 C 18 35, 23 20, 30 20 C 37 20, 39 42, 39 72 C 41 50, 46 20, 53 20 C 60 20, 62 42, 62 72 C 64 50, 69 20, 76 20 C 83 20, 85 45, 85 58 C 85 68, 88 72, 93 72"
                fill="none"
                stroke="currentColor"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="draw-path"
              />
              <style>{`
                .draw-path {
                  stroke-dasharray: 500;
                  stroke-dashoffset: 500;
                  animation: write-m 3s ease-in-out forwards;
                }
                @keyframes write-m {
                  0% {
                    stroke-dashoffset: 500;
                  }
                  100% {
                    stroke-dashoffset: 0;
                  }
                }
              `}</style>
            </svg>
          </a>
        </div>

       
        <div className="flex items-center gap-4">
          <GithubButton href={githubUrl} />
          <TwitterButton href={twitterUrl} />
        </div>

      </div>
    </header>
  );
};

export default Header;