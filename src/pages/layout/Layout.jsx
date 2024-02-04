import React from 'react'
import NavBar from '../../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function layout() {

  return (
         
         <div className=' bg-bg'>

              <NavBar />

              <div className=' pb-4'>

                   <Outlet />

              </div>

         </div>
  )
}
