import React, { useEffect, useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'

function GitHub() {
    const userData = useRouteLoaderData()
    // const [userData, setUserData] = useState()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/MusaZeshan-IT')
    //         .then(response => response.json())
    //         .then(jsonResponse => {
    //             console.log(jsonResponse);
    //             setUserData(jsonResponse)
    //         })
    //         .catch(error => console.log(error))
    // }, [])

    return (
        <div className='flex justify-center items-center mt-28 mb-20'>
            <div className='flex justify-center items-center w-[42%] h-36 rounded-xl bg-slate-900 shadow-xl shadow-slate-400'>
                <img className='rounded-full h-16 w-16 me-5 shadow-xl shadow-gray-200' src={userData.avatar_url} alt="" />
                <span className='text-4xl font-bold text-white'>Github Followers: {userData.followers}</span>
            </div>
        </div>
    )
}

export default GitHub

export const GitHubData = async () => {
    const response = await fetch('https://api.github.com/users/MusaZeshan-IT');
    return response.json();
}