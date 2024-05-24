import React from 'react'
import Navbar from '../components/Navbar'
import shoes from './shoes.png'
import Shoes2 from './Shoes2.png'
import shirt from './shirt.png'
import shirt2 from './shirt2.jpeg'
import { Carousel } from "../components/Carousel";
import { slides } from "../data/carouselData.json";

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
                <Carousel data={slides} />
            </div>
            <div className=" flex justify-center items-center font-bold text-5xl m-4">
                GET READY FOR THE SUMMER SALE
            </div>
            <div className='flex h-72 w-auto gap-10 p-10 justify-center'>
                <img src={shoes} alt="" className='' />
                <img src={Shoes2} alt="" className='' />
                <img src={shirt} alt="" className='border-2 border-black bg-teal-600' />
                <img src={shirt2} alt="" className='border-2 border-black bg-teal-600' />
            </div>

            <div className='font-bold text-4xl m-20 '>
                WHAT'S NEW
            </div>

            <div className='flex h-72 w-auto gap-10 p-10 justify-center'>
                <img src={shoes} alt="" className='' />
                <img src={Shoes2} alt="" className='' />
                <img src={shirt} alt="" className='border-2 border-black bg-teal-600' />
                <img src={shirt2} alt="" className='border-2 border-black bg-teal-600' />
            </div>
            <div className='  justify-cneter  bg-slate-600 h-2 w-full'></div>
            <div className='flex bg-yellow-500'>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis quae eum eos in similique eveniet vel velit enim distinctio deserunt officiis totam, cupiditate at cum odio expedita, neque provident. Cumque perferendis dolorem quae velit alias doloribus quo provident officiis molestiae! Sapiente consequuntur non esse odio odit consequatur aperiam dolorem quibusdam molestiae dolore delectus optio, cupiditate ab praesentium. Totam dolores ratione ipsa error nemo, repudiandae iusto sequi dolorum esse maxime laborum eius voluptatem, architecto non alias eaque animi, tempora ipsum doloremque perspiciatis placeat corrupti dicta! Temporibus, expedita. Possimus excepturi maiores iste sunt laboriosam exercitationem autem. Architecto!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis quae eum eos in similique eveniet vel velit enim distinctio deserunt officiis totam, cupiditate at cum odio expedita, neque provident. Cumque perferendis dolorem quae velit alias doloribus quo provident officiis molestiae! Sapiente consequuntur non esse odio odit consequatur aperiam dolorem quibusdam molestiae dolore delectus optio, cupiditate ab praesentium. Totam dolores ratione ipsa error nemo, repudiandae iusto sequi dolorum esse maxime laborum eius voluptatem, architecto non alias eaque animi, tempora ipsum doloremque perspiciatis placeat corrupti dicta! Temporibus, expedita. Possimus excepturi maiores iste sunt laboriosam exercitationem autem. Architecto!
                </div>
            </div>


        </>
    )
}

export default Home