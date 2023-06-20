import React from 'react'

function Gallery() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resort</h3>   
         <img className='w-full h-40 object-cover relative border-4 border-white shodow-lg' src="https://image.winudf.com/v2/image1/Y29tLk1vYmlsZVN0cmFuZ2VyLmFwcDAxMzBfc2NyZWVuXzJfMTU0OTkwNzE3Ml8wNTI/screen-2.webp?fakeurl=1&type=.webp" alt="" />
        </div>

        <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resort</h3>   
         <img className='w-full h-40 object-cover relative border-4 border-white shodow-lg' src="https://i.pinimg.com/originals/0d/db/d6/0ddbd6e85dc837ba1fd0da1be8796252.jpg" alt="" />
        </div>
       
        <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resort</h3>   
         <img className='w-full h-40 object-cover relative border-4 border-white shodow-lg' src="https://upload.wikimedia.org/wikipedia/commons/8/88/Bora_Bora_Island_4k_Image.jpg" alt="" />
        </div>

        <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resort</h3>   
         <img className='w-full h-40 object-cover relative border-4 border-white shodow-lg' src="https://cdn.wallpapersafari.com/38/24/xWmNdO.jpg" alt="" />
        </div>

    </div>
  )
}

export default Gallery