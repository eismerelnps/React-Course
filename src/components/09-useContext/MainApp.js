import React from 'react'
import { Outlet, redirect } from 'react-router-dom';
import { NavBar } from './NavBar';


export async function action() {
    return redirect(`/main`);
  }

export const MainApp = () => {
    
  return (
    <div>
        <h1>MainApp</h1>
        <NavBar />
        <hr/>
        <Outlet />
    </div>
  )
}
