import React from 'react'
import { FaWallet, FaShoppingCart, FaExchangeAlt, FaCog, FaSearch, FaBitcoin } from "react-icons/fa";

const Features = () => {
    const features=[
        {
            icons:<FaWallet className='text-purple-500 text-4xl'/>,
            title:'Wallets',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.'
        },
        {
            icons:<FaShoppingCart className='text-purple-500 text-4xl'/>,
            title:'Trade',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.'
        },
        {
            icons:<FaExchangeAlt className='text-purple-500 text-4xl'/>,
            title:'Exchange',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.'
        },
        {
            icons:<FaCog className='text-purple-500 text-4xl'/>,
            title:'Processing',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.'
        },
        {
            icons:<FaSearch className='text-purple-500 text-4xl'/>,
            title:'Analysis',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.'
        },
        {
            icons:<FaBitcoin className='text-purple-500 text-4xl'/>,
            title:'Crypto',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.'
        },
        {
            icons:<FaWallet className='text-purple-500 text-4xl'/>,
            title:'Wallets',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.'
        },
        {
            icons:<FaShoppingCart className='text-purple-500 text-4xl'/>,
            title:'Trade',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.'
        },
    ]
  return (
    <div className='py-12 bg-white max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-6'>Our Features</h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mb-8"></div>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg-grid-cols-6 gap-6'>
            {features.map((feature, index)=>(
                <div key={index} className='p-6 bg-white shadow-lg rounded-lg flex flex-col items-start gap-6 border border-gray-200'>
                    {feature.icons}
                    <h3 className='text-xlfont-bold'>{feature.title}</h3>
                    <p className='text-gray-600'>{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features
