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
import Grid from "@/app/components/Grid";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import Img from "@/app/components/Img";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import SwipeSlider from "@/app/components/SwipeSlider";

const images = [
    "/fota/sekce/vozovy-park/vozovy-park-5-technicke-listy-1.jpg",
    "/fota/sekce/vozovy-park/vozovy-park-5-technicke-listy-2.jpg",
];

const Content = () => {
    const [imgIndex, setImgIndex] = useState<number | null>(0);
    const [isClosed, setToClosed] = useState<boolean>(true);

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Section color="secondary">
                <FlexCol className="justify-center items-center text-center gap-2.5 md:gap-3 lg:gap-4">
                    <Heading>
                        Mercedes Čerpadlo betonu 70 m
                    </Heading>
                    <BodyText>
                        Přečtěte si 10 důležitých informací o tomto voze.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <Flex className="justify-center flex-col gap-2 md:gap-4 lg:gap-6">
                        <List>
                            <Grid className="grid-cols-1 gap-2.5 md:gap-3 lg:gap-4">
                                {[
                                    `Podvozek: Mercedes-Benz nákladní podvozek 6 nápravový.`,
                                    `Dosah výložníku: 70 m (6 dílné hydraulické výložní rameno).`,
                                    `Výkon čerpadla: cca 180 m³ / h.`,
                                    `Maximální čerpací tlak: 113 bar.`,
                                    `Typ čerpadla: dvoupístové hydraulické betonové čerpadlo s S - ventilem.`,
                                    `Průměr betonového potrubí: DN 125 mm.`,
                                    `Maximální výška čerpání: 70 m.`,
                                    `Maximální vodorovný dosah: 64 m.`,
                                    `Stabilizace: hydraulické výsuvné opěry s elektronickým řízením a bezpečnostními senzory.`,
                                    `Emisní norma motoru: Euro 6.`
                                ].map((textBlock, index) => {
                                    return (
                                        <ListItem key={index}>
                                            {textBlock}
                                        </ListItem>
                                    );
                                })}
                            </Grid>
                        </List>
                        <Img
                        width={400}
                        height={400}
                        onClick={() => {
                            setImgIndex(0);
                            setToClosed(false);
                        }}
                        src="/fota/sekce/vozovy-park/vozovy-park-5-technicke-listy-1.jpg"
                        alt="Mercedes Čerpadlo betonu 70 m Technické listy číslo 1 společnosti AD Podlahy"
                        className="w-full md:max-w-[400px] object-cover rounded-md"
                        />
                        <Img
                        width={400}
                        height={400}
                        onClick={() => {
                            setImgIndex(1);
                            setToClosed(false);
                        }}
                        src="/fota/sekce/vozovy-park/vozovy-park-5-technicke-listy-2.jpg"
                        alt="Mercedes Čerpadlo betonu 70 m Technické listy číslo 2 společnosti AD Podlahy"
                        className="w-full md:max-w-[400px] object-cover rounded-md"
                        />
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