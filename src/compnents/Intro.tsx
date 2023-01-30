/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import axios from 'axios'
import {top4atom} from '../atoms'
import { useAtom } from 'jotai'

interface top4Props {
  name: string;
  id: string;
}


const Intro = () => {

useEffect(() => {
axios.get("https://api.thecatapi.com/v1/breeds")
.then((res) => {
setTop4(res.data as top4Props[] );
console.log(res.data)
})
}, [])

const [top4, setTop4] = useAtom(top4atom)



  return (
    <div className=' md:rounded-2xl overflow-hidden font-Montserrat
    flex flex-col justify-center items-center  rounded-3xl w-full '>
        <div className=" relative h-36 w-full bg-[url('/recources/HeroImagesm.png')] 
        md:bg-[url('/recources/HeroImagemd.png')] 
        lg:bg-[url('/recources/HeroImagelg.png')]
        bg-cover ">
            <div className='absolute top-4 left-4  md:top-24 md:left-16  flex flex-col   ' >
              <img className=' w-20 md:w-44 lg:w-64  2xl:w-80' src="/recources/CatwikiLogo.svg" alt="Logo" />
              <div className=' mb-4  text-[.625rem] md:text-xl xl:text-2xl   text-white font-Montserrat'>Get to know more about<div>your cat breed</div></div>
            
            <div  className=' h-8 w-24   bg-white rounded-3xl flex items-center justify-between px-2' >
            <input className='outline-none bg-transparent font-Montserrat w-full placeholder:text-xs ' type="search" placeholder='Search' />
            <BiSearchAlt2 className='text-gray-500 ' />
            </div> 
            </div>

        </div>

    {/* <div className="bg-[url('/recources/HeroImagelg.png')] bg-contain   border border-black h-80 ">
      
    </div> */}

    <div className='w-full h-80 bg-[#E3E1DC] px-4 py-2'>  
    <div className='text-xs font-semibold text-[#291507]  ' >Most Searched Breads</div>
    <div className="h-1 bg-[#291507] w-12 mt-2  mb-4 rounded-md " ></div>
    <div className='text-lg font-semibold font-Montserrat' >66+ Breeds for you <div>to discover</div></div>
    <div>

      <img src="" alt="" />
      <div>{top4[0].name}</div>
    </div>

    </div>

    </div>
  )
}

export default Intro