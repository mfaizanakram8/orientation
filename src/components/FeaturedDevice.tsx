import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedDevice = () => {
  return (
    <div className='flex flex-col justify-center items-center  h-[700px] bg-gray-50'>
      <div >
        <h1 className='text-lg font-bold '>FEATURED OD OREDENTION</h1>

      </div>
      <div className='flex flex-row mt-6'>
        <div className='flex flex-col text-center '>
            <Image src="/Capture3.png" alt="" width={400} height={200}   className="transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-lg"/>
            <h1 className='font-bold my-4'>HEADPHONES & EARPHONES</h1>
<p className='font-extralight mb-2'>Enjoy music and gaming with best audio accessories</p>
<Link href={"#"}  className="inline-block   bg-black text-white py-3 px-6 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition"> Shop Now</Link>
        </div>
        <div className='flex flex-col text-center mx-4'>
            <Image src="/Capture5.png" alt="" width={400} height={220}   className="transition-transform duration-300 ease-in-out transform hover:scale-110  rounded-lg" />
            <h1 className='font-bold my-4'>POWER BANKS AND CHARGERS


</h1>
<p className='font-extralight mb-2'>Wireless Chargers, Car Chargers, Wall Chargers</p>
<Link href={"#"}  className="inline-block   bg-black text-white py-3 px-6 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition"> Shop Now</Link>
        </div>
        <div className='flex flex-col text-center'>
         
        <Image 
  src="/Capture4.png" 
  alt="Image" 
  width={400} 
  height={200} 
  className="transition-transform duration-300 ease-in-out transform hover:scale-110  rounded-lg"
/>

            <h1 className='font-bold my-4'>Cables


</h1>
<p className='font-extralight mb-2'>Cables for your every need</p>
<Link href={"#"}  className="inline-block   bg-black text-white py-3 px-6 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition"> Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedDevice
