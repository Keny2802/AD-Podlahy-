import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type HeaderItemType = {
    className?: string;
    children: ReactNode;
};

const HeaderItem = ({ ...props }: HeaderItemType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <li className={clsx(className, "header-item")}>
                {children}
            </li>
        </Fragment>
    );
};

export default HeaderItem;