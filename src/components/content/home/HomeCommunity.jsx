import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

import { BsCheck } from 'react-icons/bs'

const HomeCommunity = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/community" )
    }, [] )

    return (
        <div className='homeCommunityCon'>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }

            <section className='homeCommunityImgCon'>
                { data &&
                    <>
                        <div className='splitImgCon'>
                            <img src={ `http://localhost:5888/images/community/${ data.image1 }` } alt={ data.image1 } />
                            <img src={ `http://localhost:5888/images/community/${ data.image3 }` } alt={ data.image3 } />
                        </div>
                        <div className='splitImgCon'>
                            <img src={ `http://localhost:5888/images/community/${ data.image2 }` } alt={ data.image2 } />
                            <img src={ `http://localhost:5888/images/community/${ data.image4 }` } alt={ data.image4 } />
                        </div>
                    </>
                }
            </section>
            <section className='homeCommunityTextCon'>
                {
                    data &&
                    <>
                        <h3 className='homeCommunitySuptitle'>{ data.suptitle }</h3>
                        <h2 className='homeCommunityTitle'>{ data.title }</h2>
                        <p className='homeCommunityText'>{ data.content }</p>

                        <div className='homeCommunityKeypointsCon'>
                            {
                                data.keypoints.map( ( e, index ) =>
                                    <p className='homeCommunityKeypoints' key={ index }><div className='keypointCheckmark'><BsCheck className='keypointCheckmarkIcon' /></div> { e.keypoint }</p>
                                )
                            }
                        </div>
                    </>
                }
            </section>
        </div>
    )
}

export default HomeCommunity