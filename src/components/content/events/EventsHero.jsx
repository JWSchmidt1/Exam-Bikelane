
import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'

const EventsHero = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    return (
        <div className='eventsHero'>
            {
                data &&
                <>
                    <h3 className="subtitle eventsSub">{ data[ 6 ].suptitle }</h3>
                    <h2 className="title eventsTitle">{ data[ 6 ].title }</h2>
                </>
            }
        </div>
    )

}

export default EventsHero