import React from 'react';

interface LinkedinButtonProps {
  href?: string;
  username?: string;
  className?: string;
}

export const LinkedinButton: React.FC<LinkedinButtonProps> = ({
  href = "https://linkedin.com",
  username = "LinkedIn",
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-850 bg-neutral-950 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-550 hover:bg-neutral-900 hover:text-[#0077b5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${className}`}
      aria-label={`Visit LinkedIn profile of ${username}`}
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>

      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2 scale-90 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs font-medium text-neutral-200 opacity-0 shadow-2xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        <span className="relative z-10">{username}</span>
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-neutral-800 bg-neutral-950" />
      </span>
    </a>
  );
};

export default LinkedinButton;
