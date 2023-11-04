import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logout from '../components/Logout'

import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'

import { CgClose } from 'react-icons/cg'

import logo from '../assets/images/logo/logo-black.png'
import logowhite from '../assets/images/logo/logo-white.png'

const AdminNavbar = () => {

  const { error, loading, data, getData } = useGetData()

  const [ stickyClass, setStickyClass ] = useState( '' );

  useEffect( () => {
    getData( "http://localhost:5888/eventcategories" )
  }, [] )

  useEffect( () => {
    window.addEventListener( 'scroll', stickNavbar );
    return () => window.removeEventListener( 'scroll', stickNavbar );
  }, [] );

  const stickNavbar = () => {
    if ( window !== undefined ) {
      let windowHeight = window.scrollY;

      windowHeight > 400 ? setStickyClass( 'sticky-nav' ) : setStickyClass( '' );
    }
  };

  const toggleClass = () => {
    document.getElementById( "menu" ).classList.toggle( "overlay" );
  };


  const navigate = useNavigate()

  return (
    <nav className={ `navigation ${ stickyClass }` }>

      { error && <ErrorMessage /> }
      { loading && <Loader /> }

      <Link to="" className='navLogo'><img className='navLogoImg' src={ logo } alt="logo-black" /></Link>

      {/* Burgermenu */ }
      <div id="burger-menu" onClick={ toggleClass } >
        <span id="burger-box"></span>
      </div>
      <div id="menu">
        <ul id="menu__ul">
          <CgClose onClick={ toggleClass } className='navMobileClose' />
          <Link onClick={ toggleClass } to="" className='navBurgerLogo'><img className='navBurgerLogoImg' src={ logowhite } alt="logo-white" /></Link>
          <li><Link onClick={ toggleClass } to="/admin">Forside Admin</Link></li>
          <li><Link onClick={ toggleClass } to="eventsadmin">Events Admin</Link></li>
          <li><Link onClick={ toggleClass } to="contactadmin">Kontakt Admin</Link></li>
          <li><Link onClick={ toggleClass } to="goalsadmin">Goals Admin</Link></li>
          <li><Logout /></li>
        </ul>
      </div>
      {/*  */ }

      <ul className='navMenus'>
        <li>
          <NavLink
            to="/admin"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Forside Admin
          </NavLink>
        </li>
        <li>

          <NavLink
            to="eventsadmin"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Events Admin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contactadmin"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Kontakt Admin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="goalsadmin"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Goals Admin
          </NavLink>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  )
}

export default AdminNavbar