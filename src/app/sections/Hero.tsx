"use client";

import {
    Fragment
} from "react";

import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import Img from "../components/Img";
import Wrapper from "../components/Wrapper";
import OverlayWrapper from "../components/OverlayWrapper";
import Padding from "../components/Padding";
import HeroHeading from "../components/HeroHeading";
import HeroSubheading from "../components/HeroSubheading";
import YAnimation from "../components/YAnimation";
import Cta from "../components/Cta";
import HashLess from "../components/HashLess";

const Hero = () => {
    return (
        <Fragment>
            <RelativeOverlayWrapper className="w-full min-h-screen text-white">
                <Img
                fill={true}
                // src="/fota/sekce/hero/transformers.avif"
                src="/fota/galerie/foto-galerie-1.avif"
                alt="Komplexní služby, vše kolem betonu"
                loading="eager"
                className="object-cover"
                />
                <Wrapper className="absolute inset-0 bg-black/30"></Wrapper>
                <Padding>
                    <OverlayWrapper className="justify-center">
                    <Padding>
                        <HeroHeading className="uppercase">
                            Komplexní služby, vše kolem betonu
                        </HeroHeading>
                        <HeroSubheading>
                            Specializujeme se na dovoz a čerpání betonových směsí včetně realizace litých podlah.
                        </HeroSubheading>
                    </Padding>
                    <Wrapper className="w-full md:w-max flex justify-center items-center flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
                        <YAnimation className="w-full mb-4 md:mb-0">
                            <Cta
                            color="bg-[#c72026]"
                            href="#o-nas"
                            onClick={(event) => HashLess(event, "o-nas")}>
                                Historie firmy
                            </Cta>
                        </YAnimation>
                        <YAnimation className="whitespace-nowrap">
                            <Cta
                            color="bg-[#270c86]"
                            href="#kontakt"
                            onClick={(event) => HashLess(event, "kontakt")}>
                                Domluvit konzultaci
                            </Cta>
                        </YAnimation>
                    </Wrapper>
                </OverlayWrapper>
                </Padding>
            </RelativeOverlayWrapper>
        </Fragment>
    );
};

export default Hero;