import {
    Fragment
} from "react";
import {
    GarageSet
} from "../components/Garageset";

// import Color from "../components/Color";
import Padding from "../components/Padding";
import Heading from "../components/Heading";
import Grid from "../components/Grid";
import YAnimation from "../components/YAnimation";
import Wrapper from "../components/Wrapper";
import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import Img from "../components/Img";
import OverlayWrapper from "../components/OverlayWrapper";
import Cta from "../components/Cta";

const Garage = () => {
    return (
        <Fragment>
            <RelativeOverlayWrapper
            className="w-full bg-[#c72026]"
            id="vozovy-park">
                <Wrapper
                className="absolute inset-0 bg-[#270c86]"
                style={{
                    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
                }}></Wrapper>
                <Padding className="text-white relative z-[10]">
                    <Padding>
                        <Heading className="text-center">
                            Doprava a čerpání betonu
                        </Heading>
                        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-4 md:mt-6 lg:mt-12 mx-auto">
                            {
                                GarageSet.map((card, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <YAnimation className="cursor-pointer">
                                                <Wrapper className="flex justify-center mx-auto">
                                                    <RelativeOverlayWrapper>
                                                        <Img
                                                        width={300}
                                                        height={300}
                                                        src={card.img}
                                                        alt={card.cta}
                                                        className="w-full h-auto md:w-[300px] md:h-[300px] object-cover rounded-md"
                                                        />
                                                        <OverlayWrapper
                                                        position="inset-x-0 bottom-4 flex justify-center"
                                                        className="px-3">
                                                            <Cta
                                                            href={card.href}
                                                            color="bg-[#270c86]"
                                                            className="text-white">
                                                                {card.cta}
                                                            </Cta>
                                                        </OverlayWrapper>
                                                    </RelativeOverlayWrapper>
                                                </Wrapper>
                                            </YAnimation>
                                        </Fragment>
                                    );
                                })
                            }
                        </Grid>
                    </Padding>
                </Padding>
            </RelativeOverlayWrapper>
        </Fragment>
    );
};

export default Garage;