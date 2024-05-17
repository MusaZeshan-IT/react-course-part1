import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
    return (
        <div className='flex justify-center items-center mt-28 mb-20'>
            <div className='w-96 h-36 rounded-xl bg-slate-900 shadow-xl shadow-slate-400 flex justify-center items-center'>
                <span className='text-4xl font-bold text-white'>User: {userId}</span>
            </div>
        </div>
    )
}

export default User