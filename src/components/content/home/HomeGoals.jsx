import React, { useEffect } from 'react'
import { useGetData } from '../../../hooks/useRequestData'
import Counter from '../../counter'

import ErrorMessage from '../../ErrorMessage'
import Loader from '../../Loader'

import { BsFillPlayFill } from 'react-icons/bs'


const HomeGoals = () => {

  const { error: errorHero, loading: loadingHero, data: dataHero, getData: getDataHero } = useGetData()
  const { error: errorGoal, loading: loadingGoal, data: dataGoal, getData: getDataGoal } = useGetData()

  useEffect( () => {
    getDataHero( "http://localhost:5888/heros" )
    getDataGoal( "http://localhost:5888/goals" )
  }, [] )

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
      <section className='homeGoalsStatsCon'>
        {
          dataGoal && dataGoal.map( ( e, index ) =>
            <div className='homeGoalsStats'>
              <div className='goalsStatsIconCon'><i className={ `${ e.icon } homeGoalsStatsIcon` } /></div>
              {/* <p className='homeGoalsStatsCount'>{e.goalcount}</p> */ }
              <Counter number={ e.goalcount } />
              <p className='homeGoalsStatsTitle'>{ e.goal }</p>
            </div>
          )
        }

        <div className='homeGoalsStatsImgCon'>
          { dataHero &&
            <>
              <img src={ `http://localhost:5888/images/hero/${ dataHero[ 2 ].image }` } alt={ dataHero[ 2 ].image } className='homeGoalsStatsImg' />
              <button className='homeGoalsStatsVideoBtn'><BsFillPlayFill className='homeGoalsStatsVideoPlay' /></button>
            </>
          }
        </div>
      </section>
    </div>
  )
}

export default HomeGoals