import React from "react";
import img2 from "../assets/images/devine.png";

export interface FramedImageProps {
    img: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
}

function FramedImage(
    {
        img = img2,
        alt = "",
        className = "",
        style = {},
        ...props
    }: FramedImageProps,
    ref: React.Ref<HTMLDivElement>
) {
    return (
        <div className={className} style={style} {...props} ref={ref}>
            <div
                className="max-w-[30rem] relative after:content-empty after:block 
after:bg-frame1 after:absolute after:-inset-8 after:bg-cover"
            >
                <img
                    src={img}
                    alt={alt}
                    className="object-contain w-full h-full "
                />
            </div>
        </div>
    );
}

export default React.forwardRef(FramedImage);
