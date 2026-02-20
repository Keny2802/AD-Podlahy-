import {
    Fragment
} from "react";
import {
    Mail,
    PhoneOutgoing,
    Map
} from "lucide-react";

import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import Wrapper from "../components/Wrapper";
import Padding from "../components/Padding";
import FlexCol from "../components/FlexCol";
import Flex from "../components/Flex";
import Color from "../components/Color";
import Heading from "../components/Heading";
import SmallerHeading from "../components/SmallerHeading";
import BodyText from "../components/BodyText";
import Button from "../components/Button";
import Logo from "../components/Logo";
import HeaderLink from "../components/HeaderLink";

const Contact = () => {
    return (
        <Fragment>
            <RelativeOverlayWrapper
            className="border-t border-white/25 w-full bg-[#270c86]"
            id="kontakt">
                <Wrapper
                className="absolute inset-0 bg-[#c72026]"
                style={{
                    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
                }}></Wrapper>
                <Padding className="text-white relative z-10">
                    <FlexCol className="items-center gap-2 md:gap-3 lg:gap-4">
                        <Heading>
                            Máte dotaz?
                        </Heading>
                        <BodyText>
                            Spojte se s námi prostřednictvím emailu nebo telefonické komunikace.
                        </BodyText>
                    </FlexCol>
                    <Flex className="mt-4 md:mt-5 lg:mt-6 justify-center flex-col xl:flex-row gap-4 md:gap-5 xl:gap-6">
                        <Color
                        type="text"
                        color="black"
                        className="bg-white text-black w-full xl:max-w-[600px] rounded-md">
                            <Padding>
                                <FlexCol className="items-center gap-2 md:gap-2.5 lg:gap-3">
                                    <SmallerHeading>
                                        Nezávazná poptávka
                                    </SmallerHeading>
                                    <BodyText>
                                        Vyplňte nezávaznou poptávku. Ozveme se Vám co nejdříve.
                                    </BodyText>
                                </FlexCol>
                                <FlexCol className="gap-2 md:gap-3 lg:gap-4">
                                    <FlexCol className="mt-2 md:mt-3 lg:mt-4 gap-2 md:gap-3 lg:gap-4">
                                        {
                                            [
                                                {
                                                    inputType: "text",
                                                    inputPlaceholder: "Jan Novák"
                                                },
                                                {
                                                    inputType: "email",
                                                    inputPlaceholder: "jan@novak.cz"
                                                },
                                                {
                                                    inputType: "tel",
                                                    inputPlaceholder: "+420 601 123 456"
                                                },
                                                {
                                                    inputType: "adress",
                                                    inputPlaceholder: "Jasenka 477, 751 01 Vsetín"
                                                },
                                                {
                                                    inputType: "text-area",
                                                    inputPlaceholder: "Napište nám zprávu."
                                                }
                                            ].map((input, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <Color
                                                        type="bg"
                                                        color="#270c86"
                                                        className="w-full rounded-md">
                                                            {
                                                                input.inputType !== "text-area" ? (
                                                                    <input
                                                                    type={input.inputType}
                                                                    placeholder={input.inputPlaceholder}
                                                                    className="p-3 md:p-4 xl:p-5 w-full text-white rounded-md focus:outline-none placeholder:text-white"
                                                                    />
                                                                ) : (
                                                                    <textarea
                                                                    placeholder={input.inputPlaceholder}
                                                                    className="p-3 md:p-4 xl:p-5 w-full min-h-[100px] resize-none text-white rounded-md focus:outline-none placeholder:text-white"
                                                                    />
                                                                )
                                                            }
                                                        </Color>
                                                    </Fragment>
                                                );
                                            })
                                        }
                                    </FlexCol>
                                    <Button
                                    color="bg-[#270c86] text-white">
                                        Odeslat formulář
                                    </Button>
                                </FlexCol>
                            </Padding>
                        </Color>
                        <FlexCol className="gap-2 md:gap-3 lg:gap-4">
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599.333632871508!2d17.977493775962284!3d49.34583356628087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47138354a312cb0f%3A0x786e020ec0b1b75e!2sJir%C3%A1skova%201%2F2189%2C%20755%2001%20Vset%C3%ADn%201!5e0!3m2!1scs!2scz!4v1770426292942!5m2!1scs!2scz"
                            style={{
                                border: 0
                            }}
                            className="w-full aspect-[4/3] lg:max-w-[500px] rounded-2xl cursor-pointer"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <Color
                            type="bg"
                            color="white"
                            className="bg-white text-black rounded-md">
                                <Padding className="rounded-2xl">
                                    <FlexCol className="gap-2 md:gap-3 lg:gap-4">
                                        <Logo />
                                        <FlexCol className="gap-2 md:gap-2.5 lg:gap-3">
                                            <BodyText>
                                                Adam Šimara
                                            </BodyText>
                                            <HeaderLink href="mailto:adpodlahy@seznam.cz">
                                                <Flex className="flex-row gap-1 md:gap-1.5 lg:gap-2">
                                                    <Mail className="text-[#270c86]" />
                                                    adpodlahy@seznam.cz
                                                </Flex>
                                            </HeaderLink>
                                            <HeaderLink href="tel:+420732429996">
                                                <Flex className="flex-row gap-1 md:gap-1.5 lg:gap-2">
                                                    <PhoneOutgoing className="text-[#270c86]" />
                                                    +420 732 429 996
                                                </Flex>
                                            </HeaderLink>
                                            <HeaderLink href="https://www.google.com/maps/place/Jir%C3%A1skova+1%2F2189,+755+01+Vset%C3%ADn+1/@49.3458336,17.9774938,17z/data=!3m1!4b1!4m6!3m5!1s0x47138354a312cb0f:0x786e020ec0b1b75e!8m2!3d49.3458301!4d17.9800687!16s%2Fg%2F11cpb4137y?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D">
                                                <Flex className="flex-row gap-1 md:gap-1.5 lg:gap-2">
                                                    <Map className="text-[#270c86]" />
                                                    Jiráskova 2189, 755 01 Vsetín
                                                </Flex>
                                            </HeaderLink>
                                            <Flex className="justify-between flex-row flex-wrap gap-2 md:gap-3 lg:gap-4">
                                                <BodyText>
                                                    IČO 05000335
                                                </BodyText>
                                                <BodyText>
                                                    DIČ CZ05000335
                                                </BodyText>
                                            </Flex>
                                        </FlexCol>
                                    </FlexCol>
                                </Padding>
                            </Color>
                        </FlexCol>
                    </Flex>
                </Padding>
            </RelativeOverlayWrapper>
        </Fragment>
    );
};

export default Contact;