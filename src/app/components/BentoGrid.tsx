import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type BentoGridType = {
    className?: string;
    children: ReactNode;
};

const BentoGrid = ({ ...props }: BentoGridType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "grid  bento-grid-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default BentoGrid;