import ce1 from "src/assets/images/ce1.png";
import ce2 from "src/assets/images/ce2.png";
import SectionHeader from "src/layouts/SectionHeader";

import image1 from "src/assets/images/culture/1.png";
import image2 from "src/assets/images/culture/2.png";
import image3 from "src/assets/images/culture/3.png";
import image4 from "src/assets/images/culture/4.png";
import image5 from "src/assets/images/culture/5.png";

const images = [image1, image2, image3, image4, image5];

export default function CulturalEthnicity() {
    return (
        <section id="tourism" className="py-6 sm:py-10 xl:py-28 cultureBg">
            <div className="mb-20">
                <SectionHeader
                    title="Cultural ethnicity without borders"
                    className="mt-10 xl:mt-20 grid grid-cols-[1fr,auto,1fr]"
                    titleClassName="mb-4"
                />
                <h2
                    data-aos="fade-up"
                    className="text-[#E2B588] text-lg md:text-xl lg:text-2xl 2xl:text-[1.75rem] 2xl:leading-[2.5rem] font-Papyrus text-center 
                    max-w-[30ch] mx-auto 2xl:max-w-none"
                >
                    Discover diverse traditional culture with Divine Dimension
                </h2>
            </div>
            <div className="flex justify-center items-center flex-col gap-6 px-6 2xl:px-8">
                <img data-aos="fade-up" src={ce1} alt="Cultural ethnicity" />

                <div className="flex flex-wrap justify-center gap-6 px-8">
                    {images.map((image, index) => (
                        <img
                            key={index.toString() + image}
                            src={image}
                            alt="frame"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="hover-scale"
                        />
                    ))}
                </div>

                <img data-aos="fade-up" src={ce2} alt="Cultural ethnicity" />
            </div>
        </section>
    );
}
