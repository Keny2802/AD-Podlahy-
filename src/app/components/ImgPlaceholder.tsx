"use client";

import {
    useState,
    useEffect,
    Fragment,
} from "react";
import Image from "next/image";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type ImgPlaceholderType = {
    fill?: boolean,
    width?: number,
    height?: number,
    src: string;
    alt: string;
    className?: string;
};

const ImgPlaceholder = ({ ...props }: ImgPlaceholderType) => {
    const {
        fill,
        width,
        height,
        src,
        alt,
        className
    } = props;
    const [isLoaded, setLoaded] = useState<boolean>(false);
    // const [error, setError] = useState<boolean>(false);


    useEffect(() => {
        const body = document.body;

        if (isLoaded) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        };
    }, [isLoaded]);

    return (
        <Fragment>
            <Wrapper className="relative w-full min-h-[80vh] flex justify-center items-center">
                {
                    !isLoaded && (
                        <Wrapper className="absolute inset-0 bg-gray-200 z-0 animate-pulse rounded-lg"></Wrapper>
                        // <Wrapper className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></Wrapper>
                        // <Wrapper className="animate-pulse blur-lg scale-105 transition-colors duration-500 ease-in-out"></Wrapper>
                    )
                }
                <Wrapper className="absolute inset-0 bg-black/70"></Wrapper>

                <Image
                    width={800}
                    height={800}
                    src={src}
                    alt={alt}
                    onLoad={() => setLoaded(true)}
                    // className={clsx(isLoaded ? "blur-none scale-100" : "blur-lg scale-105", "transition-colors duration-500 ease-in-out image-placeholder-component", className)}
                    className={clsx(className, "relative z-10 w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain image-placeholder-component")}
                />
                {/* <Wrapper className="absolute inset-0 bg-black/70 flex justify-center items-center">
                    <Image
                        width={800}
                        height={800}
                        src={src}
                        alt={alt}
                        onLoad={() => setLoaded(true)}
                        // className={clsx(isLoaded ? "blur-none scale-100" : "blur-lg scale-105", "transition-colors duration-500 ease-in-out image-placeholder-component", className)}
                        className={clsx(className, "relative z-10 w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain image-placeholder-component")}
                    />
                </Wrapper> */}
            </Wrapper>
        </Fragment>
    );
};

export default ImgPlaceholder;