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
                       Domíchávač Scania 9 m³ pás 17m
                    </Heading>
                    <BodyText>
                        Přečtěte si 10 důležitých informací o tomto voze.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <List>
                        <Grid className="grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                            {[
                                `Podvozek: Scania nákladní podvozek 4 - 5 nápravový.`,
                                `Objem betonové nádrže: 9 m³.`,
                                `Délka pásu: 17 m (hydraulický posuv pásu).`,
                                `Výkon čerpadla: cca 50 - 80 m³ / h (dle konfigurace čerpací jednotky).`,
                                `Maximální čerpací tlak: až 60 - 80 bar.`,
                                `Typ čerpadla: dvoupístové hydraulické betonové čerpadlo s S - ventilem.`,
                                `Průměr betonového potrubí: DN 100 mm / DN 125 mm.`,
                                `Maximální výška čerpání: cca 15 - 17 m.`,
                                `Stabilizace: hydraulické výsuvné opěry s mechanickým nebo elektronickým řízením.`,
                                `Emisní norma motoru: Euro 6 (dle roku výroby a konfigurace).`
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