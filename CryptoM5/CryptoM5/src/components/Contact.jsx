import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='flex lg:flex-row items-center justify-between py-16 max-w-6xl mx-auto gap-50'>
        <div className='lg:w-1/2 text-left'>
            <h2 className='text-5xl font-bold text-gray-900'>Hold or Trade Cryptocurrency</h2>
            <p className="mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore dolore magna aliqua.
            </p>
        </div>

        <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md mt-11 lg:mt-0 ">
        <h3 className="text-4xl font-bold text-gray-900">Contact Us</h3>
        <p className="text-gray-600 mt-5 mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod temp.
        </p>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          ></textarea>
          <button
            type="submit"
            className="w-50 bg-purple-600 text-white font-bold py-3 rounded-full hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact