import React,{useState} from 'react'
import  "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
export const Carousel = ({ data }) => {
    const {slide,setSlide} =  useState(0);
    const nextSlide = ()=> {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }
    const prevSlide = ()=> {
        setSlide(slide === 0 ? data.lenght - 1 : slide - 1);
    }
  return (
    <div className='flex justify-center items-center relative'>
       <BsArrowLeftCircleFill className=' w-8 h-8 decoration-white left-4 cursor-pointer' onClick={prevSlide}/>
        { data.map((item,idx) => {
            return <img src={item.src} alt={item.alt} keys={idx} className={slide === idx ? "slide" : "slide slide-hidden" }/>
        })}
        <BsArrowRightCircleFill className='w-8 h-8 decoration-white right-4 cursor-pointer' onClick={nextSlide}/>
        <div className='flex absolute inset-y-4'> 
          {data.map((_, idx) => {
            return <button key={idx} onclick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
          })}
        </div>
    </div>
  )
}
