import React from 'react'

import logo from '../../../assets/logo.png'
import githubLogo from '../../../assets/github.png'

const NavBar = () => {
    return (
        <div className="navbar shadow-sm text-black">

            <div className="navbar-start ml-10">
                <img src={logo} alt="Logo" className="w-10 h-10" />

                <a className="btn btn-ghost text-[22px] font-bold text-[#7663e7]">
                    HERO.IO</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
                    <li><a className="hover:text-[#7663e7] active:text-[#7663e7]">Home</a></li>
                    <li><a className="hover:text-[#7663e7] active:text-[#7663e7]">Apps</a></li>
                    <li><a className="hover:text-[#7663e7] active:text-[#7663e7]">Installation</a></li>
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

        </div>)
}

export default NavBar