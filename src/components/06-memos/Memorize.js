import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

const { counter, increment} = useCounter(5);
const [ show, setShow ] = useState(false)

  return (
    <div>
        <h1>Counter:  < Small value={ counter } /> </h1>
        <hr/>
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
