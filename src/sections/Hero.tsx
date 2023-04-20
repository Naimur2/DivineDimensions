import React, { useRef } from "react";
import Navbar from "../../src/layouts/Navbar";
import diamondBtn from "../assets/images/diamond-btn.png";
import divineDimensions from "../assets/images/divine-dimensions.png";
import AOS from "aos";

export default function Hero({ isAppLoaded }: { isAppLoaded: boolean }) {
    const animatedSectionRef = useRef<HTMLImageElement>(null);
    const mainSectionRef = useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        const toggleAnimation = () => {
            if (animatedSectionRef.current) {
                animatedSectionRef.current.classList.toggle("translate-y-0");
                animatedSectionRef.current.classList.toggle("opacity-100");
            }
        };

        window.addEventListener("scroll", toggleAnimation);
    }, [isAppLoaded]);

    return (
        <article className="p-4" ref={mainSectionRef}>
            <Navbar />
            <div
                className={`flex flex-col items-center py-8 translate-y-[-100%] opacity-0  ${
                    isAppLoaded ? "devinedimensLogo" : ""
                } `}
                ref={animatedSectionRef}
            >
                <div data-aos="fade-down">
                    <img
                        src={diamondBtn}
                        alt="dm"
                        className="w-[10rem]  lg:w-[16rem]  2xl:w-[25rem]"
                    />
                </div>
                <img
                    src={divineDimensions}
                    alt="divine dimensions"
                    className={`w-[24rem] lg:w-[30rem]  2xl:w-[40rem] object-contain`}
                />

                <p
                    className="font-Queen uppercase text-sm lg:text-base xl:text-lg 2xl:text-xl tracking-[0.20rem] 
                xl:tracking-[0.25rem] text-[#CF9E27] mt-[-2rem] md:mt-[-2.5rem] xl:mt-[-3rem] mb-14
                  text-center
                  "
                    data-aos="fade-up"
                    data-aos-offset="-500"
                    data-aos-delay="2000"
                    data-aos-duration="1000"
                >
                    powered by luma ai models
                </p>

                <button
                    data-aos="fade-up"
                    data-aos-duration="500"
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
