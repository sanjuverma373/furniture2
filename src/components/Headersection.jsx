import React, { useState } from 'react'
import Navsec from './Navsec'
import Commonbtn from './Commonbtn'

const Headersection = () => {
        
        return (
                <div id='headers' className="bg-[url('./assets/images/header-bg-img.webp')] bg-center bg-cover bg-no-repeat min-h-[640px] lg:min-h-[932px]">
                        <Navsec />
                        <div className=' max-w-[1320px] px-3 mx-auto '>
                                <div className=' min-h-[480px] sm:min-h-[580px] flex flex-col items-center justify-center'>
                                        <h2 className=' text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-ff-poppins max-w-[908px] text-center mx-auto leading-normal pb-[15px]'>Awesome Design Best Furniture For Your Interior</h2>
                                        <p className='text-white text-xl  font-normal font-ff-poppins text-center pb-[51px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                                        <Commonbtn text='SHOP NOW' />
                                </div>
                        </div>
                        
                </div>

        )
}

export default Headersection
