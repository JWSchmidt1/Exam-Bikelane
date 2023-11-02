import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../../../hooks/useRequestData'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

import { BsFillPlayFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'

const HomeHero = () => {

    const { error, loading, data, getData } = useGetData()

    const [ openVideo, setOpenVideo ] = useState( false )

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    const navigate = useNavigate()

    return (
        <div className='homeHero container'>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }

            {
                data &&
                <>
                    <section className='homeHeroTextCon'>
                        <h1 className='homeHeroHeader'>{ data[ 0 ].title.slice( 0, -25 ) }</h1>
                        <p className='homeHeroText'>{ data[ 0 ].content }</p>
                        <button className='btn' onClick={ () => navigate( data[ 0 ].buttonlink ) }>{ data[ 0 ].buttontext }</button>
                    </section>
                    <section className='homeHeroVideoCon'>
                        <button onClick={ () => setOpenVideo( true ) } className='homeHeroVideoBtn'><BsFillPlayFill className='homeHeroVideoPlay' /></button>
                        <img src={ `http://localhost:5888/images/hero/${ data[ 0 ].image }` } alt={ data[ 0 ].image } />
                    </section>
                </>
            }
            {
                openVideo ? (
                    <div className='modalOverlay'>
                        <CgClose onClick={ () => setOpenVideo( false ) } className='modalClose' />
                        <iframe width="560" height="315" src={data[0]?.videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                ):(<></>)
            }

        </div>
    )
}

export default HomeHero