import {
    Fragment
} from "react";

import ContactHeader from "@/app/components/ContactHeader";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import FlexCol from "@/app/components/FlexCol";
import Heading from "@/app/components/Heading";
import SubHeadingCounter from "@/app/components/SubHeadingCounter";
import MarginTop from "@/app/components/MarginTop";
import Grid from "@/app/components/Grid";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const textList = [
    `Typ čerpadla: stabilní betonové čerpadlo P 718.`,
    `Váha stroje: 2 500 Kg.`,
    `Výkon čerpadla: cca 4 - 17,4 m³ / h (dle konfigurace).`,
    // `Maximální čerpací tlak: až 68 - 70 bar.`,
    `Průměr betonové hadice: DN 80 mm.`,
    `Maximální výška čerpání: až 50 m.`,
    `Maximální vodorovný dosah: až 100 m.`,
    // `Stabilizace: pevná konstrukce na podstavci s možností kotvení do země.`,
    `Stabilizace: stabilizace na jednom osem podvozku.`,
    `Typ čerpadla: dvoupístové hydraulické.`,
    `Motor: 3 válcový dieselový motor Deutz 34,5 kW.`,
    `Použití: betonáž rodinných domů, menších hal a průmyslových objektů.`
];

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Section color="secondary">
                <FlexCol className="justify-center items-center text-center gap-2.5 md:gap-3 lg:gap-4">
                    <Heading>
                       Stabilní čerpadlo P 718
                    </Heading>
                    <SubHeadingCounter set={textList} />
                </FlexCol>
                <MarginTop>
                    <List>
                        <Grid className="grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                            {
                            textList.map((textBlock, index) => {
                                return (
                                    <ListItem key={index}>
                                        {textBlock}
                                    </ListItem>
                                );
                            })
                            }
                        </Grid>
                    </List>
                </MarginTop>
            </Section>
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;