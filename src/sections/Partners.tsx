import Partner from "src/layouts/Partner";
import SectionHeader from "src/layouts/SectionHeader";

export default function Partners() {
    return (
        <section className="py-28 partnersBg relative">
            <div
                className="relative before:content-empty before:block before:bg-partnersRect before:absolute before:top-[2.4rem] before:bottom-[8rem]
             before:z-30  before:bg-no-repeat before:bg-contain before:left-[9.5rem] before:w-[25rem] before:bg-center

             after:block after:bg-partnersRectRight after:absolute after:top-[2.4rem] after:bottom-[8rem]
             after:z-30  after:bg-no-repeat after:bg-contain after:right-[9.5rem] after:w-[25rem] after:bg-center
             "
            >
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
        </section>
    );
}
