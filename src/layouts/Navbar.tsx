import React from "react";
import navImage from "../assets/svgs/nav-bg.svg";

export default function Navbar() {
    return (
        <nav className="px-4 h-16 max-w-[60rem] mx-auto flex items-center relative z-10 mt-5">
            <ul className="grid grid-cols-5 text-2xl font-Queen w-full mx-auto max-w-[52rem] mb-2 text-center text-[#381705]">
                <li className="nav-item">
                    <a href="#">Docs</a>
                </li>
                <li className="nav-item">
                    <a href="#">Dime</a>
                </li>
                <li className="nav-item">
                    <a href="#">Usecases</a>
                </li>
                <li className="nav-item">
                    <a href="#">Divine Pod</a>
                </li>
                <li className="nav-item">
                    <a href="#">Tourism</a>
                </li>
            </ul>
            <img
                src={navImage}
                alt="nav-bg"
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            />
        </nav>
    );
}
