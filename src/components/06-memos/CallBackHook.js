import React from 'react';
import '../03-examples/examples.css';
import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import { useCallback } from 'react';

export const CallBackHook = () => {

    const [ counter, setCounter ] = useState(0);


    /*using useCallback we avoid to regenerate unnecessary the component we we send a 
        function to it, we have to use React.memo in component side    
    */
    const increment = useCallback( ( num ) => {
        setCounter( c => c + num );
    }, [ setCounter ] )

  return (
    <div>
        <h1>useCallBack Hook: { counter } </h1>
        <hr/> 
        < ShowIncrement increment={ increment }/>
    </div>
  )
}
