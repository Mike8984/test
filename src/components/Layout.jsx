import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import search from '../assets/search.svg'

const Layout = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__inner">
          <h1>Awesome</h1>
          <NavLink to="/search">
            <img src={search} alt="" />
          </NavLink>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Layout
