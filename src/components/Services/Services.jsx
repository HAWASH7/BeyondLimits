import React from 'react'
import {FaCameraRetro} from "react-icons/fa";
import {GiNotebook} from "react-icons/gi";
import { SlNote } from "react-icons/sl";


const skillsData = [
    {
        name: "Web Development",
        icon: <FaCameraRetro className='text-4xl text-primary'></FaCameraRetro>,
        link:"#",
        description:
        "hi hi hawash",
        aosDelay:"0",

    },
    {
        name: "Marketing service",
        icon: <GiNotebook className='text-4xl text-primary'></GiNotebook>,
        link: "#",
        description:
        "hello",
        aosDelay:"300",

    },
    {
        name: "Social media Management",
        icon: <SlNote className='text-4xl text-primary'></SlNote>,
        link:"#",
        description:
        "hi hi hawash",
        aosDelay:"500",

    },
    {
        name: "Social media Management",
        icon: <SlNote className='text-4xl text-primary'></SlNote>,
        link:"#",
        description:
        "hi hi hawash",
        aosDelay:"700",

    },
 
]
 export const Services = () => {
  return (
    <>
    <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-item-center">
        <div className='container'>
            {/*header section */}
            <div data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0" className='pb-12 text-center space-y-3'>
                <h1 className='text-3xl font-semibold text-violet-950 dark:text-primary'>Explore Our Services</h1>
                <p>We are self-services data analytics software that lets you create visually.

                </p>
            </div>
            {/*card section */}
            <div data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0"
             className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-40'>
                {skillsData.map((skill)=>(
                    <div key={skill.name} className='card space-y-3 
                    sm:space-y-4 p-4'>
                        <div>{skill.icon}</div>
                        <h1 className='text-lg font-semibold'>{skill.name}</h1>
                        <p className='text-gray-600 dark:text-gray-400'>
                            {skill.description}
                        
                        </p>
                        </div>

                ))}
            </div>
            {/*button section */}
            <div data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0"
             className='text-center mt-4 sm:mt-8'>            
                
                <button className='btn-primary'>Learn More</button>

            </div>

        </div>
    </div>
    </>
  )
}

