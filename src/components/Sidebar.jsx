import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo-gold.png";
import { ImHome } from "react-icons/im";
import { BsQuestionCircle } from "react-icons/bs";
import {
  MdClose,
  MdContacts,
  MdFoodBank,
  MdOutlineFastfood,
} from "react-icons/md";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AiFillProfile } from "react-icons/ai";
import { logoutUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFromLocalStorage } from "../utils/localStorage";
import { setCloseSidebar, setOpenSidebar } from "../features/modal/modalSlice";
function Sidebar() {
  // const user = {};
  const user = getFromLocalStorage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((s) => s.modal);
  return (
    <section
      className={
        isSidebarOpen
          ? " transition-all duration-700 translate-x-0  bg-black fixed h-screen w-full   left-0 z-20 lg:hidden bottom-0"
          : " transition-all duration-700 translate-x-full  bg-black fixed h-screen w-full   left-0 z-20 lg:hidden bottom-0"
      }
    >
      {" "}
      <MdClose
        onClick={() => dispatch(setCloseSidebar())}
        className='absolute  right-5 top-5 text-grey  text-3xl'
      ></MdClose>
      <ul className='pl-6 flex flex-col items-center justify-center text-grey gap-6 text-lg capitalize h-full'>
        <li onClick={() => dispatch(setCloseSidebar())}>
          <NavLink to='/' activeClassName='active'>
            home
          </NavLink>
        </li>
        <li onClick={() => dispatch(setCloseSidebar())}>
          <NavLink to='/about' activeClassName='active'>
            about
          </NavLink>
        </li>
        <li onClick={() => dispatch(setCloseSidebar())}>
          <NavLink to='/charities' activeClassName='active'>
            Charities
          </NavLink>
        </li>
        <li onClick={() => dispatch(setCloseSidebar())}>
          <NavLink to='/contact' activeClassName='active'>
            Contact
          </NavLink>
        </li>

        {user?.email ? (
          <>
            <li>
              <NavLink to='/profile' activeClassName='active'>
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
    </section>
  );
}

export default Sidebar;
