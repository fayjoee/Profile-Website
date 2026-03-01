"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedGrid({ className }: { className?: string }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect for deep space
    const yTransform = useTransform(scrollY, [0, 2000], [0, 400]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#050505]",
                className
            )}
        >
            <motion.div
                style={{ y: yTransform }}
                className="absolute inset-[-100%] w-[300%] h-[300%]"
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            >
                {/* Data Network / Grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                linear-gradient(to right, rgba(57, 255, 20, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(57, 255, 20, 0.05) 1px, transparent 1px)
              `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </motion.div>

            {/* Interactive Glow */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(57,255,20,0.06), transparent 40%)`,
                }}
            />

            {/* Fades for blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050505]" />
        </div>
    );
}
