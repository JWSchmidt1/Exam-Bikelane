
import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import parse from 'html-react-parser'

const EventsHero = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )



    return (
        <div className='eventsHero'>
            {
                data &&
                <section>
                    <h3 className="subtitle eventsSub">{ data[ 6 ].suptitle }</h3>
                    <h2 className="title eventsTitle">{ parse( data[ 6 ].title.replace( /(.{14})/, "$1<br>" ) ) }</h2>
                </section>
            }
        </div>
    )

}

export default EventsHero