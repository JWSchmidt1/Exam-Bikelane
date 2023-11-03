import React, { useEffect } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import Loader from '../../components/Loader'

import { useGetData, usePutData } from '../../hooks/useRequestData'

const HomeAdmin = () => {

    const { error, loading, data, getData } = useGetData()
    const { data: dataEdit, loading: loadingEdit, error: errorEdit, putData } = usePutData()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    const handleSubmit = ( e ) => {

        e.preventDefault()

        const id = data[ 0 ]._id

        let fd = new FormData( e.target )

        putData( `http://localhost:5888/heros/admin/${ id }`, fd )

    }

    return (
        <div className='homeAdminCon'>
            <h1 className='adminTitle title'>Administrerer Forside Hero</h1>
            { dataEdit && <h2 className='adminTitle'>Forsiden er rettet</h2> }

            { ( error || errorEdit ) && <ErrorMessage /> }
            { ( loading || loadingEdit ) && <Loader /> }

            {
                data &&
                <section className='adminFormCon'>
                    <form onSubmit={ handleSubmit } className='adminForm'>
                        <label className='homeAdminTitle'>Titel
                            <input type="text" defaultValue={ data[ 0 ].title } />
                        </label>
                        <label className='homeAdminContent'>Brødtekst
                            <textarea defaultValue={ data[ 0 ].content } />
                        </label>

                        <label className='homeAdminNewImg'>Vælg evt. et nyt billede (overskriver det nuværende billede)
                            <input type="file" name='image' />
                        </label>

                        <button type="submit" className='btn' >Ret forside</button>
                    </form>
                    <div className='homeAdminCurrentImg'>
                        <p className='homeAdminImgTitle'>Nuværende Billede</p>
                        <img src={ `http://localhost:5888/images/hero/${ data[ 0 ].image }` } alt={ data[ 0 ].image } />
                    </div>
                </section>
            }

        </div>
    )
}

export default HomeAdmin