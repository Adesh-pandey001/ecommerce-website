import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <nav className="bg-gray-900 p-5 shadow-lg flex items-center justify-between">
      {/* Left side: Cart Icon */}
     

      <Link to="/home"  className="hover:text-yellow-400 transition-colors duration-300" >
       <div className="flex items-center space-x-3">
        <FaShoppingCart className="text-yellow-400 text-2xl" />
        <span className="text-white font-semibold text-xl">ShopEase</span>
      </div>
      </Link>

      {/* Right side: Navigation links */}
      <ul className="flex space-x-8 text-white font-semibold">
        <li>
          <Link
            to="/product"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/addsaler"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Add Seller
          </Link>
        </li>
        <li>
          <Link
            to="/loginsign"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Login / Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
