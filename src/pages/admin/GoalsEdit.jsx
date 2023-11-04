import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ErrorMessage from "../../components/ErrorMessage"
import Loader from "../../components/Loader"

import { usePutData, useGetData } from '../../hooks/useRequestData'

const GoalsEdit = () => {

    const { goalsID } = useParams()
    const navigate = useNavigate()

    const { error, loading, data, getData } = useGetData()
    const { error: errorEdit, loading: loadingEdit, data: dataEdit, putData } = usePutData()

    useEffect( () => {

        if ( !dataEdit ) {

            getData( `http://localhost:5888/goals/${ goalsID }` )

        } else if ( dataEdit ) {

            navigate( "/admin/goalsadmin" )

        }

    }, [ dataEdit ] )

    const handleSubmit = ( e ) => {

        e.preventDefault()

        let fd = new FormData( e.target )

        putData( `http://localhost:5888/goals/admin/${ goalsID }`, fd )

    }

    return (
        <div className='goalsAdminEdit'>
            <h1 className='adminTitle title'>Ret goal - { goalsID }</h1>
            { dataEdit && <h2 className='adminTitle'>Goals er rettet</h2> }

            { ( error || errorEdit ) && <ErrorMessage /> }
            { ( loading || loadingEdit ) && <Loader /> }
            
            {
                data &&
                <section className='adminFormCon'>
                    <form className="goalsAdminEditForm" onSubmit={ handleSubmit }>
                        
                        <label>Title
                            <input type="text" name='goal' defaultValue={data.goal} required />
                        </label>

                        <label>Måltal
                            <input type="text" name='goalcount' defaultValue={data.goalcount} required />
                        </label>

                        <label>Icon
                            <input type="text" name='icon' defaultValue={data.icon} required />
                        </label>

                        <button className='btn' type="submit" >Ret Goals</button>

                    </form>
                </section>
            }
        </div>
    )
}

export default GoalsEdit