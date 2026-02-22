import {
  Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

type ImageType = {
    className?: string;
    id?: string
    fill?: boolean;
    width?: number;
    height?: number;
    src: string;
    alt: string;
    loading?: "eager" | "lazy";
    style?: React.CSSProperties;
    draggable?: boolean;

    onClick?: () => void;
    onLoad?: () => void;
};

const Img = ({ ...props }: ImageType) => {
    const {
        className,
        id,
        fill,
        width,
        height,
        src,
        alt,
        loading,
        style,
        draggable,

        onClick,
        onLoad
    } = props;

    return (
        <Fragment>
            <Image
            {...(fill ?
                { fill: true } : { width, height }
            )}
            src={src}
            alt={alt}
            {
                ...(
                    loading ?
                    { loading: loading } : { loading: "lazy" }
                )
            }
            style={style}
            draggable={draggable}

            onClick={onClick}
            onLoad={onLoad}

            id={id}
            className={clsx(className, "image-component")}
            />
        </Fragment>
    );
};

export default Img;