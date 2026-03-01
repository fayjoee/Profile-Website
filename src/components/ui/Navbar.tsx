"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "[ 00. ABOUT ]", href: "#about" },
    { name: "[ 01. SKILLS ]", href: "#skills" },
    { name: "[ 02. CERTIF. ]", href: "#certifications" },
    { name: "[ 03. EXP & EDU ]", href: "#experience" },
    { name: "[ 04. PROJECTS ]", href: "#projects" },
    { name: "[ 05. CONTACT ]", href: "#contact" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_LINKS.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100; // Offset for fixed navbar

            for (const section of sections) {
                const element = document.getElementById(section);
                if (
                    element &&
                    element.offsetTop <= scrollPosition &&
                    element.offsetTop + element.offsetHeight > scrollPosition
                ) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{
                    y: [-4, 4, -4],
                }}
                transition={{
                    y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 pointer-events-none"
            >
                <div className="max-w-7xl mx-auto w-full glass-panel pointer-events-auto rounded-full px-6 flex items-center justify-between border-b border-b-[#9CF527] shadow-[0_4px_20px_rgba(57,255,20,0.1)] py-3">

                    {/* Logo Area */}
                    <Link href="/" className="flex items-center group">
                        <h1 className="text-2xl font-black text-white tracking-[0.2em] uppercase transition-all group-hover:tracking-[0.3em]">
                            FT
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative group font-mono text-xs xl:text-sm transition-colors",
                                        isActive ? "text-[#9CF527] glow-text" : "text-gray-400 hover:text-[#9CF527]"
                                    )}
                                >
                                    {/* Glowing Dot Indicator (Hover or Active) */}
                                    <div className={cn(
                                        "absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#9CF527] rounded-full transition-opacity",
                                        isActive ? "opacity-100 shadow-[0_0_8px_#9CF527]" : "opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#9CF527]"
                                    )} />
                                    {link.name}
                                    {/* Neon Green Underline (Hover) */}
                                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#9CF527] transition-all group-hover:w-full group-hover:shadow-[0_0_5px_#9CF527]" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-[#9CF527] transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-6 pb-6 flex flex-col md:hidden"
                    >
                        <div className="flex flex-col gap-8 items-center mt-12">
                            {NAV_LINKS.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "font-mono text-xl text-gray-400 hover:text-[#9CF527] transition-colors",
                                            isActive && "text-[#9CF527] glow-text"
                                        )}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>

                        <div className="mt-auto flex justify-center pb-12">
                            <div className="px-4 py-2 border border-[#9CF527]/30 bg-[#111] rounded-full flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#9CF527] animate-pulse shadow-[0_0_8px_#9CF527]" />
                                <span className="font-mono text-xs text-[#9CF527]">SYSTEM_ONLINE</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
