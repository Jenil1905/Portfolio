import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth trailing physics using Framer Motion springs
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovered, setIsHovered] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Disable custom cursor on mobile touch devices
        if (window.innerWidth <= 768 || 'ontouchstart' in window) {
            setIsMobile(true);
            return;
        }

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        const handleMouseLeave = () => setHidden(true);
        const handleMouseEnter = () => setHidden(false);

        // Detect hover over clickable elements to grow the cursor
        const handleEleHover = () => setIsHovered(true);
        const handleEleLeave = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        // Attach listeners to all interactive elements
        const addListeners = () => {
            const interactables = document.querySelectorAll('a, button, input, textarea, select, .magnetic-wrap');
            interactables.forEach((el) => {
                el.addEventListener("mouseenter", handleEleHover);
                el.addEventListener("mouseleave", handleEleLeave);
            });
            return interactables;
        };

        // MutationObserver to attach listeners to dynamically rendered elements (like React router pages)
        const observer = new MutationObserver(() => addListeners());
        observer.observe(document.body, { childList: true, subtree: true });

        const interactables = addListeners();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            observer.disconnect();
            interactables.forEach((el) => {
                el.removeEventListener("mouseenter", handleEleHover);
                el.removeEventListener("mouseleave", handleEleLeave);
            });
        };
    }, [cursorX, cursorY]);

    if (isMobile) return null;

    return (
        <motion.div
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                opacity: hidden ? 0 : 1,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center`}
        >
            <motion.div
                animate={{
                    scale: isHovered ? 3.5 : 1,
                    backgroundColor: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,1)",
                }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                className="w-full h-full rounded-full"
            />
        </motion.div>
    );
};
