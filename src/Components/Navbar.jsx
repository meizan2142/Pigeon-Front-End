import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`p-4 h-[150px] fixed z-10 mx-auto w-full ${scrollPosition > 600 ? 'bg-[#0D1230]': 'bg-transparent'}`}>
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 mt-10">
                    <img src="https://i.ibb.co.com/SKCQJM5/download.png" alt="pigeon-logo" />
                </a>
                <ul className="items-stretch hidden mt-10 space-x-3 md:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="text-white ease-out transition-all text-lg hover:text-[#A28059] font-bold">Home</a>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar