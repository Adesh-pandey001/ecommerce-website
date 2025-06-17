import React from 'react'
import Header from './header'
const loginsign = () => {
  return (
    <>
    <Header/>
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 w-full max-w-sm shadow-2xl text-white">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🔐</div>
            <h1 className="text-2xl font-bold">Welcome Back</h1>
          </div>

          <form className="space-y-4">
            Email Address:
            <input
              type="text" 
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-500"
            />
            Password:
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-500"
            />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-purple-200 hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg hover:bg-purple-100 transition"
            >
              🚀 Login
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Don’t have an account?{' '}
            <a href="#" className="text-yellow-300 hover:underline font-medium">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default loginsign