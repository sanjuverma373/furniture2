import React, { useState } from "react";
import navlogo from '../assets/images/nav-logo.webp'
import { Search, Shoping } from "./icons";

const Navsec = () => {
        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow-hidden");
                } else {
                        document.body.classList.remove("overflow-hidden");
                }
        }
        function CloseView() {
                setfirst(false);
                document.body.classList.remove("overflow-hidden");
        }
        return (
                <div>
                        <nav className=" max-w-[1320px] px-3 mx-auto">
                                <div className="flex justify-between items-center pt-[15px] px-3 ">
                                        <div className="">
                                                <img className="w-[160px] sm:w-[241px] " src={navlogo} alt="#" />
                                        </div>
                                        <div className="flex items-center  gap-[10px] sm:gap-[40px]">
                                                <ul className={` ${first ? "left-0" : "left-[-100%]"} flex items-center  gap-[55px] duration-300 mobileview2  max-lg:justify-center max-lg:flex-col max-lg:text-white max-lg:w-full max-lg:h-full  max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-gray-700`}>
                                                        <li>
                                                                <a
                                                                        onClick={CloseView}
                                                                        href="#"
                                                                        className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-3  after:h-[3px] hover:font-bold after:bg-[#BD7D41] text-lg font-normal font-ff-roboto'
                                                                >
                                                                        HOME
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a
                                                                        onClick={CloseView}
                                                                        href="#"
                                                                        className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-3 after:h-[3px] hover:font-bold after:bg-[#BD7D41] text-lg font-normal font-ff-roboto'
                                                                >
                                                                        ABOUT US
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a
                                                                        onClick={CloseView}
                                                                        href="#"
                                                                        className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-3 after:h-[3px] hover:font-bold after:bg-[#BD7D41] text-lg font-normal font-ff-roboto'
                                                                >
                                                                        SHOP
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a
                                                                        onClick={CloseView}
                                                                        href="#"
                                                                        className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-3 after:h-[3px] hover:font-bold after:bg-[#BD7D41] text-lg font-normal font-ff-roboto'
                                                                >
                                                                        CONTACT US
                                                                </a>
                                                        </li>
                                                
                                                </ul>
                                                <div className=" flex items-center gap-2 sm:gap-[28px]">
                                                        <Search/>
                                                        <Shoping/>
                                                </div>
                                        </div>
                                        <label className=" lg:hidden" onClick={MobileView}>
                                                {first ? (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-white absolute -left-7 duration-300 top-1 rotate-45 h-[2px] w-6"></span>
                                                                <span className="flex bg-white absolute -left-7 duration-300 -rotate-45 h-[2px] w-6 mt-1"></span>
                                                        </div>
                                                ) : (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-white h-[2px] duration-300 w-6"></span>
                                                                <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                                                                <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                                                        </div>
                                                )}
                                        </label>
                                </div>
                        </nav>
                </div>
        )
}

export default Navsec
