import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from './search'

const Layout = () => {
  return (
    <div className="container">
      <header className="header">
        <Search />
      </header>
      <Outlet />
    </div>
  )
}

export default Layout
