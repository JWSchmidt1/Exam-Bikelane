import React, { useEffect } from 'react'
import { useGetData } from '../hooks/useRequestData'

import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

import { BsCheck } from 'react-icons/bs'

const Community = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5888/community" )
    }, [] )

    return (
        <div className='communityCon'>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }

            <section className='communityImgCon'>
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
            <section className='communityTextCon'>
                {
                    data &&
                    <>
                        <h3 className='communitySuptitle'>{ data.suptitle }</h3>
                        <h2 className='communityTitle'>{ data.title }</h2>
                        <p className='communityText'>{ data.content }</p>

                        <div className='communityKeypointsCon'>
                            {
                                data.keypoints.map( ( e, index ) =>
                                    <p className='communityKeypoints' key={ index }><div className='keypointCheckmark'><BsCheck className='keypointCheckmarkIcon' /></div> { e.keypoint }</p>
                                )
                            }
                        </div>
                    </>
                }
            </section>
        </div>
    )
}

export default Community