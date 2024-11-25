import React from 'react'
import { FaFacebook , FaLinkedin } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Features",
        link: "/#features",
    },
    {
        title: "Works",
        link: "/#works",
    },
    {
        title: "Career",
        link: "/#career",
    },
];
const HelpLinks = [

    {
        title:"customer Support",
        link: "/#support",
    },
    {
        title:"privace policy",
        link: "/#policy",
    },
]    

export const Footer = () => {
  return <>
    <div className='bg-black/95 text-white'>

        <div className='container'>
            <div className='grid md:grid-cols-3 py-5'>
                
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left textjustify mb-3 flex items-center gap-3'> Beyond Limits </h1>

                    <br/>
                    <div classname="flex items-center gap-4 mt-6">
                        <a href="#">
                            <FaFacebook className='text-2xl hover:text-primary duration-300'></FaFacebook>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-2xl hover:text-primary duration-'></FaLinkedin>
                             </a>
                         </div>
                </div>
                {/* Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">

                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold mb-3'>Company</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((link)=>(
                                    <li
                                    key={link.title}
                                    className='cursor-pointer
                                    hover:translate-x-1 duration-300
                                    hover:!text-primary space-x-1
                                    text-gray-400'
                                    >
                                        <span>{link.title}</span>

                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                    
                

                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold mb-3'>Help</h1> 
                    <ul className='space-y-3'>
                        {HelpLinks.map((link)=>(
                            <li
                            key={link.title}
                            className='cursor-pointer
                                    hover:translate-x-1 duration-300
                                    hover:!text-primary space-x-1
                                    text-gray-400'
                                    >
                                        <span>{link.title}</span>
                                    </li>
                        ))}
                    </ul>
                    </div>
            </div>
            
            </div>
        </div>


    </div>
  
  </>
};
