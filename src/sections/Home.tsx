import ResponsiveCarousel from "src/layouts/ResponsiveStackedCarousel";
import img1 from "../assets/images/img1.png";

import carouselImage from "src/assets/svgs/c2.svg";

export const data = [
    {
        cover: carouselImage,
        title: "Interstaller",
    },
    {
        cover: carouselImage,
        title: "Inception",
    },
    {
        cover: carouselImage,
        title: "Blade Runner 2049",
    },
    {
        cover: carouselImage,
        title: "Icon man 3",
    },
    {
        cover: carouselImage,
        title: "Venom",
    },
];

export default function Home() {
    return (
        <article className="grid lg:grid-cols-2 2xl:grid-cols-[2fr,1fr] p-10 gap-10">
            <div
                className="
                w-full max-w-[calc(100vw-10rem)]
                "
                
            >
                <ResponsiveCarousel data={data} />
            </div>
            <div className="flex items-center justify-center px-8 ">
                <h1
                    className="text-[#E2B588] text-3xl  lg:text-4xl 2xl:text-5xl max-w-[20ch] lg:max-w-[18ch] leading-[5rem]
                            before:content-empty before:block before:bg-quoteStart before:w-8 before:h-8 
                            before:bg-contain before:bg-no-repeat before:bg-center  
                            after:content-empty after:block after:bg-quoteEnd after:w-8 after:h-8 
                            after:bg-contain after:bg-no-repeat after:bg-center after:ml-auto
                            "
                    data-aos="zoom-out-left"
                >
                    Experience the beauty of world tourism destinations in a
                    whole new dimension
                </h1>
            </div>
        </article>
    );
}
