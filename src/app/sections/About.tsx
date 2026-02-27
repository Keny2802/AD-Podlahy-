"use client";

import {
    Fragment
} from "react";

import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import Wrapper from "../components/Wrapper";
import Padding from "../components/Padding";
import Flex from "../components/Flex";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import BodyText from "../components/BodyText";
import YAnimation from "../components/YAnimation";
import Img from "../components/Img";
import Cta from "../components/Cta";
import HashLess from "../components/HashLess";

const About = () => {
    return (
        <Fragment>
            <RelativeOverlayWrapper
            id="o-nas"
            className="border-t border-white/25 w-full bg-[#270c86]">
                <Wrapper
                className="absolute inset-0 bg-[#c72026]"
                style={{
                    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
                }}></Wrapper>
                <Padding className="text-white relative z-10">
                    <Padding>
                        <Flex className="w-full justify-center items-center flex-col-reverse lg:flex-row gap-4 md:gap-5 lg:gap-6">
                            <FlexCol className="items-start gap-2 md:gap-3 lg:gap-4">
                                <Heading className="text-center">
                                    AD podlahy
                                </Heading>
                                <BodyText className="max-w-none lg:max-w-3xl">
                                    Jsme spolehlivým partnerem pro realizaci vašich zakázek. Díky dlouholetým zkušenostem a odbornému přístupu zaručujeme vysokou kvalitu provedení. Ke každému klientovi přistupujeme individuálně a vždy hledáme řešení přesně podle jeho potřeb a požadavků.
                                </BodyText>
                                <Cta
                                color="bg-white"
                                href="#kontakt"
                                onClick={(event) => HashLess(event, "kontakt")}
                                className="text-center text-black z-10 w-full md:max-w-[400px]">
                                    Kontaktujte nás
                                </Cta>
                            </FlexCol>
                            <YAnimation className="w-full max-w-[400px] lg:max-w-[500px] cursor-pointer">
                                <Img
                                width={500}
                                height={500}
                                src="/fota/sekce/o-nas/o-nas.avif"
                                alt="Firemní vozy společnosti AD podlahy"
                                className="w-full max-w-[400px] lg:max-w-[500px] rounded-md"
                                />
                            </YAnimation>
                        </Flex>
                    </Padding>
                </Padding>
            </RelativeOverlayWrapper>
        </Fragment>
    );
};

export default About;