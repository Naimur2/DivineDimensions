import copyrightIcon from "../assets/svgs/copyright-icon.svg";
import copyrightLeft from "../assets/svgs/copyright-left.svg";
import footerSeparator from "../assets/svgs/footer-separator.svg";
import SocialIcon from "../components/SocialIcon";
import SectionHeader from "../layouts/SectionHeader";

const socialIcons = [
    "twitter",
    "discord",
    "instagram",
    "github",
    "medium",
    "book",
    "youtube",
    "reddit",
    "facebook",
];

export default function Footer() {
    return (
        <footer className="py-8 bg-footerBg">
            <SectionHeader title="Social Network" className="mt-20" />
            <div className="grid grid-cols-3 md:grid-cols-9 p-14 lg:py-16 max-w-6xl mx-auto">
                {socialIcons.map((icon) => (
                    <SocialIcon key={icon} icon={icon as any} />
                ))}
            </div>
            <div className="flex items-center flex-col gap-6">
                <img className="mx-auto" src={footerSeparator} alt="" />
                <div className="flex items-center gap-10 py-4">
                    <img className="inline-block" src={copyrightLeft} alt="" />
                    <h1 className="text-[#C69C6D] text-5xl inline-block text-center">
                        Copyright
                        <img
                            className="inline-block mx-3"
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
