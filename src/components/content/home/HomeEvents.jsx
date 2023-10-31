import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Autoplay } from 'swiper/modules';

const HomeEvents = () => {

    const { error: errorH, loading: loadingH, data: dataH, getData: getDataH } = useGetData()
    const { error: errorE, loading: loadingE, data: dataE, getData: getDataE } = useGetData()

    const navigate = useNavigate()

    useEffect( () => {
        getDataH( "http://localhost:5888/heros" )
        getDataE( "http://localhost:5888/events" )
    }, [] )

    return (
        <div className='homeEventsCon'>

            {
                dataH &&
                <section className='homeEventsHero'>
                    <h3 className="subtitle homeEventsSub">{ dataH[ 5 ].suptitle }</h3>
                    <h2 className="title homeEventsTitle">{ dataH[ 5 ].title }</h2>
                    <div className='homeEventsBtnCon'>
                        <button onClick={ () => navigate( dataH[ 5 ].buttonlink ) } className="homeEventsBtn">{ dataH[ 5 ].buttontext }</button>
                    </div>
                </section>
            }
            <>
                <Swiper
                    effect={ 'coverflow' }
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
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
                    modules={ [ EffectCoverflow, Autoplay ] }
                    className="mySwiper"
                >
                    {
                        dataE && dataE.slice( 0, 4 ).map( ( e ) =>
                            <SwiperSlide>
                                <img src={ `http://localhost:5888/images/event/${ e.image }` } alt="" />
                                <h3 className='subtitle'>{ e.category.category }: { e.title }</h3>
                                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */ }
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </>
        </div>
    )
}

export default HomeEvents