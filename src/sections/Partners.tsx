import Partner from "src/layouts/Partner";
import SectionHeader from "src/layouts/SectionHeader";

export default function Partners() {
    return (
        <section className="py-6 sm:py-10 xl:py-28 partnersBg relative z-10 px-4">
            <div className="relative">
                <SectionHeader
                    title="Our Partners"
                    className="grid grid-cols-[1fr,auto,1fr] xl:flex"
                />
                <div className="flex items-center justify-center gap-6 my-6">
                    <Partner icon="aptos" />
                    <Partner icon="unity" />
                    <Partner icon="sigma" />
                </div>
                <div className="flex items-center justify-center gap-6 my-6">
                    <Partner icon="etherium" />
                    <Partner icon="partner6" />
                </div>

                <SectionHeader
                    title="Our Investors"
                    className="mt-24 grid grid-cols-[1fr,auto,1fr] xl:flex"
                />
                <div className="flex items-center justify-center gap-6 my-6">
                    <Partner icon="investors" />
                </div>

                {/* <img
                    src={partnersBg}
                    alt=""
                    className="absolute top-0 hidden lg:block  left-0 right-0 bottom-0
                max-w-[calc(90%+1rem)] w-full mx-auto -z-10"
                /> */}
            </div>
        </section>
    );
}
