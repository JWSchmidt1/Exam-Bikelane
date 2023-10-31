import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'

const HomeAbout = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/testimonials" )
    }, [] )

    return (
        <div className='homeAboutCon'>

            <section className='homeAboutHero'>
                <h3 className="subtitle homeAboutSub">Hvem er vi</h3>
                <h2 className="title homeAboutTitle">Et udvalg af os i klubben</h2>
                <p className="homeAboutText">Vi er over 1.400 medlemmer og tæller mange forskellige typer - lige fra motionisten, der elsker naturen til den ekstreme biker, hvor det ikke kan blive hurtigt eller farligt nok! Og en masse ind i mellem - og der er selvfølgelig også plads til børn og unge &#x2665;</p>
            </section>
            <section className='homeAboutImgSection'>
                {
                    data && data.slice( 0, 4 ).map( ( e, index ) =>
                        <>
                            <div className='homeAboutImgCon' key={ index }>
                                <img src={ `http://localhost:5888/images/testimonial/${ e.image }` } alt="" />
                                <div className='homeAboutImgInfo'>
                                    <p className='infoName'>{e.name}</p>
                                    <p className='infoExperience'>{e.experience}</p>
                                    <p className='infoMotivation'>{e.motivation}</p>
                                </div>
                            </div>
                        </>
                    )
                }
            </section>
        </div>
    )
}

export default HomeAbout