import React, { useContext, useEffect, useState, useCallback } from 'react'
import CIndex from '../components.index.js'
import images from '../../assets/img/img-index.js'
const FireGif =
  'https://thumbs.gfycat.com/BlackandwhiteEasygoingJaguar-size_restricted.gif'

const Layout = ({ children }) => {
  const { NavMobile, Footer } = CIndex
  const {
    other: { FireBgGif },
  } = images

  return (
    <>
      <NavMobile />
      {children}
      {/* <Footer /> */}
      <div className="fixed -bottom-32 left-0 w-[105vw] h-[100vh] flex items-center justify-center z-0">
        <img className="w-full h-full" src={FireBgGif} alt="" />
      </div>
    </>
  )
}

export default Layout
