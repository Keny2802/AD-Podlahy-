"use client"

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    XMarkIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "./Wrapper";
import ImgPlaceholder from "./ImgPlaceholder";

// type CarouselItemType = {
//     image: string;
//     title?: string;
// };

type CarouselType = {
    // carouselSet: CarouselItemType[];
    carouselSet: string[];
    title?: string;
    startIndex?: number;
    onClose: (type: boolean) => void;
};

const Carousel = ( { ...props } : CarouselType ) => {
    const {
        carouselSet,
        title,
        startIndex = 0,
        onClose
    } = props;

    const [currentIndex, setCurrentIndex] = useState<number>(startIndex ?? 0)

    useEffect(() => {
        setCurrentIndex(startIndex ?? 0);
    }, [startIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            return (
                prev === carouselSet.length - 1 ? 0 : prev + 1
            );
        });
    };

    const previousSlide = () => {
        setCurrentIndex((prev) => {
            return (
                prev === 0 ? carouselSet.length - 1 : prev - 1
            );
        });
    };

    return (
        <Fragment>
        <Wrapper className="fixed inset-0 z-[110] flex justify-center items-center bg-black">
        {/* Černý fullscreen overlay */}
        <Wrapper className="absolute inset-0 bg-black/80"
        onClick={(e) => {
            e.stopPropagation();

            onClose(true);
        }}></Wrapper>

        {/* Obsah karuselu */}
        <Wrapper className="relative z-[100] flex flex-col justify-center items-center max-w-[1000px] max-h-[90vh] w-full">
            {/* Index */}
            <p className="absolute -top-2 text-white text-xl md:text-2xl font-medium z-150]">
                {currentIndex + 1} / {carouselSet.length}
            </p>

            {/* Zavřít */}
            <button
            className="absolute top-6 right-4 p-2 bg-black/40 text-white rounded-full z-[150]"
            onClick={() => onClose(true)}
            >
                <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Šipky */}
            <button
            className="inline-block ml-2.5 absolute top-1/2 left-0 p-2 bg-black/40 text-white rounded-full z-[150]"
            onClick={previousSlide}
            >
            <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full z-[150]"
            onClick={nextSlide}
            >
            <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Obrázek */}
            <Wrapper className="flex justify-center items-center w-full h-full overflow-hidden">
                <ImgPlaceholder
                    src={carouselSet[currentIndex]}
                    alt={title || `${currentIndex + 1}. Ukázka`}
                />
                </Wrapper>
            </Wrapper>
        </Wrapper>
        </Fragment>
    );
};

export default Carousel;