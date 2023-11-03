import React, { useContext, useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"

import { LoginContext } from '../context/LoginContext'

import { usePostData } from '../hooks/useRequestData'


const Login = () => {

  const { signIn, adminUser } = useContext( LoginContext )

  const [ email, setEmail ] = useState()
  const [ pw, setPw ] = useState()

  const { error, loading, data, postData } = usePostData()

  useEffect( () => {

    if ( data && data.name ) {
      signIn( data.name )
    }

  }, [ data ] )


  if ( adminUser ) {
    return <Navigate to="/admin" replace />
  }


  const handleLogin = ( e ) => {

    e.preventDefault()

    postData( 'http://localhost:5888/login/login', { email: email, password: pw } )

  }


  return (
    <div className="loginCon">

      <h1>Login</h1>

      <form onSubmit={ handleLogin }>

        <div>
          <label>Email
            <input id='email' type="email" onChange={ ( e ) => setEmail( e.target.value ) } name="email" placeholder='Email her' required />
          </label>
        </div>
        <br />
        <div>
          <label>Password
            <input id='password' type="password" onChange={ ( e ) => setPw( e.target.value ) } name="password" placeholder='Password her' required />
          </label>
        </div>
        <br />

        <button className='btn-second' type="submit"><span>Login</span></button>

      </form>

    </div>
  )
}

export default Login