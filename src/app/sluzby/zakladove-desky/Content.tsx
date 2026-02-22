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
import BodyText from "@/app/components/BodyText";
import MarginTop from "@/app/components/MarginTop";
import Flex from "@/app/components/Flex";
import Wrapper from "@/app/components/Wrapper";
import SmallerHeading from "@/app/components/SmallerHeading";
import YAnimation from "@/app/components/YAnimation";
import Img from "@/app/components/Img";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import Con from "../zemni-prace/Content";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import SwipeSlider from "@/app/components/SwipeSlider";

const images = [
    "/fota/podstranky/zakladove-desky/zakladove-desky-1.jpeg",
    "/fota/podstranky/zakladove-desky/zakladove-desky-2.jpeg",
    "/fota/podstranky/zakladove-desky/zakladove-desky-3.jpeg"
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
                        Základy, na kterých vyroste váš domov
                    </Heading>
                    <BodyText>
                        Základová deska je to jediné, co na domě už nikdy nevyměníte. Je to kritický bod stavby, kde se nevyplácí dělat kompromisy. My ADpodlahy kombinujeme poctivé řemeslo s moderní technikou, abychom vám dodali desku, která se nehne a je krásně rovná.
                    </BodyText>
                </FlexCol>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-center flex-col-reverse gap-2 md:gap-4 lg:gap-6">
                        <Wrapper>
                            <SmallerHeading>
                                Proč svěřit základy právě nám?
                            </SmallerHeading>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `Preciznost v rovině: Díky laserovému měření připravíme povrch tak rovný, že zdění první řady cihel bude hračka.`,
                                                `Žádné starosti: Postaráme se o vše - od skrývky zeminy a uložení kanalizace až po finální betonáž a vyztužení.`,
                                                `Transparentní cena: Žádné skryté vícenáklady. Co si domluvíme v rozpočtu, to platí.`,
                                                `Záruka kvality: Používáme výhradně certifikované betonové směsi z prověřených betonárek.`
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
                            onClick={() => {
                                setImgIndex(0);
                                setToClosed(false);
                            }}
                            src="/fota/podstranky/zakladove-desky/zakladove-desky-1.jpeg"
                            alt="Hotová základová deska pro rodinný dům - realizováno společností AD Podlady"
                            className="w-full md:min-w-[200px] md:max-w-[450px] md:max-h-[450px] object-cover rounded-md"
                            />
                        </YAnimation>
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-evenly flex-col gap-2 md:gap-4 lg:gap-6">
                        <YAnimation className="w-full md:min-w-[200px] md:max-w-[450px] md:max-h-[450px] cursor-pointer">
                            <Img
                            width={450}
                            height={450}
                            onClick={() => {
                                setImgIndex(1);
                                setToClosed(false);
                            }}
                            src="/fota/podstranky/zakladove-desky/zakladove-desky-2.jpeg"
                            alt="Vykopávání zakladové desky pomocí bagru - realizace společností AD Podlady"
                            className="w-full md:min-w-[200px] md:max-w-[450px] md:max-h-[450px] object-cover rounded-md"
                            />
                        </YAnimation>
                        <Wrapper>
                            <SmallerHeading>
                                Realizace spodní stavby: Od projektu k betonu
                            </SmallerHeading>
                            <BodyText>
                                Ke každé desce přistupujeme jako k inženýrskému dílu. Naše realizace splňují nejpřísnější statické normy a technologické postupy. Naše práce zahrnuje:
                            </BodyText>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `1. Zemní práce a vytyčení: Skrývka ornice a přesné zaměření objektu geodetem.`,
                                                `2. Základové pasy a sítě: Výkop pasů do nezámrzné hloubky, uložení zemnícího pásku a prostupů pro inženýrské sítě.`,
                                                `3. Hutněný násyp: Příprava podloží z drceného kameniva, které pečlivě hutníme po vrstvách.`,
                                                `4. Armování: Položení kari sítí a výztuží přesně podle statického výpočtu v projektu.`,
                                                `5. Betonáž: Lití betonu s průběžnou kontrolou výšky a následné ošetřování betonu pro dosažení maximální pevnosti.`
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
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-center flex-col-reverse gap-2 md:gap-4 lg:gap-6">
                        <Wrapper>
                            <SmallerHeading>
                                🏗️ Stavíte dům? Začněte od pořádných základů! Realizujeme betonové základové desky pro rodinné domy, chaty i garáže.
                            </SmallerHeading>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `✅ Zaměření a nacenění ZDARMA.`,
                                                `✅ Profesionální přístup a dodržení termínů.`,
                                                `✅ Působíme v kraji Zlínský a Moravsko Slezský.`,
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
                        </Wrapper>
                        <YAnimation className="w-full md:min-w-[300px] md:max-w-[350px] md:max-h-[350px] cursor-pointer">
                            <Img
                            width={350}
                            height={350}
                            onClick={() => {
                                setImgIndex(2);
                                setToClosed(false);
                            }}
                            src="/fota/podstranky/zakladove-desky/zakladove-desky-3.jpeg"
                            alt="Vykopání díry pro kanaliuace k základové desce - realizace společností AD Podlady"
                            className="w-full md:min-w-[300px] md:max-w-[350px] md:max-h-[350px] object-cover rounded-md"
                            />
                        </YAnimation>
                    </Flex>
                </MarginTop>
            </Section>
            <Con />
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