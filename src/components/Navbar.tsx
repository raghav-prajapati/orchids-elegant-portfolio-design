"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md border-b border-zinc-100"
    >
      <Link href="/" className="text-xl font-serif font-bold tracking-tighter text-black">
        RP<span className="text-brown">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-sans uppercase tracking-widest text-zinc-500 hover:text-brown transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button className="px-6 py-2 border border-brown text-brown text-sm uppercase tracking-widest hover:bg-brown hover:text-white transition-all duration-500">
        Resume
      </button>
    </motion.nav>
  );
}
