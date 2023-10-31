import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../../../hooks/useRequestData'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

import { BsFillPlayFill } from 'react-icons/bs'

const HomeHero = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    const navigate = useNavigate()

    return (
        <div className='forsideHero container'>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }

            {
                data &&
                <>
                    <section className='forsideHeroTextCon'>
                        <h1 className='forsideHeroHeader'>{ data[ 0 ].title.slice( 0, -25 ) }</h1>
                        <p className='forsideHeroText'>{ data[ 0 ].content }</p>
                        <button className='forsideHeroBtn' onClick={ () => navigate( data[ 0 ].buttonlink ) }>{ data[ 0 ].buttontext }</button>
                    </section>
                    <section className='forsideHeroVideoCon'>
                        <button className='forsideHeroVideoBtn'><BsFillPlayFill className='forsideHeroVideoPlay' /></button>
                        <img src={ `http://localhost:5888/images/hero/${ data[ 0 ].image }` } alt={ data[ 0 ].image } />
                    </section>
                </>
            }
        </div>
    )
}

export default HomeHero