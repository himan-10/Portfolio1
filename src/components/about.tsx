"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  "C",
  "C++",
  "Java",

  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "Tailwind CSS",
  "React.js",

  "Node.js",
  "Express.js",

  "MongoDB",
  "SQL",

  "JWT Authentication",
  "WebSocket",
  "Socket.IO",

  "Firebase",
  "Razorpay",

  "Data Structures & Algorithms",
  "Problem Solving",

  "Git",
  "GitHub",
  "Postman",
  "VS Code"
];

export function About() {
    return (
        <section id="about" className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-24 md:flex-row">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
            >
                <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-brand-violet via-brand-indigo to-brand-fuchsia shadow-xl shadow-brand-violet/10 max-w-md aspect-square w-full overflow-hidden">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-bg-obsidian">
                       <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-full f-full  object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col gap-6"
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Me
                </h2>
                <p className="text-lg text-zinc-400">
                    I am a dedicated developer with a passion for building scalable and user-friendly applications.
                    With a strong foundation in modern web technologies, I strive to create digital solutions that solve real-world problems.
                </p>
                <p className="text-lg text-zinc-400">
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
                </p>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-md py-1.5 px-3 border border-border-obsidian bg-card-obsidian text-zinc-300 hover:border-brand-violet/30 hover:text-brand-violet transition-colors duration-300">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
