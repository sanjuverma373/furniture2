import React from "react";
import sofa1 from "../assets/images/trending-sofa-1.webp";
import sofa2 from "../assets/images/trending-sofa-2.webp";
import sofa3 from "../assets/images/trending-sofa-3.webp";
import sofa4 from "../assets/images/trending-sofa-4.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Stars } from "./icons";

function Trendingsection() {
  const sofaData = [
    {
      img: sofa1,
    },
    {
      img: sofa2,
    },
    {
      img: sofa3,
    },
    {
      img: sofa4,
    },
  ];
  const slider1 = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="min-h-[659px] flex items-end relative overflow-hidden">
        <div className="hidden min-[350px]:block w-[60%] lg:w-[46%] min-[1600px]:w-[741px] h-[417px] bg-gradient-to-b from-[#243040] to-[#8B929B] absolute top-[41%] lg:top-0 right-0"></div>
        <div className="w-full h-[740px] md:h-[878px] min-[330px]:h-auto lg:h-[506px] bg-[rgba(45,57,73,0.04)]">
          <div className="w-full max-w-[1605px] pl-3 ml-auto flex flex-col lg:flex-row">
            <div className="w-full lg:w-[34%]">
              <div className="max-w-[436px] w-full">
                <div className='flex items-center gap-2 md:gap-[11px] pb-[19px] pt-6'>
                  <hr className=' w-[40px] md:w-[95px] h-[1px] bg-black' />
                  <p className=' text-[#BD7D41] font-normal text-[15px] md:text-[20px] font-ff-poppins'>Shopping Store</p>
                </div>
                <p className="text-[#243040] font-ff-poppins text-[25px] md:text-[35px] not-italic font-bold leading-normal mb-[19px]">
                  Buy trending furniture Products.
                </p>
                <p className="max-w-[422px] text-[rgba(0,0,0,0.70)] font-ff-poppins text-[14px] md:text-lg not-italic font-normal leading-normal mb-[39px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus, urna at pulvinar porta
                </p>
                <div className="flex gap-[14px]">
                  <button
                    className="w-[41px] h-[41px] rounded-[10px] bg-white flex justify-center items-center border border-solid border-transparent hover:scale-125 hover:border-[#243040] duration-300"
                    
                      onClick={() => slider1?.current?.slickPrev()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="8"
                      viewBox="0 0 21 8"
                      fill="none"
                    >
                      <path
                        d="M0.646447 4.35355C0.451184 4.15829 0.451184 3.84171 0.646447 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646447 4.35355ZM21 4.5H1V3.5H21V4.5Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <button
                    className="w-[41px] h-[41px] rounded-[10px] bg-white hover:scale-125 flex justify-center items-center border border-solid border-transparent hover:border-[#243040] duration-300"
                    onClick={() => slider1?.current?.slickNext()
                  }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="8"
                      viewBox="0 0 21 8"
                      fill="none"
                    >
                      <path
                        d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[66%] pt-[35px] lg:pt-[70px] lg:pb-0">
              <Slider className="slider2" ref={slider1} {...settings}>
                {sofaData.map((sofaData, index) => (
                  <div
                    key={index}
                    className="w-[295px] h-[338px] mb-5 md:mb-0 bg-white shadow-[2px_7px_28px_0px_rgba(0,0,0,0.05)] pt-[15px] pr-[12px] pl-[17px]"
                  >
                    <img
                      className="w-full mb-[13px]"
                      src={sofaData.img}
                      alt="sofa"
                    />
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black font-ff-poppins` text-lg md:text-xl not-italic font-medium leading-normal">
                        Single Sofa
                      </p>
                      <Stars />
                    </div>
                    <div className="flex items-center">
                      <p className="text-black font-ff-poppins text-[24px] md:text-[28.7px] not-italic font-semibold leading-normal">
                        <span className="mr-[3px]">₹</span>1200.00
                      </p>
                      <p className="ml-[7px] text-[#C4C4C4] font-ff-poppins text-[11px] not-italic font-normal leading-normal mt-[5px]">
                        ₹<span className="ml-[1px]">1200.00</span>
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trendingsection;
