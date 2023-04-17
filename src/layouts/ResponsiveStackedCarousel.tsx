import React from "react";
import {
    ResponsiveContainer,
    StackedCarousel,
} from "react-stacked-center-carousel";

import useWindow from "src/hooks/useWindow";

export interface CardProps {
    cover: string;
}

export default function ResponsiveCarousel({
    data = [],
}: {
    data: CardProps[];
}) {
    const ref = React.useRef<StackedCarousel>();
    const { isLessThan, windowSize } = useWindow();

    React.useEffect(() => {
        const interval = setInterval(() => {
            ref.current?.goNext();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getSliderWidth = (parentWidth: number) => {
        if (parentWidth < 200) return 150;
        if (parentWidth < 400) return 200;
        if (parentWidth < 500) return 250;
        if (parentWidth < 800) return 300;
        if (parentWidth < 1440) return 550;
        return 800;
    };

    const getSliderHeight = () => {
        if (isLessThan("lg")) return 300;
        if (isLessThan("md")) return 280;
        if (isLessThan("sm")) return 190;
        return 450;
    };

    return (
        <div style={{ width: "100%", position: "relative" }}>
            <ResponsiveContainer
                carouselRef={ref}
                render={(parentWidth, carouselRef) => {
                    // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
                    // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
                    // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
                    // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
                    let currentVisibleSlide = 5;
                    if (parentWidth <= 1440) currentVisibleSlide = 3;
                    if (parentWidth <= 1080) currentVisibleSlide = 5;
                    return (
                        <StackedCarousel
                            ref={carouselRef}
                            slideComponent={Card}
                            slideWidth={getSliderWidth(parentWidth)}
                            carouselWidth={parentWidth}
                            height={getSliderHeight()}
                            data={data}
                            currentVisibleSlide={currentVisibleSlide}
                            maxVisibleSlide={5}
                            useGrabCursor
                            fadeDistance={0.5}
                        />
                    );
                }}
            />
            <></>
        </div>
    );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props: {
    data: CardProps[];
    dataIndex: number;
}) {
    const { cover } = props?.data[props?.dataIndex];
    const { isLessThan } = useWindow();

    return (
        <div
            style={{
                width: "100%",
                height: isLessThan("lg") ? 300 : 450,
                userSelect: "none",
            }}
            className="my-slide-component"
        >
            <img
                style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 0,
                }}
                draggable={false}
                src={cover}
            />
        </div>
    );
});
