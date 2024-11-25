import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero';
import{Services} from './components/Services/Services';
import{Footer} from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css"

export const App = () => {
  React.useEffect(()=>{
    AOS.init(
      {
        duration:1000,
        easing:"ease-in-out",
        offset:100,
        delay:100,

      });
      AOS.refresh();
    },[]);
  
  return (
    <div className='overflow-x-hidden'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Footer></Footer>
    </div>
  )
}

export default App;