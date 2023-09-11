import React from 'react'

import Link from "next/link"
const colors =["black ","blue","purple","pink","white"]


const size =["L","XL",'SM',"XS"]
const page = ({searchParams}:  {searchParams: { [key: string]: string | string[] | undefined }}) => {
    const selectedColor=searchParams.color
    const selectedSize = searchParams.size
  return (
<>

    <div className='flex justify-start items-start px-20 py-14'>
    <h2 className='text-white font-bold text-2xl'>Muhammad Haseeb</h2>
    </div>
      <div className='  flex flex-col  justify-between items-center gap-9 '>
    
        <div className={`h-80 w-80 rounded-3xl text-white text-3xl flex items-center justify-center`}>
            {selectedColor} 
        </div>
       <div className='flex justify-center items-center gap-4'>
         {
            colors.map((color)=>(

             <Link href={`?color=${color}&size=${selectedSize}`} className={`px-8 py-4 bg-transparent rounded-full border${ selectedColor===color?" border-blue-500":"border-gray-500"} border-3xl border text-white`}>
                {color}
             </Link>
            ))
         }
       </div>
       <div className='flex gap-4 '>

       {
        size.map((size)=>(
             
            <Link href={`?color=${selectedColor}&size=${size}`} className={`px-4 py-2 bg-transparent rounded-full border${ selectedSize===size?" border-blue-500":"border-gray-500"} border-3xl border text-white`}>
            {size}
         </Link>
        ))
       }
       </div>
    </div>
    </>
  )
}

export default page
