import Partner from "src/layouts/Partner";
import SectionHeader from "src/layouts/SectionHeader";
import partnersBg from "src/assets/svgs/partners-bg.svg";

export default function Partners() {
    return (
        <section className="py-28 partnersBg relative z-10 px-4">
            <div className="relative">
                <SectionHeader
                    title="Our Partners"
                    className="grid grid-cols-3 xl:flex"
                />
                <div className="flex items-center justify-center gap-6 my-6">
                    <Partner icon="aptos" />
                    <Partner icon="unity" />
                    <Partner icon="sigma" />
                </div>

                <SectionHeader
                    title="Our Investors"
                    className="mt-24 grid grid-cols-3 xl:flex"
                />
                <div className="flex items-center justify-center gap-6 my-6">
                    <Partner icon="investors" />
                </div>
            </div>
            <img
                src={partnersBg}
                alt=""
                className="absolute top-0 hidden lg:block lg:pt-[9.1rem] lg:max-h-[47rem] xl:pt-[9.3rem] xl:max-h-[51rem]  left-0 right-0
                max-w-[calc(100%-1rem)] w-full mx-auto -z-10"
            />
        </section>
    );
}
