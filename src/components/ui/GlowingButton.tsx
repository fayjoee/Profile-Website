"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

export function GlowingButton({
    children,
    className,
    href,
    variant = "primary",
    onClick,
}: GlowingButtonProps) {
    const Component = href ? "a" : "button";

    return (
        <Component
            href={href}
            onClick={onClick}
            className={cn(
                "group relative inline-flex items-center justify-center font-mono font-semibold px-8 py-4 overflow-hidden transition-all duration-300 rounded-sm",
                variant === "primary"
                    ? "bg-[#9CF527] text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] hover:scale-[1.02]"
                    : "bg-transparent text-white border border-[#9CF527] hover:bg-[#9CF527]/10",
                className
            )}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </Component>
    );
}
