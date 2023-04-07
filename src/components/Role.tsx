import React from "react";
import bar from "../../src/assets/svgs/top-bar.svg";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Role({ className = "", ...rest }: Props) {
    return (
        <div {...rest} className={`w-full h-[4.8rem] z-40 ${className}`}>
            <img
                className="w-full h-full object-contain"
                src={bar}
                alt="role"
            />
        </div>
    );
}
