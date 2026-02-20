"use client";

import {
    Fragment
} from "react";
import {
    motion,
    useScroll
} from "motion/react";

const ScrollProgressBar = () => {
    const {
        scrollYProgress
    } = useScroll();

    return (
        <Fragment>
            <motion.div
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                height: 12.5,
                originX: 0,
                backgroundColor: "#00c853",
                zIndex: 60
            }}
            id="scroll-progress-bar-indicator"></motion.div>
        </Fragment>
    );
};

export default ScrollProgressBar;