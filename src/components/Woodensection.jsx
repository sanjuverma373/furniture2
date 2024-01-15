import React from 'react'
import Commonbtn from './Commonbtn'
import woodensofa from '../assets/images/wooden-sofa.webp'

const Woodensection = () => {
        return (
                <div className=' bg-[#F7F7F8] mt-[60px] md:mt-[169px] pt-11 relative'>
                        <div className=' max-w-[1320px] mx-auto px-3'>
                                <div className='flex flex-row flex-wrap -mx-3'>
                                        <div className=' lg:w-5/12 px-3'>
                                                <div className='flex items-center gap-2 md:gap-[11px] pb-6'>
                                                        <hr className='  w-[40px] md:w-[95px] h-[1px] bg-black' />
                                                        <p className=' text-[#BD7D41] font-normal text-[15px] md:text-[20px] font-ff-poppins'>Shopping Store</p>
                                                </div>
                                                <h2 className=' text-[#243040] leading-normal text-[25px] md:text-[35px] font-bold max-w-[410px] pb-[53px] font-ff-poppins'>Wooden Sofa Starts From <span className=' text-[23px] md:text-[33.053px]'
                                                >₹ 1200.00</span></h2>
                                                <Commonbtn text='SHOP NOW' />
                                        </div>
                                        <div className=' lg:w-7/12 px-3 pt-6 lg:pt-0'>
                                                <img className=' w-full relative z-10' src={woodensofa} alt="#" />
                                        </div>
                                </div>
                                <span className='bg-[#243040] w-full max-w-[260px] h-[100px] min-[470px]:max-w-[410px] min-[470px]:h-[190px] md:max-w-[580px] md:h-[270px] lg:max-w-[460px] lg:h-[270px] xl:max-w-[741px] xl:h-[270px]  right-0 bottom-0 translate-y-[38px] sm:translate-y-[65px] absolute '></span>
                        </div>
                </div>
        )
}

export default Woodensection
