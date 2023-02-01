import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/Ai'


const Footer = () => {
  return (
    <div className=' flex flex-col w-full h-30 bg-black p-5 rounded-t-3xl gap-2 mt-20 
     md:flex-row items-center justify-between'>
        <img className='w-20' src="/resources/CatwikiLogo.svg" alt="" />
        <div className="flex gap-2  ">
            <AiOutlineCopyrightCircle className='text-white ' />
            <p className='text-white font-normal text-xs'>Created by Ahmad Othman -  30/01/2023</p>
        </div>
    </div>
  )
}

export default Footer

//