import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className="card min-w-96 max-w-7xl bg-slate-800 text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[35px]">Login</h2>
                    <div className='mt-8 mb-3 flex flex-col items-center w-full'>
                        <input value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }} className='text-black w-10/12 py-1 rounded-sm px-3 font-medium' type="text" placeholder='username' />
                        <input value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} className='text-black w-10/12 py-1 rounded-sm px-3 mt-2 font-medium' type="password" name="" id="" placeholder='password' />
                    </div>
                    <div className="card-actions justify-end items-center flex flex-col">
                        <p className='font-semibold'>Don't have an account?</p>
                        <button onClick={handleSubmit} className="py-2 px-[12px] rounded-md font-medium bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login