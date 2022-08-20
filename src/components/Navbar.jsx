import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const renderLinks = () => {
    return navLinks.map(({ id, title }, index) => (
      <li
        key={id}
        className={`font-poppins font-normal cursor-pointer text-[16px] ${
          index === 3 && toggle ? 'mb-0' : 'mb-4'
        } ${index === 3 && !toggle ? 'mr-0' : 'mr-10'} text-white`}
      >
        <a href={`#{id}`}>{title}</a>
      </li>
    ));
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hooBank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {renderLinks()}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prevState) => !prevState)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {renderLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
