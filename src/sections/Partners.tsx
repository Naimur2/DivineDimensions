import Partner from "src/layouts/Partner";
import SectionHeader from "src/layouts/SectionHeader";
import partnersBg from "src/assets/svgs/partners-bg.svg";

export default function Partners() {
    return (
        <section className="py-28 partnersBg relative z-10">
            <div className="relative">
                <SectionHeader title="Our Partners" />
                <div className="flex items-center justify-center gap-6 my-6">
                    <Partner icon="aptos" />
                    <Partner icon="unity" />
                    <Partner icon="sigma" />
                </div>

                <SectionHeader title="Our Investors" className="mt-24" />
                <div className="flex items-center justify-center gap-6 my-6">
                    <Partner icon="investors" />
                </div>
            </div>
            <img
                src={partnersBg}
                alt=""
                className="absolute top-0 pt-[9.3rem] max-h-[51rem] left-0 right-0 mx-auto -z-10"
            />
        </section>
    );
}
