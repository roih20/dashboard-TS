import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './CreateUser'
import MainContent from './MainContent'
import { Navbar } from './Navbar'
import Sidebar from './Sidebar'

const Home = () => {
  const [currentId, setCurrentId] = useState<string>('')
    return (
      <div className='flex flex-row'>
           <Sidebar />
            <Routes>
              <Route path='/get-users'  element={<MainContent setCurrentId={setCurrentId} currentId={currentId}/>}/>
              <Route path='/create-user' element={<CreateUser currentId={currentId} setCurrentId={setCurrentId} />}/>              
            </Routes>         
      </div>
    )
}

export default Home
