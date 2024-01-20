import React, { useEffect, useState } from 'react'

const Preloader = () => {
        const [isLoaded, setIsLoaded] = useState(false);

        // Simulating data loading with a delay
        useEffect(() => {
                const delay = setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = '';
                }, 3500);

                return () => clearTimeout(delay);
        }, []);
        useEffect(() => {
                document.body.style.overflow = 'hidden';
        }, []);
  return (
    <div>
      <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                                <div className='flex items-center justify-center h-screen'>
                                        <div className="flex items-center justify-center  flex-colum gap-6">
                                                <div className='flex items-center gap-3'>
                                                        <div className="w-4 h-4 rounded-full bg-orange-700 animate-bounce [animation-delay:.7s]"></div>
                                                        <div className="w-4 h-4 rounded-full bg-orange-700 animate-bounce [animation-delay:.3s]"></div>
                                                        <div className="w-4 h-4 rounded-full bg-orange-700 animate-bounce [animation-delay:.7s]"></div>
                                                        <div className="w-4 h-4 rounded-full bg-orange-700 animate-bounce [animation-delay:.7s]"></div>
                                                </div>
                                        </div>

                                </div>
                        </div>
    </div>
  )
}

export default Preloader
