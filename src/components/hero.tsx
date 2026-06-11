"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
            <div className="z-10 flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for work
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                        Crafting Digital
                        <br />
                        Experiences
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-zinc-400 sm:text-xl sm:leading-8">
                        I&apos;m a Full Stack Developer passionate about building accessible, pixel-perfect,
                        performant, and thoughtful web experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-brand-violet to-brand-indigo hover:from-brand-violet/90 hover:to-brand-indigo/90 text-white border-0 shadow-lg shadow-brand-violet/20 transition-all duration-300">
                        <Link href="#projects">
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 text-white hover:text-white transition-colors duration-300">
                        <Link href="#contact">Contact Me</Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-4 text-zinc-400"
                >
                    <Link
                        href="https://github.com/himan-10"
                        target="_blank"
                        className="transition-colors hover:text-white"
                    >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/himanshu-patle-b14b0b25b/"
                        target="_blank"
                        className="transition-colours hover:text-white"
                    >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="himanshupatle56@gmail.com"
                        className="transition-colors hover:text-white"
                    >
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </motion.div>
            </div>

            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-indigo/15 blur-[100px] animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/20 blur-[80px]" />
        </section>
    );
}
