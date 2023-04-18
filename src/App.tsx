import React, { useEffect, useRef } from "react";
import topLeft from "./assets/svgs/top-left.svg";
import Role from "./components/Role";
import BusinessOppurtinity from "./sections/BusinessOppurtinity";
import CulturalEthnicity from "./sections/CulturalEthnicity";
import DivinePods from "./sections/DivinePods";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Home from "./sections/Home";
import Partners from "./sections/Partners";
import TokenEconomics from "./sections/TokenEconomics";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
    const mainSectionRef = useRef<HTMLDivElement>(null);

    const [isFontLoaded, setIsFontLoaded] = React.useState(false);

    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            offset: 200,
        });
    }, []);

    React.useEffect(() => {
        document.querySelectorAll("img").forEach((img) => {
            img.addEventListener("load", () => {
                AOS.refresh();
            });
        });
    }, []);

    React.useEffect(() => {
        const loadFonts = async () => {
            try {
                const queenFont = new FontFace(
                    "Queen",
                    'url("/fonts/QueenInlineGrunge.ttf")'
                );

                const papyrusFont = new FontFace(
                    "Papyrus",
                    'url("/fonts/PAPYRUS.ttf") '
                );

                const fontleroyBrown = new FontFace(
                    "FontleroyBrown",
                    'url("/fonts/FONTLERO.otf")'
                );

                await Promise.all([
                    queenFont.load(),
                    papyrusFont.load(),
                    fontleroyBrown.load(),
                ]);

                document.fonts.add(queenFont);
                document.fonts.add(papyrusFont);
                document.fonts.add(fontleroyBrown);
                setIsFontLoaded(true);
                AOS.refresh();
            } catch (error) {
                console.error(error);
                setIsFontLoaded(true);
            }
        };

        loadFonts();
    }, []);

    React.useEffect(() => {
        const mainSection = mainSectionRef.current;
        if (mainSection) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            AOS.refresh();
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold: 1.0,
                }
            );

            observer.observe(mainSection);
        }
    }, []);

    return (
        <div className="container mx-auto py-4 relative">
            <Role className="-mb-6 lg:-mb-3" />
            <main
                className={`mx-6 sm:mx-8 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-[5.65rem] relative 
                ${isFontLoaded ? "circ-animation" : "max-h-0 overflow-hidden"}
                
                  `}
                ref={mainSectionRef}
            >
                <div className="top-design main-section scrollbar-hide !overflow-x-hidden">
                    <section
                        className={`grid gap-6 md:gap-8 xl:gap-20 2xl:gap-28 pb-8 heroBg`}
                    >
                        <Hero />
                        <Home />
                    </section>
                    <BusinessOppurtinity />
                    <DivinePods />
                    <CulturalEthnicity />
                    <TokenEconomics />
                    <Partners />
                    <Footer />
                    <img
                        src={topLeft}
                        className="absolute top-0 left-0 
                w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] md:w-[7rem] md:h-[7rem] lg:w-[8rem] lg:h-[8rem] 2xl:w-[10rem] 2xl:h-[10rem]
                "
                        alt=""
                    />
                    <img
                        src={topLeft}
                        className="absolute top-0 right-0 rotate-90
                    w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] md:w-[7rem] md:h-[7rem] lg:w-[8rem] lg:h-[8rem] 2xl:w-[10rem] 2xl:h-[10rem]
                    "
                        alt=""
                    />
                </div>
            </main>

            <Role className="-mt-6 lg:-mt-3" />
        </div>
    );
}
