import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);
  return (
    <div className="">
      <nav className={`w-full md:h-20 h-14 font-semibold  ${scrollNav ? 'bg-white shadow-md text-primary ' : 'md:bg-transparent md:shadow-none text-primary shadow-md bg-white'} flex md:px-10 lg:px-48 fixed top-0 z-50 px-4  `}>
        <Link to="/" className="w-auto">
          <figure className="h-full py-2">
            <img className="h-full" src="/public/img/logo/pena_logo.png" alt="Pena" />
          </figure>
        </Link>

        <div className="w-auto ml-auto md:items-center hidden md:flex px-5">
          <ul className="flex items-center gap-8 ">
            <li>
              <Link className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-auto ml-auto md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="h-full">
            <i className={`${isOpen ? 'fas fa-times' : 'fas fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      <div className={`fixed top-[6%] right-0 h-screen w-screen z-30 transform transition-transform duration-500 ${isOpen ? 'translate-x-[25%] ' : 'translate-x-full'}`}>
        <div className={`bg-white   h-screen w-[75%] ${isOpen ? 'shadow-lg' : ''}`}>
          {/* icon close */}
          <div className="">
            {/* menu */}
            <div className="">
              <ul className="flex flex-col gap-5 p-5 items-center">
                <li>
                  <Link className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
