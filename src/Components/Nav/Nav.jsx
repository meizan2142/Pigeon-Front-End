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
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router";

const Nav = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const navMenu = [
        {
            menuName: "Home",
            path: "/",
            submenu: [],
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
                { name: "Upcoming Races", path: "/upcomingraces" },
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
                {navMenu.map((menu) => (
                    <Fragment key={menu.menuName}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={menu.menuName} />
                            </ListItemButton>
                        </ListItem>
                        {menu.submenu.length > 0 &&
                            menu.submenu.map((sub, index) => (
                                <ListItem key={index} disablePadding sx={{ pl: 4 }}>
                                    <ListItemButton>
                                        <ListItemText primary={sub.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </Fragment>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <header
                className={`fixed top-0 w-full z-20 ${scrollPosition > 300 ? "bg-[#0D1230]" : "bg-transparent"} text-white transition-transform duration-300 ${showNavbar ? "translate-y-" : "-translate-y-full"
                    }`}
            >
                <div className="container flex items-center justify-between mx-auto px-6 py-4">
                    {/* Logo */}
                    <div className="w-20 h-20">
                        <img src="https://i.ibb.co.com/fSRyxtf/Whats-App-Image-2025-01-25-at-13-27-25-689d585d-removebg-preview.png" alt="" />
                    </div>
                    {/* Menu */}
                    <ul className="hidden md:flex space-x-5 lg:space-x-10 desktop:mr-16 lg:mr-0">
                        <li>
                            <NavLink to='/' className="text-white px-6 py-3 text-lg font-medium rounded-md">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/upcomingraces'  className="text-white px-6 py-3 text-lg font-medium rounded-md">Latest Races</NavLink>
                        </li>


                    </ul>
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        {['left'].map((anchor) => (
                            <Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>
                                    <IoMdMenu size={25} color="white" />
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
    );
};

export default Nav;
