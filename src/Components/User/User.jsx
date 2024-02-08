import React from 'react'
import {useParams} from 'react-router-dom'      //! new useParams

function User() {
    const {userdata} = useParams();         //? userData within {}
  return (
    <div className='bg-gray-700 text-white text-3xl font-bold p-9'>User : {userdata}</div>
  )
}

export default User