import React from 'react'

function Booking() {
  return (
    <div id='deals' className='max-w-[1140px] w-full m-auto p-4'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label>Destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md' >
                    <option value="">Grande Antigua</option>
                    <option value="">Key west</option>
                    <option value="">Lakshadives</option>
                    <option value="">Maldives</option>
                </select>
            </div>
            <div className='flex w-full'>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                    <label >Check In</label>
                    <input className='rounded-md border p-2' type="date"  />
                </div>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                    <label >Check Out</label>
                    <input className='rounded-md border p-2' type="date"  />
                </div>
            </div>
            <div className='flex flex-col p-2 my-2 w-full'>
                <label>Search</label>
                <button className='w-full'>Rates & Availabilities</button>
            </div>
        </form>
    </div>
  )
}

export default Booking