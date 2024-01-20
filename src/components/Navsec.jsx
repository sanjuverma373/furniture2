import React, { useEffect, useState } from "react";
import navlogo from '../assets/images/nav-logo.webp'
import { Cross, Search, Shoping } from "./icons";
import { Link, useLocation } from "react-router-dom";

const Navsec = () => {
        const location = useLocation(); const [isOpen, setOpen] = useState(false); const [search, setSearch] = useState(false); const [input, setInput] = useState([]);
        useEffect(() => {
                if (search) { document.body.classList.add('overflow-hidden'); }
                else { document.body.classList.remove('overflow-hidden'); }
        }, [search]);
        const openinput = (item) => {
                setInput([input, item]);
                setSearch(true);
        };
        const closeModal = () => {
                setSearch(false);
        };
        if (isOpen == true) { document.body.classList.add("overflow-hidden") }
        else { document.body.classList.remove("overflow-hidden") }       


        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow-hidden");
                } else {
                        document.body.classList.remove("overflow-hidden");
                }
        }       
        
        {first ? document.body.classList.add("overflow-hidden"): document.body.classList.remove("overflow-hidden")}
        
        return (
                <div>
                        <nav className=" max-w-[1320px] px-3 mx-auto">
                                <div className="flex justify-between items-center pt-[15px] px-3 ">
                                        <div className="">
                                                <img className="w-[160px] sm:w-[241px] " src={navlogo} alt="#" />
                                        </div>
                                        <div className="flex items-center  gap-[10px] sm:gap-[40px]">
                                                <ul className={` ${first ? "left-0" : "left-[-100%]"} flex items-center  gap-[55px] duration-300 mobileview2  max-lg:justify-center max-lg:flex-col max-lg:text-white max-lg:w-full max-lg:h-full  max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-gray-700`}>
                                                        <Link to="/">
                                                                <a
                                                                  onClick={() => setfirst(false)}      
                                                                        href=""
                                                                        className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-3  after:h-[3px] hover:font-bold after:bg-[#BD7D41] text-lg font-normal font-ff-roboto'
                                                                >
                                                                        HOME
                                                                </a>
                                                        </Link>
                                                        <Link to="/about">
                                                                <a
                                                                  onClick={() => setfirst(false)}   
                                                                        href=""
                                                                        className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-3 after:h-[3px] hover:font-bold after:bg-[#BD7D41] text-lg font-normal font-ff-roboto'
                                                                >
                                                                        ABOUT US
                                                                </a>
                                                        </Link>
                                                        <Link to="/shop" >
                                                                <a
                                                                onClick={() => setfirst(false)}
                                                                        href="#"
                                                                        className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-3 after:h-[3px] hover:font-bold after:bg-[#BD7D41] text-lg font-normal font-ff-roboto'
                                                                >
                                                                        SHOP
                                                                </a>
                                                        </Link>
                                                        <Link to="contact">
                                                                <a
                                                                onClick={() => setfirst(false)}
                                                                        href="#"
                                                                        className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0 after:-bottom-3 after:h-[3px] hover:font-bold after:bg-[#BD7D41] text-lg font-normal font-ff-roboto'
                                                                >
                                                                        CONTACT US
                                                                </a>
                                                        </Link>

                                                </ul>
                                                <div className=" flex items-center gap-2 sm:gap-[28px]">
                                                        <div onClick={() => openinput('item')} className=' cursor-pointer'>
                                                                <Search />
                                                        </div>
                                                        <Shoping />
                                                        
                                                </div>
                                        </div>
                                        <label className=" lg:hidden" onClick={MobileView}>
                                                {first ? (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-white absolute -left-7 duration-300 rounded-lg top-1 rotate-45 h-[2px] w-6"></span>
                                                                <span className="flex bg-white absolute -left-7 duration-300 rounded-lg -rotate-45 h-[2px] w-6 mt-1"></span>
                                                        </div>
                                                ) : (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-white h-[2px] rounded-lg duration-300 w-6"></span>
                                                                <span className="flex bg-white h-[2px] rounded-lg duration-300 w-6 mt-1"></span>
                                                                <span className="flex bg-white h-[2px] rounded-lg duration-300 w-6 mt-1"></span>
                                                        </div>
                                                )}
                                        </label>
                                </div>
                               
                                {search && (
                                        <div>
                                                <div className='bg-white max-w-[300px] xs:max-w-[380px] sm:max-w-[470px] md:max-w-[600px] min-h-[50px] sm:min-h-[80px] mt-7  shadow-2xl rounded-full sm:rounded-[40px] fixed z-40 w-full flex flex-col justify-center items-center top-10 left-1/2 -translate-x-1/2'>
                                                        <div className='flex w-full items-center justify-between'>
                                                                <input className='px-10 text-black text-base sm:text-xl font-Poppins font-normal w-[90%] bg-transparent outline-none' placeholder='Search...' type="text" name="" id="" />
                                                                <span onClick={closeModal} className="cursor-pointer pr-10">
                                                                        <Cross />
                                                                </span>
                                                        </div>
                                                </div>
                                        </div>
                                )}
                        </nav>
                </div>
        )
}

export default Navsec
