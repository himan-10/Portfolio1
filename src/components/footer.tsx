"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-zinc-800 bg-black py-8 text-center text-sm text-zinc-500"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© {new Date().getFullYear()} Himanshu Portfolio. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-zinc-300 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-zinc-300 transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </motion.footer>
    );
}
