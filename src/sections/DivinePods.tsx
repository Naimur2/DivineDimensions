import React from "react";
import FramedImage from "src/layouts/FramedImage";
import ResponsiveCarousel from "src/layouts/ResponsiveStackedCarousel";
import styled from "styled-components";
import divinePods from "../assets/svgs/divine-pods.svg";
import carouselImage from "src/assets/svgs/carouselimage.svg";
import carouselImage2 from "src/assets/svgs/slide2-image/1.svg";
import carouselImage3 from "src/assets/svgs/slide2-image/2.svg";

export const data = [
    {
        cover: carouselImage2,
        title: "Interstaller",
    },
    {
        cover: carouselImage3,
        title: "Inception",
    },
    {
        cover: carouselImage,
        title: "Blade Runner 2049",
    },
];

export default function DivinePods() {
    // circular transition animation

    const [timer, setTimer] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
            if (timer === 8000) {
                setTimer(0);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section
            id="divine-pod"
            className="grid lg:grid-cols-2 2xl:grid-cols-[2fr,1fr] px-10 py-6 sm:py-10 xl:py-28 gap-10 devine-pods-bg"
        >
            <div
                className="
                w-full max-w-[calc(100vw-1rem)]
                "
            >
                <ResponsiveCarousel data={data} />
            </div>

            <div
                data-aos="zoom-in"
                className="flex flex-col justify-center items-center px-6 gap-4 row-start-1 lg:row-start-auto"
            >
                <div className="grid gap-2">
                    <h1 className="text-[#E2B588] text-3xl md:text-4xl lg:text-6xl text-center">
                        Introducing Divine Pods
                    </h1>
                    <img src={divinePods} alt="divinePods" />
                </div>
                <div className="grid gap-4">
                    <h2 className="text-[#E2B588] text-lg md:text-xl lg:text-2xl 2xl:text-[1.75rem] 2xl:leading-[3.5rem] font-Papyrus text-center ">
                        Experience the world beauty in 4D like never before
                    </h2>
                </div>
            </div>
        </section>
    );
}

interface StyledFrameProps {
    translateX?: string;
}

const StyledFrame = styled(FramedImage)<StyledFrameProps>``;
