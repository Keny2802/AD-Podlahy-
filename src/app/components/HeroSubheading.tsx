import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type HeroSubheadingType = {
    className?: string;
    children?: ReactNode;
};

const HeroSubheading = ({ ...props }: HeroSubheadingType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <p className={clsx(className, "text-base md:text-[16.5px] lg:text-[17px] hero-subheading-component")}>
                {children}
            </p>
        </Fragment>
    );
};

export default HeroSubheading;