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
import Flex from "@/app/components/Flex";
import Wrapper from "@/app/components/Wrapper";
import SmallerHeading from "@/app/components/SmallerHeading";
import YAnimation from "@/app/components/YAnimation";
import Img from "@/app/components/Img";
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
            <Section
            color="secondary">
                <FlexCol className="text-center items-center gap-2 md:gap-2.5 lg:gap-3">
                    <Heading>
                        Suché potěry
                    </Heading>
                    <BodyText>
                        Suché betonové potěry pro váš dům i byt
                    </BodyText>
                </FlexCol>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-evenly flex-col gap-2 md:gap-4 lg:gap-6">
                        <YAnimation className="w-full max-h-[400px] md:max-w-[250px] md:max-h-[250px] cursor-pointer">
                            <Img
                            width={250}
                            height={250}
                            src="/fota/podstranky/suche-potery/suche-potery-3.avif"
                            alt="Betonový suchý potěr připravený pro litou podlahu"
                            className="w-full max-h-[400px] md:max-w-[250px] md:max-h-[250px] object-cover rounded-md"
                            />
                        </YAnimation>
                        <FlexCol className="max-w-xl gap-2 md:gap-3 lg:gap-4">
                            {
                                [
                                    `Suché betonové potěry jsou moderní způsob, jak rychle a přesně připravit podklad pro finální podlahy. Hodí se do novostaveb i rekonstrukcí, umožňují rychlou pokládku a minimalizují vlhkost v konstrukci.`,
                                ].map((textBlock, index) => {
                                    return (
                                        <BodyText
                                        key={index}>
                                            {textBlock}
                                        </BodyText>
                                    );
                                })
                            }
                        </FlexCol>
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-between flex-col-reverse gap-2 md:gap-4 lg:gap-6">
                        <Wrapper>
                            <SmallerHeading>
                                Proč zvolit suchý betonový potěr?
                            </SmallerHeading>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `Rychlost: Pochozí už za krátkou dobu po realizaci.`,
                                                `Nízká vlhkost: Ideální pro rekonstrukce a dřevostavby.`,
                                                `Rovinnost: Přesný podklad pro vinyl, dlažbu, laminát i dřevo.`,
                                                `Univerzálnost: Vhodné pro podlahové vytápění i běžné podlahy.`
                                            ].map((textBlock, index) => {
                                                return (
                                                    <ListItem
                                                    key={index}>
                                                        {textBlock}
                                                    </ListItem>
                                                );
                                            })
                                        }
                                        <BodyText>
                                            Realizujeme zakázky především ve Zlínském kraji a blízkém okolí. Pro větší projekty se můžeme domluvit i na vzdálenější lokalitě.
                                        </BodyText>
                                    </FlexCol>
                                </List>
                            </MarginTop>
                        </Wrapper>
                        <YAnimation className="w-full md:min-w-[200px] md:max-w-[450px] md:max-h-[450px] cursor-pointer">
                            <Img
                            width={450}
                            height={450}
                            src="/fota/podstranky/suche-potery/suche-potery-1.avif"
                            alt="Příprava suchého potěru - realizováno společností AD Podlady"
                            className="w-full md:min-w-[200px] md:max-w-[450px] md:max-h-[450px] object-cover rounded-md"
                            />
                        </YAnimation>
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-evenly flex-col gap-2 md:gap-4 lg:gap-6">
                        <YAnimation className="w-full max-h-[250px] md:max-w-[200px] md:max-h-[200px] cursor-pointer">
                            <Img
                            width={300}
                            height={300}
                            src="/fota/podstranky/suche-potery/suche-potery-2.avif"
                            alt="Hotový suchý potěr - realizace společností AD Podlady"
                            className="w-full max-h-[250px] md:max-w-[200px] md:max-h-[200px] object-cover rounded-md"
                            />
                        </YAnimation>
                        <Wrapper>
                            <SmallerHeading>
                                Co jsou suché betonové potěry
                            </SmallerHeading>
                            <MarginTop>
                                <BodyText className="max-w-3xl">
                                    Suchý betonový potěr je podlahová vrstva, která se pokládá v suchém nebo polosuchém stavu a následně se hutní a zarovnává. Oproti klasickým litým potěrům přináší menší množství vlhkosti do stavby a rychlejší možnost pokračovat v dalších pracích.
                                </BodyText>
                            </MarginTop>
                        </Wrapper>
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-center flex-col-reverse gap-2 md:gap-4 lg:gap-6">
                        <Wrapper>
                            <SmallerHeading>
                                Využití suchých potěrů
                            </SmallerHeading>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `Novostavby rodinných domů.`,
                                                `Rekonstrukce bytů a starších objektů.`,
                                                `Podlahy s podlahovým vytápěním.`,
                                                `Podkroví a dřevostavby, kde je důležitá nižší vlhkost a hmotnost.`
                                            ].map((textBlock, index) => {
                                                return (
                                                    <ListItem
                                                    key={index}>
                                                        {textBlock}
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </FlexCol>
                                </List>
                            </MarginTop>
                        </Wrapper>
                        <YAnimation className="w-full md:min-w-[300px] md:max-w-[350px] md:max-h-[350px] cursor-pointer">
                            <Img
                            width={350}
                            height={350}
                            src="/fota/podstranky/suche-potery/suche-potery-5.avif"
                            alt="Hotový suchý potěr pomocí hladičky betonu - realizace společností AD Podlady"
                            className="w-full md:min-w-[300px] md:max-w-[350px] md:max-h-[350px] object-cover rounded-md"
                            />
                        </YAnimation>
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-center flex-col gap-2 md:gap-4 lg:gap-6">
                        <YAnimation className="w-full md:min-w-[300px] md:max-w-[350px] md:max-h-[350px] cursor-pointer">
                            <Img
                            width={350}
                            height={350}
                            src="/fota/podstranky/suche-potery/suche-potery-6.avif"
                            alt="Nehotový suchý potěr - realizace společností AD Podlady"
                            className="w-full md:min-w-[300px] md:max-w-[350px] md:max-h-[350px] object-cover rounded-md"
                            />
                        </YAnimation>
                        <Wrapper>
                            <SmallerHeading>
                                Výhody oproti klasickým potěrům
                            </SmallerHeading>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12 max-w-3xl">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `Menší riziko prasklin díky správnému hutnění a technologii.`,
                                                `Rychlejší postup prací - kratší čekání na další vrstvy.`,
                                                `Lepší kontrola rovinnosti podlahy.`,
                                                `Čistší práce na stavbě.`
                                            ].map((textBlock, index) => {
                                                return (
                                                    <ListItem
                                                    key={index}>
                                                        {textBlock}
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </FlexCol>
                                </List>
                            </MarginTop>
                        </Wrapper>
                    </Flex>
                </MarginTop>
            </Section>
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;