import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

type ButtonType = {
    className?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    color: string;
    children?: ReactNode;
};

const Button = ({ ...props }: ButtonType) => {
    const {
        className,
        type,
        disabled,
        color,
        children
    } = props;

    return (
        <Fragment>
            <button
            className={clsx(className, color, "w-full md:min-w-[200px] p-2.5 md:p-3 lg:p-4 rounded-md cursor-pointer button-component")}
            type={type}
            disabled={disabled}
            >
                {children}
            </button>
        </Fragment>
    );
};

export default Button;