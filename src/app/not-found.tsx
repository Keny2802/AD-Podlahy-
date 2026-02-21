import {
    Fragment
} from "react";

import Wrapper from "./components/Wrapper";
import Padding from "./components/Padding";
import FlexCol from "./components/FlexCol";
import Logo from "./components/Logo";
import Heading from "./components/Heading";
import BodyText from "./components/BodyText";
import Cta from "./components/Cta";

const NotFound = () => {
    return (
        <Fragment>
            <Wrapper className="fixed inset z-[1000] w-full h-screen bg-white text-black shadow-md">
                <Padding className="h-full flex justify-center items-center flex-col text-center">
                    <FlexCol className="justify-center items-center gap-4 md:gap-6 lg:gap-8">
                        <Logo
                        width={500}
                        height={500}
                        />
                        <Heading>
                            Bohužel, slepé místo.
                        </Heading>
                        <BodyText className="max-w-3xl">
                            Tady nic nenajdete, nejspíše stránka kam míříte neexistuje. Doporučujeme Vám se vrátit na hlavní stranu webu.
                        </BodyText>
                        <Cta
                        color="bg-[#c72026]"
                        className="md:w-max text-white"
                        href="/">
                            Vraťte se na hlavní stranu
                        </Cta>
                    </FlexCol>
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default NotFound;