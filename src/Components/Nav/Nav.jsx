/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const Nav = () => {
    const navMenu = [
        {
            menuName: "Home",
            path: "",
            submenu: [], // No dropdown for Home
        },
        {
            menuName: "BRPFC",
            path: "",
            submenu: [
                { name: "History", path: "" },
                { name: "Rules", path: "" },
            ],
        },
        {
            menuName: "Race",
            path: "",
            submenu: [
                { name: "Upcoming Races", path: "" },
                { name: "Results", path: "" },
            ],
        },
        {
            menuName: "Members",
            path: "",
            submenu: [
                { name: "Join Us", path: "" },
                { name: "Directory", path: "" },
            ],
        },
        {
            menuName: "Auction",
            path: "",
            submenu: [
                { name: "Bidding Rules", path: "" },
                { name: "Live Auctions", path: "" },
            ],
        },
    ];
    // const navMenu = ["Home", "About", "Services", "Contact"];
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > scrollPosition) {
            setShowNavbar(false); // Scrolling down, hide navbar
        } else {
            setShowNavbar(true); // Scrolling up, show navbar
        }
        setScrollPosition(currentScroll);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);
    return (
        <div>
            <header
                className={`fixed top-0 w-full z-20 bg-[#0D1230] text-white shadow-lg transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="container flex items-center justify-between mx-auto px-6 py-4">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold">
                        <img
                            src="https://i.ibb.co/SKCQJM5/download.png"
                            alt="Logo"
                            className="w-32 h-32"
                        />
                    </a>
                    {/* Menu */}
                    <ul className="hidden md:flex space-x-10">
                        {navMenu.map((menu) => (
                            <li key={menu.menuName}>
                                <a
                                    href="#"
                                    className="hover:text-[#A28059] transition-all text-lg font-medium"
                                >
                                    {menu.menuName}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile Menu Icon */}
                    <button className="block md:hidden text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Nav