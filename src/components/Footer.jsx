import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData'
import { Link, NavLink } from 'react-router-dom'

import { BiChevronRight } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { IoHome } from 'react-icons/io5'

import logowhite from '../assets/images/logo/logo-white.png'

const Footer = () => {

  const { error, loading, data, getData } = useGetData()
  const { error: errorEvent, loading: loadingEvent, data: dataEvent, getData: getDataEvent } = useGetData()

  useEffect( () => {
    getData( "http://localhost:5888/contactinformation" )
    getDataEvent( "http://localhost:5888/events" )
  }, [] )

  console.log( dataEvent )

  return (
    <>
      <div className='footerSections'>

        <section className='footerAddress'>
          { data &&
            <>
              <Link className='footerLogo' to=''><img src={ logowhite } alt="logo-white" /></Link>
              <p>{ data.companypayoff }</p>
              <address>
                <div className='footerAddressIconCon'>
                  <span><IoHome className='footerAddressIcon' /></span><p> Klubhuset: { data.address }, { data.zipcity }</p>
                </div>

                <div className='footerAddressIconCon'>
                  <span><FiMail className='footerAddressIcon' /></span><p> { data.email }</p>
                </div>
              </address>
            </>
          }
        </section>
        <section className='footerEvents'>
          <h2>Kommende events</h2>
          <nav>
            <ul>
              {
                dataEvent && dataEvent.slice( 0, 4 ).map( e =>
                  <li>
                    <Link><BiChevronRight className='footerChevron' /> { e.title }</Link>
                  </li>
                )
              }
            </ul>
          </nav>
        </section>

        <section className='footerNav'>
          <h2>Indhold</h2>
          <nav>
            <ul>
              <li>
                <Link><BiChevronRight className='footerChevron' /> Om os</Link>
              </li>
              <li>
                <Link><BiChevronRight className='footerChevron' /> Events</Link>
              </li>
              <li>
                <Link><BiChevronRight className='footerChevron' /> Kontakt</Link>
              </li>
              <li>
                <Link><BiChevronRight className='footerChevron' /> Nyheder</Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className='footerGallery'>
          <h2>Galleri</h2>
          <div className='footerGalleryImgs'>
            {
              dataEvent && dataEvent.slice( 0, 6 ).map( e =>
                <img src={ `http://localhost:5888/images/event/${ e.image }` }></img>
              )
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Footer