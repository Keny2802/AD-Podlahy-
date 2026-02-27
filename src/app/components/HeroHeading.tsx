import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type HeroHeadingType = {
    className?: string;
    children?: ReactNode;
};

const HeroHeading = ({ ...props }: HeroHeadingType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <h1 className={clsx(className, "text-4xl md:text-5xl lg:text-[60px] text-center font-black tracking-widest max-w-3xl hero-heading-component")}>
                {children}
            </h1>
        </Fragment>
    );
};

export default HeroHeading;