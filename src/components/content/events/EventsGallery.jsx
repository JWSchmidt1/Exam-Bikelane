import React, { useEffect, useState } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'


const EventsGallery = () => {

    const { error: errorEC, loading: loadingEC, data: dataEC, getData: getDataEC } = useGetData()
    const { error: errorE, loading: loadingE, data: dataE, getData: getDataE } = useGetData()

    const [ filter, setFilter ] = useState( '' )

    const navigate = useNavigate()

    useEffect( () => {
        getDataEC( "http://localhost:5888/eventcategories" )
        getDataE( "http://localhost:5888/events" )
    }, [] )

    const dateNow = new Date();

    return (
        <div className='eventsGalleryCon'>
            <ul className='eventsGalleryCategoryCon'>
                <li onClick={ () => setFilter( '' ) } className='eventsGalleryCategory'>
                    <span>Alle Events</span>
                </li>
                {

                    dataEC && dataEC.map( e =>
                        <li onClick={ () => setFilter( e.category ) } className='eventsGalleryCategory'>
                            <span>{ e.category }</span>
                        </li>
                    )
                }
            </ul>
            {
                dataE && dataE.sort( function ( a, b ) {
                    return new Date( a.eventdate ) - new Date( b.eventdate );
                } ).filter( function ( e ) { return new Date( e.eventdate ) > dateNow } ).filter( ( e ) => filter === '' || e.category.category === filter ).map( ( e, index ) => (

                    <div onClick={() => navigate(e._id)} className='eventsGalleryImgCon' key={ index }>
                        <div className='eventsGalleryImg'>
                            <img src={ `http://localhost:5888/images/event/${ e.image }` } alt={ e.image } />
                            <div className="overlay"></div>
                        </div>
                        <div className='eventsDate'><time>{ new Date( e.eventdate ).toLocaleString( "da-DK", { year: "numeric", month: "long", day: "numeric", } ) } </time>| Målgruppe: { e.category.category }</div>
                        <h3 className='eventsTitle'>{ e.title }</h3>
                    </div>
                )
                )
            }

        </div>
    )
}

export default EventsGallery