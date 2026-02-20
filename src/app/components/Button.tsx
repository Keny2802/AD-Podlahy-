import {
  ReactNode,
  Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonType = {
    className?: string;
    color: string;
    children?: ReactNode;
};

const Button = ({ ...props }: ButtonType) => {
    const {
        className,
        color,
        children
    } = props;

    return (
        <Fragment>
            <button
            className={clsx(className, color, "w-full md:min-w-[200px] p-2.5 md:p-3 lg:p-4 rounded-md cursor-pointer button-component")}>
                {children}
            </button>
        </Fragment>
    );
};

export default Button;