import React from "react";
import navImage from "../assets/svgs/nav-bg.svg";

export default function Navbar() {
    return (
        <nav
            className="px-4 h-16 max-w-[28rem] sm:max-w-[40rem] 2xl:max-w-[60rem] mx-auto flex items-center relative z-10 mt-5"
            data-aos="fade-up"
        >
            <ul
                className="grid grid-cols-5 text-[0.57rem] sm:text-xs md:text-sm lg:text-lg 2xl:text-2xl font-Queen w-full mx-auto
             max-w-[25rem] sm:max-w-[30rem] 2xl:max-w-[52rem] mb-1 lg:mb-2 text-center text-[#381705]"
            >
                <li className="nav-item">
                    <a
                        target="_blank"
                        href="https://docs.divinedimension.io/introduction/divine-dimension"
                    >
                        Docs
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#dime">Dime</a>
                </li>
                <li className="nav-item">
                    <a href="#usecases">Usecases</a>
                </li>
                <li className="nav-item">
                    <a href="#divine-pod">Divine Pod</a>
                </li>
                <li className="nav-item">
                    <a href="#tourism">Tourism</a>
                </li>
            </ul>
            <img
                src={navImage}
                alt="nav-bg"
                className="absolute top-0 left-0 w-full h-full object-contain z-[-1] "
            />
        </nav>
    );
}
