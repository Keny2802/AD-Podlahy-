import {
    Fragment
} from "react";

import ContactHeader from "@/app/components/ContactHeader";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import Heading from "@/app/components/Heading";
import MarginTop from "@/app/components/MarginTop";
import Grid from "@/app/components/Grid";
import List from "@/app/components/List";
import FlexCol from "@/app/components/FlexCol";
import ListItem from "@/app/components/ListItem";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Section>
                <Heading></Heading>
                <MarginTop>
                    <List>
                        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3 lg:gap-4">
                            {[
                                ``
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