import React from 'react'
import HeroImg from "../../src//assets//team.jpg"
export const Hero = () => {
  return (
  <>
  <main className='bg-white dark:bg-gray-950 dark:text-w 
  duration-300'>
    <div className='container min-h-[620px] flex mt-10 
    sm:mt-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center'>
            <div data-aos="zoom-in" className='order-1 sm:order-2 relative'>

                <img src={HeroImg} alt="HeroImg" className='w-auto' ></img>
                
            </div>

            <div className='space-y-5  dark:text-white order-2 sm:order-1 xl:pr-40'>
                <h1 data-aos="fade-up" className='text-4xl sm:text-5xl font-semibold'
                >Building Brands with {""}<span className='text-primary'> Beyond Limits </span>  </h1>
                <p data-aos="fade-up" data-aos-delay="300">Your partner in navigating the ever-evolving
                    landscape of
                    digital marketing. From conceptualization to executionm , we craft
                    tailored solutions that drive results and elevate your brand to new heights.
                </p>
                <button data-aos="fade-up" data-aos-delay="500" className='btn-primary'> Get Started</button>
            </div>
        </div>
    </div>
  </main>

  </>
  )
}
