import { useContext } from 'react'

import { LoginContext } from '../context/LoginContext'
import { useGetData } from '../hooks/useRequestData'

const Logout = () => {

    const { signOut } = useContext( LoginContext )

    const { error, loading, getData } = useGetData()

    const handleLogout = () => {

        getData( 'http://localhost:5888/login/logout' )

        signOut()
    }


    return (
        <button className='adminLogout' onClick={ handleLogout }>Log ud</button>

    )
}

export default Logout