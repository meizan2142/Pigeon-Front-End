import { useState } from "react";
import { NavLink } from "react-router";


const Dropdown = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <NavLink className="text-white px-6 py-3 text-lg font-medium rounded-md">
                Dropdown
            </NavLink>
            {isOpen && (
                <div className="absolute left-0 mt-[2px] w-40 bg-gray-100 shadow-lg rounded-md">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    </a>
                </div>
            )}
        </div>
    )
}

export default Dropdown



