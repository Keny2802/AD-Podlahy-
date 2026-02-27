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
import DottedButton from "../components/DottedButton";

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
                        <Wrapper className="p-2.5 md:p-3 lg:p-4 w-full max-w-[500px] md:w-max flex justify-center items-center flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
                            <DottedButton
                            href="https://youtube.com/@adpodlahy"
                            className="w-full md:min-w-[300px] flex justify-center items-center gap-2 md:gap-2.5 lg:gap-3">
                                <YouTube />
                                Podívat se na naše videa
                            </DottedButton>
                            <YAnimation className="w-full md:min-w-[300px] rounded-2xl p-3 md:p-4 lg:p-4.5 bg-[#270c86] text-center font-semibold cursor-pointer cta-component">
                                <Link
                                href="#kontakt"
                                onClick={(e) => HashLess(e, "kontakt")}
                                className="text-white">
                                    Domluvit Konzultaci
                                </Link>
                            </YAnimation>
                        </Wrapper>
                    </OverlayWrapper>
                </Padding>
            </RelativeOverlayWrapper>
        </Fragment>
    );
};

export default Hero;