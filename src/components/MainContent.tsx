import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IProfile, IUser } from '../interface';
import {State} from '../redux'
import {AiOutlineSearch} from 'react-icons/ai'
import { deleteUser, getUser } from '../redux/action-creators';
import { Navbar } from './Navbar';
import { IState } from '../interface/State';
import { useNavigate } from 'react-router-dom';

interface IProps  {
    currentId: string
    setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const MainContent = ({setCurrentId, currentId}: IProps) => {

    const dispatch = useDispatch();
    const state: IState = useSelector((state: State) => state.user);
    console.log(state.users);
    const navigate = useNavigate()

    const updateUser = (id: string) => {
        setCurrentId(id);
        navigate('/dashboard/create-user');
    }

    useEffect(() => {
        dispatch(getUser());
    }, [currentId ,dispatch])

   
    return (
        <div className='min-h-screen w-full bg-gray-300 bg-opacity-75'>
            {JSON.parse(localStorage.getItem('profile') as string) === null ? <> 
              <div className='bg-white max-w-sm rounded-md mx-auto mt-20 h-36 shadow-md overflow-hidden'>
                  <h1 className='text-center text-3xl font-medium mt-5'>Error 400</h1>
                  <p className='text-center text-lg mt-4'>You dont have access to this view</p>
              </div>
            </> : <>
            <Navbar />
             <div className='container mx-auto'>
                 <div className='flex flex-row mt-8 mb-8 justify-between items-center'>
                   <h1 className='text-4xl ml-6'>Users Table</h1>
                   <div className='mr-6 flex items-center relative'>
                   <button className='px-2 py-2 absolute'><AiOutlineSearch /></button>
                   <input type="text" className='border border-gray-500  px-7 rounded py-1 text-base' placeholder='search...'/>
                   </div>
                 
                 </div>
                 <div className='grid grid-flow-row  justify-items-center'>
                 <table className='table-fixed  w-full max-w-xl lg:max-w-7xl rounded-md bg-white'>
                     <thead>
                         <tr >
                             <th >
                                 Name
                             </th>
                             <th >
                                 Modify
                             </th>
                         </tr>
                     </thead>
                     <tbody>
                            {
                                state.users.map((user: IUser, i: number) => (
                                    <tr key={i} >
                                                         <th className=' font-normal '>
                                                            {user.name}
                                                         </th>
                                                         <th >
                                                             <div className='mt-3 mb-3 flex  justify-center space-x-2'>
                                                             <button className='bg-blue-600 rounded text-white font-medium px-3 py-1' onClick={() => updateUser(user._id)}>Update</button>
                                                             <button className='bg-red-600 rounded text-white font-medium px-3 py-1' onClick={() => dispatch(deleteUser(user._id))}>Delete</button>
                                                             </div>
                                                    </th>
                                     </tr>
                                ))

                                
                                }

                            

                     </tbody>

                 </table>
                 </div>
                 
             </div>
            </>}
            
        </div>
    )
}








export default MainContent
