import React from "react";
import headerLeft from "../assets/svgs/header-left.svg";

interface Props {
    className?: string;
    title: string;
    titleClassName?: string;
}

export default function SectionHeader({
    title,
    className = "",
    titleClassName = "",
}: Props) {
    return (
        <div
            data-aos="fade-up"
            className={`grid grid-cols-[1fr,auto,1fr] items-center justify-center gap-10 ${className} mb-4`}
        >
            <img className="inline-block" src={headerLeft} alt="" />
            <h1
                className={`text-[#C69C6D] text-3xl sm:text-4xl lg:text-7xl mb-0 inline-block font-FontleroyBrown text-center ${titleClassName}`}
            >
                {title}
            </h1>
            <img className="inline-block rotate-180" src={headerLeft} alt="" />
        </div>
    );
}
