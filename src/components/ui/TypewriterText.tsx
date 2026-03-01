"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
    text: string;
    delay?: number;
    className?: string;
    onComplete?: () => void;
}

export function TypewriterText({
    text,
    delay = 0,
    className,
    onComplete,
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isBlinking, setIsBlinking] = useState(true);

    useEffect(() => {
        let typeIntervalId: NodeJS.Timeout;

        const startTyping = () => {
            setIsTyping(true);
            let i = 0;
            typeIntervalId = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(typeIntervalId);
                    setIsTyping(false);
                    setIsBlinking(true);
                    onComplete?.();
                }
            }, 50); // Type speed
        };

        const timeoutId = setTimeout(startTyping, delay * 1000);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(typeIntervalId);
        };
    }, [text, delay, onComplete]);

    return (
        <span className={cn("inline-block text-[#9CF527] font-mono glow-text", className)}>
            {displayedText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isBlinking ? [0, 1, 0] : isTyping ? 1 : 0 }}
                transition={{ duration: 0.8, repeat: isBlinking ? Infinity : 0 }}
                className="inline-block w-[0.5em] h-[1em] bg-current ml-1 translate-y-1 align-bottom shadow-[0_0_8px_currentColor]"
            />
        </span>
    );
}
