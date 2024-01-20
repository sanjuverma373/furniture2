import React, { useState } from 'react'
import Commonbtn from './Commonbtn'
import sofa1 from '../assets/images/sofa1.webp'
import sofa2 from '../assets/images/sofa2.webp'
import sofa3 from '../assets/images/sofa3.webp'
import sofa4 from '../assets/images/sofa4.webp'
import sofa5 from '../assets/images/sofa5.webp'
import sofa6 from '../assets/images/sofa6.webp'
import side1 from '../assets/images/sideimg1.png'
import side2 from '../assets/images/sideimg2.png'
import side3 from '../assets/images/sideimg3.png'
import side4 from '../assets/images/sideimg4.png'
import side5 from '../assets/images/sideimg5.png'
import side6 from '../assets/images/sideimg6.png'
import { Cross, Stars } from './icons'
const crdItems = [
        {
                img: sofa1,
                sideimg: side1,
                h1: "Single Sofa",
                para: "Lorem ipsum dolor",
                num: "₹1200.00",
                num2: "₹1900.00",
                off: "28% off",
                color: "color :",
                colorname: "Black",
                btn: "Place order",
                id: 1
        },
        {
                img: sofa2,
                sideimg: side2,
                h1: "Single Sofa",
                para: "Lorem ipsum dolor",
                num: "₹1400.00",
                num2: "₹2100.00",
                off: "34% off",
                color: "color :",
                colorname: "blue",
                btn: "Place order",
                id: 2
        },
        {
                img: sofa3,
                sideimg: side3,
                h1: "Single Sofa",
                para: "Lorem ipsum dolor",
                num: "₹1600.00",
                num2: "₹2500.00",
                off: "40% off",
                color: "color :",
                colorname: "brown",
                btn: "Place order",
                id: 3
        },
        {
                img: sofa4,
                sideimg: side4,
                h1: "Single Sofa",
                para: "Lorem ipsum dolor",
                num: "₹2000.00",
                num2: "₹2200.00",
                off: "5% off",
                color: "color :",
                colorname: "cream",
                btn: "Place order",
                id: 4
        },
        {
                img: sofa5,
                sideimg: side5,
                h1: "Single Sofa",
                para: "Lorem ipsum dolor",
                num: "₹1700.00",
                num2: "₹1900.00",
                off: "15% off",
                color: "color :",
                colorname: "red",
                btn: "Place order",
                id: 5
        },
        {
                img: sofa6,
                sideimg: side6,
                h1: "Single Sofa",
                para: "Lorem ipsum dolor",
                num: "₹2700.00",
                num2: "₹4500.00",
                off: "60% off",
                color: "color :",
                colorname: "white",
                btn: "Place order",
                id: 6
        },

]

const Productsection = () => {
        const [Products, setProducts] = useState(false);
        const [cart, setCart] = useState([]);
        function showCart(crd) {
                setProducts(true)
                setCart([...cart, crd])

        }
        const remove = (crd) => {
                let items = [...cart]
                items = items.filter(cartItem => cartItem.id !== crd.id)
                setCart(items)
        }

        function clear() {
                setProducts(false)
                setCart([])
        }
        function back() {
                setProducts(false)
        }
        const Crddata = crdItems.map((crd) => (
                <div className=' lg:w-1/3 px-3' key={crd.id}>
                        <div className=' bg-white duration-300 hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] px-[23px] pt-[18px] pb-[53px] mb-6'>
                                <img className=' w-full' src={crd.img} alt="#" />
                                <div className=' pt-[19px] flex items-center justify-between pb-[22px]'>
                                        <p className='text-black font-medium text-[16px] md:text-xl'>Single Sofa</p>
                                        <Stars />
                                </div>
                                <p className=' text-[14px] md:text-lg font-normal text-[#4D4D4D] pb-4'>Lorem ipsum dolor </p>
                                <div className='flex items-center justify-between'>
                                        <p className=' text-black text-[20px] md:text-[28.667px] font-semibold'>₹1200.00</p>
                                        <Commonbtn text='ADD TO CART' padding='!p-[10px_12px]' fun={() => showCart(crd)} />
                                </div>
                        </div>
                </div>
        ))
        const cardItem = cart.map((crd) => (
                <div className=' w-[260px] xl:w-[450px] bg-white shadow-2xl px-2 py-3 mx-2 rounded-[25px] my-6 relative'>
                        <span onClick={()=> remove(crd)} className=' bg-slate-200 rounded-full p-2 absolute top-4 xl:top-2 right-4 xl:right-2 cursor-pointer'><Cross /></span>
                        <div className=' xl:flex '>
                                <img className=' rounded-[20px]' src={crd.sideimg} alt="#" />
                                <div className=' ml-3'>
                                        <p className='text-black font-medium text-[16px] md:text-xl'>{crd.h1}</p>
                                        <p className=' text-[14px] md:text-lg font-normal text-[#4D4D4D]'>{crd.para}</p>
                                        <div className='flex items-center'>
                                                <p className=' text-black text-[16px] md:text-[16px] font-semibold'>{crd.num}</p>
                                                <p className='text-black text-[13px] font-normal line-through ml-1'>{crd.num2}</p>
                                                <p className='text-black text-[12px] font-normal ml-2'>{crd.off}</p>
                                        </div>
                                        <div className=' flex items-center'>
                                                <p className='text-black text-[17px] font-medium'>{crd.color}</p>
                                                <p className='text-black text-[13px] font-normal'>{crd.colorname}</p>
                                        </div>
                                        <button className=' border border-solid border-transparent hover:bg-white hover:border hover:border-solid hover:border-orange-600 hover:text-orange-600 duration-300 bg-orange-600 text-white text-[16px] font-semibold px-5 py-2 mt-3 rounded-[15px]'>{crd.btn}</button>
                                </div>
                        </div>
                </div>

        ))
        return (
                <div className='pt-[80px] md:pt-[135px] '>
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
                        <div className={`fixed bg-white  w-full lg:w-1/3 top-0 bottom-0 p-2 z-20 overflow-y-scroll ${Products ? "right-0" : "right-[-100%]"}`}>
                                <div className=' flex justify-between'>
                                        <button onClick={clear} className=' clear border border-solid border-transparent hover:bg-white hover:border hover:border-solid hover:border-orange-600 hover:text-orange-600 duration-300 bg-orange-600 text-white text-[16px] font-semibold px-5 py-2 mt-3 rounded-[15px]'>Clear All</button>
                                        <button onClick={back} className=' border border-solid border-transparent hover:bg-white hover:border hover:border-solid hover:border-orange-600 hover:text-orange-600 duration-300 bg-orange-600 text-white text-[16px] font-semibold px-5 py-2 mt-3 rounded-[15px]'>Back</button>
                                </div>
                                {cardItem}
                        </div>
                </div>
        )
}

export default Productsection
