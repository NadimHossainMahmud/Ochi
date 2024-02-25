import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
      <div className="textstructure mt-52 px-20">
        {["We Create","Eye Opening","Presenatations"].map((item,index)=>{
          return (

          <div className="masker">
            <div className='w-fit flex items-end overflow-hidden'>
              {index ===1 &&  (
                <motion.div 
                    initial={{width: 0}} 
                    animate={{width:"9vw"}} 
                    transition={{ease:[0.76,0,0.24,1],duration:1}} 
                    className="mr-5 ml-3 w-[9vw] rounded-md h-[6vw] -top-[.55vw] relative 
                  bg-red-500"> 
                </motion.div>)}
                <h1 className="uppercase text-[9vw] tracking-tighter leading-[8vw] font-['Founders_Grotesk_X-Condensed '] font-bold">
              {item}
              </h1>
          </div>   
        </div>     

        );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
      <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[1px] border-zinc-400 font-light rounded-full text-md uppercase'>
            Start the project
            
          </div>
          <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
            <span className='rotate-[45deg]'> 
              <FaArrowUpLong />
            </span>
              
          </div>
          
      </div>

    </div>
    </div>

    
   
    
  )
}

export default LandingPage
