import React from 'react'
import { Footer, Header } from './Components'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
                    {/* //? Dynamically changes */}
    <Outlet/>  

    <Footer/>
    </>
  )
}

export default Layout