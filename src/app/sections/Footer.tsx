import {
    Fragment
} from "react";
import {
    HeaderSet
} from "../components/HeaderSet";
import {
    OtherLinksSet
} from "../components/OtherLinksSet";

import Wrapper from "../components/Wrapper";
import Padding from "../components/Padding";
import FlexCol from "../components/FlexCol";
import Logo from "../components/Logo";
import Flex from "../components/Flex";
import HeaderList from "../components/HeaderList";
import HeaderItem from "../components/HeaderItem";
import HeaderLink from "../components/HeaderLink";
import BodyText from "../components/BodyText";
import MarginTop from "../components/MarginTop";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Wrapper className="bg-white text-black">
                <Padding>
                    <FlexCol className="justify-center items-center gap-2 md:gap-3 lg:gap-4">
                        <Logo
                        width={300}
                        height={300}
                        />
                        <HeaderList className="text-black">
                            <Flex className="lg:justify-center lg:items-center lg:flex-row flex-col gap-2 md:gap-3 lg:gap-4">
                                {
                                    HeaderSet.map((headerItem, index) => {
                                        return (
                                            <HeaderItem key={index}>
                                                <HeaderLink href={headerItem.href}>
                                                    {headerItem.text}
                                                </HeaderLink>
                                            </HeaderItem>
                                        );
                                    })
                                }
                            </Flex>
                        </HeaderList>
                        <HeaderList className="text-black">
                            <Flex className="lg:justify-center lg:items-center lg:flex-row flex-col gap-2">
                                {
                                    OtherLinksSet.map((headerItem, index) => {
                                        return (
                                            <HeaderItem key={index}>
                                                <HeaderLink href={headerItem.href}
                                                className="text-sm">
                                                    {headerItem.text}
                                                </HeaderLink>
                                            </HeaderItem>
                                        );
                                    })
                                }
                            </Flex>
                        </HeaderList>
                        <FlexCol className="border-t border-gray-200 text-black items-center gap-1 md:gap-1.5 lg:gap-2">
                            <MarginTop className="text-center">
                                <BodyText>
                                    Adam Šimara, {year}, všechna práva vyhrazena.
                                </BodyText>
                                <HeaderLink href="https://vojtaoliva.cz">
                                    Vytvořil Vojta Oliva
                                </HeaderLink>
                            </MarginTop>
                        </FlexCol>
                    </FlexCol>
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;