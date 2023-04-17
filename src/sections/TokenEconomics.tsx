import SectionHeader from "src/layouts/SectionHeader";
import tokenEconomics1 from "src/assets/images/token-economics-1.png";
import tokenEconomics2 from "src/assets/images/token-economics-2.png";

export default function TokenEconomics() {
    return (
        <section id="dime" className="py-10 xl:py-28 token-eco-bg">
            <div className="mb-20">
                <SectionHeader
                    title="Token Economics"
                    className="mt-10 xl:mt-20 grid grid-cols-3 xl:flex"
                />
                <h2
                    data-aos="fade-up"
                    className="text-[#E2B588] text-xl lg:text-2xl 2xl:text-[1.75rem] 2xl:leading-[2.5rem] font-Papyrus text-center mt-4"
                >
                    Introducing first 3D Asset class
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 px-6 xl:px-8">
                <div className="flex justify-end">
                    <img
                        src={tokenEconomics1}
                        alt="tokenEconomics1"
                        data-aos="fade-up-right"
                    />
                </div>
                <div className="">
                    <img
                        src={tokenEconomics2}
                        alt="tokenEconomics2"
                        data-aos="fade-up-left"
                    />
                </div>
            </div>
        </section>
    );
}
