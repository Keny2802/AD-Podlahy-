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
                        Mercedes čerpadlo na beton 40 m
                    </Heading>
                    <BodyText>
                        Přečtěte si 10 důležitých informací o tomto voze.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <List>
                        <Grid className="grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                            {[
                                `Podvozek: Mercedes-Benz nákladní podvozek 4 - 5 nápravový.`,
                                `Dosah výložníku: 40 m (5 dílné hydraulické rameno).`,
                                `Výkon čerpadla: cca 120 - 160 m³ / h (dle typu čerpací jednotky).`,
                                `Maximální čerpací tlak: až 85 - 100 bar.`,
                                `Typ čerpadla: dvoupístové hydraulické betonové čerpadlo s S - ventilem.`,
                                `Průměr betonového potrubí: DN 125 mm (možnost DN 150 mm.`,
                                `Maximální výška čerpání: cca 38 - 40 m.`,
                                `Maximální vodorovný dosah: cca 300 - 400 m.`,
                                `Stabilizace: hydraulické výsuvné opěry s elektronickým řízením.`,
                                `Emisní norma motoru: Euro 5 / Euro 6 (dle roku výroby a konfigurace).`
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