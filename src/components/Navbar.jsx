import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { key: 1, name: "Home", path: "/" },
    { key: 2, name: "Certificates", path: "/certificates" },
    { key: 3, name: "Projects", path: "/projects" },
    { key: 4, name: "Contact", path: "/contact" },
    
  ];

  return (
    <>
      <div>
        <div className='flex justify-between m-3 bg-gray-400 p-3 rounded-3xl shadow-md'>
          <div className='flex items-center flex space-x-3 '>
            <img className="w-10 h-10 rounded-full  " src="/user.jpg" alt="" />
            <div className='items-center mb-1'>
              <h1>Saurabh <span className='text-2xl text-red-900'>Hardel</span></h1>
              <p>Full Stack Developer</p>
            </div>
          </div>
          <div>
            <ul className='md:flex space-x-4 text-xl p-4 hidden'>
              {navItems.map(({ key, name, path }) => (
                <li key={key}>
                  <Link to={path} className="hover:text-blue-500">{name}</Link>
                </li>
              ))}
            </ul>
            <div className='md:hidden'>
              <button onClick={() => setMenu(!menu)} className='text-2xl'>
                {menu ? <ImCross /> : <IoMdMenu />}
              </button>
            </div>
          </div>
        </div>
        {menu &&
          <div className='flex justify-between'>
            <div className='w-1/2'></div>
            <div className='w-1/2'>
              <ul className='space-y-4 text-xl p-4 items-end'>
                {navItems.map(({ key, name, path }) => (
                  <li key={key}>
                    <Link to={path} className="hover:text-blue-500">{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Navbar;