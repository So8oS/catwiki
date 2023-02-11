import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {breedListAtom} from '../atoms'
import { useAtomValue } from 'jotai'
import type{ catBreed } from './Intro'
import SkillBar from './SkillBar'
import axios from 'axios'
import {morePhotosAtom} from '../atoms'
import { useAtom } from 'jotai'
import { specificAtom } from '../atoms'

export type morePhotos = {
    breeds: [];
    height: number;
    id: string;
    url: string;
    width: number;
}


const Specs = () => {
const [morePhotos, setMorePhotos] = useAtom(morePhotosAtom)
const router = useRouter();
const {item} = router.query;
const breedlist = useAtomValue(breedListAtom)
const [currentCat, setSpecific] = useAtom(specificAtom)

console.log(currentCat)
console.log(router.query)

useEffect(() => {
    if(!item){
        return
    }
    setSpecific(breedlist.find((breed) => breed.id === item) as catBreed)
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${item as string}`)
    .then((res) => {
        setMorePhotos(res.data as morePhotos[])
        console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}, [])

    return (
        <>
            <div className=' w-full flex flex-col justify-center items-center gap-10
            lg:flex-row lg:justify-between lg:items-start lg:gap-20 lg-pr-20 xl:pr-40 lg:px-10
            mb-12 
            '>
                {/* Image div */}
                    <img className='w-80   rounded-lg   '
                    src={`https://cdn2.thecatapi.com/images/${currentCat?.reference_image_id}.jpg`} alt="Breed Pic"/>
            
                {/* Info div */}
                <div className='flex flex-col font-medium gap-6' >
                        <h1 className=' text-3xl font-semibold text-black '>{currentCat?.name}</h1>
                        <h1 className='text-lg'>{currentCat?.description}</h1>
                        <div className=''><span className='font-semibold'>Temperament:</span> {currentCat?.temperament}</div>
                        <div className=''><span className='font-semibold'>Origin:</span> {currentCat?.origin}</div>
                        <div className=''><span className='font-semibold'>Life span: </span>{currentCat?.life_span}</div>
            
                    <div className='flex flex-col justify-center  gap-6 '>
                        <div className='flex gap-2 justify-between font-bold'>
                            <h1>Adaptability:</h1>
                            <SkillBar level={currentCat?.adaptability}/>
                        </div>
                        <div className='flex gap-2 justify-between font-bold' >
                            <h1>Affection level:</h1>
                            <SkillBar level={currentCat?.affection_level}/>
                        </div>
                        <div className='flex gap-2 justify-between font-bold'>
                            <h1>Child Friend:</h1>
                            <SkillBar level={currentCat?.child_friendly}/>
                        </div>
                        <div className='flex gap-2 justify-between font-bold'>
                            <h1>Grooming:</h1>
                            <SkillBar level={currentCat?.grooming}/>
                        </div>
                        <div className='flex gap-2 justify-between font-bold'>
                            <h1>inteligance:</h1>
                            <SkillBar level={currentCat?.intelligence}/>
                        </div>
                        <div className='flex gap-2 justify-between font-bold'>
                            <h1>Health Issues:</h1>
                            <SkillBar level={currentCat?.health_issues}/>
                        </div>
                        <div className='flex gap-2 justify-between font-bold'>
                            <h1>Social needs:</h1>
                            <SkillBar level={currentCat?.social_needs}/>
                        </div>
                        <div className='flex gap-2 justify-between font-bold'>
                            <h1>Stranger friendly:</h1>
                            <SkillBar level={currentCat?.stranger_friendly}/>
                        </div>
            
                    </div>
                </div>
            </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-extrabold mb-10  lg-self-start ' >Other Photos</h1>
                    <div className='flex flex-wrap justify-center items-center gap-8 '>
                    {morePhotos.slice(1,8).map((item) => {
                    return (
                    <>
                        <img key={item.id} src={item.url} alt="Top Breads" className=' rounded-2xl mb-2
                        w-80 h-60 object-cover
                        ' />
                    </>
                    )})}
                    </div>
                </div>
        </>
  )
}

export default Specs