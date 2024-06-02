import React from 'react'
import login from '../components/login' 
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { TbAlphabetGreek } from "react-icons/tb";


const Navbar = () => {
    return (
        <>
            <nav className="h-22 bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className=" flex justify-end gap-5 text-sm">
                    <a href="help">help</a>

                    <a href="oreder">order and returns</a>

                    <a href="">sign up</a>

                    <a href="">log in</a>

                </div>

                <div className="headerBottom flex justify-between h-[80px]">

                    <TbAlphabetGreek className=' size-20 flex items-start' />

                    <div className="navgiation flex justify-center items-center">
                        <ul className=' flex justify-center gap-10'>
                            <li>
                                <a href="">MEN</a>
                            </li>
                            <li>
                                <a href="">WOMEN</a>
                            </li>
                            <li>
                                <a href="">KIDS</a>
                            </li>
                            <li>
                                <a href="">NEW</a>
                            </li>
                            <li>
                                <a href="">SPORTS</a>
                            </li>
                            <li>
                                <a href="">LIFESTYLE</a>
                            </li>
                            <li>
                                <a className=" text-red-600"href="">OUTLET</a>
                            </li>
                        </ul>
                    </div>
                    <div className="auxilary flex items-center gap-2">
                        <div className=" border-2 border-black p-1 rounded-xl  flex justify-center items-center w-fit" >
                            <input type="text" placeholder='Search' className="border-none focus:border-none focus:outline-none h-9 bg-blue-500" />
                            <FaSearch className=' w-10' />
                        </div>
                        <button>
                            <IoPersonSharp />
                        </button>
                        <button>
                            <FiShoppingCart className=' w-10' />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar