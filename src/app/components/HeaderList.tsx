import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type HeaderListType = {
    className?: string;
    children: ReactNode;
};

const HeaderList = ({ ...props }: HeaderListType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <ul className={clsx(className, "header-list")}>
                {children}
            </ul>
        </Fragment>
    );
};

export default HeaderList;