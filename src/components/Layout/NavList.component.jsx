import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/img/img-index.js'
import styles from './styles/Nav.module.css'

const NavList = ({ className }) => {
  const {
    other: { LogoImg },
  } = images
  const navList =
    'flex justify-start items-center py-3 space-x-20 font-nav absolute w-full'

  return (
    <ul
      className={`${className ? className : ''} ${navList} ${styles.nav} pl-5`}
    >
      <div className="w-12 sm:w-20 md:w-12">
        <Link to="/">
          <img src={LogoImg} alt="" />
        </Link>
      </div>
      <li>
        <Link data-page="booking" to="/booking">
          Booking
          <div className="nav-underline"></div>
        </Link>
      </li>
      <li>
        <Link data-page="productions" to="/productions">
          Productions
          <div className="nav-underline"></div>
        </Link>
      </li>

      <li>
        <Link data-page="safety" to="/safety">
          Safety
          <div className="nav-underline"></div>
        </Link>
      </li>
      <li>
        <Link data-page="crew" to="/crew">
          Crew
          <div className="nav-underline"></div>
        </Link>
      </li>
    </ul>
  )
}

export default NavList
