"use client";

import {
    ReactNode,
    useState,
    useEffect,
    Fragment
} from "react";
import {
    useScroll,
    useMotionValueEvent,
    motion
} from "motion/react";
import {
    HeaderSet
} from "./HeaderSet";
import {
    Menu,
    Minus
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Padding from "./Padding";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

type HeaderType = {
    className?: string;
    children?: ReactNode;
};

const Header = ({ ...props }: HeaderType) => {
    const {
        className,
        children
    } = props;

    const [isHidden, setToHidden] = useState<boolean>(false);
    const {
        scrollY
    } = useScroll();
    const animate = {
        y: isHidden ? -140 : 0,
        opacity: isHidden ? 0 : 1
    };

    const [isMobileMenuClicked, setMobileMenuClicked] = useState<boolean>(false);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (current > previous && current > 150) {
            setToHidden(true);
        } else {
            setToHidden(false);
        };
    });

    useEffect(() => {
        const isHeaderScrolled = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            };
        };

        window.addEventListener("scroll", isHeaderScrolled);

        return () => {
            window.removeEventListener("scroll", isHeaderScrolled);
        };
    }, []);

    return (
        <Fragment>
            {/* fixed top-0 left-0 ${isScrolling && "bg-white shadow-md"} */}
            <motion.header
            animate={{
                ...animate,
                position: isScrolling ? "fixed" : "static",
                top: 0,
                left: 0
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            className={clsx(className, `bg-white shadow-md border-b border-gray-200 w-full z-50 header-component`)}>
                <Padding>
                    <Wrapper className="flex justify-between items-center gap-2 md:gap-3 lg:gap-4">
                        <Logo/>
                        <ul className="header-list hidden md:flex justify-between items-center flex-wrap gap-2 md:gap-3 lg:gap-4">
                            {
                                HeaderSet.map((headerItem, index) => {
                                    return (
                                        <li
                                        key={index}
                                        className="text-black list-none header-item">
                                            <Link
                                            href={headerItem.href}>
                                                {headerItem.text}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        {
                            isMobileMenuClicked ? (
                                <Minus
                                aria-label="Zavřít menu"
                                role="button"
                                className={clsx("text-black inline-block md:hidden cursor-pointer mobile-icon")}
                                onClick={() => {
                                    setMobileMenuClicked(false);
                                }}/>
                            ) : (
                                <Menu
                                aria-label="Otevřít menu"
                                role="button"
                                className={clsx("text-black inline-block md:hidden cursor-pointer mobile-icon")}
                                onClick={() => {
                                    setMobileMenuClicked(prev => !prev);
                                }}/>
                            )
                        }
                        {children}
                    </Wrapper>
                </Padding>
            </motion.header>
            {/* {isMobileMenuClicked && (
                <MobileMenu
                isMobileMenuClicked={isMobileMenuClicked}
                setMobileMenuClicked={setMobileMenuClicked}
                />
            )} */}
            <MobileMenu
            isMobileMenuClicked={isMobileMenuClicked}
            setMobileMenuClicked={setMobileMenuClicked}
            />
        </Fragment>
    );
};

export default Header;