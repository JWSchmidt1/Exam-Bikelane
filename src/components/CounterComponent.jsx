import React, { useEffect } from "react";
import { useGetData } from "../hooks/useRequestData";
import Counter from "./counter";

const CounterComponent = () => {

  const { error, loading, data, getData } = useGetData()

  useEffect( () => {
    getData( "http://localhost:5888/goals" )
  }, [] )

  return (
    <>
      {
        data && data.sort((a, b) => (a.order > b.order) ? 1 : -1).map( ( e, index ) =>
          <div key={index} className='counterGoalsStats'>
            <div className='counterGoalsStatsIconCon'><i className={ `${ e.icon } counterGoalsStatsIcon` } /></div>
            <p className='counterGoalsCounter'><Counter number={ e.goalcount } /></p>
            <p className='counterGoalsStatsTitle'>{ e.goal }</p>
          </div>
        )
      }
    </>
  );
}

export default CounterComponent