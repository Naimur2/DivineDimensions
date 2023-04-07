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
}

export default function SocialIcons({
    className = "",
    href = "#",
    icon,
}: Props) {
    return (
        <a
            className={`flex justify-self-start  items-center justify-center relative h-[8rem] w-[8rem] z-10 ${className}`}
            href={href}
        >
            <img
                src={socialMediaBg}
                alt=""
                className="absolute object-contain h-full w-full -z-10"
            />
            <img src={icons[icon] ?? icons.discord} alt="" />
        </a>
    );
}
