import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import bgimg from '../../../assets/images/backgrounds-og-patterns/bikes-image.png'

const ContactHero = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/heros" )
    }, [] )

    return (
        <div className='kontaktHero'>
            {
                data &&
                <section className='kontaktHeroCon'>
                    <h3 className="subtitle kontaktSub">{ data[ 4 ].suptitle }</h3>
                    <h2 className="title kontaktTitle">{ data[ 4 ].title }</h2>
                    <div className='kontaktHeroImgCon'>
                        <img src={ bgimg } alt="" />
                    </div>
                </section>
            }
        </div>
    )
}

export default ContactHero