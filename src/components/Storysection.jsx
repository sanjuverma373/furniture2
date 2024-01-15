import React from 'react'
import sofaimg from '../assets/images/story-sofa-img.webp'
import { Video } from './icons'
import Commonbtn from './Commonbtn'

const Storysection = () => {
        return (
                <div className=' pt-[70px] pb-[] md:pb-[113px]'>
                        <div className=' pt-[70px] max-w-[1320px] px-3 mx-auto'>
                                <div className=' flex gap-y-6 flex-row flex-wrap -mx-3'>
                                        <div className='relative w-full lg:w-1/2 flex justify-center lg:justify-start'>
                                                <div className=' relative'>
                                                        <span className='flex max-w-[200px] sm:max-w-[300px] lg:max-w-[416px] min-h-[150px] sm:min-h-[250px] lg:min-h-[336px] bg-gradient-to-l from-[#8C939B] to-[#243040] w-full absolute -top-10 sm:-top-[64px]  md:left-0 -z-10 -translate-x-[15%]  sm:-translate-x-[30%] md:-translate-x-0 max-xs:ml-5'></span>
                                                        <div className='md:pl-[50px] max-w-[250px] sm:max-w-[350px] h-full lg:max-w-[506px] w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[498px] relative'>
                                                                <img className='h-full w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[498px] shadow-[3px_8px_26px_0_rgba(0,0,0,0.12)]' src={sofaimg} alt="sofa" />
                                                                <div className=' absolute flex bg-white -bottom-[2px] -right-[2px]'>
                                                                        <div className='p-2 sm:p-3 md:p-4 flex items-center gap-2'>
                                                                                <p className=' text-[#243040] font-Poppins font-normal text-xs relative after:absolute after:w-10 sm:after:w-[50px] md:after:w-[66px] after:h-[1px] after:top-1/2 after:right-0 pr-12 sm:pr-[62px] md:pr-[78px] after:bg-[#243040] font-ff-poppins'>Explore Video</p>
                                                                                <Video />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className=' w-full lg:w-1/2  px-3 pt-6 lg:pt-0'>
                                                <div className=' flex flex-col h-full justify-center'>
                                                        <div className='flex items-center gap-2 md:gap-[11px] pb-[19px]'>
                                                                <hr className=' w-[40px] md:w-[95px] h-[1px] bg-black' />
                                                                <p className=' text-[#BD7D41] font-normal text-[15px] md:text-[20px] font-ff-poppins'>Welcome Our Story</p>
                                                        </div>
                                                        <h2 className=' text-[#243040] leading-normal text-[35px] font-bold max-w-[436px] pb-[19px] font-ff-poppins'>We create the product you tell us you wish existed.</h2>
                                                        <p className=' text-[#4D4D4D] text-lg leading-normal font-normal max-w-[530px] pb-[34px] font-ff-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                                                        <Commonbtn text='READ MORE' />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Storysection
