"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AntigravityCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function AntigravityCard({
    children,
    className,
    delay = 0,
}: AntigravityCardProps) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-8, 8, -8] }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={cn(
                "group relative overflow-hidden glass-panel rounded-xl h-full",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9CF527]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 p-6 h-full flex flex-col">{children}</div>
        </motion.div>
    );
}
