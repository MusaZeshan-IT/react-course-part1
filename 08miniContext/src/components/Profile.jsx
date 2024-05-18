import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    return (
        <div className='w-full flex justify-center'>
            <div className='flex justify-center rounded-lg shadow-lg p-10 shadow-gray-700 flex-col w-5/12 mt-10 bg-stone-800 text-gray-100'>
                <p className='text-5xl text-center font-semibold'>
                    {user ? `User: ${user.username}` : 'User: guest'}
                </p>
                <p className='text-5xl text-center font-semibold'>
                    {user ? `Password: ${user.password}` : 'Password: not set'}
                </p>
            </div>
        </div>
    )
}

export default Profile