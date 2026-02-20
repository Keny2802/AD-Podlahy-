import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type GridType = {
    className?: string;
    children: ReactNode;
};

const Grid = ({ ...props }: GridType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, `grid gap-2 md:gap-3 lg:gap-4`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Grid;