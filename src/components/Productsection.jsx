import React from 'react'
import Commonbtn from './Commonbtn'
import sofa1 from '../assets/images/sofa1.webp'
import sofa2 from '../assets/images/sofa2.webp'
import sofa3 from '../assets/images/sofa3.webp'
import sofa4 from '../assets/images/sofa4.webp'
import sofa5 from '../assets/images/sofa5.webp'
import sofa6 from '../assets/images/sofa6.webp'
import { Stars } from './icons'
const crd = [
        {
                img: sofa1
        },
        {
                img: sofa2
        },
        {
                img: sofa3
        },
        {
                img: sofa4
        },
        {
                img: sofa5
        },
        {
                img: sofa6
        },
]

const Crddata = crd.map((crd, index) => (
        <div className=' lg:w-1/3 px-3' key={index}>
                <div className=' bg-white duration-300 hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] px-[23px] pt-[18px] pb-[53px] mb-6'>
                        <img className=' w-full' src={crd.img} alt="#" />
                        <div className=' pt-[19px] flex items-center justify-between pb-[22px]'>
                                <p className='text-black font-medium text-[16px] md:text-xl'>Single Sofa</p>
                                <Stars />
                        </div>
                        <p className=' text-[14px] md:text-lg font-normal text-[#4D4D4D] pb-4'>Lorem ipsum dolor </p>
                        <div className='flex items-center justify-between'>
                                <p className=' text-black text-[20px] md:text-[28.667px] font-semibold'>₹1200.00</p>
                                <Commonbtn text='ADD TO CART' padding='!p-[10px_12px]' />
                        </div>
                </div>
        </div>
))



const Productsection = () => {
        return (
                <div className=' pt-[80px] md:pt-[135px] '>
                        <div className=' max-w-[1320px] w-full mx-auto px-3'>
                                <div className='flex items-center gap-2 md:gap-[11px] pb-[19px]'>
                                        <hr className='  w-[40px] md:w-[95px] h-[1px] bg-black' />
                                        <p className=' text-[#BD7D41] font-normal text-[15px] md:text-[20px] font-ff-poppins'>Shopping Store</p>
                                </div>
                                <div className='flex flex-col min-[600px]:flex-row items-center min-[600px]:justify-between flex-wrap pb-[40px] md:pb-[90px]'>
                                        <h2 className=' text-[#243040] leading-normal text-[25px] md:text-[35px] font-bold text-center pb-3 md:pb-0 font-ff-poppins'>Our Products</h2>
                                        <Commonbtn text='VIEW ALL PRODUCT' />
                                </div>
                                <div className='flex flex-row justify-center flex-wrap -mx-3'>
                                        {Crddata}
                                </div>
                        </div>
                </div>
        )
}

export default Productsection
