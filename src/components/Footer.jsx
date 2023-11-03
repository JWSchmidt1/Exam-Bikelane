import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData'
import { Link } from 'react-router-dom'

import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

import { BiChevronRight } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { IoHome } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'

import logowhite from '../assets/images/logo/logo-white.png'

const Footer = () => {

  const { error, loading, data, getData } = useGetData()
  const { error: errorE, loading: loadingE, data: dataE, getData: getDataE } = useGetData()

  const [ openLightbox, setOpenLightbox ] = useState( false )
  const [ selectedImg, setSelectedImg ] = useState()

  useEffect( () => {
    getData( "http://localhost:5888/contactinformation" )
    getDataE( "http://localhost:5888/events" )
  }, [] )

  const dateNow = new Date()


  return (
    <>
        { ( error || errorE ) && <ErrorMessage /> }
        { ( loading || loadingE ) && <Loader /> }

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
                dataE && dataE.sort( ( a, b ) => new Date( a.eventdate ) - new Date( b.eventdate ) ).filter( ( e ) => new Date( e.eventdate ) > dateNow ).slice( 0, 4 ).map( ( e, index ) =>
                  <li key={ index }>
                    <Link to={ `events/${ e._id }` }><BiChevronRight className='footerChevron' /> { e.title }</Link>
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
                <Link to="about"><BiChevronRight className='footerChevron' /> Om os</Link>
              </li>
              <li>
                <Link to="events"><BiChevronRight className='footerChevron' /> Events</Link>
              </li>
              <li>
                <Link to="contact"><BiChevronRight className='footerChevron' /> Kontakt</Link>
              </li>
              <li>
                <Link to="news"><BiChevronRight className='footerChevron' /> Nyheder</Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className='footerGallery'>
          <h2>Galleri</h2>
          <div className='footerGalleryImgs'>
            {
              dataE && dataE.slice( 0, 6 ).map( ( e, index ) =>
                <div onClick={ () => { setOpenLightbox( true ); setSelectedImg( e.image ) } } key={ index } className='footerGalleryImgsCon'>
                  <img src={ `http://localhost:5888/images/event/${ e.image }` } />
                </div>
              )
            }
          </div>
        </section >
        <p className='footerCopyright'>© Copyright 2012 Bikelane.</p>
        {
          openLightbox ? (
            <div className='modalOverlay'>
              <CgClose onClick={ () => setOpenLightbox( false ) } className='modalClose' />
              <img src={ `http://localhost:5888/images/event/${ selectedImg }` } alt="" />
            </div>
          ) : ( <></> )
        }
      </div >
    </>
  )
}

export default Footer