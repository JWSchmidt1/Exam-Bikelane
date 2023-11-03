import React, { useEffect } from 'react'

import ErrorMessage from "../../components/ErrorMessage"
import Loader from "../../components/Loader"
import CounterComponent from '../../components/CounterComponent'

import { usePutData, useGetData } from '../../hooks/useRequestData'


const GoalsAdmin = () => {

    const { error, loading, data, getData } = useGetData()
    const { error: errorEdit, loading: loadingEdit, data: dataEdit, putData } = usePutData()

    useEffect( () => {

        getData( "http://localhost:5888/goals" )

    }, [] )

    const handleSubmit = ( e ) => {

        e.preventDefault()

        let fd = new FormData( e.target )

        putData( `http://localhost:5888/goals/admin/`, fd )

    }

    return (
        <div className='goalsAdmin'>
            <h1 className='adminTitle title'>Administrerer Events</h1>
            { dataEdit && <h2 className='adminTitle'>Goals rettet</h2> }

            { ( error || errorEdit ) && <ErrorMessage /> }
            { ( loading || loadingEdit ) && <Loader /> }

            <form className='adminForm' onSubmit={ handleSubmit }>
                <div className='goalsAdminFormData'>

                {
                    data && data.sort( ( a, b ) => ( a.order > b.order ) ? 1 : -1 ).map( ( e, index ) =>
                    <label key={ index }>{ e.goal }
                        <input type="number" name='goalcount' defaultValue={ e.goalcount } />
                    </label>
                    )
                }
                </div>
                <button className='btn' type="submit" >Ret Goals</button>
            </form>

            <div className='goalsAdminCounterCon'>
                <CounterComponent />
            </div>
        </div>
    )
}

export default GoalsAdmin