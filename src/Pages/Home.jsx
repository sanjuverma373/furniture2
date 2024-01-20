import React from 'react'
import Storysection from '../components/Storysection'
import Trendingsection from '../components/Trendingsection'
import Productsection from '../components/Productsection'
import Woodensection from '../components/Woodensection'
import Dealsection  from '../components/Dealsection'
import Offersection  from '../components/Offersection'
import Footersection  from '../components/Footersection'
import Testimonial from '../components/Testimonial'

const Home = () => {
        return (
                <div>
                        <Storysection/>
                        <Trendingsection/>
                        <Productsection />
                        <Woodensection />
                        <Dealsection />
                        <Offersection />
                        <Testimonial/>
                        <Footersection />
                </div>
        )
}

export default Home
