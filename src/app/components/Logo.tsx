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

type FillType = {
    fill: boolean;
};

type SizeType = {
    width?: number;
    height?: number;
};

type LogoType = {
    className?: string;
    children?: ReactNode;
} & SizeType;
// & (SizeType | FillType);
// & (SizeType | FillType);

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
                {
                    width: 200,
                    height: 200,
                    className: "max-w-[200px] max-h-[200px]"
                }
                : { width: width, height: height }
                }
                src="/fota/logo/logo-bez-pozadi.jpg"
                alt="Logo AD Podlahy"
                loading="eager"
                className={clsx(className, "block min-w-[200px] max-w-full h-auto logo-component")}
                {...props}
                />
            </Link>
        </Fragment>
    );
};

export default Logo;