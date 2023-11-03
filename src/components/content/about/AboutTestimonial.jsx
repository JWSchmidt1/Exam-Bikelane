import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import { FaQuoteRight } from 'react-icons/fa'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

const AboutTestimonial = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    return (
        <div className='aboutTestimonial'>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }

            {
                data &&
                <>
                    <section className='aboutTestimonialSectionOne'>
                        <h3 className="subtitle aboutTestimonialSub">{ data[ 3 ].suptitle }</h3>
                        <h2 className="title aboutTestimonialTitle">{ data[ 3 ].title }</h2>
                        <div className='aboutTestimonialTextCon'>
                            <p className='aboutTestimonialText'>{ data[ 3 ].content.slice( 0, 219 ) }</p>
                            <div className='circleQuote'><FaQuoteRight className='quoteIcon' /></div>
                        </div>
                    </section>
                    <section className='aboutTestimonialSectionTwo'>
                        <img src={ `http://localhost:5888/images/hero/${ data[ 3 ].image }` } alt="" />
                    </section>
                </>
            }
        </div>
    )
}

export default AboutTestimonial