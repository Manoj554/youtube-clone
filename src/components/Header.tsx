import Image from "next/image";

//Icons
import { HiOutlineSearch } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { IoMdMic, IoMdNotificationsOutline, IoMdApps } from 'react-icons/io';
import { MdExplore } from 'react-icons/md';
import { SiYoutubestudio } from 'react-icons/si';

//Components
import SideBar from "./SideBar";

//Logo Image Path
import ytLgLightLogo from '../assets/images/yt_lg_light.png';

//Types & interface
import { ToggleState } from "../../types";
import Navbar from "./Navbar";



const Header = ({ toggle, setToggle }: ToggleState) => {

    return (
        <header className="text-white fixed top-0 left-0 w-full z-50">

            {/* Main Navigation Bar  */}
            <Navbar toggle={toggle} setToggle={setToggle} />

            {/* Suggestion box  */}
            <div
                className={`w-full border-b border-[#414141] flex items-center space-x-4 bg-primary pl-4 pr-4 py-2 scrollbar-hide overflow-x-scroll md:py-3 ${toggle ? 'lg:pl-64' : 'lg:pl-24'}`}
            >
                <button className="py-2 px-3 text-sm bg-[#383838] rounded-sm flex items-center gap-x-1">
                    <MdExplore className="h-5 w-5" />
                    Explore
                </button>

                <div className="text-[#414141]">
                    |
                </div>

                {/* Suggestion Items  */}
                <div className="categorySuggestion bg-white text-black">
                    All
                </div>
                <div className="categorySuggestion">
                    Music
                </div>
                <div className="categorySuggestion">
                    Cricket
                </div>
                <div className="categorySuggestion">
                    All
                </div>
                <div className="categorySuggestion">
                    Music
                </div>
                <div className="categorySuggestion">
                    Cricket
                </div>
                <div className="categorySuggestion bg-white text-black">
                    All
                </div>
                <div className="categorySuggestion">
                    Music
                </div>
                <div className="categorySuggestion">
                    Cricket
                </div>
                <div className="categorySuggestion">
                    All
                </div>
                <div className="categorySuggestion">
                    Music
                </div>
                <div className="categorySuggestion">
                    Cricket
                </div>
            </div>

            <SideBar toggle={toggle} />
        </header>
    )
}

export default Header