import React, { useEffect } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import Loader from '../../components/Loader'

import { Link } from "react-router-dom"

import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from "react-icons/ai"

import { useGetData, useDeleteData } from '../../hooks/useRequestData'


const EventsAdmin = () => {

    const { error, loading, data, getData } = useGetData()

    const { data: dataDelete, loading: loadingDelete, error: errorDelete, deleteData } = useDeleteData()


    useEffect( () => {

        getData( "http://localhost:5888/events" )

    }, [ dataDelete ] )


    const handleDelete = ( eventsID, eventsTitle ) => {

        if ( window.confirm( "Er du sikker på at du vil slette eventet: " + eventsTitle ) ) {

            deleteData( "http://localhost:5888/events/admin/" + eventsID, null, null, "DELETE" )

        }

    }

    return (
        <div className='eventsAdmin'>
            <h1 className='adminTitle title'>Administrerer Events</h1>
            { dataDelete && <h2 className='adminTitle'>Event slettet</h2> }

                { ( error || errorDelete ) && <ErrorMessage /> }
                { ( loading || loadingDelete ) && <Loader /> }

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>
                            <Link to="/admin/eventsadmin/create">
                                <AiFillPlusCircle className="createIcon" />
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th className='eventsAdminTableTitle'>Eventtitel</th>
                        <th>Ret</th>
                        <th>Slet</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data && data.map( e =>
                            <tr key={ e._id } className="eventsAdminTable">
                                <td>{ e.title }</td>
                                <td className='iconCon'>
                                    <Link to={ "/admin/eventsadmin/edit/" + e._id } >
                                        <AiFillEdit className="editIcon" />
                                    </Link>
                                </td>
                                <td className='iconCon'>
                                    <AiFillDelete className="deleteIcon" onClick={ () => handleDelete( e._id, e.title ) } />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EventsAdmin