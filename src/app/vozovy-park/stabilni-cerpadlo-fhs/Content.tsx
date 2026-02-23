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
    `Typ čerpadla: stabilní betonové čerpadlo FHS.`,
    `Váha stroje: 1 000 Kg.`,
    `Výkon čerpadla: až 15 m³ / h.`,
    // `Maximální čerpací tlak: až 80 - 100 bar.`,
    `Průměr betonové hadice: DN 40 mm.`,
    `Maximální výška čerpání: až 30 m.`,
    `Maximální vodorovný dosah: až 100 m.`,
    // `Stabilizace: pevná konstrukce na podstavci s možností kotvení do země.`,
    `Stabilizace: stabilizace na jednom osem podvozku.`,
    `Typ čerpadla: šnekové hydraulické.`,
    `Motor: 3 válcový dieselový motor Deutz 34,5 kW.`,
    `Použití: pro vylévání litých směsí jako je Anhydrit a litý Cementový potěr.`
];

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Section color="secondary">
                <FlexCol className="justify-center items-center text-center gap-2.5 md:gap-3 lg:gap-4">
                    <Heading>
                       Stabilní čerpadlo FHS
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