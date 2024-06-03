import React, { useState } from 'react';
import { NavbarData } from './NavbarData';
import { NavLink, Outlet } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <nav className='w-full h-28 flex items-center justify-between mb-16 lg:mb-24'>
        <h1 className="font-semibold text-3xl opacity-95">
          Melad<span className="text-Secondary-fc">.</span>
        </h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
        <ul className={`w-full lg:w-1/2 lg:flex lg:justify-around lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          {NavbarData.map((item, index) => (
            <li className="list-item" key={index}>
              <NavLink to={item.path} onClick={() => setIsOpen(false)}>{item.title}</NavLink>
            </li>
          ))}
          <li>
            <button className="px-6 py-2 rounded-full bg-Secondary-fc text-bg-color hover:bg-bg-color hover:text-Secondary-fc hover:border hover:border-Secondary-fc">
              Hire me
            </button>
          </li>
        </ul>
      </nav>
      <main>{children}<Outlet /></main>
    </div>
  );
}

export default Navbar;
