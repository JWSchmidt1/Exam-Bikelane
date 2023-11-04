import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import ErrorMessage from "../../components/ErrorMessage"
import Loader from "../../components/Loader"
import CounterComponent from '../../components/CounterComponent'

import { useGetData } from '../../hooks/useRequestData'


const GoalsAdmin = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {

        getData( "http://localhost:5888/goals" )

    }, [] )

    return (
        <div className='goalsAdmin'>
            <h1 className='adminTitle title'>Administrerer Goals</h1>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='goalsAdminTableTitle'>Titel</th>
                        <th>Måltal</th>
                        <th>Ret</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.sort( ( a, b ) => ( a.order > b.order ) ? 1 : -1 ).map( e =>
                            <tr key={ e._id } className="goalsAdminTable">
                                <td>{ e.goal }</td>
                                <td>{ e.goalcount }</td>
                                <td className='goalsAdminEditLink'>
                                    <Link to={ "/admin/goalsadmin/edit/" + e._id } >Ret</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className='goalsAdminCounterCon'>
                <CounterComponent />
            </div>
        </div>
    )
}

export default GoalsAdmin