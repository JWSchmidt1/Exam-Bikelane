import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

import { VscChevronDown } from 'react-icons/vsc'
import { CgClose } from 'react-icons/cg'

import logo from '../assets/images/logo/logo-black.png'
import logowhite from '../assets/images/logo/logo-white.png'

const Navbar = () => {

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
          <li><Link onClick={ toggleClass } to="">Forside</Link></li>
          <li><Link onClick={ toggleClass } to="about">Om os</Link></li>
          <li><Link onClick={ toggleClass } to="events">Events</Link></li>
          <li><Link onClick={ toggleClass } to="contact">Kontakt</Link></li>
          <li><Link onClick={ toggleClass } to="news">Nyheder</Link></li>
        </ul>
      </div>
      {/*  */ }


      <ul className='navMenus'>
        <li>
          <NavLink
            to=""
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Forside
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Om os
          </NavLink>
        </li>
        <li id='eventsDropdown'>
          <NavLink
            to="events"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Events<span className="arrowdownCon"><VscChevronDown className="arrowdown" /></span>
          </NavLink>
          <ul>
            <li className="dropdowncontent" id="myDropdown">
              {
                data && data.map( ( e, index ) =>
                  <NavLink key={ index } to={ `events` }>{ e.category }</NavLink>
                )
              }
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="contact"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="news"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Nyheder
          </NavLink>
        </li>
        <button onClick={ () => navigate( 'contact' ) } className='navFreeTrial'>
          Gratis Prøveperiode
        </button>
      </ul>
    </nav>
  )
}

export default Navbar