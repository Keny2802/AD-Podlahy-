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
                        Mercedes Halové čerpadlo 24 m
                    </Heading>
                    <BodyText>
                        Přečtěte si 10 důležitých informací o tomto voze.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <List>
                        <Grid className="grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                            {[
                                `Podvozek: Mercedes-Benz nákladní podvozek 3 - 4 nápravový.`,
                                `Dosah ramene: 24 m (4 dílné hydraulické výložní rameno).`,
                                `Výkon čerpadla: cca 90 - 120 m³/h (dle konfigurace čerpací jednotky).`,
                                `Čerpací tlak: až 80 bar.`,
                                `Typ čerpadla: dvoupístové hydraulické betonové čerpadlo.`,
                                `Průměr potrubí: standardně DN 125 mm.`,
                                `Výška čerpání: cca 20 - 24 m.`,
                                `Délka vodorovného čerpání: cca 150 - 250 m.`,
                                `Stabilizace: hydraulické výsuvné opěry.`,
                                `Emisní norma motoru: Euro 5 / Euro 6 (dle roku výroby).`
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