import React, { useState } from 'react';
import { NavbarData } from './NavbarData';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <nav className={`w-full ${isOpen ? ' h-2/5' : 'h-28'} flex items-center flex-wrap justify-between `}>
        <div className='flex justify-between w-full lg:w-0'>
        <h1 onClick={()=>navigate('/')} className="font-semibold text-3xl opacity-95 cursor-pointer">
          Melad<span className="text-Secondary-fc">.</span>
        </h1>
          <button onClick={toggleMenu} className='lg:hidden'>
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
        <ul className={`lg:w-1/2 lg:flex lg:justify-around items-center ${isOpen ? 'flex flex-col w-full h-3/5 justify-between' : 'hidden'}`}>
          {NavbarData.map((item, index) => (
            <li className={`list-item`} key={index}>
              <NavLink to={item.path} onClick={() => setIsOpen(false)}>{item.title}</NavLink>
            </li>
          ))}
          <li>
            <button onClick={()=>navigate('/contact')} className={`${isOpen ? 'hidden' : 'block'} px-6 py-2 rounded-full bg-Secondary-fc text-bg-color hover:bg-bg-color hover:text-Secondary-fc hover:border hover:border-Secondary-fc`}>
              Hire me
            </button>
          </li>
        </ul>
      </nav>
      <main className={`${isOpen ? 'hidden' : 'block'} py-6 lg:py-20`}>{children}<Outlet /></main>
    </div>
  );
}

export default Navbar;
