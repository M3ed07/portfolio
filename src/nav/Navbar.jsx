import React from 'react';
import { NavbarData } from './NavbarData';
import { NavLink ,Outlet } from 'react-router-dom';

function Navbar({ children }) {
  return (
    <div className='container'>
      <nav className='w-full h-28 flex items-center justify-between'>
        <h1 className="font-semibold text-3xl opacity-95">
          Melad<span className="text-Secondary-fc">.</span>
        </h1>
        <ul className="w-1/2 flex justify-around items-center">
          {NavbarData.map((item, index) => (
            <li className="list-item" key={index}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
          <button className=" px-6 py-2 rounded-full bg-Secondary-fc text-bg-color hover:bg-bg-color hover:text-Secondary-fc hover:border hover:border-Secondary-fc">
            Hire me
          </button>
        </ul>
      </nav>
      <main className=' lg:mt-24'>{children}<Outlet /></main>
    </div>
  );
}

export default Navbar;
