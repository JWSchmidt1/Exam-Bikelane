import React, { useEffect, useState, useRef } from 'react'
import { useGetData, usePostData } from '../../../hooks/useRequestData'
import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

import { FaRegBuilding } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BiMap } from 'react-icons/bi'
import { PiClockAfternoonBold } from 'react-icons/pi'

const ContactForm = () => {

    const { error: errorC, loading: loadingC, data: dataC, getData: getData } = useGetData()
    const { error: errorI, loading: loadingI, data: dataI, postData } = usePostData()

    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ phone, setPhone ] = useState()
    const [ message, setMessage ] = useState()

    useEffect( () => {
        getData( "http://localhost:5888/contactinformation" )
    }, [] )

    const refForm = useRef()

    useEffect( () => {

        if ( dataI ) {

            // tøm formularen
            // document.forms[0].reset()
            refForm.current.reset()

        }
    }, [ dataI ] )

    const handleSubmit = ( e ) => {

        e.preventDefault()

        const fd = new FormData()
        fd.append( "name", name )
        fd.append( "email", email )
        fd.append( "phone", phone )
        fd.append( "message", message )

        postData( "http://localhost:5888/inqueries", fd )

        // e.target.reset()

    }

    return (
        <div className='contactFormCon'>

                { ( errorI || errorC ) && <ErrorMessage /> }
                { ( loadingI || loadingC ) && <Loader /> }

            <address className='contactFormAddress'>
                {
                    dataC &&
                    <>
                        <div className='contactAddressInfo'><div className='addressicon'><FaRegBuilding className='contactAddressIcon' /></div> Klubhuset i Grenå</div>
                        <div className='contactAddressInfo'><div className='addressicon'><BiMap className='contactAddressIcon' /></div> { dataC.address }, { dataC.zipcity }</div>
                        <div className='contactAddressInfo'><div className='addressicon'><PiClockAfternoonBold className='contactAddressIcon' /></div> { dataC.openinghours }</div>
                        <div className='contactAddressInfo'><div className='addressicon'><FiMail className='contactAddressIcon' /></div> { dataC.email }</div>
                    </>
                }
            </address>
            <form onSubmit={ handleSubmit } ref={ refForm }>

                <label>Navn
                    <input onInput={ e => setName( e.target.value ) } type="text" minLength={ 2 } placeholder='Dit navn...' required />
                </label>
                <label>Email
                    <input onInput={ e => setEmail( e.target.value ) } type="email" name="email" pattern='[a-z0-9. _%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$' placeholder='Din email...' required />
                </label>
                <label>Telefon
                    <input onInput={ e => setPhone( e.target.value ) } type="tel" name="phone" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" placeholder='Dit telefonnummer...' required />
                </label>
                <label>Besked
                    <textarea onInput={ e => setMessage( e.target.value ) } placeholder='Din besked...'></textarea>
                </label>
                <button>Send besked</button>
                { dataI && <h2 className='formSubmitText'>Tak for din besked</h2> }
            </form>
        </div>
    )
}

export default ContactForm