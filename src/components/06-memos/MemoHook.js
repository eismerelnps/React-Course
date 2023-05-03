import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useMemo } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';


export const MemoHook = () => {

const { counter, increment} = useCounter(500);
const [ show, setShow ] = useState(false)


const memoHeavyProcess =  useMemo(() => heavyProcess( counter ), [counter]);

  return (
    <div>

        <h1>MemoHook</h1>
        <h3>Counter: <small>{ counter } </small>  </h3>
        <hr/>

        <p> { memoHeavyProcess }</p>

        <button
        className='btn btn-primary'
        onClick={() => { increment(1)}}
        >
            +1
        </button>

        <button 
        className="btn btn-outline-primary"
        onClick={ () => {
          setShow( !show );
        }}
        >
        SHOW/HIDE : {JSON.stringify( show)}
        </button>
    </div>
  )
}
