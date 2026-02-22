import {
    ReactNode,
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

type DottedButtonType = {
    className?: string;
    href: string;
    children: ReactNode;
};

const DottedButton = ({ ...props }: DottedButtonType) => {
    const {
        className,
        href,
        children
    } = props;

    return (
        <Fragment>
            <Link
            href={href}
            target="_blank"
            className={clsx(className, "rounded-2xl border-2 border-black bg-[#c72026] text-white p-3 md:p-4 lg:p-4.5 font-semibold transition-all duration-300 ease-in-out hover:translate-x-[4px] hover:translate-y-[4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none dotted-button-component")}>
                {children}
            </Link>
        </Fragment>
    );
};

export default DottedButton;