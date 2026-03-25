import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
    const containerRef = useRef(null);

    // Create a scroll-based text reveal effect for the massive bio paragraph
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.4"],
    });

    // Background color subtle shift during scroll
    const bgTransform = useTransform(scrollYProgress, [0, 1], ["#0e0e0e", "#131313"]);

    const bioText = "I engineer robust backends and integrate AI/ML models to create intelligent, scalable applications that feel human. Currently pursuing CS at BITS Pilani & Scaler, I bridge the gap between complex algorithms and elegant design.";

    // Split text into words for staggered reveal
    const words = bioText.split(" ");

    return (
        <motion.div
            ref={containerRef}
            style={{ backgroundColor: bgTransform }}
            className="py-32 rounded-[40px] px-4 sm:px-10 transition-colors duration-300"
        >
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                {/* Left Col - Header */}
                <div className="md:w-1/3">
                    <p className={styles.sectionSubText}>Philosophy</p>
                    <h2 className={styles.sectionHeadText}>Code &</h2>
                    <h2 className={`${styles.sectionHeadText} text-secondary italic font-light ml-[10%]`}>
                        Creation.
                    </h2>

                    <div className="mt-16 flex flex-col gap-6">
                        <div className="w-full h-[1px] bg-light/10"></div>
                        <div className="flex justify-between items-center text-sm font-sans tracking-widest uppercase text-secondary">
                            <span>Stack</span>
                            <span className="text-light">Java, React, Node</span>
                        </div>
                        <div className="w-full h-[1px] bg-light/10"></div>
                        <div className="flex justify-between items-center text-sm font-sans tracking-widest uppercase text-secondary">
                            <span>Focus</span>
                            <span className="text-light">AI / ML / Backend</span>
                        </div>
                        <div className="w-full h-[1px] bg-light/10"></div>
                    </div>

                    {/* Portrait Container */}
                    <div className="mt-20 w-full max-w-[320px] aspect-[4/5] overflow-hidden relative group">
                        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <img
                            src="/jenil.jpg"
                            alt="Jenil Langaliya"
                            className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right Col - Massive Text Reveal */}
                <div className="md:w-3/5">
                    <p className="font-display font-semibold text-[32px] sm:text-[45px] lg:text-[60px] leading-[1.1] tracking-[-0.02em] flex flex-wrap gap-x-3 gap-y-2">
                        {words.map((word, i) => {
                            // Calculate opacity based on progress
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

                            return (
                                <motion.span key={i} style={{ opacity }} className="text-light">
                                    {word}
                                </motion.span>
                            );
                        })}
                    </p>

                    <div className="mt-20 flex gap-4">
                        <div className="magnetic-wrap">
                            <a
                                href="#contact"
                                className="magnetic-item px-8 py-4 rounded-full border border-light text-light font-sans font-medium text-sm hover:bg-light hover:text-primary transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                        <div className="magnetic-wrap">
                            <a
                                href="#work"
                                className="magnetic-item px-8 py-4 rounded-full bg-light text-primary font-sans font-medium text-sm hover:scale-105 transition-transform"
                            >
                                See Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SectionWrapper(About, "about");
