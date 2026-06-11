"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // We might need to create this if it doesn't exist, but standard HTML input works for now if not. I will use standard for now to be safe or check later. Actually, I should inspect if I have it. I'll stick to standard HTML styled with tailwind for now to avoid dependency issues if Input isn't there.
import { Textarea } from "@/components/ui/textarea"; // Same here.
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="container mx-auto px-4 py-24">
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-12"
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Get in Touch
                    </h2>
                    <p className="max-w-[42rem] leading-normal text-zinc-400 sm:text-xl sm:leading-8">
                        Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }} className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-brand-violet/15 to-brand-indigo/15 border border-brand-violet/25 text-brand-violet">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">Email</h3>
                                <p className="text-zinc-400">himanshupatle@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-brand-violet/15 to-brand-indigo/15 border border-brand-violet/25 text-brand-violet">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">Phone</h3>
                                <p className="text-zinc-400">+91 8103498052</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-brand-violet/15 to-brand-indigo/15 border border-brand-violet/25 text-brand-violet">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">Location</h3>
                                <p className="text-zinc-400">Bhopal MadhayPradesh</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form (Visual Only) */}
                    <motion.div variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }} className="flex flex-col gap-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                                <input id="name" type="text" className="rounded-md border border-border-obsidian bg-card-obsidian/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-brand-violet focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                                <input id="email" type="email" className="rounded-md border border-border-obsidian bg-card-obsidian/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-brand-violet focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                            <textarea id="message" rows={4} className="rounded-md border border-border-obsidian bg-card-obsidian/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-brand-violet focus:outline-none transition-colors" placeholder="Your message..." />
                        </div>
                        <Button className="w-full sm:w-auto bg-gradient-to-r from-brand-violet to-brand-indigo hover:from-brand-violet/90 hover:to-brand-indigo/90 text-white border-0 shadow-lg shadow-brand-violet/20 transition-all duration-300">Send Message</Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
