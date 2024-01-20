import React from 'react'
import Preloader from './components/Preloader'
import Headersection from './components/Headersection'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from "./Pages/Shop"
import Contact from './Pages/Contact'
import Backtop from './components/Backtop'
function App() {
        return (
                <div>
                        <Preloader />
                        <Headersection />
                        <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/about' element={<About/>} />
                                <Route path='/shop' element={<Shop/>} />
                                <Route path='/contact' element={<Contact/>} />
                        </Routes>
                        <Backtop/>
                        
                        

                </div>
        )
}

export default App
