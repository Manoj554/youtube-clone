import Image from "next/image";

//Icons
import { HiOutlineSearch } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { IoMdMic, IoMdNotificationsOutline, IoMdApps } from 'react-icons/io';
import { SiYoutubestudio } from 'react-icons/si';

//Components
import SideBar from "./SideBar";

//Logo Image Path
import ytLgLightLogo from '../assets/images/yt_lg_light.png';

//Types & interface
import { ToggleState } from "../../types";

const Navbar = ({ className, setToggle }: ToggleState) => {
    return (
        <nav className={`${className} w-full flex justify-between bg-primary p-3  border-b border-[#414141] lg:px-6 lg:py-3 `}>

            {/* Hamburger & Youtube Icon  */}
            <div className="flex items-center lg:space-x-5">

                {/* Hamburger Icon  */}
                <button
                    className="hamburgerMenu hidden lg:block"
                    onClick={() => setToggle(prev => !prev)}
                >
                    <FiMenu className="iconSize" />
                </button>

                {/* Youtube logo  */}
                <div className="yt-logo flex items-center">
                    <Image
                        src={ytLgLightLogo}
                        alt="yt-lg-logo"
                        height={20}
                        width={90}
                    />
                </div>
            </div>
            {/* Search Box for larger Screen  */}
            <div className="largeSearchBox hidden lg:flex items-center space-x-3 w-5/12">

                {/* Search Input Tag  */}
                <div className="flex items-center w-full">
                    <input
                        className=" px-4 py-2 flex-1 outline-none focus:border border-[blue] placeholder:text-main bg-black  rounded-t-sm rounded-l-sm"
                        type="text"
                        name="search"
                        placeholder="Search"
                    />

                    <button className="h-10 w-16 flex justify-center items-center bg-secondary rounded-r-sm rounded-b-sm">
                        <HiOutlineSearch className="iconSize" />
                    </button>
                </div>

                {/* Google voice Input  */}
                <button className="h-10 w-10 flex items-center justify-center rounded-full  bg-black">
                    <IoMdMic className="iconSize rounded-full  bg-black" />
                </button>
            </div>

            {/* Icons & Navigation Buttons  */}
            <div className="Icons flex items-center space-x-6 lg:space-x-3">

                {/* Buttons  */}
                <button className="iconButton hidden lg:block">
                    <SiYoutubestudio className="h-5 w-5" />
                </button>
                <button className="iconButton hidden lg:block">
                    <IoMdApps className="iconSize" />
                </button>
                <button className="iconButton hidden lg:block">
                    <IoMdNotificationsOutline className="iconSize " />
                </button>
                <button className="iconButton lg:hidden">
                    <HiOutlineSearch className="iconSize " />
                </button>

                {/* Profile Menu Icon  */}
                <div className="profileIcon iconSize lg:h-8 lg:w-8 bg-white rounded-full">
                    m
                </div>
            </div>
        </nav>
    )
}

export default Navbar