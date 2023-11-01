import React, { useEffect, useState } from 'react'
import { useGetData } from '../../../hooks/useRequestData'


const EventsGallery = () => {

    const { error: errorEC, loading: loadingEC, data: dataEC, getData: getDataEC } = useGetData()
    const { error: errorE, loading: loadingE, data: dataE, getData: getDataE } = useGetData()

    useEffect( () => {
        getDataEC( "http://localhost:5888/eventcategories" )
        getDataE( "http://localhost:5888/events" )
    }, [] )

    const dateNow = new Date();

    return (
        <div className='eventsGalleryCon'>
            <ul className='eventsGalleryCategoryCon'>
                {

                    dataEC && dataEC.sort((a,b) => a[1] - b[1]).map( e => 
                        <li className='eventsGalleryCategory'>
                            <span>{e.category}</span>
                        </li>
                    )
                }
            </ul>
            {
                dataE && dataE.sort( function ( a, b ) {
                    return new Date( a.eventdate ) - new Date( b.eventdate );
                } ).filter( function ( e ) { return new Date( e.eventdate ) > dateNow } ).map( ( e ) => (

                    <div className='eventsGalleryImgCon'>
                        <div className='eventsGalleryImg'>
                            <img src={ `http://localhost:5888/images/event/${ e.image }` } alt="" />
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