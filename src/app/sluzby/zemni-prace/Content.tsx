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
import Grid from "@/app/components/Grid";
import YAnimation from "@/app/components/YAnimation";
import Img from "@/app/components/Img";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import SwipeSlider from "@/app/components/SwipeSlider";

const images = [
    "/fota/podstranky/zemni-prace/zemni-prace-1.jpeg",
    "/fota/podstranky/zemni-prace/zemni-prace-2.jpeg",
    "/fota/podstranky/zemni-prace/zemni-prace-3.jpeg",
];

const Content = () => {
    const [imgIndex, setImgIndex] = useState<number | null>(0);
    const [isClosed, setToClosed] = useState<boolean>(true);

    return (
        <Fragment>
            {/* <ContactHeader />
            <Header />
            <Section
            color="secondary">
                <FlexCol className="text-center items-center gap-2 md:gap-2.5 lg:gap-3">
                    <Heading>
                        Kompletní zemní a výkopové práce - od základů až po finální terén
                    </Heading>
                    <BodyText>
                        Realizujeme zemní práce všeho druhu s důrazem na přesnost, rychlost a dodržování termínů. Disponujeme moderní technikou, která si poradí s úzkými prostory u rodinných domů i s náročnými terénními úpravami.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
                        {
                            [
                                "/fota/podstranky/zemni-prace/zemni-prace-1.jpeg",
                                "/fota/podstranky/zemni-prace/zemni-prace-2.jpeg",
                                "/fota/podstranky/zemni-prace/zemni-prace-3.jpeg",
                            ].map((image, index) => {
                                return (
                                    <YAnimation
                                    key={index}
                                    className="w-full min-h-[300px] max-h-[300px] cursor-pointer">
                                        <Img
                                        width={500}
                                        height={500}
                                        src={image}
                                        alt={`${index + 1}. Ukázka z realizace zemních prací společnosti AD podlahy.`}
                                        className="w-full min-h-[300px] max-h-[300px] rounded-2xl object-cover cursor-pointer"
                                        />
                                    </YAnimation>
                                );
                            })
                        }
                    </Grid>
                </MarginTop>
            </Section>
            <About />
            <Contact />
            <Footer /> */}
            <Section
            color="secondary"
            className="border-t border-gray-200">
                <FlexCol className="text-center items-center gap-2 md:gap-2.5 lg:gap-3">
                    <Heading>
                        Kompletní zemní a výkopové práce - od základů až po finální terén
                    </Heading>
                    <BodyText>
                        Realizujeme zemní práce všeho druhu s důrazem na přesnost, rychlost a dodržování termínů. Disponujeme moderní technikou, která si poradí s úzkými prostory u rodinných domů i s náročnými terénními úpravami.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
                        {
                            images.map((image, index) => {
                                return (
                                    <Fragment>
                                        {
                                            index !== 1 ? (
                                                <YAnimation
                                                key={index}
                                                className="w-full min-h-[300px] max-h-[300px] cursor-pointer">
                                                <Img
                                                width={500}
                                                height={500}
                                                src={image}
                                                onClick={() => {
                                                    setImgIndex(index);
                                                    setToClosed(false);
                                                }}
                                                    alt={`${index + 1}. Ukázka z realizace zemních prací společnosti AD podlahy.`}
                                                    className="w-full min-h-[300px] max-h-[300px] rounded-2xl object-cover cursor-pointer"
                                                    />
                                                </YAnimation>
                                            ) : (
                                                <MarginTop>
                                                    <List className="ml-2">
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
                                                                        key={index}
                                                                        className="max-w-[650px]">
                                                                            {textBlock}
                                                                        </ListItem>
                                                                    );
                                                                })
                                                            }
                                                        </FlexCol>
                                                    </List>
                                                </MarginTop>
                                            )
                                        }
                                    </Fragment>
                                );
                            })
                        }
                    </Grid>
                </MarginTop>
            </Section>
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