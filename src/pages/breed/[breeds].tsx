import React from 'react'
import dynamic from 'next/dynamic'
const Specs = dynamic(() => import('../../compnents/Specs'), {ssr: false})
const Breeds = () => {
  return (
    <div className='text-[#291507]'>
      <Specs/>
    </div>
  )
}

export default Breeds