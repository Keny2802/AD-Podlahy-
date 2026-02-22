"use client";

import {
    useState,
    Fragment
} from "react";

import ContactHeader from "@/app/components/ContactHeader";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import FlexCol from "@/app/components/FlexCol";
import Heading from "@/app/components/Heading";
import SmallerHeading from "@/app/components/SmallerHeading";
import BodyText from "@/app/components/BodyText";
import MarginTop from "@/app/components/MarginTop";
import Flex from "@/app/components/Flex";
import Wrapper from "@/app/components/Wrapper";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import YAnimation from "@/app/components/YAnimation";
import Img from "@/app/components/Img";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import SwipeSlider from "@/app/components/SwipeSlider";

const images = [
    "/fota/podstranky/strikana-izolace/strikana-izolace-1.jpeg",
    "/fota/podstranky/strikana-izolace/strikana-izolace-2.jpeg"
]

const Content = () => {
    const [imgIndex, setImgIndex] = useState<number | null>(0);
    const [isClosed, setToClosed] = useState<boolean>(false);

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Section
            color="secondary">
                <FlexCol className="text-center items-center gap-2 md:gap-2.5 lg:gap-3">
                    <Heading>
                        Stříkaná pěna - perfektní izolace na celý život!
                    </Heading>
                    <BodyText>
                        Aplikací PUR stříkané izolační pěny provádíme tepelné, zvukové a průmyslové izolace staveb. Řešíme zateplení a izolace střech, základů, stropů, zdiva či podkroví rodinných domů, panelových domů, bytů, průmyslových objektů a staveb, bazénů i zásobníků hmot.
                    </BodyText>
                </FlexCol>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-center flex-col-reverse gap-2 md:gap-4 lg:gap-6">
                        <Wrapper>
                            <SmallerHeading>
                                Chytrá stříkaná izolace pro váš domov
                            </SmallerHeading>
                            <BodyText>
                                Hledáte způsob, jak snížit náklady na vytápění až o 50 %? Stříkaná PUR izolace je moderní řešení, které na rozdíl od klasické vaty vytvoří souvislou vrstvu bez tepelných mostů. Díky své expanzní schopnosti vyplní každou skulinu, kam by se běžný materiál nedostal.
                            </BodyText>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `Rychlost: Zateplení celého podkroví zvládneme za jediný den.`,
                                                `Životnost: Nemění svůj tvar ani vlastnosti po celou dobu životnosti stavby.`,
                                                `Zdraví: Zabraňuje vzniku plísní a je zcela ekologicky nezávadná.`
                                            ].map((textBlock, index) => {
                                                return (
                                                    <ListItem
                                                    key={index}>
                                                        {textBlock}
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </FlexCol>
                                </List>
                            </MarginTop>
                        </Wrapper>
                        <YAnimation className="w-full md:min-w-[200px] md:max-w-[450px] md:max-h-[450px] cursor-pointer">
                            <Img
                            width={450}
                            height={450}
                            src="/fota/podstranky/strikana-izolace/strikana-izolace-1.jpeg"
                            alt="Stříkaná izolace v halovém objektu - realizováno společností AD Podlady"
                            onClick={() => {
                                setImgIndex(0);
                                setToClosed(false);
                            }}
                            className="w-full md:min-w-[200px] md:max-w-[450px] md:max-h-[450px] object-cover rounded-md"
                            />
                        </YAnimation>
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-center flex-col gap-2 md:gap-4 lg:gap-6">
                        <YAnimation className="w-full md:min-w-[200px] md:max-w-[300px] md:max-h-[300px] cursor-pointer">
                            <Img
                            width={300}
                            height={300}
                            src="/fota/podstranky/strikana-izolace/strikana-izolace-2.jpeg"
                            alt="Stříkaná izolace v rodinném domě - realizováno společností AD Podlady"
                            onClick={() => {
                                setImgIndex(1);
                                setToClosed(false);
                            }}
                            className="w-full md:min-w-[200px] md:max-w-[300px] md:max-h-[300px] object-cover rounded-md"
                            />
                        </YAnimation>
                        <Wrapper>
                            <SmallerHeading>
                                Stop průvanu a drahým účtům! 🏠❄️
                            </SmallerHeading>
                            <BodyText>
                                Zateplete chytře se stříkanou pěnou. Proč zvolit právě PUR izolaci?
                            </BodyText>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `✅ Extrémní úspora - Teplo zůstane v zimě uvnitř a v létě venku.`,
                                                `✅ Žádné spáry - Pěna dokonale přilne k povrchu a nepustí dovnitř ani kousek chladu.`,
                                                `✅ Ochrana konstrukce - Zpevňuje krov a chrání dům před vlhkostí. Léto se blíží - nenechte se v podkroví upéct a ušetřete za klimatizaci! ☀️`
                                            ].map((textBlock, index) => {
                                                return (
                                                    <ListItem
                                                    key={index}>
                                                        {textBlock}
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </FlexCol>
                                </List>
                                <MarginTop>
                                    <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                        <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                            {
                                                [
                                                    `✅ Nacenění projektu ZDARMA.`,
                                                    `✅ Profesionální přístup a dodržení termínů.`,
                                                    `✅ Působíme v celé České republice.`,
                                                    `👇 Napište nám do zpráv a získejte kalkulaci.`
                                                ].map((textBlock, index) => {
                                                    return (
                                                        <ListItem
                                                        key={index}>
                                                            {textBlock}
                                                        </ListItem>
                                                    );
                                                })
                                            }
                                        </FlexCol>
                                    </List>
                                </MarginTop>
                            </MarginTop>
                        </Wrapper>
                    </Flex>
                </MarginTop>
            </Section>
            <About />
            <Contact />
            <Footer />
            {
                imgIndex !== null && !isClosed && (
                    <SwipeSlider
                    src={images}
                    startIndex={imgIndex ?? 0}
                    isClosed={isClosed}
                    setToClosed={setToClosed}
                    />
                )
            }
        </Fragment>
    );
};

export default Content;