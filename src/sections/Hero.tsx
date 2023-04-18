import React, { useRef } from "react";
import Navbar from "../../src/layouts/Navbar";
import diamondBtn from "../assets/images/diamond-btn.png";
import divineDimensions from "../assets/images/divine-dimensions.png";
import AOS from "aos";

export default function Hero() {
    const dimondButtonRef = useRef<HTMLImageElement>(null);
    const divineDimensionsRef = useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        // check if the distance from window top to the top of the element is less than the window height
        // if it is, then refresh the animation

        const checkIfInView = () => {
            const dimondButtonRect =
                dimondButtonRef.current?.getBoundingClientRect();
            const divineDimensionsRect =
                divineDimensionsRef.current?.getBoundingClientRect();

            if (dimondButtonRect && divineDimensionsRect) {
                if (dimondButtonRect?.top < window.innerHeight) {
                    AOS.refresh();
                }

                if (divineDimensionsRect?.top < window.innerHeight) {
                    AOS.refresh();
                }
            }
        };

        window.addEventListener("scroll", checkIfInView);

        return () => {
            window.removeEventListener("scroll", checkIfInView);
        };
    }, []);

    return (
        <article className="p-4">
            <Navbar />
            <div className="flex flex-col items-center py-8">
                <div data-aos="fade-up" className="animated-dimond">
                    <img
                        src={diamondBtn}
                        alt="dm"
                        className="w-[10rem]  lg:w-[16rem]  2xl:w-[25rem]"
                        ref={dimondButtonRef}
                    />
                </div>
                <img
                    data-aos="fade-up"
                    data-aos-delay="3000"
                    src={divineDimensions}
                    alt="divine dimensions"
                    className="w-[24rem] lg:w-[30rem]  2xl:w-[40rem] object-containj"
                    ref={divineDimensionsRef}
                />
                <button
                    data-aos="fade-up"
                    className="relative z-10 px-5 lg:px-7 2xl:px-10 w-full max-w-[14rem] lg:max-w-[17rem] 
                    2xl:max-w-[20rem] min-h-[4rem] bg-explore bg-contain bg-no-repeat bg-center"
                >
                    <span className="font-Queen text-[#754C24] text-lg lg:text-2xl 2xl:text-[1.8rem]">
                        Explore Now
                    </span>
                </button>
            </div>
        </article>
    );
}
