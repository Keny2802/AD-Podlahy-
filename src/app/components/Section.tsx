import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Padding from "./Padding";

type SectionType = {
    className?: string;
    color: "primary" | "secondary";
    children: ReactNode;
};

const Section = ({ ...props }: SectionType) => {
    const {
        className,
        color,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, color === "primary" ? "bg-[#270c86] text-white" : "bg-white text-black", "section-component")}>
                <Padding>
                    {children}
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default Section;