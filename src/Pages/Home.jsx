// import React from 'react'
// import Navbar from '../components/Navbar'
// import shoes from './shoes.png'
// import Shoes2 from './Shoes2.png'
// import shirt from './shirt.png'
// import shirt2 from './shirt2.jpeg'
// import { Carousel } from "../components/Carousel";
// import { slides } from "../data/carouselData.json";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa";

// const Home = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="sec1 flex flex-col items-center border-2 border-blue-700 bg-blue-700 ">
//                 <div className=" font-bold">
//                     GET EXTRA 15% OFF ON EVERYTHING*
//                 </div>
//                 <div>
//                     Jump into the Weekend Sale Madness!
//                 </div>
//             </div>
//             <div className=" flex justify-center items-center ">
//                 <Carousel data={slides} />
//             </div>
//             <div className=" flex justify-center items-center font-bold text-5xl m-4 ">
//                 GET READY FOR THE SUMMER SALE
//             </div>
//             <div className='flex h-72 w-auto gap-10 p-10 justify-center '>
//                 <img src={shoes} alt="" className='' />
//                 <img src={Shoes2} alt="" className='' />
//                 <img src={shirt} alt="" className='border-2 border-black bg-teal-600' />
//                 <img src={shirt2} alt="" className='border-2 border-black bg-teal-600' />
//             </div>

//             <div className='font-bold text-4xl m-20 flex justify-center items-center'>
//                 WHAT'S NEW
//             </div>

//             <div className='flex h-72 w-auto gap-10 p-10 justify-center'>
//                 <img src={shoes} alt="" className='' />
//                 <img src={Shoes2} alt="" className='' />
//                 <img src={shirt} alt="" className='border-2 border-black bg-teal-600' />
//                 <img src={shirt2} alt="" className='border-2 border-black bg-teal-600' />
//             </div>
//             <div className='  justify-cneter  bg-slate-600 h-2 w-full '></div>
//             <div className='flex h-96 justify-center items-center gap-5 p-10 bg-yellow-500 '>
//                 <div>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis quae eum eos in similique eveniet vel velit enim distinctio deserunt officiis totam, cupiditate at cum odio expedita, neque provident. Cumque perferendis dolorem quae velit alias doloribus quo provident officiis molestiae! Sapiente consequuntur non esse odio odit consequatur aperiam dolorem quibusdam molestiae dolore delectus optio, cupiditate ab praesentium. Totam dolores ratione ipsa error nemo, repudiandae iusto sequi dolorum esse maxime laborum eius voluptatem, architecto non alias eaque animi, tempora ipsum doloremque perspiciatis placeat corrupti dicta! Temporibus, expedita. Possimus excepturi maiores iste sunt laboriosam exercitationem autem. Architecto!
//                 </div>
//                 <div>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis quae eum eos in similique eveniet vel velit enim distinctio deserunt officiis totam, cupiditate at cum odio expedita, neque provident. Cumque perferendis dolorem quae velit alias doloribus quo provident officiis molestiae! Sapiente consequuntur non esse odio odit consequatur aperiam dolorem quibusdam molestiae dolore delectus optio, cupiditate ab praesentium. Totam dolores ratione ipsa error nemo, repudiandae iusto sequi dolorum esse maxime laborum eius voluptatem, architecto non alias eaque animi, tempora ipsum doloremque perspiciatis placeat corrupti dicta! Temporibus, expedita. Possimus excepturi maiores iste sunt laboriosam exercitationem autem. Architecto!
//                 </div>
//             </div>

//             <div className=' grid grid-cols-6 m-10  mx-28 '>
//                 <div className='flex flex-col'>
//                     <a href="" className=' font-bold text-xl'>PRODUCTS</a>
//                     <a href="">Footwear</a>
//                     <a href="">Clothing</a>
//                     <a href="">Accessories</a>
//                     <a href="">Outlet-Sale</a>
//                     <a href="">New Arrivals</a>
//                     <a href="">Special Offer</a>
//                     <a href="">Flat 50% Off!</a>
//                 </div>
//                 <div className='flex flex-col  '>
//                     <a href="" className=' font-bold text-xl'>SPORTS</a>
//                     <a href="">CRICKET</a>
//                     <a href="">Running</a>
//                     <a href="">Football</a>
//                     <a href="">Gym/Training</a>
//                     <a href="">Tennis</a>
//                     <a href="">Outdoor</a>
//                     <a href="">Basketball</a>
//                     <a href="">Swimming</a>
//                     <a href="">Skateboarding</a>
//                 </div>
//                 <div className=' flex flex-col '>
//                     <a href="" className=' font-bold text-xl'>COLLECTIONS</a>
//                     <a href="">Ultraboost</a>
//                     <a href="">Superstar</a>
//                     <a href="">NMD</a>
//                     <a href="">Sustainability</a>
//                     <a href="">Predator</a>
//                     <a href="">Parley</a>
//                 </div>
//                 <div className=' flex flex-col '>
//                     <a href="" className=' font-bold text-xl'>SUPPORT</a>
//                     <a href="">Help</a>
//                     <a href="">Customer Services</a>
//                     <a href="">Returns & Exchanges</a>
//                     <a href="">Shipping</a>
//                     <a href="">Order Tracker</a>
//                     <a href="">Store Finder</a>
//                     <a href="">Running Shoe Finder</a>
//                     <a href="">Bra Fit Guide</a>
//                 </div>
//                 <div className='flex flex-col '>
//                     <a href="" className=' font-bold text-xl'>COMPANY INFO</a>
//                     <a href="">About Us</a>
//                     <a href="">adidas stories</a>
//                     <a href="">adidas Apps</a>
//                     <a href="">Entity Details</a>
//                     <a href="">Press</a>
//                     <a href="">Careers</a>
//                 </div>
//                 <div>
//                     <div className='font-bold text-xl'>FOLLOW US</div>
//                     <FaInstagramSquare className=' m-3 mx-0' />
//                 </div>
//             </div>
//             <div className='bg-slate-800 w-full '>
//                 <div className='flex justify-center items-center text-white gap-5'>
//                     <div>Privacy Policy   |</div>
//                     <div>Terms and Conditions   |</div>
//                     <div>Cookies</div>
//                 </div>
//                 <div className='text-white flex justify-center items-center'>
//                     <FaRegCopyright />2024 alphaBeeta India Marketing Pvt. Ltd
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Home

import React from "react";
import shoes from "./shoes.png";
import Shoes2 from "./Shoes2.png";
import shirt from "./shirt.png";
import shirt2 from "./shirt2.jpeg";
import { Carousel } from "../components/Carousel";
import { slides } from "../data/carouselData.json";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* Offer Banner */}
      <div className="bg-blue-700 text-white text-center py-3">
        <p className="font-bold text-lg">GET EXTRA 15% OFF ON EVERYTHING*</p>
        <p className="text-sm">Jump into the Weekend Sale Madness!</p>
      </div>

      {/* Hero Carousel */}
      <div className="flex justify-center items-center mt-4">
        <Carousel data={slides} />
      </div>

      {/* Summer Sale Section */}
      <div className="text-center font-bold text-4xl md:text-5xl my-10">
        GET READY FOR THE SUMMER SALE
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        <img src={shoes} alt="Shoes" className="h-64 object-contain" />
        <img src={Shoes2} alt="Shoes2" className="h-64 object-contain" />
        <img
          src={shirt}
          alt="Shirt"
          className="h-64 object-contain border-2 border-black bg-teal-600"
        />
        <img
          src={shirt2}
          alt="Shirt2"
          className="h-64 object-contain border-2 border-black bg-teal-600"
        />
      </div>

      {/* What's New Section */}
      <div className="text-center font-bold text-3xl md:text-4xl my-16">
        WHAT'S NEW
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        <img src={shoes} alt="Shoes" className="h-64 object-contain" />
        <img src={Shoes2} alt="Shoes2" className="h-64 object-contain" />
        <img
          src={shirt}
          alt="Shirt"
          className="h-64 object-contain border-2 border-black bg-teal-600"
        />
        <img
          src={shirt2}
          alt="Shirt2"
          className="h-64 object-contain border-2 border-black bg-teal-600"
        />
      </div>

      {/* Divider */}
      <div className="bg-slate-600 h-1 w-full my-10"></div>

      {/* Info Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">Free & Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered quickly with our trusted courier
              partners. Free delivery on orders above ₹999.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
            <p className="text-gray-600">
              Shop with confidence using 100% secure payment methods including
              UPI, cards, and wallets.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
            <p className="text-gray-600">
              Not happy with your purchase? Enjoy hassle-free 7-day returns and
              quick refunds.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Grid Links */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 p-10 mx-auto max-w-6xl">
        <div className="flex flex-col">
          <span className="font-bold text-lg mb-2">PRODUCTS</span>
          <a href="#">Footwear</a>
          <a href="#">Clothing</a>
          <a href="#">Accessories</a>
          <a href="#">Outlet-Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Special Offer</a>
          <a href="#">Flat 50% Off!</a>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg mb-2">SPORTS</span>
          <a href="#">Cricket</a>
          <a href="#">Running</a>
          <a href="#">Football</a>
          <a href="#">Gym/Training</a>
          <a href="#">Tennis</a>
          <a href="#">Outdoor</a>
          <a href="#">Basketball</a>
          <a href="#">Swimming</a>
          <a href="#">Skateboarding</a>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg mb-2">COLLECTIONS</span>
          <a href="#">Ultraboost</a>
          <a href="#">Superstar</a>
          <a href="#">NMD</a>
          <a href="#">Sustainability</a>
          <a href="#">Predator</a>
          <a href="#">Parley</a>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg mb-2">SUPPORT</span>
          <a href="#">Help</a>
          <a href="#">Customer Services</a>
          <a href="#">Returns & Exchanges</a>
          <a href="#">Shipping</a>
          <a href="#">Order Tracker</a>
          <a href="#">Store Finder</a>
          <a href="#">Running Shoe Finder</a>
          <a href="#">Bra Fit Guide</a>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg mb-2">COMPANY INFO</span>
          <a href="#">About Us</a>
          <a href="#">adidas stories</a>
          <a href="#">adidas Apps</a>
          <a href="#">Entity Details</a>
          <a href="#">Press</a>
          <a href="#">Careers</a>
        </div>
        <div>
          <span className="font-bold text-lg mb-2">FOLLOW US</span>
          <FaInstagramSquare className="text-3xl mt-2" />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-800 py-6">
        <div className="flex flex-wrap justify-center items-center text-white gap-6 text-sm">
          <a href="#">Privacy Policy</a>|<a href="#">Terms and Conditions</a>|
          <a href="#">Cookies</a>
        </div>
        <div className="text-white flex justify-center items-center mt-2 gap-2">
          <FaRegCopyright /> 2024 alphaBeeta India Marketing Pvt. Ltd
        </div>
      </div>
    </>
  );
};

export default Home;
