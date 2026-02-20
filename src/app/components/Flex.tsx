import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type FlexType = {
    className?: string;
    justify?: "justify-center" | "justify-between" | "justify-evenly";
    items?: "items-center" | "items-start";
    gap?: 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 | 6 | 6.5 | 7 | 7.5 | 8;
    children: ReactNode;
};

const Flex = ({ ...props }: FlexType) => {
    const {
        className,
        justify,
        items,
        gap,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, justify && justify, items && items,  `flex md:flex-row flex-component`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Flex;