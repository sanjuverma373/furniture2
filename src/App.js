import logo from './logo.svg';
import './App.css';
import Headersection from './components/Headersection';
import Storysection from './components/Storysection';
import Productsection from './components/Productsection';
import Woodensection from './components/Woodensection';
import Dealsection from './components/Dealsection';
import Offersection from './components/Offersection';
import Footersection from './components/Footersection';
import Trendingsection from './components/Trendingsection';
import Testimonial from './components/Testimonialsection';
import { useEffect, useState } from 'react';

function App() {
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
                                        <div class="flex items-center justify-center  flex-colum gap-6">
                                                <div className='flex items-center gap-3'>
                                                        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                                                        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                                                        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                                                </div>                                                
                                        </div>

                                </div>
                        </div>
      <Headersection />
      <Storysection />
      <Trendingsection/>
      <Productsection />
      <Woodensection />
      <Dealsection />
      <Offersection />
      <Testimonial/>
      <Footersection />
    </div>
  );
}

export default App;
