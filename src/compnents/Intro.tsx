/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useRef,useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import axios from 'axios'
import {breedListAtom, searchAtom} from '../atoms'
import { useAtom } from 'jotai'
import { most } from '../most'
import { useRouter } from 'next/router'
import Link from 'next/link'


export type catBreed = {
  adaptability: number;
  affection_level: number;
  alt_names: string; 
  cfa_url: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: {
    imperial: string;
    metric: string;
  };
  wikipedia_url: string;
}




const Intro = () => {

  const router = useRouter();
  const [breeds, setBreeds] = useAtom(breedListAtom)
  const [_open, setOpen] = useAtom(searchAtom)
  const[search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/breeds')
    .then((res) => {
      setBreeds(res.data as catBreed[])
    })
    .catch((err) => {
      console.log(err)
    })

    // closing drop menu 
    const handler = (event: { target: any }) => {
      if (!searchReaf.current.contains(event.target)) {
        setOpen(false)
      }
    }
  
    document.addEventListener('mousedown', handler)
  
    return () => {
      document.removeEventListener('mousedown', handler)
    }

  }, [])

   const searchReaf = useRef();

const filteredBreeds = breeds.filter((breed) => {
  return breed.name.toLowerCase().includes(search.toLowerCase())
})


  return (
    // <div className=' md:rounded-2xl overflow-hidden font-Montserratflex flex-col justify-center items-center rounded-3xl w-full lg:mx-auto lg:max-w-5xl uw:max-w-7xl'>
          <div className=' md:rounded-2xl overflow-hidden font-Montserrat flex-col justify-center items-center rounded-3xl w-full'>

      
        <div className=" relative h-40 
        bg-black
         md:h-80 
         lg:h-[35rem]
         xl:h-[40rem] 
         ">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-[url('/resources/HeroImagesm.png')] 
            md:bg-[url('/resources/HeroImagemd.png')]
            lg:bg-[url('/resources/HeroImagelg.png')]">
            </div>
            <div className='absolute flex flex-col 
            top-4 left-4
            md:top-8 md:left-8
            lg:top-32 lg:left-48' >
              <img className=' w-20 md:w-44 lg:w-64  2xl:w-80' src="/resources/CatwikiLogo.svg" alt="Logo" />
              <div className=' mb-4  text-[.625rem] md:text-xl xl:text-2xl   text-white font-Montserrat'>Get to know more about<div>your cat breed</div></div>
            
            <div ref={searchReaf}  className='flex flex-col justify-center gap-4'>
              <div  className=' h-8 w-24 md:w-full md:h-12 bg-white rounded-3xl flex items-center justify-between px-2' >
              <input className='outline-none bg-transparent font-Montserrat w-full placeholder:text-xs placeholder:text-sm ' 
              type="search" 
              placeholder='Search'
              onClick={() => {setOpen(true)}}
              onChange=
                {(e) => {
                  const searchfield = e.target.value.toLowerCase();
                  setSearch(searchfield);
                }
                
              }
               />
              <BiSearchAlt2 className='text-gray-500 ' />
              </div>
              {
                
                _open &&
                <div  className=' h-56 w-full md:w-full  bg-white rounded-3xl flex flex-col  justify-start p-4 overflow-scroll scroll- gap-4  ' >
                { 
                  filteredBreeds.map((item) => {
                    return (
                        <Link
                        href={{
                          pathname: `/breed/${item.id}`,
                          query: {
                            item: item.id ,
                          },
                        }}
                        replace
                        as={`/breed/${item.id}`}
                        passHref
                                            
                         className='font-medium text-lg px-4 py-2 hover:bg-[#E3E1DC] p-2 cursor-pointer rounded-xl' key={item.id} >{item.name}</Link>
                    )
                  })
                }
              </div> }
            </div>

              </div>

        </div>



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
        object-cover
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