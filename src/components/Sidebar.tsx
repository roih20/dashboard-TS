import React, { useState } from 'react'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ActionType } from '../redux/action-types'

const Sidebar = () => {
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const [open, setOpen] = useState(false)

    const logOut = () => {
        dispatch({type: ActionType.LOG_OUT})
        navigate('/');
    }

    const showDropdown = () => {
        setOpen((wasOpen) => !wasOpen)
    }

    return (
        <div className='min-h-screen bg-gray-900 w-1/4 lg:w-1/6   ' >
            <h1 className='text-white text-center text-lg lg:text-2xl py-3 block font-medium '>Dashboard</h1>
            <ul className='list-none text-white  '>
                <li className='block  px-2 py-3  lg:text-xl text-lg  font-medium hover:bg-gray-800 hover:cursor-pointer'>
                   <div className='ml-2'>
                       Home
                   </div>
                </li>
                <li className='block  px-2 py-3  lg:text-xl text-lg  font-medium hover:bg-gray-800 hover:cursor-pointer'>
                    <div className='flex justify-between'>
                      <div className='ml-2'>
                          Users
                      </div>
                    <button className='mr-6' onClick={() => showDropdown()}>{open ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/> }</button>
                    </div>
                </li>
                {open && (
                  <>
                    <li className='block hover:bg-gray-800 py-2 text-lg font-medium hover:cursor-pointer'>
                    <Link to='get-users' className='ml-6'>View Users</Link>
                </li>
                <li className='block hover:bg-gray-800 py-2  text-lg font-medium hover:cursor-pointer'>
                    <Link to='create-user' className='ml-6'>Create User</Link> 
                </li>
                  </>
                )}

                <li className='block  px-2 py-3 lg:text-xl text-lg font-medium hover:bg-gray-800 hover:cursor-pointer'>
                   <div className='ml-2'>
                       Settings
                   </div>
                </li>
                <li className='block  px-2 py-3 lg:text-xl text-lg font-medium hover:bg-gray-800 hover:cursor-pointer'>
                   <div onClick={logOut} className='ml-2'>Log out</div>
                </li>
            </ul>
        </div>
    )
}


export default Sidebar
