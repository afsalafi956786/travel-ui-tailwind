import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
        <img className='w-full h-full object-cover' src="https://www.itl.cat/pngfile/big/148-1489968_related-images-seychelles-wallpaper-4k.jpg" alt="" />
        <div className='max-w-[1140px] mx-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full  text-white p-4'>
             <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
            <h2 className='text-4xl font-bold italic'>With Weekend</h2>
            <p>
            simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy
             text ever since the 1500s, when an unknown printer took 
             a galley of type and scrambled it to make a type specimen book. 
            </p>  
            </div>
       
        </div>
    </div>

  )
}

export default Hero