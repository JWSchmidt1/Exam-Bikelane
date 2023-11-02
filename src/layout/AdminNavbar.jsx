import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { VscChevronDown } from 'react-icons/vsc'

import logo from '../assets/images/logo/logo-black.png'

const AdminNavbar = () => {

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
            to="/admin"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Forside
          </NavLink>
        </li>
        <li>
          <NavLink
            to="aboutadmin"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Om os
          </NavLink>
        </li>
        <li id='eventsDropdown'>
          <NavLink
            to="eventsadmin"
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
            to="contactadmin"
            className={ ( { isActive } ) =>
              isActive ? "activeClassName" : undefined
            }>
            <span className='navUnderline' />Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="newsadmin"
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

export default AdminNavbar