import React from 'react'
import { memo } from 'react'

export const Small = memo(( {value} ) => {
    console.log('ME again')
  return (
    <small>
        {value}
    </small>
  )
})
/*use memo hook is used to avoid unnecessary recall of the component 
for example I have a button that shows or hide another thing unrrelated
to the component but I click this button and the component is called again
so it could consume data plan memory leak 
*/