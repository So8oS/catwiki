/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import axios from 'axios'
import {top4atom} from '../atoms'
import { useAtom } from 'jotai'
import { most } from '../most'
interface top4Props {
  name: string;
  id: string;
}





const Intro = () => {

// useEffect(() => {
// axios.get("https://api.thecatapi.com/v1/breeds")
// .then((res) => {
// setTop4(res.data as top4Props[] );
// console.log(res.data)
// })
// }, [])

const [top4, setTop4] = useAtom(top4atom)



  return (
    // <div className=' md:rounded-2xl overflow-hidden font-Montserratflex flex-col justify-center items-center rounded-3xl w-full lg:mx-auto lg:max-w-5xl uw:max-w-7xl'>
          <div className=' md:rounded-2xl overflow-hidden font-Montserratflex flex-col justify-center items-center rounded-3xl w-full'>

      
        <div className=" relative h-40 
        bg-black
         md:h-80 
         lg:h-[35rem]
         xl:h-[40rem] 
         ">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-[url('/resources/HeroImagesm.png')] 
md:bg-[url('/resources/HeroImagemd.png')]
lg:bg-[url('/resources/HeroImagelg.png')]"></div>
            <div className='absolute flex flex-col 
            top-4 left-4
            md:top-8 md:left-8
            lg:top-20 lg:left-20

            ' >
              <img className=' w-20 md:w-44 lg:w-64  2xl:w-80' src="/resources/CatwikiLogo.svg" alt="Logo" />
              <div className=' mb-4  text-[.625rem] md:text-xl xl:text-2xl   text-white font-Montserrat'>Get to know more about<div>your cat breed</div></div>
            
            <div  className=' h-8 w-24    bg-white rounded-3xl flex items-center justify-between px-2' >
            <input className='outline-none bg-transparent font-Montserrat w-full placeholder:text-xs ' type="search" placeholder='Search' />
            <BiSearchAlt2 className='text-gray-500 ' />
            </div> 
            </div>

        </div>

    {/* <div className="bg-[url('/resources/HeroImagelg.png')] bg-contain   border border-black h-80 ">
      
    </div> */}

    <div className='w-full h-fit bg-[#E3E1DC] px-4 py-2'>  
    <div className='text-xs font-semibold text-[#291507]  ' >Most Searched Breads</div>
    <div className="h-1 bg-[#291507] w-12 mt-2  mb-4 rounded-md " ></div>
    <div className='text-lg font-semibold font-Montserrat' >66+ Breeds for you <div>to discover</div></div>
    
    <div className='flex flex-wrap justify-center items-center gap-5 mt-4'>
    {most.map((item) => {
    return (
      <div  key={item.id} className='flex flex-col justify-center items-center pb-2 '>

        <img src={item.image} alt="Top Breads" className=' rounded-2xl mb-2
        w-32 h-28
        md:w-36 md:h-32
        lg:w-56 lg:h-52
        xl:w-72 xl:h-60
        ' />

        <h1 className=' self-start text-xs font-semibold font-Montserrat'>{item.name.split('Cat')[0]}</h1>
      </div>
    )})}

    </div>

    </div>

    </div>
  )
}

export default Intro