"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
    return (
        <section id="projects" className="container mx-auto px-4 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-12"
            >
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="max-w-[42rem] leading-normal text-zinc-400 sm:text-xl sm:leading-8">
                        Here are some of the projects I&apos;ve worked on recently.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="flex flex-col h-full bg-card-obsidian/40 border border-border-obsidian overflow-hidden group hover:border-brand-violet/50 hover:shadow-lg hover:shadow-brand-violet/5 transition-all duration-300 rounded-xl">
                                <Link href={`/projects/${project.slug}`}>
                                    <div className="relative aspect-video w-full bg-bg-obsidian overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-zinc-600 group-hover:scale-105 transition-transform duration-500">
                                            <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                </Link>
                                <CardHeader>
                                    <CardTitle className="text-xl text-white">
                                        <Link href={`/projects/${project.slug}`} className="hover:underline">
                                            {project.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription className="text-zinc-400">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="text-zinc-300 border-border-obsidian bg-bg-obsidian/50 hover:border-brand-violet/30 hover:text-brand-violet transition-colors">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col gap-4 border-t border-border-obsidian/45 pt-4">
                                    <div className="flex w-full gap-4">
                                        <Link
                                            href={project.links.demo}
                                            target="_blank"
                                            className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full bg-gradient-to-r from-brand-violet to-brand-indigo hover:from-brand-violet/90 hover:to-brand-indigo/90 text-white border-0 shadow-md shadow-brand-violet/15 transition-all duration-300")}
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </Link>
                                    </div>
                                    <div className="flex w-full gap-4">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "w-full bg-bg-obsidian border border-border-obsidian hover:bg-card-obsidian hover:text-white text-zinc-300 transition-colors duration-300")}
                                        >
                                            Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                        <Link
                                            href={project.links.github}
                                            target="_blank"
                                            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full border-border-obsidian hover:bg-card-obsidian hover:text-white text-zinc-300 transition-colors duration-300")}
                                        >
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Link>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
