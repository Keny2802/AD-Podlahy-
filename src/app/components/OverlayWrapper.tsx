import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type OverlayWrapperType = {
    className?: string;
    position?: string;
    children?: ReactNode;
};

const OverlayWrapper = ({ ...props }: OverlayWrapperType) => {
    const {
        className,
        position,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, position ? position : "inset-0" , "absolute text-center flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4 overlay-wrapper-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default OverlayWrapper;