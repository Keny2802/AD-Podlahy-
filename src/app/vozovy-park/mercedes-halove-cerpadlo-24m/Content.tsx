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
import Img from "@/app/components/Img";
import ListItem from "@/app/components/ListItem";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import SwipeSlider from "@/app/components/SwipeSlider";

const images = [
    "/fota/sekce/vozovy-park/vozovy-park-1-technicke-listy.jpg"
]

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
                        Mercedes Halové čerpadlo 24 m
                    </Heading>
                    <BodyText>
                        Přečtěte si 10 důležitých informací o tomto voze.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <Flex className="justify-center flex-col gap-2 md:gap-4 lg:gap-6">
                        <List>
                            <Grid className="grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                                {[
                                    `Podvozek: Mercedes-Benz nákladní podvozek 3 nápravový.`,
                                    `Dosah ramene: 24 m (4 dílné hydraulické výložní rameno).`,
                                    `Výkon čerpadla: 140 m³ / h.`,
                                    `Čerpací tlak: až 80 bar.`,
                                    `Typ čerpadla: dvoupístové hydraulické betonové čerpadlo.`,
                                    `Průměr potrubí: standardně DN 125 mm.`,
                                    `Výška čerpání: 24 m.`,
                                    `Délka vodorovného čerpání: 20 m.`,
                                    `Stabilizace: hydraulické výsuvné opěry.`,
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
                        src="/fota/sekce/vozovy-park/vozovy-park-1-technicke-listy.jpg"
                        alt="Mercedes Halové čerpadlo 24 m Technické listy společnosti AD Podlahy"
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