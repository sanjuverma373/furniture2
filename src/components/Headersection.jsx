import React, { useState } from 'react'
import Navsec from './Navsec'
import Commonbtn from './Commonbtn'

const Headersection = () => {
        const [isVisible, setIsVisible] = useState(false);

        const scrollToTop = () => {
                window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                });
        };

        window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                        setIsVisible(true);
                } else {
                        setIsVisible(false);
                }
        });
        return (
                <div className="bg-[url('./assets/images/header-bg-img.webp')] bg-center bg-cover bg-no-repeat min-h-[640px] lg:min-h-[932px]">
                        <Navsec />
                        <div className=' max-w-[1320px] px-3 mx-auto '>
                                <div className=' min-h-[480px] sm:min-h-[580px] flex flex-col items-center justify-center'>
                                        <h2 className=' text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-ff-poppins max-w-[908px] text-center mx-auto leading-normal pb-[15px]'>Awesome Design Best Furniture For Your Interior</h2>
                                        <p className='text-white text-xl  font-normal font-ff-poppins text-center pb-[51px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                                        <Commonbtn text='SHOP NOW' />
                                </div>
                        </div>
                        <div>
                                <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed bottom-[20px] right-[20px] z-[9]`}
                                        onClick={scrollToTop}
                                        style={{ display: isVisible ? 'block' : 'none', }} >
                                        <div className='w-[30px] h-[30px] xs:w-[50px] xs:h-[50px] rounded-full bg-[#313ef7] flex justify-center items-center'>
                                                <svg className='pb-1 m-auto' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>
                                        </div>
                                </button>
                        </div>
                </div>

        )
}

export default Headersection
