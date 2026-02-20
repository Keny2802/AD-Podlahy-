import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type PaddingType = {
    className?: string;
    children?: ReactNode;
};

const Padding = ({ ...props }: PaddingType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, String(className).includes("p-") ? className : "p-6 md:p-8 lg:p-12", "padding-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Padding;