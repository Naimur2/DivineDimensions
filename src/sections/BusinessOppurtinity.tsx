import SectionHeader from "src/layouts/SectionHeader";

import frame1 from "src/assets/svgs/business-opp/1.svg";
import frame2 from "src/assets/svgs/business-opp/2.svg";
import frame3 from "src/assets/svgs/business-opp/3.svg";
import frame4 from "src/assets/svgs/business-opp/4.svg";
import frame5 from "src/assets/svgs/business-opp/5.svg";
import frame6 from "src/assets/svgs/business-opp/6.svg";
import frame7 from "src/assets/svgs/business-opp/7.svg";

const images = [frame5, frame6, frame3, frame4, frame7, frame1, frame2];

export default function BusinessOppurtinity() {
    return (
        <section id="usecases" className="py-28 business-opp">
            <SectionHeader
                title="Bussiness Opportunities of Divine Dimension"
                className="my-20 grid grid-cols-[1fr,3fr,1fr]"
            />
            <div className="flex flex-wrap justify-center gap-6 px-8">
                {images.map((image, index) => (
                    <img
                        key={index.toString() + image}
                        src={image}
                        alt="frame"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    />
                ))}
            </div>
        </section>
    );
}
