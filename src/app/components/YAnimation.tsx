"use client";

import {
    ReactNode,
    Fragment
} from "react";
import {
    motion
} from "motion/react";
import clsx from "clsx";

const initial = {
    y: 0,
};

const whileHover = {
    y: -12,
};

type YAnimationType = {
    className?: string;
    id?: string;
    children: ReactNode;
};

const YAnimation = ({ ...props }: YAnimationType) => {
    const {
        className,
        id,
        children
    } = props;

    return (
        <Fragment>
            <motion.div
            initial={initial}
            whileHover={{
                ...whileHover,
                transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    ease: [0.22, 1, 0.36, 1]
                }
            }}
            className={clsx(className, "y-animation-component")}
            id={id}>
                {children}
            </motion.div>
        </Fragment>
    );
};

export default YAnimation;