import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen flex items-center px-20 gap-5 bg-zinc-100'>
      <div className="cardcontainer h-[50vh] w-1/2 ">
          <div className='card relative  flex items-center justify-center rounded-xl w-full h-full  bg-[#004D43]'>
            <img className='w-22' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 border-[#ccea69]  left-10 bottom-10 text-[#ccea69]'>&copy;2019-2022</button>
          </div>
      </div>

          <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
            <div className='card relative  flex items-center justify-center  rounded-xl w-1/2 h-full  bg-[#212121]'>
                <img className='w-22' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2  left-10 bottom-10 uppercase'>&copy;Rating5.0 on clutch</button>
            </div>

            <div className='card relative  flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#212121]'>
                <img className='w-22' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2  left-10 bottom-10'>&copy;business bootcamp alumny</button>
            </div>
      </div>
     
      
    </div>
  )
}

export default Card
