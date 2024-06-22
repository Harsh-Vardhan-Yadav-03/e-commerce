import React from 'react'
import Navbar from '../components/Navbar'
import shoes from './shoes.png'
import Shoes2 from './Shoes2.png'
import shirt from './shirt.png'
import shirt2 from './shirt2.jpeg'
import { Carousel } from "../components/Carousel";
import { slides } from "../data/carouselData.json";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";



const Home = () => {
    return (
        <>
            <Navbar />
            <div className="sec1 flex flex-col items-center border-2 border-blue-700 bg-blue-700 sm: w-[192vw]">
                <div className=" font-bold">
                    GET EXTRA 15% OFF ON EVERYTHING*
                </div>
                <div>
                    Jump into the Weekend Sale Madness!
                </div>
            </div>
            <div className=" flex justify-center items-center ">
                <Carousel data={slides} />
            </div>
            <div className=" flex justify-center items-center font-bold text-5xl m-4 sm: w-[192vw]">
                GET READY FOR THE SUMMER SALE
            </div>
            <div className='flex h-72 w-auto gap-10 p-10 justify-center sm: w-[192vw]'>
                <img src={shoes} alt="" className='' />
                <img src={Shoes2} alt="" className='' />
                <img src={shirt} alt="" className='border-2 border-black bg-teal-600' />
                <img src={shirt2} alt="" className='border-2 border-black bg-teal-600' />
            </div>

            <div className='font-bold text-4xl m-20 flex justify-center items-center sm: w-[192vw]'>
                WHAT'S NEW
            </div>

            <div className='flex h-72 w-auto gap-10 p-10 justify-center sm: w-[192vw]'>
                <img src={shoes} alt="" className='' />
                <img src={Shoes2} alt="" className='' />
                <img src={shirt} alt="" className='border-2 border-black bg-teal-600' />
                <img src={shirt2} alt="" className='border-2 border-black bg-teal-600' />
            </div>
            <div className='  justify-cneter  bg-slate-600 h-2 w-full sm: w-[192vw]'></div>
            <div className='flex h-96 justify-center items-center gap-5 p-10 bg-yellow-500 sm: w-[192vw]'>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis quae eum eos in similique eveniet vel velit enim distinctio deserunt officiis totam, cupiditate at cum odio expedita, neque provident. Cumque perferendis dolorem quae velit alias doloribus quo provident officiis molestiae! Sapiente consequuntur non esse odio odit consequatur aperiam dolorem quibusdam molestiae dolore delectus optio, cupiditate ab praesentium. Totam dolores ratione ipsa error nemo, repudiandae iusto sequi dolorum esse maxime laborum eius voluptatem, architecto non alias eaque animi, tempora ipsum doloremque perspiciatis placeat corrupti dicta! Temporibus, expedita. Possimus excepturi maiores iste sunt laboriosam exercitationem autem. Architecto!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis quae eum eos in similique eveniet vel velit enim distinctio deserunt officiis totam, cupiditate at cum odio expedita, neque provident. Cumque perferendis dolorem quae velit alias doloribus quo provident officiis molestiae! Sapiente consequuntur non esse odio odit consequatur aperiam dolorem quibusdam molestiae dolore delectus optio, cupiditate ab praesentium. Totam dolores ratione ipsa error nemo, repudiandae iusto sequi dolorum esse maxime laborum eius voluptatem, architecto non alias eaque animi, tempora ipsum doloremque perspiciatis placeat corrupti dicta! Temporibus, expedita. Possimus excepturi maiores iste sunt laboriosam exercitationem autem. Architecto!
                </div>
            </div>

            <div className=' grid grid-cols-6 m-10  mx-28 '>
                <div className='flex flex-col'>
                    <a href="" className=' font-bold text-xl'>PRODUCTS</a>
                    <a href="">Footwear</a>
                    <a href="">Clothing</a>
                    <a href="">Accessories</a>
                    <a href="">Outlet-Sale</a>
                    <a href="">New Arrivals</a>
                    <a href="">Special Offer</a>
                    <a href="">Flat 50% Off!</a>
                </div>
                <div className='flex flex-col  '>
                    <a href="" className=' font-bold text-xl'>SPORTS</a>
                    <a href="">CRICKET</a>
                    <a href="">Running</a>
                    <a href="">Football</a>
                    <a href="">Gym/Training</a>
                    <a href="">Tennis</a>
                    <a href="">Outdoor</a>
                    <a href="">Basketball</a>
                    <a href="">Swimming</a>
                    <a href="">Skateboarding</a>
                </div>
                <div className=' flex flex-col '>
                    <a href="" className=' font-bold text-xl'>COLLECTIONS</a>
                    <a href="">Ultraboost</a>
                    <a href="">Superstar</a>
                    <a href="">NMD</a>
                    <a href="">Sustainability</a>
                    <a href="">Predator</a>
                    <a href="">Parley</a>
                </div>
                <div className=' flex flex-col '>
                    <a href="" className=' font-bold text-xl'>SUPPORT</a>
                    <a href="">Help</a>
                    <a href="">Customer Services</a>
                    <a href="">Returns & Exchanges</a>
                    <a href="">Shipping</a>
                    <a href="">Order Tracker</a>
                    <a href="">Store Finder</a>
                    <a href="">Running Shoe Finder</a>
                    <a href="">Bra Fit Guide</a>
                </div>
                <div className='flex flex-col '>
                    <a href="" className=' font-bold text-xl'>COMPANY INFO</a>
                    <a href="">About Us</a>
                    <a href="">adidas stories</a>
                    <a href="">adidas Apps</a>
                    <a href="">Entity Details</a>
                    <a href="">Press</a>
                    <a href="">Careers</a>
                </div>
                <div>
                    <div className='font-bold text-xl'>FOLLOW US</div>
                    <FaInstagramSquare className=' m-3 mx-0' />
                </div>
            </div>
            <div className='bg-slate-800 w-full '>
                <div className='flex justify-center items-center text-white gap-5'>
                    <div>Privacy Policy   |</div>
                    <div>Terms and Conditions   |</div>
                    <div>Cookies</div>
                </div>
                <div className='text-white flex justify-center items-center'>
                    <FaRegCopyright />2024 alphaBeeta India Marketing Pvt. Ltd
                </div>
            </div>

        </>
    )
}

export default Home