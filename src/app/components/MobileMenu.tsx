"use client";

import {
    Fragment,
    useEffect
} from "react";
import {
    HeaderSet
} from "./HeaderSet";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Padding from "./Padding";
import Logo from "./Logo";
import FlexCol from "./FlexCol";
import HeaderList from "./HeaderList";
import HeaderItem from "./HeaderItem";
import HeaderLink from "./HeaderLink";

type MobileMenuType = {
    className?: string;
    isMobileMenuClicked: boolean;
    setMobileMenuClicked: (isMobileMenuClicked: boolean) => void;
};

const MobileMenu = ({ ...props }: MobileMenuType) => {
    const year = new Date().getFullYear();

    const {
        className,
        isMobileMenuClicked,
        setMobileMenuClicked
    } = props;

    useEffect(() => {
        const style = document.body.style;

        if (isMobileMenuClicked) {
            style.overflow = "hidden";
        } else {
            style.overflow = "";
        };
    });

    return (
        <Fragment>
            {
                isMobileMenuClicked && (
                    <Fragment>
                        <Wrapper
                        className="w-full h-full absolute inset-0 z-[40] bg-black/40 cursor-pointer"
                        onClick={() => setMobileMenuClicked(false)}></Wrapper>
                    </Fragment>
                )
            }
            <Wrapper className={clsx(className, isMobileMenuClicked ? "translate-x-0 md:-translate-x-full" : "-translate-x-full", "bg-white shadow-md fixed inset-0 z-[50] w-[320px] h-full transition-transform duration-300 ease-in-out")}>
                <Padding className="min-h-screen flex justify-between flex-col">
                    <Wrapper>
                        <Logo />
                        <FlexCol
                        className="mt-4"
                        gap={6}>
                            <Padding>
                                <HeaderList className="text-black flex flex-col gap-2.5 md:gap-3 lg:gap-4">
                                    {
                                        HeaderSet.map((headerItem, index) => {
                                            return (
                                                <HeaderItem key={index}>
                                                    <HeaderLink href={headerItem.href}>
                                                        {`${headerItem.text}`}
                                                    </HeaderLink>
                                                </HeaderItem>
                                            );
                                        })
                                    }
                                </HeaderList>
                            </Padding>
                        </FlexCol>
                    </Wrapper>
                    <p className="text-black text-center text-sm">
                        Všechna práva Vyhrazena, {year} AD Podlahy | Adam Šimara.
                    </p>
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;