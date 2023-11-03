import React, { useEffect } from "react";
import { useGetData } from "../hooks/useRequestData";
import Counter from "./counter";

import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const CounterComponent = () => {

  const { error, loading, data, getData } = useGetData()

  useEffect( () => {
    getData( "http://localhost:5888/goals" )
  }, [] )

  return (
    <>
        { error && <ErrorMessage /> }
        { loading && <Loader /> }
      {
        data && data.sort( ( a, b ) => ( a.order > b.order ) ? 1 : -1 ).map( ( e, index ) =>
          <div key={ index } className='counterGoalsStats'>
            <div className='counterGoalsStatsIconCon'><i className={ `${ e.icon } counterGoalsStatsIcon` } /></div>
            <div className='counterGoalsCounter'><Counter number={ e.goalcount } /></div>
            <p className='counterGoalsStatsTitle'>{ e.goal }</p>
          </div>
        )
      }
    </>
  );
}

export default CounterComponent