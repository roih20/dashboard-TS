import React from 'react'

interface Props {
    style: string
    status: string
    modalContent: string
}


export const Alert = ({modalContent, status, style}: Props) => {
    return (
        <div className={`w-52 h-12 ${style} rounded-lg mx-auto mt-8 flex items-center justify-evenly font-medium text-white`}>
            <div className=''>
               {status} -----
            </div>
            <div>
                {modalContent}
            </div>
            
        </div>
    )
}
