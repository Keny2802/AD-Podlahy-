import {
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
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

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
                    <BodyText>
                        Přečtěte si 10 důležitých informací o tomto voze.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <List>
                        <Grid className="grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                            {[
                                `Typ čerpadla: stabilní betonové čerpadlo FHS.`,
                                `Výkon čerpadla: až 15 m³ / h.`,
                                `Maximální čerpací tlak: až 80 - 100 bar.`,
                                `Průměr betonového potrubí: DN 40 mm.`,
                                `Maximální výška čerpání: až 100 m.`,
                                `Maximální vodorovný dosah: až 200 m.`,
                                `Stabilizace: pevná konstrukce na podstavci s možností kotvení do země.`,
                                `Typ čerpadla: šnekové hydraulické.`,
                                `Motor: Deutz o výkonu 38,8 kW.`,
                                `Použití: pro vylévání litých směsí jako je Anhydrit a litý Cementový potěr.`
                            ].map((textBlock, index) => {
                                return (
                                    <ListItem key={index}>
                                        {textBlock}
                                    </ListItem>
                                );
                            })}
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