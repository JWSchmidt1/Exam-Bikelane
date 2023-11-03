import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetData } from '../hooks/useRequestData'
import parse from 'html-react-parser'

import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'

import { BiMap } from 'react-icons/bi'

const EventsDetail = () => {

    const { error, loading, data, getData } = useGetData()

    const { eventsID } = useParams()

    useEffect( () => {

        getData( `http://localhost:5888/events/${ eventsID }` )
    }, [] )

    const today = new Date();
    const eventDate = new Date( data?.eventdate );
    const days = Math.floor( ( eventDate - today ) / 1000 / 60 / 60 / 24 );


    return (
        <div className='eventsDetailCon'>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }

            {
                data &&
                <>
                    <section>
                        <div className='eventDetailInfo'>
                            <p className='eventDetailDaysToEvent'>Dage til eventet starter: { days }</p>
                            <div className='eventsDetailDest'><p className='eventsDetailIconCon'><BiMap className='eventsDetailIcon' /></p> { data.destination }</div>
                            <time className='eventsDetailTime'>{ new Date( data.eventdate ).toLocaleString( "da-DK", { year: "numeric", month: "long", day: "numeric", } ) } </time>
                        </div>

                        <p className='eventDetailCat'>{ data.category.category }</p>
                        <h2 className='title'>{ data.title }</h2>
                        <div className="eventsDetailText">{ parse( data.content ) }</div>

                        <div className='eventDetailSubInfo'>
                            <p className="eventDetailDistance"><b>Længde:</b> { data.distance } km</p>
                            <p className='eventDetailDifficulty'><b>Sværhedsgrad:</b> { data.difficulty } / 10</p>
                        </div>
                    </section>
                    <section className='eventDetailImgCon'>
                        <img src={ `http://localhost:5888/images/event/${ data.image }` } alt={data.image} />
                    </section>
                </>
            }
        </div>
    )
}

export default EventsDetail