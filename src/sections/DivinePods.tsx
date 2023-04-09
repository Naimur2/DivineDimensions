import img2 from "../assets/images/img2.png";
import divinePods from "../assets/svgs/divine-pods.svg";

export default function DivinePods() {
    return (
        <section
            id="divine-pod"
            className="grid lg:grid-cols-2 2xl:grid-cols-[2fr,1fr] px-10 py-16 xl:py-28 gap-10 devine-pods-bg"
        >
            <div data-aos="zoom-out-right">
                <img
                    src={img2}
                    alt=""
                    className="object-contain w-full h-full "
                />
            </div>
            <div
                data-aos="zoom-out-left"
                className="flex flex-col justify-center items-center px-6 gap-4 row-start-1 lg:row-start-auto"
            >
                <div className="grid gap-2">
                    <h1 className="text-[#E2B588] text-4xl lg:text-6xl text-center">
                        Introducing Divine Pods
                    </h1>
                    <img src={divinePods} alt="divinePods" />
                </div>
                <div className="grid gap-4">
                    <h2 className="text-[#E2B588] text-xl lg:text-2xl 2xl:text-[1.75rem] 2xl:leading-[3.5rem] font-Papyrus text-center ">
                        Experience the world beauty in 4D like never before
                    </h2>
                </div>
            </div>
        </section>
    );
}
