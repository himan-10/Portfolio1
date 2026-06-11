"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    

];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md shadow-lg"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                                isActive ? "text-white" : "text-zinc-400"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
            </motion.nav>
        </header>
    );
}
