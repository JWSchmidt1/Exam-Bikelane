import { createContext, useState } from 'react'

export const LoginContext = createContext()

const LoginContextProvider = ( props ) => {

    // State til at huske om en bruger er logget ind
    const [ adminUser, setAdminUser ] = useState()


    // signIn - gemmer adminbruger så alle components ved at der er logget ind
    let signIn = ( authedUser ) => {
        setAdminUser( authedUser )
    }

    
    // signOut - sletter adminbruger fra state så alle components ved at der ikke længere er logget ind
    let signOut = () => {
        setAdminUser( null )
    }

    // context spørger api om man stadig er logget ind

    return (
        <LoginContext.Provider value={ { adminUser, signIn, signOut } }>
            { props.children }
        </LoginContext.Provider>
    )
}

export default LoginContextProvider