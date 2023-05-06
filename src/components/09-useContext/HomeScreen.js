import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

const user = useContext(UserContext)


  return (
    <div>
        <h1>HomeScreen</h1>
        <hr/>
        <pre className='container'>
        {JSON.stringify(user.name, null, 3)}
          <h3>Name: {JSON.stringify(user.name, null, 3)}</h3>
          <h3>Email: {JSON.stringify(user.email, null, 3)}</h3>
          <h3>Password: {JSON.stringify(user.password, null, 3)}</h3>
        </pre>
    </div>
  )
}
