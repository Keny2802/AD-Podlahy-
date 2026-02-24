import {
    Fragment
} from "react";
import {
    termsAndConditionsSet
} from "../components/termsAndConditionsSet";

import ContactHeader from "../components/ContactHeader";
import Header from "../components/Header";
import Section from "../components/Section";
import Heading from "../components/Heading";
import MarginTop from "../components/MarginTop";
import BodyText from "../components/BodyText";
import FlexCol from "../components/FlexCol";
import SmallerHeading from "../components/SmallerHeading";
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
                <FlexCol className="gap-3">
                    <Heading>
                        Obchodní podmínky (Všeobecné obchodní podmínky)
                    </Heading>
                    <BodyText className="max-w-5xl">
                        Tyto obchodní podmínky (dále jen „obchodní podmínky“) upravují práva a povinnosti mezi provozovatelem webových stránek a zákazníky v souladu s § 1751 zákona č. 89/2012 Sb., občanský zákoník.
                    </BodyText>
                </FlexCol>
                <MarginTop className="lg:mt-6">
                    <FlexCol className="gap-3">
                        {
                            termsAndConditionsSet.map((block, index) => {
                                const {
                                    title,
                                    text
                                } = block;

                                return (
                                    <Fragment key={index}>
                                        <FlexCol className="gap-2">
                                            <SmallerHeading>
                                                {`${index + 1}. ${title}`}
                                            </SmallerHeading>
                                            <MarginTop >
                                                {
                                                    text.map((textBlock, idx) => {
                                                        return (
                                                            <BodyText
                                                            key={idx}>
                                                                {`${index + 1}.${idx + 1} ${textBlock}`}
                                                            </BodyText>
                                                        );
                                                    })
                                                }
                                            </MarginTop>
                                        </FlexCol>
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