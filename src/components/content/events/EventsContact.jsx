import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'

const EventsContact = () => {

    const { error, loading, data, getData } = useGetData()
    
    const navigate = useNavigate()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    return (
        <div className='eventsContactCon'>
            {
                data &&
                <>
                    <section className='eventsContactHero'>
                        <h3 className="subtitle eventsContactSub">{ data[ 7 ].suptitle }</h3>
                        <h2 className="title eventsContactTitle">{ parse(data[ 7 ].title.replace( /(.{28})/, "$1<br>" )) }</h2>
                    </section>
                    <div className="eventsContactBtnCon">
                        <button onClick={() => navigate(`/${data[7].buttonlink}`)} className="eventsContactButton btn">{data[7].buttontext}</button>
                    </div>
                </>

            }
        </div>
    )
}

export default EventsContact