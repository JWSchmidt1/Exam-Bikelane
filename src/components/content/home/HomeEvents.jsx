import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import { useNavigate } from 'react-router-dom';

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

const HomeEvents = () => {

    const { error: errorH, loading: loadingH, data: dataH, getData: getDataH } = useGetData()
    const { error: errorE, loading: loadingE, data: dataE, getData: getDataE } = useGetData()

    const navigate = useNavigate()

    useEffect( () => {
        getDataH( "http://localhost:5888/heros" )
        getDataE( "http://localhost:5888/events" )
    }, [] )

    const dateNow = new Date()

    return (
        <div className='homeEventsCon'>

            { ( errorH || errorE ) && <ErrorMessage /> }
            { ( loadingH || loadingE ) && <Loader /> }

            {
                dataH &&
                <section className='homeEventsHero'>
                    <h3 className="subtitle homeEventsSub">{ dataH[ 5 ].suptitle }</h3>
                    <h2 className="title homeEventsTitle">{ dataH[ 5 ].title }</h2>
                    <div className='homeEventsBtnCon'>
                        <button onClick={ () => navigate( dataH[ 5 ].buttonlink ) } className="btn">{ dataH[ 5 ].buttontext }</button>
                    </div>
                </section>
            }
            <>
                <Swiper
                    effect={ 'coverflow' }
                    style={ {
                        '--swiper-navigation-color': '#000',
                    } }
                    breakpoints={ {
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        641: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1025: {
                            slidesPerView: 3,
                        }

                    } }
                    autoplay={ {
                        delay: 5000,
                        disableOnInteraction: false,
                    } }
                    grabCursor={ true }
                    centeredSlides={ true }
                    slidesPerView={ 3 }
                    coverflowEffect={ {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    } }
                    pagination={ false }
                    navigation={ true }
                    modules={ [ EffectCoverflow, Autoplay, Navigation ] }
                    className="mySwiper"
                >
                    {
                        dataE && dataE.sort( ( a, b ) => new Date( a.eventdate ) - new Date( b.eventdate ) ).filter( ( e ) => new Date( e.eventdate ) > dateNow ).slice( 0, 4 ).map( ( e, index ) =>
                            <SwiperSlide key={ index } onClick={ () => navigate( `/events/${ e._id }` ) }>
                                <img src={ `http://localhost:5888/images/event/${ e.image }` } alt={ e.image } />
                                <div className='sliderSub'><time>{ new Date( e.eventdate ).toLocaleString( "da-DK", { year: "numeric", month: "long", day: "numeric", } ) } </time>| Målgruppe: { e.category.category }</div>
                                <h3 className='sliderTitle'>{ e.title }</h3>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </>
        </div>
    )
}

export default HomeEvents