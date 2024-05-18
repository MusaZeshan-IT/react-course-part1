import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1 className='text-5xl text-center font-bold'>
          App
        </h1>
      </div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App