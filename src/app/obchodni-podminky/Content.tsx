import {
    Fragment
} from "react";

import ContactHeader from "../components/ContactHeader";
import Header from "../components/Header";
import Section from "../components/Section";
import Heading from "../components/Heading";
import MarginTop from "../components/MarginTop";
import BodyText from "../components/BodyText";
import FlexCol from "../components/FlexCol";
import SmallerHeading from "../components/SmallerHeading";
import List from "../components/List";
import ListItem from "../components/ListItem";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Section
            color="secondary">
                <Heading>
                    Obchodní podmínky (Všeobecné obchodní podmínky)
                </Heading>
                <MarginTop>
                    <BodyText className="max-w-5xl">
                        Tyto obchodní podmínky (dále jen „obchodní podmínky“) upravují práva a povinnosti mezi provozovatelem webových stránek a zákazníky v souladu s § 1751 zákona č. 89/2012 Sb., občanský zákoník.
                    </BodyText>
                </MarginTop>
                <MarginTop>
                    <FlexCol>
                        {
                            [
                                {
                                    title: "Identifikace provozovatele",
                                    text: [
                                        "Název firmy: AD Podlahy, IČO: 05000335, DIČ: CZ05000335, Sídlo: Jiráskova 2189, 755 01 Vsetín, E-mail: adpodlahy@seznam.cz Telefon: +420 732 429 996.",
                                        "(dále jen „poskytovatel“)",
                                    ]
                                },
                                {
                                    title: "",
                                    text: [
                                        "",
                                        "",
                                    ]
                                },
                                {
                                    title: "",
                                    text: [
                                        "",
                                        "",
                                    ]
                                },
                                {
                                    title: "",
                                    text: [
                                        "",
                                        "",
                                    ]
                                },
                                {
                                    title: "",
                                    text: [
                                        "",
                                        "",
                                    ]
                                },
                                {
                                    title: "",
                                    text: [
                                        "",
                                        "",
                                    ]
                                },
                                {
                                    title: "",
                                    text: [
                                        "",
                                        "",
                                    ]
                                },
                                {
                                    title: "",
                                    text: [
                                        "",
                                        "",
                                    ]
                                },
                                {
                                    title: "",
                                    text: [
                                        "",
                                        "",
                                    ]
                                },
                            ].map((block, index) => {
                                return (
                                    <Fragment key={index}>
                                        {/* <SmallerHeading></SmallerHeading> */}
                                    </Fragment>
                                );
                            })
                        }
                    </FlexCol>
                </MarginTop>
            </Section>
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;