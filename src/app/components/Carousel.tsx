"use client";

import {
    useState,
    Fragment
} from "react";

import FixedOverlayWrapper from "./FixedOverlayWrapper";
import Wrapper from "./Wrapper";
import Padding from "./Padding";
import Img from "./Img";

type CarouselItem = {
    image: string;
    alt?: string;
};

type Carousel = {
    carouselSet: CarouselItem[];
    startIndex: number;
};

const Carousel = ({ ...props }: Carousel) => {
    const {
        carouselSet,
        startIndex = 0
    } = props;

    const [currentIndex, setCurrentIndex] = useState<number>(startIndex);

    return (
        <Fragment>
            <FixedOverlayWrapper className="bg-black/30 flex justify-center items-center overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                }}>
                    {
                        carouselSet.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <Img
                                    width={1000}
                                    height={1000}
                                    src={item.image}
                                    alt={item.alt || ""}
                                    className="rounded-md object-cover"
                                    />
                                </Fragment>
                            );
                        })
                    }
                </div>
            </FixedOverlayWrapper>
        </Fragment>
    );
};

export default Carousel;