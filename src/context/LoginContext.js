import { createContext, useState, useEffect } from 'react'

export const LoginContext = createContext()

const LoginContextProvider = ( props ) => {

    const [ adminUser, setAdminUser ] = useState()

    useEffect( () => {

        const user = JSON.parse( localStorage.getItem( 'adminUser' ) );

        if ( user && user.isLoggedIn === true ) {
            setAdminUser( true );
        }
    }, [] );


    let signIn = ( authedUser ) => {
        setAdminUser( authedUser )
    }

    
    let signOut = () => {
        setAdminUser( null )
    }


    return (
        <LoginContext.Provider value={ { adminUser, signIn, signOut } }>
            { props.children }
        </LoginContext.Provider>
    )
}

export default LoginContextProvider