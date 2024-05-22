import React from 'react'
import Navbar from '../components/Navbar'
import shoes from './shoes.png'
import Shoes2 from './Shoes2.png'
import shirt from './shirt.png'
import shirt2 from './shirt2.jpeg'
import banner2 from './banner2.jpg'
import { Carousel } from "../components/Carousel";
import { slides } from"../data/carouselData.json"; 

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="sec1 flex flex-col items-center border-2 border-blue-700 bg-blue-700">
                <div className=" font-bold">
                    GET EXTRA 15% OFF ON EVERYTHING*
                </div>
                <div>
                    Jump into the Weekend Sale Madness!
                </div>
            </div>
            <div className=" flex justify-center items-center ">
            <Carousel data= { slides }/>
            </div>
            <div className='flex h-72 w-auto gap-10 p-10 z-10'>
                <img src={shoes} alt=""  />
                <img src={Shoes2} alt="" />
                <img src={shirt} alt="" className='border-2 border-black'/>
                <img src={shirt2} alt="" className='border-2 border-black' />
            </div>



        </>
    )
}

export default Home