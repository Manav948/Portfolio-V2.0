import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
    ({ children = "See more", className, href, ...props }, ref) => {
        const baseClass = cn(
            "group relative bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white h-16 w-64 border border-neutral-300 dark:border-neutral-850 hover:border-rose-500 dark:hover:border-rose-300 " +
            "text-left p-3 text-base font-bold rounded-lg overflow-hidden cursor-pointer " +
            "transition-all duration-500 ease-in-out hover:text-rose-600 dark:hover:text-rose-300 hover:underline hover:underline-offset-4 " +
            "before:absolute before:w-10 before:h-10 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 " +
            "hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:before:[box-shadow:20px_20px_20px_30px_#a21caf] " +
            "after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg after:transition-all after:duration-500 " +
            "hover:after:-right-8",
            className
        );

        const content = (
            <span className="relative z-20 flex items-center justify-between w-full h-full gap-2">
                {children}
            </span>
        );

        if (href) {
            return (
                <Link
                    href={href}
                    className={baseClass}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    {...(props as any)}
                >
                    {content}
                </Link>
            );
        }

        return (
            <button
                className={baseClass}
                ref={ref as React.Ref<HTMLButtonElement>}
                {...props}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;

