import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import { Controller, EffectFade, Thumbs } from 'swiper/modules';
import image1 from '../assets/images/testimonial-img1.webp'
import image2 from '../assets/images/testimonial-img2.webp'
import image3 from '../assets/images/testimonial-img3.webp'
import image4 from '../assets/images/testimonial-img4.webp'
import image5 from '../assets/images/testimonial-img5.webp'
import image6 from '../assets/images/testimonial-img6.webp'
import image7 from '../assets/images/testimonial-img7.webp'
const Testimonial = () => {
        const [thumbsSwiper, setThumbsSwiper] = useState(null);
        const TestimonialData = [
                {
                        img: image1,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image2,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image3,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image4,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image5,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image6,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image7,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image1,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image2,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image3,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image4,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image5,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image6,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                {
                        img: image7,
                        name: "Treepi Shoty",
                        Profession: "Teacher",
                        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
                },
                
        ]
        return (
                <div className='mx-auto px-2 max-w-[1320px] md:pt-[30px]'>
                        <div className='flex items-center gap-2 md:gap-[11px] pb-[19px]'>
                                <hr className='  w-[40px] md:w-[95px] h-[1px] bg-black' />
                                <p className=' text-[#BD7D41] font-normal text-[15px] md:text-[20px] font-ff-poppins'>Customer Says</p>
                        </div>
                        <h2 className=' text-[#243040] leading-normal text-[35px] font-bold max-w-[436px] pb-[19px] font-ff-poppins'>Testimonial</h2>
                         <div className='mt-[51px] mb-12 sm:mb-16 md:mb-20 lg:mb-[109px]'>
                                <div>
                                        <Swiper loop={"true"} spaceBetween={55} breakpoints={{ 450: { slidesPerView: 3, }, 700: { slidesPerView: 5, }, 1024: { slidesPerView: 7, }, }} centeredSlides={false} slidesPerView={1} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[Controller, Thumbs]} className="mySwiper2 ">
                                                {
                                                        TestimonialData.map((items, index) => (
                                                                <SwiperSlide key={index}>
                                                                        <img className='sm:w-full w-1/2 object-cover' src={items.img} alt="img" />
                                                                </SwiperSlide>
                                                        ))
                                                }
                                        </Swiper>
                                </div>
                                <div className=''>
                                        <Swiper onSwiper={setThumbsSwiper} centeredSlides={false} slidesPerView={1} watchSlidesProgress={true} effect={'flip'} modules={[EffectFade, Thumbs]} autoplay={true} className="mySwiper flex justify-center items-center duration-300" >
                                                {
                                                        TestimonialData.map((items, index) => (
                                                                <SwiperSlide key={index}>
                                                                        <h2 className='text-black text-lg font-ff-poppins font-semibold pt-2 leading-normal text-center'>{items.name}</h2>
                                                                        <p className='text-[#4D4D4D] text-xs font-ff-poppins pt-1 font-light leading-normal text-center'>{items.Profession}</p>
                                                                        <p className='text-black font-ff-poppins font-light leading-normal text-sm mt-3 max-w-[305px] mx-auto text-center'>{items.bio}</p>
                                                                </SwiperSlide>
                                                        ))
                                                }
                                        </Swiper>
                                </div>
                        </div>
                </div>
        )
}

export default Testimonial