import ce1 from "src/assets/images/ce1.png";
import ce2 from "src/assets/images/ce2.png";
import SectionHeader from "src/layouts/SectionHeader";

import image1 from "src/assets/svgs/cultural/1.svg";
import image2 from "src/assets/svgs/cultural/2.svg";
import image3 from "src/assets/svgs/cultural/3.svg";
import image4 from "src/assets/svgs/cultural/4.svg";
import image5 from "src/assets/svgs/cultural/5.svg";

const images = [image1, image2, image3, image4, image5];

export default function CulturalEthnicity() {
    return (
        <section id="tourism" className="py-28 cultureBg">
            <div className="mb-20">
                <SectionHeader
                    title="Cultural ethnicity without borders"
                    className="mt-20"
                />
                <h2 className="text-[#E2B588] text-[1.75rem] leading-[2.5rem] font-Papyrus text-center">
                    Discover diverse traditional culture with Divine Dimension
                </h2>
            </div>
            <div className="flex justify-center items-center flex-col gap-6">
                <img src={ce1} alt="Cultural ethnicity" />

                <div className="flex flex-wrap justify-between gap-6">
                    {images.map((image, index) => (
                        <img
                            key={index.toString() + image}
                            src={image}
                            alt="frame"
                        />
                    ))}
                </div>

                <img src={ce2} alt="Cultural ethnicity" />
            </div>
        </section>
    );
}
