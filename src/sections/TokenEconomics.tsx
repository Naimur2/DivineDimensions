import SectionHeader from "src/layouts/SectionHeader";
import tokenEconomics1 from "src/assets/images/token-economics-1.png";
import tokenEconomics2 from "src/assets/images/token-economics-2.png";

export default function TokenEconomics() {
    return (
        <section className="py-28 token-eco-bg">
            <div className="mb-20">
                <SectionHeader title="Token Economics" className="mt-20" />
                <h2 className="text-[#E2B588] text-[1.75rem] leading-[2.5rem] font-Papyrus text-center">
                    Introducing first 3D Asset class
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="flex justify-end">
                    <img src={tokenEconomics1} alt="tokenEconomics1" />
                </div>
                <div className="">
                    <img src={tokenEconomics2} alt="tokenEconomics2" />
                </div>
            </div>
        </section>
    );
}
