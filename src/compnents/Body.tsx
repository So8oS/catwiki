import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'



const Body = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 text-[#291507] '>
        <div className="h-1 bg-[#291507] w-14 mb-4 rounded-md self-start " ></div>
        <h1 className='text-4xl font-extrabold mb-11 '>Why should you have a cat?</h1>
        <p className='text-lg font-medium mb-5' >Having a cat around you can actually trigger the realease of calming chemicals in your body which lower your stress and anxiety levels</p>
        <div className="flex gap-4 self-start">
            <p className='text-xs font-bold '>READ MORE</p>
            <HiOutlineArrowNarrowRight/>
        </div>

    <div className='columns-2 mt-16   ' >
       <div className='flex flex-col gap-4 justify-center items-center '>
           <img className='' src="/resources/image2.png" alt="" />
           <img className='
           w-28
           md:w-[13rem]
           lg:
           ml-7' src="/resources/image1.png" alt="" />
       </div>
       <img className='' src="/resources/image3.png" alt="" />
    </div>

    </div>
  )
}

export default Body