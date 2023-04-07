import aptos from "src/assets/svgs/partners/1.svg";
import unity from "src/assets/svgs/partners/2.svg";
import sigma from "src/assets/svgs/partners/3.svg";
import investors from "src/assets/svgs/partners/4.svg";

const icons = { aptos, unity, sigma, investors };

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
            className={`bg-partnersFrame bg-no-repeat bg-contain h-full min-h-[10rem] sm:min-h-[17rem]
             w-full max-w-[17rem] inline-flex items-center justify-center ${className}`}
        >
            <img src={icons[icon]} alt="partner" className={iconClassName} />
        </div>
    );
}
