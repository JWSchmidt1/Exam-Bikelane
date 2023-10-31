import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useRequestData'

import Navbar from './Navbar'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

import { FaRegBuilding, FaRegCalendarAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Header = () => {

  const { error, loading, data, getData } = useGetData()

  useEffect( () => {
    getData( "http://localhost:5888/contactinformation" )
  }, [] )

  console.log( data )

  return (
    <div className='headerCon'>
      { data &&
        <div className='headerTextCon'>
          <div className='headerContactCon'>
            <p className='headerContactInfo'><FaRegBuilding className='headerContactIcon' /> Klubhuset: { data.address }, { data.zipcity }</p>
            <p className='headerContactInfo'><FaRegCalendarAlt className='headerContactIcon' /> { data.openinghours }</p>
            <p className='headerContactInfo'><FiMail className='headerContactIcon' /> { data.email }</p>
          </div>

          <div className='headerSocialCon'>
            {
              data && data.some.map((e, index) =>
                <a className='headerSocialIcons' href={e.link} target='_blank'><i className={e.icon} /></a>
              )
            }
          </div>
        </div>
      }
      <Navbar />
    </div>
  )
}

export default Header