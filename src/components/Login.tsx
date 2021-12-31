import React, { ChangeEvent, FormEvent, useState } from 'react'
import { NavigateFunction, useNavigate} from 'react-router-dom'
import { idText } from 'typescript';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { logUser, registerUser } from '../redux/action-creators';
import { IAuth, IState } from '../interface/State';
import { State } from '../redux/reducers';
import { Alert } from './Alert';
import { IFormLogin, IFormRegistration } from '../interface';

type Submit = FormEvent<HTMLFormElement>
type Change = ChangeEvent<HTMLInputElement>





const Login = () => {
    const state: IAuth = useSelector((state: State) => state.auth)
    const navigate  = useNavigate();
    const dispatch = useDispatch()
    const [isSignUp, setisSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [formRegister, setFormRegister] = useState<IFormRegistration>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [formLogin, setFormLogin] = useState<IFormLogin>({
        email: '',
        password: ''
    })

    const switchShowPassword = () => setShowPassword(!showPassword)

    const switchMode = () => {
        setFormRegister({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
        setisSignUp((prev) => !prev);
    }

    const handleSubmit = (e: Submit) => {
        e.preventDefault();

        if(isSignUp) {
            dispatch(registerUser(formRegister))
            console.log(formRegister);
            clear();
        }else {
            dispatch(logUser(formLogin, navigate))
        }
    
    }

    const clear = () => {
        setFormRegister({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    const handleChange = (e: Change) => setFormRegister({...formRegister, [e.target.name]: e.target.value}) 

    const handleChangeLogin = (e: Change) => setFormLogin({...formLogin, [e.target.name]: e.target.value})

    return (
    <div className='min-h-screen bg-gray-500 overflow-hidden bg-opacity-25'>
        {state.isOpen && isSignUp && <Alert modalContent={state.modalContent} style={state.style} status={state.status}/>}
       <div className='h-auto bg-white max-w-md mx-auto mt-16 rounded-lg shadow-md w-full '>
           <div className='flex flex-col items-center'>
               <h2 className='mt-4 text-3xl font-medium'>{isSignUp ? 'Register' : 'Login'}</h2>
               <form  className='flex flex-col space-y-6 w-full p-6 ' onSubmit={handleSubmit}>
                   {isSignUp && (
                       <>
                         <div className='flex flex-row space-x-4'>
                             <input type="text" name="firstName"  placeholder='First Name' className='p-2 border  border-black focus:outline-none rounded-md w-2/4' onChange={handleChange} value={formRegister.firstName}/>
                             <input type="text" name='lastName' placeholder='Last Name' className='p-2 border-black border rounded-md focus:outline-none w-2/4' onChange={handleChange} value={formRegister.lastName}/>
                         </div>
                       </>
                   )}

                   <div>
                       <input type="text" name="email"  placeholder='Email' className='p-2 border border-black focus:outline-none rounded-md w-full' onChange={isSignUp ? handleChange : handleChangeLogin} value={isSignUp ? formRegister.email : formLogin.email}/>
                   </div>

                   <div className='relative'>
                       <input type={showPassword ? 'text' : 'password'} placeholder='Password' name='password' className='p-2 pr-10 border border-black rounded-md focus:outline-none w-full ' onChange={isSignUp ? handleChange : handleChangeLogin} value={isSignUp ? formRegister.password : formLogin.password} /> <div className='absolute p-2 rounded-md right-0 top-0' onClick={switchShowPassword}>{showPassword ? <AiFillEye className='h-6 w-6'/> : <AiFillEyeInvisible className='w-6 h-6'/> }</div>
                   </div>

                   <div className='flex flex-col space-y-2'>
                       <button type='submit' className='px-2 py-2 bg-red-500 rounded-md  text-white font-medium  text-lg '>{isSignUp ? 'Create User' : 'Sign In'}</button>
                       <div className='p-2  bg-blue-500 text-white rounded-md font-medium  text-lg text-center' onClick={switchMode}>{isSignUp ? 'Sign In' : 'Register Here'}</div>
                   </div>
               </form>
               
               
           </div>

       </div>
        
    </div>
    )
}

export default Login
