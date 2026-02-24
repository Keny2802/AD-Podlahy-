import {
    Fragment
} from "react";

import ContactHeader from "../components/ContactHeader";
import Header from "../components/Header";
import Section from "../components/Section";
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
                d
            </Section>
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;