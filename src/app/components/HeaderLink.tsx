import {
    ReactNode,
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

type HeaderLinkType = {
    className?: string;
    href: string;
    onClick?: () => void;
    children: ReactNode;
};

const HeaderLink = ({ ...props }: HeaderLinkType) => {
    const {
        className,
        href,
        onClick,
        children
    } = props;

    return (
        <Fragment>
            <Link
            href={href}
            className={clsx(className, "header-link")}
            onClick={onClick}>
                {children}
            </Link>
        </Fragment>
    );
};

export default HeaderLink;