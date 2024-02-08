import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
            // using useEffect & fetch
    // const [data , setData] = useState([]);
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/KRShashank17')
    //     .then(res => res.json())
    //     .then(
    //         data => {
    //             console.log(data);
    //             setData(data)
    //         }
    //     )
    // } ,[])

            // using Loader
    const data = useLoaderData();

    return (
    <>
        <div className='bg-gray-300 font-semibold pt-10 items-center justify-center'>
            <h1 className='text-2xl text-gray-800'>Github Profile : {data.name} </h1>
            <div  className="flex-wrap mx-4 flex items-center justify-center ">
            <img className="rounded-full p-5 " width={250} src={data.avatar_url} alt="Git_Profile_Pic" />
            <div>
                Location : {data.location} <br/>
                Followers: {data.followers} <br/>
                Following: {data.following} 
            </div>
            </div>
            
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/KRShashank17');
    return res.json();
}