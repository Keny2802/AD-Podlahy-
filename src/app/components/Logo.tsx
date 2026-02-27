"use client";

import {
    ReactNode,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type LogoType = {
    className?: string;
    width?: number;
    height?: number;
    children?: ReactNode;
};

const Logo = ({ ...props }: LogoType) => {
    const {
        className,
        width,
        height
    } = props;

    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <Fragment>
            <Link
            href={isHome ? "" : "/"}>
                <Image
                {
                ...(!width && !height) ?
                { width: 200, height: 200 }
                : { width: width, height: height }
                }
                src="/fota/logo/logo-bez-pozadi.jpg"
                alt="Logo AD Podlahy"
                className={clsx(className, "block max-w-full w-[200px] h-auto logo-component")}
                />
            </Link>
        </Fragment>
    );
};

export default Logo;