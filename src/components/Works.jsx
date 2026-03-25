import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import intervue from "../assets/intervue.png";
import flickverse from "../assets/flickverse.png";
import nexusai from "../assets/nexusai.png";

const projects = [
    {
        name: "Nexus AI",
        roles: ["AI Integration"],
        year: "2026",
        image: nexusai,
        link: "https://nexus-ai-eight-lyart.vercel.app/",
    },
    {
        name: "Intervue",
        roles: ["Full Stack"],
        year: "2025",
        image: intervue,
        link: "https://intervue-frontend-ten.vercel.app/",
    },
    {
        name: "FlickVerse",
        roles: ["React", "UI/UX"],
        year: "2024",
        image: flickverse,
        link: "https://flick-verse-seven.vercel.app",
    },
];

const ProjectItem = ({ project, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.3 1"]
    });

    // Parallax the image slightly inside its container
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
            className="group relative w-full mb-32 last:mb-0 cursor-pointer"
            onClick={() => window.open(project.link, "_blank")}
        >
            {/* Editorial Title Block */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 z-10 relative">
                <h3 className="font-display font-bold text-[40px] md:text-[80px] leading-none text-light group-hover:text-accent transition-colors duration-500">
                    {project.name}
                </h3>
                <div className="flex gap-6 text-secondary font-sans text-sm tracking-widest uppercase mt-4 md:mt-0">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
                        View Project ↗
                    </span>
                    <span>{project.roles.join(" / ")}</span>
                    <span>{project.year}</span>
                </div>
            </div>

            {/* Massive Image Container with Parallax inner image */}
            <div className="w-full h-[50vh] md:h-[80vh] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img
                    style={{ y, scale: 1.1 }}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover origin-center transition-transform duration-700 group-hover:scale-100 filter grayscale group-hover:grayscale-0"
                />
            </div>

            {/* Decorative Line */}
            <div className="w-full h-[1px] bg-light/10 mt-12 transform origin-left group-hover:scale-x-100 transition-transform duration-700" />
        </motion.div>
    );
};

const Works = () => {
    return (
        <div className="py-20">
            <div className="mb-32">
                <p className={styles.sectionSubText}>Selected Work</p>
                <h2 className={styles.sectionHeadText}>Featured</h2>
                <h2 className={`${styles.sectionHeadText} text-secondary italic font-light ml-[10%]`}>
                    Projects.
                </h2>
            </div>

            <div className="flex flex-col w-full">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} index={index} />
                ))}
            </div>

            {/* "More work" CTA */}
            <div className="mt-32 flex justify-center">
                <div className="magnetic-wrap">
                    <a
                        href="https://github.com/Jenil1905"
                        target="_blank"
                        rel="noreferrer"
                        className="magnetic-item w-40 h-40 rounded-full border border-light/20 flex flex-col items-center justify-center gap-2 hover:bg-light hover:text-primary transition-all duration-500 group"
                    >
                        <span className="font-sans font-medium text-sm tracking-widest uppercase">Archive</span>
                        <span className="font-display font-bold text-2xl group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Works, "work");
