"use client";

import {
    Fragment
} from "react";
import Link from "next/link";

import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import Img from "../components/Img";
import Wrapper from "../components/Wrapper";
import OverlayWrapper from "../components/OverlayWrapper";
import Padding from "../components/Padding";
import HeroHeading from "../components/HeroHeading";
import HeroSubheading from "../components/HeroSubheading";
import YAnimation from "../components/YAnimation";
import YouTube from "../components/Youtube";
import HashLess from "../components/HashLess";

const Hero = () => {
    return (
        <Fragment>
            <RelativeOverlayWrapper className="w-full min-h-screen text-white">
                <Img
                    fill={true}
                    // src="/fota/sekce/hero/transformers.avif"
                    // src="/fota/galerie/foto-galerie-1.avif"
                    src="/fota/sekce/hero/hero.jpeg"
                    alt="Komplexní služby, vše kolem betonu"
                    className="object-cover"
                />
                <Wrapper className="absolute inset-0 bg-black/30"></Wrapper>
                <Padding>
                    <OverlayWrapper className="justify-center">
                        <Padding>
                            <HeroHeading className="uppercase">
                                Komplexní služby, vše kolem betonu
                            </HeroHeading>
                            <HeroSubheading className="mt-4">
                                Specializujeme se na dovoz a čerpání betonových směsí včetně realizace litých podlah.
                            </HeroSubheading>
                        </Padding>
                        <Wrapper className="p-2.5 md:p-3 lg:p-4 w-full md:w-max flex justify-center items-center flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
                            {[
                                {
                                    href: "https://youtube.com/@adpodlahy",
                                    text: "Podívat se naše videa"
                                },
                                {
                                    href: "kontakt",
                                    text: "Domluvit Konzultaci"
                                },
                            ].map((card, index) => {
                                const {
                                    href,
                                    text
                                } = card;

                                return (
                                    <Fragment key={index}>
                                        <YAnimation className="w-full md:min-w-[200px] rounded-2xl whitespace-nowrap p-3 md:p-4 lg:p-6 first:bg-[#c72026] last:bg-[#270c86] cursor-pointer cta-component">
                                            <Link
                                                href={href}
                                                target={index === 0 ? "_blank" : "false"}
                                                onClick={(e) => {
                                                    index === 1 && HashLess(e, href)
                                                }}>
                                                {
                                                    index === 0 ? (
                                                        <Fragment>
                                                            <Wrapper className="flex justify-center items-center gap-2 md:gap-2.5 lg:gap-3">
                                                                <YouTube />
                                                                {text}
                                                            </Wrapper>
                                                        </Fragment>
                                                    ) : (
                                                        <Fragment>
                                                            {text}
                                                        </Fragment>
                                                    )
                                                }
                                            </Link>
                                        </YAnimation>
                                    </Fragment>
                                );
                            })}
                        </Wrapper>
                    </OverlayWrapper>
                </Padding>
            </RelativeOverlayWrapper>
        </Fragment>
    );
};

export default Hero;