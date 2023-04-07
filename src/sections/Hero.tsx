import Navbar from "../../src/layouts/Navbar";
import diamondBtn from "../assets/images/diamond-btn.png";
import divineDimensions from "../assets/images/divine-dimensions.png";

export default function Hero() {
    return (
        <article className="p-4">
            <Navbar />
            <div className="flex flex-col items-center py-8">
                <img src={diamondBtn} alt="dm" />
                <img src={divineDimensions} alt="divine dimensions" />
                <button className="relative z-10 px-10 w-full max-w-[20rem] min-h-[4rem] bg-explore bg-contain bg-no-repeat bg-center">
                    <span className="font-Queen text-[#754C24] text-[1.8rem]">
                        Explore Now
                    </span>
                </button>
            </div>
        </article>
    );
}
