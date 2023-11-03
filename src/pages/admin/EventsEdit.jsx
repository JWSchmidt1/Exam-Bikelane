import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

import ErrorMessage from "../../components/ErrorMessage"
import Loader from "../../components/Loader"

import { usePutData, useGetData } from '../../hooks/useRequestData'

const EventsEdit = () => {

    const { eventsID } = useParams()
    const navigate = useNavigate()

    const { error, loading, data, getData } = useGetData()
    const { error: errorEC, loading: loadingEC, data: dataEC, getData: getDataEC } = useGetData()
    const { error: errorEdit, loading: loadingEdit, data: dataEdit, putData } = usePutData()

    const refQuill = useRef()

    var toolbarOptions = [
        [ 'bold', 'italic', 'underline', 'strike' ],
        [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
        [ { 'align': [] } ]
    ];

    useEffect(() => {
      
        getDataEC( `http://localhost:5888/eventcategories` )
        
      
    }, [])
    

    useEffect( () => {

        if ( !dataEdit ) {

            getData( `http://localhost:5888/events/${ eventsID }` )

        } else if ( dataEdit ) {

            navigate( "/admin/eventsadmin" )

        }

    }, [ dataEdit ] )

    const handleSubmit = ( e ) => {

        e.preventDefault()

        let fd = new FormData( e.target )
        fd.append( "content", refQuill.current.value )

        putData( `http://localhost:5888/events/admin/${ eventsID }`, fd )

    }

    return (
        <div className='eventsAdminEdit'>
            <h1 className='adminTitle title'>Ret event - { eventsID }</h1>
            { dataEdit && <h2 className='adminTitle'>Event er rettet</h2> }

            { ( error || errorEdit ) && <ErrorMessage /> }
            { ( loading || loadingEdit ) && <Loader /> }

            { data &&

                <section className='adminFormCon'>
                    <form className='adminEventEditForm' onSubmit={ handleSubmit }>

                        <label className='adminEventEditTitle'>Title
                            <input type="text" name='title' placeholder='Titel' defaultValue={ data.title } required />
                        </label>

                        <label>Kategori
                            <select className='eventsAdminEditCategory' name="category" defaultChecked={data.category.category} required>
                                {
                                    dataEC && dataEC.map(e => 
                                        <option value={e._id}>{e.category}</option>
                                        )
                                }
                            </select>
                        </label>

                        <label>Destination
                            <input type="text" name="destination" defaultValue={data.destination} required />
                        </label>

                        <label>Dato
                            <input type="date" name="eventdate" required />
                        </label>

                        <label>Sværhedsgrad
                            <input type="number" name="difficulty" defaultValue={data.difficulty} min="1" max="10" required />
                        </label>

                        <label>Længde
                            <input type="number" name="distance" value={data.distance} min="1" required />
                        </label>

                        <label>Koordinater
                            <input type="text" name="coordinates" defaultValue={data.coordinates} required />
                        </label>

                        <label className='adminQuillTitle'>Brødtekst</label>
                        <ReactQuill
                            modules={ { toolbar: toolbarOptions } }
                            defaultValue={ data.content }
                            theme="snow"
                            placeholder='Event tekst'
                            ref={ refQuill }
                        />

                        <label className='adminEventEditFile'>Vælg evt. et nyt billede (overskriver det nuværende billede)
                            <input type="file" name='image' />
                        </label>

                        <button className='btn' type="submit" >Ret Event</button>
                    </form>
                    <div className='eventsAdminEditCurrentImg'>
                        <p className='eventsAdminEditTitle'>Nuværende Billede</p>
                        <img src={ `http://localhost:5888/images/event/${ data.image }` } alt="" />
                    </div>
                </section>
            }
        </div>
    )
}

export default EventsEdit