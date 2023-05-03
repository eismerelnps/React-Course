import React from 'react'

export const ShowIncrement = React.memo(( {increment} ) => {
  
    console.log('Me again');
  
    return (
   <button 
   className='btn btn-primary'
   onClick={ () => {
    increment(7) 
   }}
   >
        Increment
   </button>
  )
})
