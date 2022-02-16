import React from 'react'

import CIndex from '../components.index'
import NavList from './NavList.component'

const NavMobile = () => {
  const { TitleBar } = CIndex

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <TitleBar />
      <NavList />
    </nav>
  )
}

export default NavMobile
