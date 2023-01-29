import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'

const Intro = () => {
  return (
    <div className=' rounded-2xl overflow-hidden 
    flex flex-col justify-center items-center  '>
        <div className=" relative  ">
            <img className='  top-0 left-0  ' src="/recources/HeroImagelg.png" alt="" />
            <div className='absolute top-24 left-16  flex flex-col   ' >
              <img className=' w-44 lg:w-64  2xl:w-80' src="/recources/CatwikiLogo.svg" alt="Logo" />
              <span className='text-white font-Montserrat mb-8 w-96 xl:text-2xl  text-xl '>Get to know more about your cat breed</span>
            
            <div  className='  h-16  border-[1px] bg-white border-solid border-[#BDBDBD] rounded-3xl flex items-center justify-between px-3' >
            <input className='outline-none font-Montserrat' type="search" placeholder='Enter your breed' />
            <BiSearchAlt2 className='text-gray-500' />
            </div> 
            </div>

        </div>

    {/* <div className="bg-[url('/recources/HeroImagelg.png')] bg-contain   border border-black h-80 ">
      
    </div> */}

    <div className='w-full h-80 bg-[#E3E1DC]'>

    </div>

    </div>
  )
}

export default Intro