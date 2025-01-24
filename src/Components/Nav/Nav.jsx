/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoMdMenu } from "react-icons/io";
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
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <div>
            <header
                className={`fixed top-0 w-full z-20 bg-[#0D1230] text-white shadow-lg transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="container flex items-center justify-between mx-auto px-6 py-4">
                    {/* Logo */}
                    <h1 className="text-white font-bold text-3xl">Pigeon</h1>
                    {/* Menu */}
                    <ul className="hidden md:flex space-x-10">
                        {navMenu.map((menu) => (
                            <li key={menu.menuName} className="group relative">
                                <button className="text-white font-bold text-lg hover:text-[#AC8D68] transition-all ease-in-out">
                                    {menu.menuName}
                                </button>
                                {/* Only show submenu if it's not "Home" and it has submenu items */}
                                {menu.submenu.length > 0 && (
                                    <div className="absolute hidden group-hover:block bg-gray-100 min-w-[160px] shadow-md mt-1 rounded">
                                        {menu.submenu.map((sub, index) => (
                                            <a
                                                key={index}
                                                href={sub.path} // Use the path from the submenu data
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                                            >
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Icon */}
                    <div className="2xl:hidden md:inline">
                        {['left'].map((anchor) => (
                            <Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>
                                    <IoMdMenu size={30} color="white" />
                                </Button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </Fragment>
                        ))}
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Nav