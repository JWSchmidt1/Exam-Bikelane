import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'

const HomeInterests = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/interest" )
    }, [] )

    return (
        <div className='homeInterestsCon'>
            {
                data &&
                <>
                    <section className='homeInterestsSection'>
                        <h3 className='subtitle'>{ data.suptitle }</h3>
                        <h2 className='title'>{ data.title }</h2>
                        <p className='homeInterestsText'>{ data.content }</p>
                        <div className="homeInterestsKeypointsCon">
                            {
                                data && data.keypoints.map( ( e, index ) =>
                                    <div className='homeInterestsKeypoints'>
                                        <div className='keypointIconCon'><i className={ `ph ${ e.icon }` } ></i></div>
                                        <h4 className='homeInterestsKeypointsTitle' key={ index }>{ e.keypoint }</h4>
                                        <p className='homeInterestsKeypointsDesc'>{ e.description }</p>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                    <section className='homeInterestImgCon'>
                        { data &&
                            <>
                                <div className='splitImgCon'>
                                    <img src={ `http://localhost:5888/images/interest/${ data.image1 }` } alt={ data.image1 } />
                                    <img src={ `http://localhost:5888/images/interest/${ data.image3 }` } alt={ data.image3 } />
                                </div>
                                <div className='splitImgCon'>
                                    <img src={ `http://localhost:5888/images/interest/${ data.image2 }` } alt={ data.image2 } />
                                    <img src={ `http://localhost:5888/images/interest/${ data.image4 }` } alt={ data.image4 } />
                                </div>
                            </>
                        }
                    </section>
                </>
            }
        </div>
    )
}

export default HomeInterests