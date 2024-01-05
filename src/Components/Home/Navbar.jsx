import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../asset/Loom.png'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {

  const [isMenuActive, setIsmenuActive] = useState(true)

  const handlerbtn = () => {
    return setIsmenuActive(!isMenuActive)
  }

  const navLink = [
    { path: "/", title: "Start a search" },
    { path: "/my-jobs", title: "My jobs" },
    { path: "/salary-estimate", title: "salary estimate" },
    { path: "/post-a-job", title: "Post a job" },
  ]

  return (
    <div>
      <header className='py-6 border '>
        <nav className='container px-2 xl:px-0 max-w-7xl flex justify-between'>

          {/* logo */}

          <Link to={'/'} className='flex gap-x-2 text-2xl font-bold'>
            <img src={Logo} className='w-10' alt="logo" />
            <span>Job Portal</span>
          </Link>

          {/* nav link for midium => devices */}

          <ul className='hidden md:flex gap-x-12'>
            {
              navLink.map(({ path, title }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive, isPending }) => isActive ? "active" : ""}>
                    {title}
                  </NavLink>
                </li>
              ))
            }
          </ul>

          {/* sign up & sign in btns */}

          <div className='space-x-3 md:block'>
              <Link to={'/users-autentication/login'} className='font-bold tracking-wide border-2 border-primary py-2 px-4 rounded text-white bg-secondery hover:bg-white hover:text-primary duration-150 ease-out'>Sign in</Link>
              <Link to={'/users-autentication/register'} className='font-bold tracking-wide border-2 border-primary py-2 px-4 rounded text-primary bg-white hover:bg-secondery hover:text-white duration-150 ease-out'>Sign up</Link>
            </div>

          {/* toogle btn for small devices */}

          <div className='md:hidden'>
            <button onClick={handlerbtn}>
              {
                isMenuActive ? <FaBarsStaggered /> : <FaXmark />
              }
            </button>
          </div>
        </nav>

        {/* nav link for small =< devices */}

        <div className='absolute w-full'>
          <ul className={`mt-5 py-5 text-center space-y-3 font-bold bg-primary/95 first-of-type:text-white ${isMenuActive ? "hidden" : ""}`}>
            {
              navLink.map(({ path, title }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive, isPending }) => isActive ? "active" : ""}>
                    {title}
                  </NavLink>
                </li>
              ))
            }
            
            {/* sign up & sign in btns */}

            <div className='space-x-3 pt-5 md:block'>
              <Link to={'/users-autentication-login'} className='font-bold tracking-wide border-2 border-primary py-2 px-4 rounded text-white bg-secondery hover:bg-white hover:text-primary duration-150 ease-out'>Sign in</Link>
              <Link to={'/users-autentication/register'} className='font-bold tracking-wide border-2 border-primary py-2 px-4 rounded text-primary bg-white hover:bg-secondery hover:text-white duration-150 ease-out'>Sign up</Link>
            </div>
          </ul>
        </div>

      </header>
    </div>
  )
}

export default Navbar