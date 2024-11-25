import React , {useState, useEffect }from 'react'
import {BiSolidSun , BiSolidMoon } from "react-icons/bi";
export const DarkMode = () => {
    const [theme , setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const element = document.documentElement;
    useEffect(() =>{
        localStorage.setItem("theme" , theme);
        if(theme ==="dark"){
            element.classList.add("dark");
            localStorage.setItem("theme" , "dark");
            
        }
        else {
            element.classList.remove("dark");
            localStorage.setItem("theme" , "light");
            
        }
    });

  return <>
  { theme ==="dark" ? (
      <BiSolidSun onClick={() => setTheme("light")}
      className='text-2xl'/>
):(
      <BiSolidMoon onClick={() => setTheme("dark")}
    className='text-2xl'/> 
)}
    </>;
    <div>
        
        
    </div>
  
};
