import React, { useEffect, useState } from 'react'
import { useGetData } from '../../../hooks/useRequestData'

import CounterComponent from '../../CounterComponent'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

import { BsFillPlayFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'


const HomeGoals = () => {

  const { error: errorHero, loading: loadingHero, data: dataHero, getData: getDataHero } = useGetData()
  const { error: errorGoal, loading: loadingGoal, data: dataGoal, getData: getDataGoal } = useGetData()

  const [ openVideo, setOpenVideo ] = useState( false )

  useEffect( () => {
    getDataHero( "http://localhost:5888/heros" )
    getDataGoal( "http://localhost:5888/goals" )
  }, [] )

  console.log( dataGoal )

  return (
    <div className='homeGoalsCon'>

      { errorHero || errorGoal && <ErrorMessage /> }
      { loadingHero || loadingGoal && <Loader /> }

      {
        dataHero &&
        <div className='homeGoalsHeroCon'>
          <section className='homeGoalsFlex'>
            <h3 className='homeGoalsHeroSuptitle'>{ dataHero[ 2 ].suptitle }</h3>
            <h2 className='homeGoalsHeroTitle'>{ dataHero[ 2 ].title }</h2>
          </section>
          <section className='homeGoalsFlex'>
            <div className="flex-bottom">
              <p className='homeGoalsHeroContent'>{ dataHero[ 2 ].content }</p>
            </div>
          </section>
        </div>
      }
      <section className='counterGoalsStatsCon'>

        <CounterComponent />

        <div className='homeGoalsStatsImgCon'>
          { dataHero &&
            <>
              <img src={ `http://localhost:5888/images/hero/${ dataHero[ 2 ].image }` } alt={ dataHero[ 2 ].image } className='homeGoalsStatsImg' />
              <button onClick={ () => setOpenVideo( true ) } className='homeGoalsStatsVideoBtn'><BsFillPlayFill className='homeGoalsStatsVideoPlay' /></button>
            </>
          }
        </div>
          {
            openVideo ? (
              <div className='modalOverlay'>
                <CgClose onClick={ () => setOpenVideo( false ) } className='modalClose' />
                <iframe width="560" height="315" src={ dataHero[ 2 ]?.videolink } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            ) : ( <></> )
          }
      </section>
    </div>
  )
}

export default HomeGoals