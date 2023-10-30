import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData'
import { Link, NavLink } from 'react-router-dom'

import logo from '../assets/images/logo/logo-black.png'

const Navbar = () => {

  const { error, loading, data, getData } = useGetData()

  useEffect( () => {
    getData( "http://localhost:5888/contactinformation" )
  }, [] )

  return (
    <nav className='navigation'>
      <Link to="" className='navLogo'><img className='navLogoImg' src={ logo } alt="logo-black" /></Link>
      <ul className='navMenus'>
        <li>
          <NavLink
            to=""
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span />Forside
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span />Om os
          </NavLink>
        </li>
        <li>
          <NavLink
            to="events"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span />Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span />Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="news"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span />Nyheder
          </NavLink>
        </li>
        <li className='navFreeTrial'>
          <Link className='freeTrialLink'>Gratis Prøveperiode</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar