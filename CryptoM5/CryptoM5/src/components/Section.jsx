import React from 'react'

const Section = () => {
  return (
    <>
   <div className='flex flex-col md:flex-row items-center justify-between py-16 px-10 md:px-35 bg-white'>
    <div className='md:w-1/2 text-center md:text-left'>
      <p className='text-purple-600 font-semibold'>CRYPTO PLATFORM</p>
      <h2 className='text-4xl font-bold text-black mt-2'>Crypto Trade
      Agency</h2>
      <p className='text-gray-600 mt-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore dolore magna aliqua.
      </p>
      <button className='mt-6 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 n'>
        Get Started
      </button>
    </div>
    <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center'>
      <img src="https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg" alt="" className='rounded-2xl shadow-lg max-w-full' />
    </div>
   </div>
    </>
  )
}

export default Section