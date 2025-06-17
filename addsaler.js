import React from 'react'
import Header from './header'
const addsaler = () => {
  return (
    <>
    <Header/>
     <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 w-full max-w-sm shadow-2xl text-white">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2"></div>
            <h1 className="text-2xl font-bold">Add New Seller</h1>
          </div>
          <form className="space-y-2">
            Seller Name
            <input
              type="text"
              placeholder="e.g Adesh Traders"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-500"
           />

           Email Address
           <input
              type="email"
              placeholder="Seller@email.com"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-500"
           />
           Shope Name
           <input
            type="text"
              placeholder='e.g Pandey Kirana Store'
              className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-500'
           />
           Phone Number
           <input
              type='number'
              placeholder='+91 1234567890'
              className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-500'
           />
           Shop Address
           <input
              type='text'
              placeholder='City, Street, Pincode'
              className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-500'
           />

          </form>
          <br></br>
          <button
              type="submit"
              className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg hover:bg-purple-100 transition "
            >
              ✅ Add seller
            </button>
        </div>
      </div>
    </>
    

  )
}

export default addsaler