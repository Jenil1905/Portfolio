import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArrowDownward } from "react-icons/md";

const Hero = () => {
    const { scrollY } = useScroll();

    // Parallax effects for text moving at slightly different speeds
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">

            {/* Abstract Background Element (Robin Noguier style minimal 3D/blur) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80vw] max-h-[80vh] z-0 pointer-events-none opacity-40 mix-blend-screen">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-[60vw] h-[60vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(14,14,14,0) 70%)",
                        filter: "blur(60px)",
                    }}
                />
            </div>

            <div className={`${styles.paddingX} max-w-7xl mx-auto w-full z-10 relative`}>
                {/* Top small text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="overflow-hidden mb-6"
                >
                    <p className="font-sans text-accent uppercase tracking-[0.3em] text-sm font-semibold flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-accent inline-block"></span>
                        Creative Developer
                    </p>
                </motion.div>

                {/* Massive Display Title */}
                <div className="flex flex-col relative z-20 mix-blend-difference">
                    <motion.div style={{ y: y1 }}>
                        <motion.h1
                            initial={{ y: "110%", rotate: 2 }}
                            animate={{ y: 0, rotate: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            className={styles.heroHeadText}
                        >
                            Building digital
                        </motion.h1>
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="ml-[10%] sm:ml-[20%] mt-[-2%]">
                        <motion.h1
                            initial={{ y: "110%", rotate: -2 }}
                            animate={{ y: 0, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                            className={`${styles.heroHeadText} text-secondary`}
                        >
                            <span className="italic font-light">experiences.</span>
                        </motion.h1>
                    </motion.div>
                </div>

                {/* Bio Subtext & Links Layout */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-10">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className={styles.heroSubText}
                    >
                        I engineer robust backends and integrate AI/ML models to create
                        intelligent, scalable applications that feel human.
                    </motion.p>

                    {/* Social Magnetic Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex gap-8"
                    >
                        <div className="magnetic-wrap">
                            <a
                                href="https://github.com/Jenil1905"
                                target="_blank"
                                rel="noreferrer"
                                className="magnetic-item w-14 h-14 rounded-full border border-light/20 flex items-center justify-center hover:bg-light hover:text-primary transition-all duration-300"
                            >
                                <FaGithub size={22} />
                            </a>
                        </div>
                        <div className="magnetic-wrap">
                            <a
                                href="https://www.linkedin.com/in/jenil-langaliya-0b072331a/"
                                target="_blank"
                                rel="noreferrer"
                                className="magnetic-item w-14 h-14 rounded-full border border-light/20 flex items-center justify-center hover:bg-light hover:text-primary transition-all duration-300"
                            >
                                <FaLinkedin size={22} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="font-sans text-[10px] uppercase tracking-widest text-secondary rotate-90 mb-6">Scroll</span>
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <MdArrowDownward size={20} className="text-light opacity-50" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
