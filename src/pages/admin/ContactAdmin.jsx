import React, { useEffect } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import Loader from '../../components/Loader'

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

import { useGetData } from '../../hooks/useRequestData'

const ContactAdmin = () => {

  const { error, loading, data, getData } = useGetData()


  useEffect( () => {

    getData( "http://localhost:5888/inqueries/admin" )

  }, [] )

  return (
    <div className='contactAdminCon'>
      <h1 className='adminTitle title'>Administrerer Kontakter</h1>

        { error && <ErrorMessage /> }
        { loading && <Loader /> }

      <table>
        <thead>
          <tr>
            <th>Navn</th>
            <th>Ret</th>
            <th>Slet</th>
            <th>Besked</th>
            <th>Modtaget</th>
            <th>Læst</th>
          </tr>
        </thead>

        <tbody>
          {
            data && data.sort( ( a, b ) => new Date( b.received ) - new Date( a.received ) ).map( ( e, index ) =>
              <tr key={ e._id } className="contactAdminTable">
                <td>{ e.name }</td>
                <td>{ e.email }</td>
                <td>{ e.phone }</td>
                <td>{ e.message }</td>
                <td>{ new Date( e.received ).toLocaleString( "da-DK", { year: "2-digit", month: "short", day: "2-digit", } ) }</td>
                <td className={ e.read === true ? 'contactRead' : 'contactNotRead' }>{ e.read === true ? <div className='contactRead'><AiOutlineCheck /></div> : <div className='contactNotRead'><AiOutlineClose /></div> }</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ContactAdmin