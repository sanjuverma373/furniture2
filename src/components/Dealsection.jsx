import React from 'react'
import dealimg1 from '../assets/images/dealimg1.webp'
import dealimg2 from '../assets/images/dealimg2.webp'
import dealimg3 from '../assets/images/dealimg3.webp'
import Commonbtn from './Commonbtn'
import { Larrow, Rarrow, Stars } from './icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const dealcrd = [
        {
                img: dealimg1
        },
        {
                img: dealimg2
        },
        {
                img: dealimg3
        },
        {
                img: dealimg1
        },
        {
                img: dealimg2
        },
        {
                img: dealimg3
        },

]

const Dealdata = dealcrd.map((dealcrd, index) => (

        <div className=''>
                <div className=' bg-white duration-300 hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] mr-2 md:mr-6 px-[23px] pt-[18px] pb-[30px]  md:pb-[53px] mb-6' key={index}>
                        <img className=' w-full' src={dealcrd.img} alt="#" />
                        <div className=' pt-[19px] flex items-center justify-between pb-[22px]'>
                                <p className='text-black font-medium text-[16px]  md:text-[20px] font-ff-poppins'>Single Sofa</p>
                                <Stars />
                        </div>
                        <p className=' text-sm md:text-lg font-normal text-[#4D4D4D] pb-4 font-ff-poppins'>Lorem ipsum dolor </p>
                        <div className='flex items-center justify-between'>
                                <p className=' text-black text-[19px] md:text-[28.667px] font-semibold font-ff-poppins'>₹1200.00</p>
                                <Commonbtn text='ADD TO CART' padding='!p-[10px_12px]' />
                        </div>
                </div>
        </div>

))

const Dealsection = () => {
        const slid = React.useRef(null);
        const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: "20px",
                centerMode:true,
                arrows: false,
                responsive: [
                        {
                          breakpoint: 1400,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: 968,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        
                          }
                        },
                      ]
        };
        return (
                <div className=' pt-[110px]'>
                        <div className=' max-w-[1550px] px-3  min-[590px]:px-[120px]  mx-auto relative'>
                                <div className='flex items-center gap-2 md:gap-[11px] pb-6'>
                                        <hr className=' w-[40px] md:w-[95px] h-[1px] bg-black' />
                                        <p className=' text-[#BD7D41] font-normal text-[15px] md:text-[20px] font-ff-poppins'>Shopping Store</p>
                                </div>
                                <h2 className=' text-[#243040] leading-normal text-[25px] md:text-[35px] font-bold max-w-[410px] pb-[66px] font-ff-poppins'>Latest Deal</h2>
                                <div className=' flex items-center'>

                                        <div className=' w-full '>
                                                <Slider className='slide' ref={slid} {...settings}>
                                                        {Dealdata}
                                                </Slider>
                                        </div>

                                </div>
                        <div className='  flex items-center justify-center  bg-white drop-shadow-[2px_7px_16px_rgba(0,0,0,0.08)] rounded-[50%] shrink-0 w-[55px] md:w-[99px] h-[55px] md:h-[99px] bottom-[-12%] md:bottom-[-20%] right-[15%]   absolute min-[620px]:top-[50%] min-[620px]:right-0'>
                                <button onClick={() => slid?.current?.slickPrev()}>
                                        <Rarrow />
                                </button>
                        </div>
                        <div className=' absolute w-[55px] md:w-[99px] h-[55px] md:h-[99px]  flex items-center justify-center  bg-white rounded-[50%] drop-shadow-[2px_7px_16px_rgba(0,0,0,0.08)] shrink-0 bottom-[-12%] md:bottom-[-20%] left-[15%]   min-[620px]:top-[50%] min-[620px]:left-0'>
                                <button onClick={() => slid?.current?.slickNext()}> 
                                        <Larrow />
                                </button>
                        </div>
                        </div>
                </div>
        )
}

export default Dealsection
