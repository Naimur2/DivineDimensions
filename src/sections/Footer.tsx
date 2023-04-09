import copyrightIcon from "../assets/svgs/copyright-icon.svg";
import copyrightLeft from "../assets/svgs/copyright-left.svg";
import footerSeparator from "../assets/svgs/footer-separator.svg";
import SocialIcon from "../components/SocialIcon";
import SectionHeader from "../layouts/SectionHeader";

const socialIcons = [
    { icon: "twitter", href: "https://twitter.com/DivineDimeVerse" },
    { icon: "discord", href: "https://discord.com/invite/2EFMpZCZ2k" },
    { icon: "instagram", href: "https://www.instagram.com/divinedimeverse/" },
    { icon: "github", href: "https://github.com/DivineDimension" },
    { icon: "medium", href: "https://medium.com/@DivineDimension" },
    { icon: "book", href: "https://docs.divinedimension.io/" },
    {
        icon: "youtube",
        href: "https://www.youtube.com/channel/UCGmSvLWGKiFvzjZHBDG686Q",
    },
    { icon: "reddit", href: "https://www.reddit.com/r/divinedimension" },
    { icon: "facebook" },
];

export default function Footer() {
    return (
        <footer className="py-8 bg-footerBg px-4">
            <SectionHeader
                title="Social Network"
                className="mt-20 grid grid-cols-3 place-items-center xl:flex"
            />
            <div className="grid grid-cols-3 md:grid-cols-9 p-14 lg:py-16 max-w-6xl mx-auto justify-center place-items-center">
                {socialIcons.map((icon, index) => (
                    <SocialIcon
                        key={icon.icon}
                        icon={icon.icon as any}
                        animationDelay={index * 100}
                        href={icon?.href}
                    />
                ))}
            </div>
            <div className="flex items-center flex-col gap-6">
                <img className="mx-auto" src={footerSeparator} alt="" />
                <div className="grid grid-cols-[1fr,4fr,1fr] xl:flex items-center gap-10 py-4 px-6">
                    <img className="inline-block" src={copyrightLeft} alt="" />
                    <h1 className="text-[#C69C6D] text-xl lg:text-3xl 2xl:text-5xl inline-block text-center">
                        Copyright
                        <img
                            className="inline-block mx-3
                            w-4 h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8
                            "
                            src={copyrightIcon}
                            alt="copyrightIcon"
                        />
                        2023 Divine Dimension. All rights reserved.
                    </h1>
                    <img
                        className="inline-block rotate-180"
                        src={copyrightLeft}
                        alt=""
                    />
                </div>
            </div>
        </footer>
    );
}
