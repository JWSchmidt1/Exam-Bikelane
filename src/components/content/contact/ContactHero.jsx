import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import bgimg from '../../../assets/images/backgrounds-og-patterns/bikes-image.png'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

const ContactHero = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    return (
        <div className='contactHero'>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }
            {
                data &&
                <section className='contactHeroCon'>
                    <h3 className="subtitle contactSub">{ data[ 4 ].suptitle }</h3>
                    <h2 className="title contactTitle">{ data[ 4 ].title }</h2>
                    <div className='contactHeroImgCon'>
                        <img src={ bgimg } alt={ bgimg } />
                    </div>
                </section>
            }
        </div>
    )
}

export default ContactHero