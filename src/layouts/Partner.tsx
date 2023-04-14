import aptos from "src/assets/svgs/partners/1.svg";
import unity from "src/assets/svgs/partners/2.svg";
import sigma from "src/assets/svgs/partners/3.svg";
import investors from "src/assets/svgs/partners/4.svg";
import etherium from "src/assets/svgs/partners/5.svg";

const icons = { aptos, unity, sigma, investors, etherium };

interface PartnerProps {
    icon: keyof typeof icons;
    className?: string;
    iconClassName?: string;
}

export default function Partner({
    icon = "aptos",
    className = "",
    iconClassName = "",
}: PartnerProps) {
    return (
        <div
            data-aos="zoom-in"
            className={`bg-partnersFrame bg-no-repeat bg-contain 
        h-[6rem]  w-[6rem]   sm:w-[8rem]  sm:h-[8rem]   md:h-[10rem] md:w-[10rem]  lg:w-[14rem] lg:h-[14rem] 2xl:w-[17rem] 2xl:h-[17rem]

            overflow-hidden
              inline-flex items-center justify-center ${className}`}
        >
            <img
                src={icons[icon]}
                alt="partner"
                className={`w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] md:w-[6rem] md:h-[6rem] object-contain
            ${iconClassName}`}
            />
        </div>
    );
}
