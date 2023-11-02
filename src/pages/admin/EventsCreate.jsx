import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

import ErrorMessage from "../../components/ErrorMessage"
import Loader from "../../components/Loader"

import { usePostData, useGetData } from '../../hooks/useRequestData'

const EventsCreate = () => {

    const { error, loading, data, postData } = usePostData()
    const { error: errorEC, loading: loadingEC, data: dataEC, getData: getDataEC } = useGetData()

    const refQuill = useRef()

    useEffect( () => {

        getDataEC( `http://localhost:5888/eventcategories` )


    }, [] )

    var toolbarOptions = [
        [ 'bold', 'italic', 'underline', 'strike' ],
        [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
        [ { 'align': [] } ]
    ];

    const handleSubmit = ( e ) => {

        e.preventDefault()

        let fd = new FormData( e.target )
        fd.append( "content", refQuill.current.value )

        postData( "http://localhost:5888/events/admin", fd )

        // tøm formularen
        e.target.reset()

        // tøm quill
        refQuill.current.getEditor().setText( "" )

    }

    return (
        <div className='eventsAdminCreate'>
            <h1 className='adminTitle title'>Opret nyt event</h1>

            { ( error || errorEC ) && <ErrorMessage /> }
            { ( loading || loadingEC ) && <Loader /> }


            <section>
                <form className='adminEventCreateForm' onSubmit={ handleSubmit }>

                    <label className='adminEventCreateTitle'>Title
                        <input type="text" name='title' placeholder='Titel' required />
                    </label>

                    <label>Kategori
                        <select className='eventsAdminCreateCategory' name="category" defaultChecked='Vælg kategori' required>
                            {
                                dataEC && dataEC.map( e =>
                                    <option value={ e._id }>{ e.category }</option>
                                )
                            }
                        </select>
                    </label>

                    <label>Destination
                        <input type="text" name="destination" placeholder='Destination' required />
                    </label>

                    <label>Dato
                        <input type="date" name="eventdate" required />
                    </label>

                    <label>Sværhedsgrad
                        <input type="number" name="difficulty" placeholder='1 - 10' min="1" max="10" required />
                    </label>

                    <label>Længde
                        <input type="number" name="distance" placeholder='Længde' min="1" required />
                    </label>

                    <label>Koordinater
                        <input type="text" name="coordinates" placeholder='Koordinater' required />
                    </label>

                    <label className='adminQuillTitle'>Brødtekst</label>
                    <ReactQuill
                        modules={ { toolbar: toolbarOptions } }
                        theme="snow"
                        placeholder='Event tekst'
                        ref={ refQuill }
                    />

                    <label className='adminEventCreateFile'>Vælg et billede
                        <input type="file" name='image' required />
                    </label>

                    <button className='btn' type="submit" >Ret Event</button>
                </form>
            </section>

        </div>
    )
}

export default EventsCreate