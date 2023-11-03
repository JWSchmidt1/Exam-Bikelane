import React, { useEffect, useState } from 'react'
import { useGetData } from '../../../hooks/useRequestData'

import CounterComponent from '../../CounterComponent'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

import { BsFillPlayFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'


const HomeGoals = () => {

  const { error: errorH, loading: loadingH, data: dataH, getData: getDataH } = useGetData()
  const { error: errorG, loading: loadingG, data: dataG, getData: getDataG } = useGetData()

  const [ openVideo, setOpenVideo ] = useState( false )

  useEffect( () => {
    getDataH( "http://localhost:5888/heros" )
    getDataG( "http://localhost:5888/goals" )
  }, [] )


  return (
    <div className='homeGoalsCon'>

        { ( errorH || errorG ) && <ErrorMessage /> }
        { ( loadingH || loadingG ) && <Loader /> }

      {
        dataH &&
        <div className='homeGoalsHeroCon'>
          <section className='homeGoalsFlex'>
            <h3 className='homeGoalsHeroSuptitle'>{ dataH[ 2 ].suptitle }</h3>
            <h2 className='homeGoalsHeroTitle'>{ dataH[ 2 ].title }</h2>
          </section>
          <section className='homeGoalsFlex'>
            <div className="flex-bottom">
              <p className='homeGoalsHeroContent'>{ dataH[ 2 ].content }</p>
            </div>
          </section>
        </div>
      }
      <section className='counterGoalsStatsCon'>

        <CounterComponent />

        <div className='homeGoalsStatsImgCon'>
          { dataH &&
            <>
              <img src={ `http://localhost:5888/images/hero/${ dataH[ 2 ].image }` } alt={ dataH[ 2 ].image } className='homeGoalsStatsImg' />
              <button onClick={ () => setOpenVideo( true ) } className='homeGoalsStatsVideoBtn'><BsFillPlayFill className='homeGoalsStatsVideoPlay' /></button>
            </>
          }
        </div>
        {
          openVideo ? (
            <div className='modalOverlay'>
              <CgClose onClick={ () => setOpenVideo( false ) } className='modalClose' />
              <iframe width="560" height="315" src={ dataH[ 2 ]?.videolink } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          ) : ( <></> )
        }
      </section>
      <div className='homeGoalsStatsMobileImgCon'>
        { dataH &&
          <>
            <img src={ `http://localhost:5888/images/hero/${ dataH[ 2 ].image }` } alt={ dataH[ 2 ].image } className='homeGoalsStatsMobileImg' />
            <button onClick={ () => setOpenVideo( true ) } className='homeGoalsStatsMobileVideoBtn'><BsFillPlayFill className='homeGoalsStatsMobileVideoPlay' /></button>
          </>
        }
      </div>
    </div>
  )
}

export default HomeGoals