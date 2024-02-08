import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Github, Home, User } from './Components/index.js'
import { githubInfoLoader } from './Components/Github/Github.jsx'

    // method 1 
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//         path : '',
//         element : <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       }

//     ]
//   }
// ])

    // method 2
const router = createBrowserRouter(
  createRoutesFromElements(                         //!imp - from Elements , not from children
    <Route path='/' element= {<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userdata' element={<User />} />
      <Route 
      loader={githubInfoLoader}                     //! useLoaderData
      path='github' 
      element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router = {router} />
  </React.StrictMode>,
)
