import React, { useEffect } from "react";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setOpenSidebar } from "../features/modal/modalSlice";
import logo from "../images/logo-white.png";
import { getFromLocalStorage } from "../utils/localStorage";
import Sidebar from "./Sidebar";
import { logoutUser } from "../features/user/userSlice";
function Navbar() {
  const [stickyNav, setStickyNav] = useState(false);
  const dispatch = useDispatch();
  let user = getFromLocalStorage();

  useEffect(() => {
    const eventListener = window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 10) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    });
    window.removeEventListener("scroll", eventListener);
  }, []);
  return (
    <div
      className={`${
        stickyNav &&
        "z-50 bg-black fixed navbar w-screen top-0 left-0 right-0 px-6"
      }`}
    >
      <div className='flex items-center  justify-between max-w-5xl lg:mx-auto sm:mx-5'>
        <Link to='/'>
          <div className=' flex items-center text-grey italic font-["Dancing_Script"]'>
            <img src={logo} alt='' className='md:w-24 sm:w-16 aspect-square' />
            <p className='md:text-2xl md:text-md'>Health First</p>
          </div>
        </Link>
        <FiAlignJustify
          className='text-3xl text-grey lg:hidden'
          onClick={() => dispatch(setOpenSidebar())}
        />

        <Sidebar />
        <ul className='sm:hidden lg:flex pl-6  flex items-center  justify-between text-grey gap-8 text-md capitalize'>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='active'>
              about
            </NavLink>
          </li>
          <li>
            <NavLink to='/charities' activeClassName='active'>
              {" "}
              Charities
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>
              contact
            </NavLink>
          </li>

          {user?.email ? (
            <>
              <li>
                <NavLink to={`/profile/${user._id}`} activeClassName='active'>
                  {" "}
                  Profile
                </NavLink>
              </li>
              <li
                className='flex items-center gap-2 cursor-pointer'
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                Logout
              </li>
            </>
          ) : (
            <li>
              <NavLink className='flex items-center gap-2' to='/login'>
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
