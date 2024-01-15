import React from 'react'
import Commonbtn from './Commonbtn'

const Offersection = () => {
        return (
                <div className='mt-[138px] mb-[109px]  sm:pt-0'>
                        <div className=' max-w-[1320px] mx-auto px-3'>
                                <div className='flex flex-row flex-wrap -mx-3'>
                                        <div className=' w-full  lg:w-1/2 px-3'>
                                                <div className=' bg-[url(./assets/images/offerimg1.webp)] bg-cover bg-center  bg-no-repeat'>
                                                        <div className='flex items-center gap-2 md:gap-[11px] pb-5 pt-[32px]'>
                                                                <hr className=' ml-[2px]  w-[40px] md:w-[95px] h-[1px] bg-black mr-2' />
                                                                <p className=' text-black font-normal text-[15px] md:text-[20px] font-ff-poppins'>Festival Offer</p>
                                                        </div>
                                                        <div className=' pl-[58px] md:pl-[115px]'>
                                                        <h2 className=' text-[25px] md:text-[35px] font-bold text-[#BD7D41] pb-[15px] font-ff-poppins'>Upto 40% Off</h2>
                                                        <p className=' text-[14px] md:text-lg leading-normal font-normal text-[#414141] font-ff-poppins pb-[38px] max-w-[262px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                        <Commonbtn text='ADD TO CART' padding='!p-[10px_12px] !mb-[71px]' />
                                                        </div>
                                                </div>
                                        </div>
                                        <div className=' w-full lg:w-1/2 px-3 mt-6 lg:mt-0'>
                                                <div className=' bg-[url(./assets/images/offerimg2.webp)] bg-cover bg-center  bg-no-repeat'>
                                                        <div className='flex items-center gap-2 md:gap-[11px] pb-5 pt-[32px]'>
                                                                <hr className=' ml-[2px] w-[40px] md:w-[95px] h-[1px] bg-black mr-2' />
                                                                <p className=' text-black font-normal text-[15px] md:text-[20px]'>Festival Offer</p>
                                                        </div>
                                                        <div className=' pl-[58px] md:pl-[115px]'>
                                                        <h2 className=' text-[25px] md:text-[35px] font-bold text-[#BD7D41] pb-[15px]'>Upto 40% Off</h2>
                                                        <p className=' text-[14px] md:text-lg leading-normal font-normal text-[#414141] pb-[38px] max-w-[262px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                        <Commonbtn text='ADD TO CART' padding='!p-[10px_12px] !mb-[71px]' />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Offersection
