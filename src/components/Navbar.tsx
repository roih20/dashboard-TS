import { Menu, Transition } from '@headlessui/react'
import { decode } from 'punycode';
import React, { Fragment, useEffect, useState } from 'react'
import avatar from '../images/avatar.png'
import { IProfile } from '../interface';
export const Navbar = () => {
    const [profile, setProfile] = useState<IProfile>(JSON.parse(localStorage.getItem('profile') as string));

    useEffect(() => {
       setProfile(JSON.parse(localStorage.getItem('profile') as string))
    }, [])

    return (
        <header className='bg-white border-b border-gray-300 shadow-lg'>
            <nav className='flex flex-row-reverse'>
                <div className='flex flex-row items-center p-4 space-x-4'>
                <h4 className='text-lg'>
                    {profile.result.name}
                </h4>
                <Menu as="div" className="ml-3 relative">
                 <Menu.Button>
                 <img src={avatar} alt="" className=' object-center w-14 h-14 rounded-full' />
                 </Menu.Button>
                 <Transition as={Fragment}
                 enter='transition ease-out duration-100'
                 enterFrom='transform opacity-0 scale-95'
                 enterTo='transfrom opacity-100 scale-100'
                 leave='transition ease-in duration-75'
                 leaveFrom='transform opacity-100 scale-100'
                 leaveTo='transform opacity-0 scale-95'>
                     <Menu.Items className="mt-2 w-48 lg:w-52 rounded-md shadow-lg z-20 bg-white origin-top-right absolute py-1 right-0 ring-1 ring-black ring-opacity-10 focus:outline-none flex flex-col">
                         <Menu.Item>
                             {({active}) => (
                                 <a href="#" className={`${active ? 'text-sm px-2 py-1 block bg-gray-400 bg-opacity-25': 'block px-2 py-1'}`}>Profile</a>
                             )}
                         </Menu.Item>
                         <Menu.Item>
                             {({active}) => (
                                 <a href="#" className={`${active ? 'text-sm px-2 py-1 block bg-gray-400 bg-opacity-25': 'block px-2 py-1'}`}>GGGGG</a>
                             )}
                         </Menu.Item>
                         <Menu.Item>
                             {({active}) => (
                                 <a href="#" className={`${active ? 'text-sm px-2 py-1 block bg-gray-400 bg-opacity-25 ': 'block px-2 py-1'}`}>SFDDFDSFS</a>
                             )}
                         </Menu.Item>

                     </Menu.Items>
                 </Transition>
                </Menu>
                
                </div>
            </nav>
        </header>
    )
}
