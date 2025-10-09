import React from 'react'
import { Link, NavLink } from "react-router"
import logo from '../../../assets/logo.png'
import githubLogo from '../../../assets/github.png'

const NavBar = () => {
    return (
        <div className="navbar shadow-sm text-black">

            <div className="navbar-start ml-10">

                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                    <span className=" text-[22px] font-bold text-[#7663e7]">
                        HERO.IO
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#7663e7] font-semibold"
                                    : "hover:text-[#7663e7]"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/apps"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#7663e7] font-semibold"
                                    : "hover:text-[#7663e7]"
                            }
                        >
                            Apps
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/installation"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#7663e7] font-semibold"
                                    : "hover:text-[#7663e7]"
                            }
                        >
                            Installation
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className="navbar-end mr-10">
                <a
                    href="https://github.com/abdullahwazih"
                    className="btn bg-[#7663e7] border-none flex items-center text-[16px] font-semibold"
                >
                    <img
                        src={githubLogo}
                        alt="GitHub"
                        className="w-6 h-6 mr-2"
                    />
                    Contribute
                </a>
            </div>
        </div>
    )
}

export default NavBar
