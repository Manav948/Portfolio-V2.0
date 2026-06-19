import React from 'react';

interface TwitterButtonProps {
  href?: string;
  className?: string;
}

export const TwitterButton: React.FC<TwitterButtonProps> = ({
  href = "https://x.com/ManavValani",
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex w-[35px] h-[35px] items-center justify-center bg-transparent rounded-[7px] transition-all duration-300 focus:outline-none ${className}`}
      aria-label="Visit Twitter / X Profile"
    >
   
      <span className="absolute inset-0 origin-bottom rounded-[10px] bg-[#181818] transition-transform duration-300 ease-out z-0 group-hover:rotate-[35deg] pointer-events-none" />

      <span className="relative z-10 w-full h-full flex items-center justify-center bg-transparent border border-[rgba(156,156,156,0.466)] rounded-[10px] transition-all duration-300 group-hover:bg-[rgba(156,156,156,0.466)] group-hover:backdrop-blur-[4px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="1.3em"
          height="1.3em"
          className="transition-colors duration-300"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </span>
    </a>
  );
};

export default TwitterButton;
