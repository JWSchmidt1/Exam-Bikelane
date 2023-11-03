import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import parse from 'html-react-parser'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

const EventsSponsor = () => {

    const { error: errorH, loading: loadingH, data: dataH, getData: getDataH } = useGetData()
    const { error: errorS, loading: loadingS, data: dataS, getData: getDataS } = useGetData()

    useEffect( () => {
        getDataH( "http://localhost:5888/heros" )
        getDataS( "http://localhost:5888/sponsors" )
    }, [] )

    return (
        <div className='eventsSponsorCon'>

            { ( errorH || errorS ) && <ErrorMessage /> }
            { ( loadingH || loadingS ) && <Loader /> }

            <section className="eventsSponsorHero">
                {
                    dataH && <>
                        <h3 className='eventsSponsorHeroSub'>{ dataH[ 8 ].suptitle }</h3>
                        <h2 className='eventsSponsorHeroTitle'>{ parse( dataH[ 8 ].title.replace( /(.{20})/, "$1<br>" ) ) }</h2>
                    </>
                }
            </section>
            <div className="eventsSponsorSliderCon">
                { dataS && dataS.map( (e, index) =>
                    <div key={index} className='eventsSponsorSliderImg'>
                        <img src={ `http://localhost:5888/images/sponsor/${ e.logo }` } alt={ e.logo } />
                    </div>
                )
                }
            </div>
        </div >
    )
}

export default EventsSponsor