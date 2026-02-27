"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    Variants,
    motion
} from "motion/react";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import MarginTop from "./MarginTop";

const variants = {
    initial: {
        scaleY: 0.5,
        opacity: 0,
    },

    animate: {
        scaleY: 1,
        opacity: 1,

        transition: {
            staggerChildren: 0.25,
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "circIn",
        },
    },
} as Variants;

const BarLoader = () => {
    const [isLoading, setLoading] = useState<boolean>(true);

    const TIMEOUT = 5000;

    useEffect(() => {
        const body = document.body;

        if (isLoading) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        };

        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, TIMEOUT);

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <Fragment>
            {
                isLoading && (
                    <Wrapper className="bg-white w-full h-screen fixed inset-0 z-[100] grid place-content-center px-4 py-24">
                        <Logo
                        width={350}
                        height={350}
                        />
                        <Bars />
                    </Wrapper>
                )
            }
        </Fragment>
    );
};

const Bars = () => {
    return (
        <Fragment>
            <MarginTop>
                <motion.div
                initial="initial"
                animate="animate"
                className="flex justify-center items-center gap-1">
                    <motion.div variants={variants} className="w-4 h-12 bg-[#c72026]"></motion.div>
                    <motion.div variants={variants} className="w-4 h-12 bg-[#270c86]"></motion.div>
                    <motion.div variants={variants} className="w-4 h-12 bg-[#c72026]"></motion.div>
                    <motion.div variants={variants} className="w-4 h-12 bg-[#270c86]"></motion.div>
                    <motion.div variants={variants} className="w-4 h-12 bg-[#c72026]"></motion.div>
                </motion.div>
            </MarginTop>
        </Fragment>
    );
};

export default BarLoader;