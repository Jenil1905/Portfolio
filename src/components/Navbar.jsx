import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full flex items-center fixed top-0 z-50 px-6 sm:px-16 transition-all duration-700 ${scrolled ? "py-4 bg-primary/90 backdrop-blur-md border-b border-light/5" : "py-8 bg-transparent"
                }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Minimal Text Logo */}
                <Link
                    to="/"
                    className="flex items-center"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <span className="font-display font-bold text-[22px] tracking-tight text-light hover-underline">
                        Jenil Langaliya
                    </span>
                    <span className="ml-2 mt-1 text-xs font-sans text-secondary font-medium tracking-widest uppercase hidden sm:block">
                        Folio ©26
                    </span>
                </Link>

                {/* Desktop Magnetic Links */}
                <ul className="list-none hidden md:flex flex-row gap-12 items-center">
                    {navLinks.map((nav) => (
                        <li key={nav.id} className="magnetic-wrap">
                            <a
                                href={`#${nav.id}`}
                                className="magnetic-item font-sans text-[14px] font-medium text-light/80 hover:text-light transition-colors hover-underline"
                            >
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    <li className="magnetic-wrap ml-4">
                        <a
                            href="#contact"
                            className="magnetic-item bg-light text-primary font-sans font-semibold text-[14px] px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
                        >
                            Let's Talk
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger (Minimalist two-line) */}
                <div className="md:hidden flex flex-1 justify-end items-center">
                    <button
                        className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 group"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span
                            className={`block w-6 h-[2px] bg-light transition-transform duration-300 ${toggle ? "rotate-45 translate-y-[8px]" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-light transition-opacity duration-300 ${toggle ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-light transition-transform duration-300 ${toggle ? "-rotate-45 -translate-y-[8px]" : ""
                                }`}
                        />
                    </button>

                    {/* Fullscreen Mobile Menu Overlay */}
                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: "-100%" }}
                                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                                className="fixed inset-0 w-full h-screen bg-primary z-40 flex flex-col justify-center items-center"
                            >
                                <div className="absolute top-8 left-6">
                                    <span className="font-display font-bold text-[22px] tracking-tight text-light">
                                        JL.
                                    </span>
                                </div>

                                <ul className="list-none flex flex-col gap-8 text-center">
                                    {navLinks.map((nav, i) => (
                                        <motion.li
                                            key={nav.id}
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                                            onClick={() => setToggle(false)}
                                        >
                                            <a
                                                href={`#${nav.id}`}
                                                className="font-display font-bold text-[50px] text-light tracking-tight hover:text-accent transition-colors"
                                            >
                                                {nav.title}
                                            </a>
                                        </motion.li>
                                    ))}
                                    <motion.li
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                                        className="mt-8"
                                    >
                                        <a
                                            href="#contact"
                                            className="font-sans font-medium text-[16px] text-primary bg-accent px-8 py-3 rounded-full"
                                        >
                                            Get in touch
                                        </a>
                                    </motion.li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
