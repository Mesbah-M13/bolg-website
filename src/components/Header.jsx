import React from 'react'
import logo from '../assets/travel.svg'
const Header = () => {
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
          <a href="index.html">
            <img className="h-10" src={logo} alt="Travel and Explore" />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
