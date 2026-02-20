import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Padding from "./Padding";
import Flex from "./Flex";
import HeaderList from "./HeaderList";
import HeaderItem from "./HeaderItem";
import HeaderLink from "./HeaderLink";

type ContactHeaderType = {
    className?: string;
    children?: ReactNode;
};

const ContactHeader = ({ ...props }: ContactHeaderType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "w-full bg-white text-black shadow-md border-b border-gray-200 contact-header-component")}>
                <Padding className="p-2.5 md:p-3 lg:p-4">
                    <HeaderList>
                        <Flex className="lg:flex-row flex-col gap-3 md:gap-3.5 lg:gap-4">
                            {
                                [
                                    {
                                        text: "Potřebujete poradit?"
                                    },
                                    {
                                        href: "mailto:adpodlahy@seznam.cz",
                                        text: "adpodlahy@seznam.cz"
                                    },
                                    {
                                        href: "tel:+420732429996",
                                        text: "+420 732 429 996"
                                    }
                                ].map((link, index) => {
                                    const {
                                        href,
                                        text
                                    } = link;

                                    return (
                                        <Wrapper key={index}>
                                            {
                                                href ? (
                                                    <HeaderItem>
                                                        <HeaderLink
                                                        href={href!}>
                                                            {text}
                                                        </HeaderLink>
                                                    </HeaderItem>
                                                ) : (
                                                    <HeaderItem>
                                                        {text}
                                                    </HeaderItem>
                                                )
                                            }
                                        </Wrapper>
                                    );
                                })
                            }
                        </Flex>
                    </HeaderList>
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default ContactHeader;