import React from 'react'
import Logo from "../../../src//assets//Logo.jpg"
import { DarkMode } from './DarkMode'
const MenuLinks=[
    {
        id: 1,
        name: "About",
        link: "/#about"
    },
    {
        id: 2,
        name: "Services",
        link: "/#services",

    },

]
export const Navbar = () => {
    const [showMenu , setShowMenu] = React.useState(false);
    const ToggleMenu = () =>{
        setShowMenu(!showMenu);
    } 
  return (
    <>
    <nav className='bg-white dark:bg-black dark:text-white duration-300'>
        <div className='container py-3 md:py-2'>
            <div className='flex justify-between
 items-center'>
                {}
                <div>
                

                    <a href='#' className='flex items-center gap-3'>
                    <img src={Logo} alt="Logo" className='w-16'/>
                    

                    <span className='text-2xl sm:text-3xl font-semibold'>
                    Beyond Limits
                    </span>
                    
                        </a>
                </div>
 
<div className='hidden md:block'>

    <ul className='flex items-center gap-8'>
        {
            MenuLinks.map(({id,name,link})=>{
                return(
                    <li key={id} className='cursor-pointer py-4 '>
                        <a href='#' className='text-leg font-medium hover:text-primary py-2 hover:border-b-2 
                        hover: border-primary transition-all duration-300'>{name}</a>
                    </li>
                );
})}

<button className='btn-primary'>Get in Touch</button>
<DarkMode>

</DarkMode>
        
    </ul>
    
  
       </div>
       
      </div>
      

     </div>
     
    </nav>
    </>
  );
};
