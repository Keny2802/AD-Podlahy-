import {
  ReactNode,
  Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

type CtaType = {
    className?: string;
    color: string;
    href: string;
    onClick?: (eventType: any) => void;
    children?: ReactNode;
};

const Cta = ({ ...props }: CtaType) => {
    const {
        className,
        color,
        href,
        onClick,
        children
    } = props;

    return (
        <Fragment>
            <Link
            href={href}
            onClick={onClick}
            className={clsx(className, color, "w-full md:min-w-[200px] p-2.5 md:p-3 lg:p-4 rounded-md cta-component")}>
                {children}
            </Link>
        </Fragment>
    );
};

export default Cta;