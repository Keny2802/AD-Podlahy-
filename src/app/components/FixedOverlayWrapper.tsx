import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type FixedOverlayWrapper = {
    className?: string;
    children: ReactNode;
};

const FixedOverlayWrapper = ({ ...props }: FixedOverlayWrapper) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "fixed inset-0 w-full fixed-overlay-wrapper-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default FixedOverlayWrapper;