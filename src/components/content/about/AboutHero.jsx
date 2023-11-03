import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

const AboutHero = () => {

    const { error, loading, data, getData } = useGetData()

    const navigate = useNavigate()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    return (
        <div className='aboutHeroCon'>

                { error && <ErrorMessage /> }
                { loading && <Loader /> }

            {
                data &&
                <>
                    <section className='aboutHeroTitleCon'>
                        <h3 className="subtitle aboutHeroSub">{ data[ 1 ].suptitle }</h3>
                        <h2 className="title aboutHeroTitle">{ data[ 1 ].title }</h2>
                    </section>
                    <section className='aboutHeroTextCon'>
                        <p className='aboutHeroText'>{ data[ 1 ].content }</p>
                        <button onClick={ () => navigate( `/${ data[ 1 ].buttonlink }` ) } className='btn-second'>{ data[ 1 ].buttontext }</button>
                    </section>
                    <section className='aboutHeroImg'>
                        <img src={ `http://localhost:5888/images/hero/${ data[ 1 ].image }` } alt="" />
                    </section>
                </>
            }
        </div>
    )
}

export default AboutHero