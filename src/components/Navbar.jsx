import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { VscChevronDown } from 'react-icons/vsc'

import logo from '../assets/images/logo/logo-black.png'

const Navbar = () => {

  const { error, loading, data, getData } = useGetData()

  const [ stickyClass, setStickyClass ] = useState( '' );

  useEffect( () => {
    // getDataC( "http://localhost:5888/contactinformation" )
    // getDataE( "http://localhost:5888/eventcategories" )
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


  const navigate = useNavigate()

  return (
    <nav className={ `navigation ${ stickyClass }` }>
      <Link to="" className='navLogo'><img className='navLogoImg' src={ logo } alt="logo-black" /></Link>
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
                data && data.map( ( e ) =>
                  <NavLink to={ `events/${ e._id }` }>{ e.category }</NavLink>
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