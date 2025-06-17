import React from 'react'
import Header from './header'
const home = () => {
  return (
    <>
    <Header/>    
    <div className='flex justify-start items-center h-screen bg-gray-300 '>
      <div className='mr-4'>
        <img src="https://media.istockphoto.com/id/528436526/photo/litti-chokha-bihar-traditional-food.jpg?b=1&s=612x612&w=0&k=20&c=lhXEjk2fCLEluHZxDkJLLbi6uRh8lik0v9sMYItv4v0=" alt="Zomato Logo" className='w-[500px] h-[550px] mx-auto mb-4 ml-10  rounded-2xl ' />
      </div>
      <div className='mr-50 font-bold'>
        <div className='text-red-600 text-8xl font-serif'>Welcome</div>
        <h2 className='text-blue-600 text-6xl'>To Ultimate</h2>
        <h3 className='text-red-500 text-5xl'>Food Devlivery App--<span className='text-pink-600'>Parul-<br/>Zomato</span></h3>
        <p className='text-gray-500 text-2xl mt-4'>"Good Food with Good Mindset"<span >&#127848;</span> </p>
        </div>
    </div>
    </>
  )
}

export default home