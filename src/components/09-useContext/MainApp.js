import React from 'react'
import { Outlet, redirect } from 'react-router-dom';
import { NavBar } from './NavBar';
import { UserContext } from './UserContext';
import { useState } from 'react';

export async function action() {
    return redirect(`/main`);
  }
  
export const MainApp = () => {

    const [ user, setUser ] = useState({
        name: 'eismer',
        email: 'eismerlo',
        password: '123' 
      })
    
  return (
    <div>
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
        <h1>MainApp</h1>
        <NavBar />
        <hr/>
        <Outlet />
        </UserContext.Provider>
        
    </div>
  )
}
