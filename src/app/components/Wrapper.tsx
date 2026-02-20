import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

type WrapperType = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: WrapperType) => {
    const {
        className,
        id,
        style,
        onClick,
        children
    } = props;

    return (
        <Fragment>
            <div
            className={clsx(className, "wrapper-component")}
            id={id}
            style={style}
            onClick={onClick}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;