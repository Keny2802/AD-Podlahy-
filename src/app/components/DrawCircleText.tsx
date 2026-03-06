"use client";

import {
    ReactNode,
    useState,
    useEffect,
    Fragment
} from "react";
import {
    Variants,
    motion
} from "motion/react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type props = {
    className?: string;
    children: ReactNode;
};

const DrawCircleText: React.FC<props> = (props) => {
    const [isTextShow, setTextShow] = useState<boolean>(false);
    const { className, children } = props;

    const TIMEOUT_TIME = 2000;

    const variants = {
        initial: {
            pathLength: 0,
        },
        animate: {
            pathLength: 1
        }
    } as Variants;

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isTextShow) {
                setTextShow(true);
            };
        }, TIMEOUT_TIME)

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Fragment>
            {/* <Wrapper className="grid place-content-center text-[#c72026]"></Wrapper> */}
            {
                isTextShow && (
                    <span className={clsx(className, "relative draw-circle-text-component")}>
                    {children}
                    <svg
                    viewBox="0 0 286 73"
                    fill="none"
                    className="absolute -top-2 -right-2 bottom-0 -left-2 translate-y-1">
                        <motion.path
                        initial="initial"
                        animate="animate"
                        variants={variants}
                        transition={{
                            duration: 1.25,
                            ease: "easeInOut"
                        }}
                        d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                        stroke="#c72026"
                        strokeWidth={3}
                        />
                    </svg>
                </span>
                    )
                }
        </Fragment>
    );
};

export default DrawCircleText;