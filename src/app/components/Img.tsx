import {
  Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

type FillType = {
    fill: true;
};

type SizeType = {
    width: number;
    height: number;
};

type ImageType = {
    className?: string;
    id?: string
    src: string;
    alt: string;
    loading?: "eager" | "lazy";
    style?: React.CSSProperties;
    draggable?: boolean;

    onClick?: () => void;
    onLoad?: () => void;
} & (FillType | SizeType);

const Img = ({ ...props }: ImageType) => {
    const {
        className,
        id,
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
            // {...(fill ?
            //     { fill: true } : { width, height }
            // )}
            // src={src}
            // alt={alt}
            // {
            //     ...(
            //         loading ?
            //         { loading: loading } : { loading: "lazy" }
            //     )
            // }
            // style={style}
            // draggable={draggable}

            // onClick={onClick}
            // onLoad={onLoad}

            // id={id}
            {...props}
            className={clsx(className, "cursor-pointer image-component")}
            />
        </Fragment>
    );
};

export default Img;