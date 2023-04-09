import React from "react";
import socialMediaBg from "../assets/svgs/socialmedia-bg.svg";
import discord from "../assets/svgs/discord.svg";
import twitter from "../assets/svgs/twitter.svg";
import instagram from "../assets/svgs/instagram.svg";
import github from "../assets/svgs/github.svg";
import medium from "../assets/svgs/medium.svg";
import book from "../assets/svgs/book.svg";
import youtube from "../assets/svgs/youtube.svg";
import reddit from "../assets/svgs/reddit.svg";
import facebook from "../assets/svgs/facebook.svg";

const icons = {
    discord,
    twitter,
    instagram,
    github,
    medium,
    book,
    youtube,
    reddit,
    facebook,
};

interface Props {
    className?: string;
    href?: string;
    icon: keyof typeof icons;
    animationDelay?: number;
}

export default function SocialIcons({
    className = "",
    href = "#",
    icon,
    animationDelay = 10,
}: Props) {
    return (
        <a
            className={`flex gap-2 justify-self-start  items-center justify-center 
            relative h-20 w-20 2xl:h-[8rem] 2xl:w-[8rem]  z-10 
            bg-socialMediaBg  bg-no-repeat bg-center bg-cover  mx-auto hover-scale
            ${className}
            `}
            href={href}
            data-aos="fade-up"
            data-aos-delay={animationDelay}
            target="_blank"
        >
            {/* <img
                src={socialMediaBg}
                alt=""
                className="absolute object-contain h-full w-full -z-10"
            /> */}
            <img
                src={icons[icon] ?? icons.discord}
                alt=""
                className="object-contain h-6 w-6 xl:h-8 xl:w-8"
            />
        </a>
    );
}
