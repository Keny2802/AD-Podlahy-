import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type FlexColType = {
    className?: string;
    justify?: "justify-center" | "justify-between" | "justify-evenly";
    items?: "items-center" | "items-start";
    gap?: 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 | 6 | 6.5 | 7 | 7.5 | 8;
    children: ReactNode;
};

const FlexCol = ({ ...props }: FlexColType) => {
    const {
        className,
        justify,
        items,
        gap,
        children
    } = props;

    // const gapClassName = {
    //     2: "gap-2",
    //     2.5: "gap-2.5",
    //     3: "gap-3",
    //     3.5: "gap-3.5",
    //     4: "gap-4",
    //     4.5: "gap-4.5",
    //     5: "gap-5",
    //     5.5: "gap-5.5",
    //     6: "gap-6",
    //     6.5: "gap-6.5",
    //     7: "gap-7",
    //     7.5: "gap-7.5",
    //     8: "gap-8"
    // }[gap] as string;

    return (
        <Fragment>
            <Wrapper className={clsx(className, justify && justify, items && items, `flex flex-col`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default FlexCol;