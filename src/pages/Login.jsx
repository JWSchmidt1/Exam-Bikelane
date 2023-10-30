import React, { useContext, useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"

// import logincontext for at kunne gemme globalt om der er logget ind
import { LoginContext } from '../context/LoginContext'

import { usePostData } from '../hooks/useRequestData'


const Login = () => {

  const { signIn, adminUser } = useContext( LoginContext )

  const [ email, setEmail ] = useState()
  const [ pw, setPw ] = useState()

  const { error, loading, data, postData } = usePostData()

  // lyt efter om login lykkedes = data og et "name"
  useEffect( () => {
    
    if ( data && data.name ) {
      signIn( data.name )
    }
    
  }, [ data ] )


  // hvis der er en bruger/logget ind så send direkte videre til admin
  if ( adminUser ) {
    return <Navigate to="/admin" replace />
  }


  // Håndter loginformularens submit
  const handleLogin = ( e ) => {

    e.preventDefault()
    // simulerer login
    // let email = e.target.email.value
    // let pw = e.target.password.value

    postData( 'http://localhost:5333/login/login', { email: email, password: pw } )

    // if ( email === "admin@admin.dk" && pw === "123456" ) {
    //   signIn( e.target.email.value )
    // }

  }


  return (
    <div className="loginCon">

      <h1>Login</h1>

      <form onSubmit={ handleLogin }>

        <div>
            <label for='email'>Email:</label>
            <br />
            <input id='email' type="email" onChange={ ( e ) => setEmail( e.target.value ) } name="email" required />
        </div>
        <br />
        <div>
          <label for='password'>Password:</label>
          <br />
          <input id='password' type="password" onChange={ ( e ) => setPw( e.target.value ) } name="password" required />
        </div>
        <br />

        <button type="submit"><span>Login</span></button>

      </form>

    </div>
  )
}

export default Login