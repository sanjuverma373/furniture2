import React from 'react'
import footerlogo from '../assets/images/footerlogo.webp'
import { Facebook, Insta, Twitter } from './icons'

const Footersection = () => {
  return (
    <div className=' bg-[#243040] pt-[87px]'>
      <div className=' max-w-[1320px] px-3 mx-auto mb-6 md:mb-20'>
          <div className='flex flex-row flex-wrap -mx-3'>
                <div className=' w-full lg:w-1/2 px-3 '>
                    <img className=' pb-[23px]' src={footerlogo} alt="#" />
                    <p className=' font-normal text-sm leading-normal text-white max-w-[338px] pb-[23px] font-ff-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
                    <div className=' flex items-center gap-3  pb-6'>
                         <span className=' cursor-pointer'>
                               <Insta />
                         </span>
                         <span className=' cursor-pointer'>
                               <Twitter />
                         </span>
                         <span className=' cursor-pointer'><Facebook/></span>
                    </div>
                </div>
                <div className=' w-full lg:w-1/2 px-3 '>
                     <div className='flex flex-row flex-wrap -mx-3'>
                      <div className=' w-1/2 md:w-4/12 px-3'>
                      <ul>
                            <li className='text-white text-sm font-medium leading-normal mb-[9px] relative after:absolute after:bg-[#BD7D41] after:h-[1px] after:w-[100px] xl:after:w-[130px] after:-bottom-[2px] after:left-0 font-ff-roboto'>ABOUT STORE</li>                            
                            <li className=' pt-2 mb-1'><a className='text-white text-sm font-normal hover:font-medium duration-300 leading-normal font-ff-roboto' href="">Home</a></li>
                            <li className=' mb-1'><a className='text-white text-sm font-normal hover:font-medium duration-300 leading-normal font-ff-roboto' href="">Shop</a></li>
                            <li className=' mb-1'><a className='text-white text-sm font-normal hover:font-medium duration-300 leading-normal font-ff-roboto' href="">Product</a></li>
                            <li className=' mb-1'><a className='text-white text-sm font-normal hover:font-medium duration-300 leading-normal font-ff-roboto' href="">Festival Offer</a></li>
                            <li className=' mb-1'><a className='text-white text-sm font-normal hover:font-medium duration-300 leading-normal font-ff-roboto' href="">Log in</a></li>    
                      </ul>
                      </div>
                      <div className=' w-1/2  md:w-4/12 px-3'>
                      <ul>
                            <li className='text-white font-ff-roboto text-sm font-medium leading-normal mb-[9px] relative after:absolute after:bg-[#BD7D41] after:h-[1px] after:w-[100px] xl:after:w-[130px] after:-bottom-[2px] after:left-0'>BRANDS</li>                            
                            <li className=' mb-1 pt-2'><a className='text-white hover:font-medium duration-300 text-sm font-normal leading-normal' href="">Album</a></li>
                            <li className=' mb-1'><a className='text-white font-ff-roboto hover:font-medium duration-300 text-sm font-normal leading-normal' href="">Shop</a></li>
                            <li className=' mb-1'><a className='text-white font-ff-roboto hover:font-medium duration-300 text-sm font-normal leading-normal' href="">Product</a></li>
                            <li className=' mb-1'><a className='text-white font-ff-roboto hover:font-medium duration-300 text-sm font-normal leading-normal' href="">Festival Offer</a></li>
                            <li className=' mb-1'><a className='text-white font-ff-roboto hover:font-medium duration-300 text-sm font-normal leading-normal' href="">Log in</a></li>    
                      </ul>
                      </div>
                      <div className=' pt-6 md:pt-0  md:w-4/12 px-3'>
                      <ul>
                            <li className='text-white font-ff-roboto text-sm font-medium leading-normal mb-[9px] relative after:absolute after:bg-[#BD7D41] after:h-[1px] after:w-[100px] xl:after:w-[130px] after:-bottom-[2px] after:left-0'>CATEGORIES</li>                            
                            <li className=' mb-1 pt-2'><a className='text-white hover:font-medium duration-300 font-ff-roboto text-sm font-normal leading-normal' href="">Single</a></li>
                            <li className=' mb-1'><a className='text-white hover:font-medium duration-300 font-ff-roboto text-sm font-normal leading-normal' href="">Aleeper Sofas</a></li>
                            <li className=' mb-1'><a className='text-white hover:font-medium duration-300 font-ff-roboto text-sm font-normal leading-normal' href="">Accent Chairs</a></li>
                            <li className=' mb-1'><a className='text-white hover:font-medium duration-300 font-ff-roboto text-sm font-normal leading-normal' href="">Festival Offer</a></li>
                            <li className=' mb-1'><a className='text-white hover:font-medium duration-300 font-ff-roboto text-sm font-normal leading-normal' href="">Log in</a></li>    
                      </ul>
                      </div>
                     </div>
                </div>
          </div>
      </div>
      <p className='text-white font-ff-roboto font-normal text-sm leading-normal pt-3 xs:pt-5 sm:pt-[26px] pb-3 xs:pb-5 sm:pb-[25px] text-center relative before:absolute before:w-full before:h-[1px] before:bg-[#9298A0] before:left-0 before:top-0'>@copyright{(new Date().getFullYear())}</p>
    </div>
  )
}

export default Footersection
