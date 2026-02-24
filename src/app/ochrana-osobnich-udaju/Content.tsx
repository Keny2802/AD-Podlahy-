import {
    Fragment
} from "react";
import {
    gdprSet
} from "../components/gdprSet";

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
                        Ochrana osobních údajů (GDPR)
                    </Heading>
                </FlexCol>
                <MarginTop className="lg:mt-6">
                    <FlexCol className="gap-3">
                        {
                            gdprSet.map((block, index) => {
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