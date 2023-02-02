import React from 'react'
import {BiLoaderAlt} from '../index.js'
const Loader = () => {
  return (
    <div className=' p-auto w-28 flex flex-col gap-2 items-center justify-center '>
        Loading
      <BiLoaderAlt className='w-full h-10 animate-spin'/> 
    </div>
  )
}

export default Loader
