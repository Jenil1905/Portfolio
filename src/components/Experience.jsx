import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const experiences = [
    {
        title: "B.Sc. in Computer Science",
        company_name: "BITS Pilani",
        date: "August 2024 — Present",
        points: [
            "Pursuing Bachelor of Science in Computer Science.",
            "Focusing on core CS fundamentals, algorithms, and systems design.",
        ],
    },
    {
        title: "Undergraduate Program",
        company_name: "Scaler School of Technology",
        date: "August 2024 — Present",
        points: [
            "Specialized program in Computer Science & Software Engineering.",
            "Hands-on learning with industry-relevant projects.",
            "Developing skills in Backend systems and Full Stack development.",
        ],
    },
];

const ExperienceItem = ({ experience, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1.2", "1 1"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity }}
            className="flex flex-col md:flex-row gap-8 md:gap-20 py-16 border-b border-light/10 relative group"
        >
            {/* Date & Hover Decorator */}
            <div className="md:w-1/4 flex flex-col justify-between relative">
                {/* Animated dot that appears on hover */}
                <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-sans text-sm tracking-[0.2em] uppercase text-secondary group-hover:text-light transition-colors duration-300">
                    {experience.date}
                </span>
            </div>

            {/* Content */}
            <div className="md:w-3/4 flex flex-col">
                <h3 className="font-display font-semibold text-[32px] md:text-[48px] leading-tight text-light group-hover:text-accent transition-colors duration-300">
                    {experience.title}
                </h3>
                <p className="font-sans font-medium text-[16px] md:text-[20px] text-light mt-2 mb-8">
                    {experience.company_name}
                </p>

                <ul className="space-y-4 max-w-2xl">
                    {experience.points.map((point, i) => (
                        <li
                            key={i}
                            className="font-sans text-[15px] leading-[1.8] text-secondary group-hover:text-light/80 transition-colors duration-300"
                        >
                            <span className="text-accent mr-3">—</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <div className="py-20 max-w-6xl mx-auto w-full">
            <div className="mb-24 flex flex-col items-start px-4 sm:px-10">
                <p className={styles.sectionSubText}>The Journey</p>
                <h2 className={styles.sectionHeadText}>Academic Track</h2>
                <h2 className={`${styles.sectionHeadText} text-secondary italic font-light ml-[5%] md:ml-[10%]`}>
                    & Experience.
                </h2>
            </div>

            <div className="flex flex-col px-4 sm:px-10">
                <div className="w-full h-[1px] bg-light/10" />
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} experience={exp} index={index} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, "experience");
