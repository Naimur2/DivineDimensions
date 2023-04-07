import img2 from "../assets/images/img2.png";
import divinePods from "../assets/svgs/divine-pods.svg";

export default function DivinePods() {
    return (
        <section
            id="divine-pod"
            className="grid grid-cols-[2fr,1fr] px-10 py-28 gap-10 devine-pods-bg"
        >
            <div>
                <img
                    src={img2}
                    alt=""
                    className="object-cover w-full h-full "
                />
            </div>
            <div className="flex flex-col justify-center items-center px-6 gap-4">
                <div className="grid gap-2">
                    <h1 className="text-[#E2B588] text-[3.5rem]">
                        Introducing Divine Pods
                    </h1>
                    <img src={divinePods} alt="divinePods" />
                </div>
                <div className="grid gap-4">
                    <h2 className="text-[#E2B588] text-[1.75rem] leading-[4.5rem] font-Papyrus">
                        Experience the world beauty in 4D like never before
                    </h2>
                </div>
            </div>
        </section>
    );
}
