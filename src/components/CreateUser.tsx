import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../interface';
import { createUser, emptyField, updateUser } from '../redux/action-creators';
import { State } from '../redux/reducers';
import { Navbar } from './Navbar';
import { Alert } from './Alert'
import { IState } from '../interface/State';
type Submit = FormEvent<HTMLFormElement>
type Event = ChangeEvent<HTMLInputElement>

interface IProps {
    currentId: string;
    setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const CreateUser = ({ currentId, setCurrentId }: IProps) => {
    const [userForm, setUserForm] = useState({ name: '' });
    const state: IState = useSelector((state: State) => state.user)
    const user = state.users.find((person) => person._id === currentId)
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setUserForm(user);
        }
    }, [user]);


    const handleSubmit = (e: Submit) => {
        e.preventDefault();


        if (!userForm.name.trim()) return dispatch(emptyField())


        if (currentId) {
            dispatch(updateUser(currentId, userForm));
            clear();
        } else {
            dispatch(createUser(userForm))
            clear();
        }


    }

    const clear = () => {
        setUserForm({ name: '' })
        setCurrentId('')
    }

    const handleChange = (e: Event) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value })
    }

    return (
        <div className='min-h-screen w-full bg-gray-300 bg-opacity-75'>
            {JSON.parse(localStorage.getItem('profile') as string) === null ?
                <>
                    <div className='bg-white max-w-sm rounded-md mx-auto mt-20 h-36 shadow-md overflow-hidden'>
                        <h1 className='text-center text-3xl font-medium mt-5'>Error 400</h1>
                        <p className='text-center text-lg mt-4'>You dont have access to this view</p>
                    </div>
                </> : <>
                    <Navbar />
                    <div className='container mx-auto '>
                        {state.isOpen && <Alert modalContent={state.modalContent} status={state.status} style={state.style} />}
                        <h1 className='text-center text-3xl mt-6 mb-6'>Create User</h1>
                        <div className='bg-white rounded-lg h-40 max-w-md mx-auto ring-1 ring-gray-300 shadow-lg'>
                            <form className='flex flex-col p-6 space-y-4' onSubmit={handleSubmit}>
                                <div className='flex flex-col'>
                                    <label htmlFor="name" className='text-lg font-medium'>User Name:</label>
                                    <input type="text" name='name' className='border rounded border-gray-400 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-black' value={userForm.name} onChange={handleChange} />
                                </div>
                                <button className='px-3 py-2 rounded bg-blue-600 text-white self-start font-medium hover:bg-blue-700' type='submit'>Create User</button>
                            </form>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default CreateUser;
