import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const OurTraders = () => {
    const traders=[
        {
            name:"John Smith",
            role:"TRADER",
            image:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/team1.jpg"
        },
        {
            name:"Sarah Palmer",
            role:"TRADER",
            image:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/team2.jpg"
        },
        {
            name:"Adam Swift",
            role:"TRADER",
            image:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/team3.jpg"
        },
        {
            name:"Helen Smith",
            role:"TRADER",
            image:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/team4.jpg"
        },
    ]
  return (
    <div className='py-10 bg-white text-center'>
        <h2 className='text-3xl font-bold mb-8'>Our Traders</h2>
        <div className='grid grid-cols-2     sm:grid-cols-4 md-grid-cols-8 gap-6 px-6 max-w-6xl mx-auto'>
            {traders.map((trader,index)=>(
                <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden'>
                    <img src={trader.image} alt="" className='w-full h-64 object-cover' />
                    <div className='p-4'>
                        <h3 className='text-xl font-bold'>{trader.name}</h3>
                        <p className='text-sm text-gray-950 font-bold'>{trader.role}</p>
                        <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='flex justify-center space-x-4 mt-4'>
                            <a href="" className='text-purple-700 hover:text-purple-900'>
                                <FaFacebookF size={20} />
                            </a>
                            <a href="" className='text-purple-700 hover:text-purple-900'>
                                <FaTwitter size={20} />
                            </a>
                            <a href="" className='text-purple-700 hover:text-purple-900'>
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurTraders