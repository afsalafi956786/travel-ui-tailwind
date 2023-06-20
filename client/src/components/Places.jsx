import React from 'react'

function Places() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16 ]'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4 '>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://image.winudf.com/v2/image1/Y29tLk1vYmlsZVN0cmFuZ2VyLmFwcDAxMzBfc2NyZWVuXzJfMTU0OTkwNzE3Ml8wNTI/screen-2.webp?fakeurl=1&type=.webp" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://i.pinimg.com/originals/0d/db/d6/0ddbd6e85dc837ba1fd0da1be8796252.jpg" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/8/88/Bora_Bora_Island_4k_Image.jpg" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://cdn.wallpapersafari.com/38/24/xWmNdO.jpg" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://image.winudf.com/v2/image1/Y29tLk1vYmlsZVN0cmFuZ2VyLmFwcDAxMzBfc2NyZWVuXzJfMTU0OTkwNzE3Ml8wNTI/screen-2.webp?fakeurl=1&type=.webp" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Places