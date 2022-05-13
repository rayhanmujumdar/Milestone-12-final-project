import React from 'react';

const PersonTes = ({person}) => {
    return (
        <div className='p-3 drop-shadow-md shadow-md rounded-md'>
            <p className='text-left font-semibold'>{person.comment}</p>
            <div className='flex justify-left my-10 items-center gap-x-3'>
                <div className='border-4 border-[#19D3AE] rounded-full'>
                    <img src={person.img} alt="" className='w-16 h-16'/>
                </div>
                <div className='text-left'>
                    <h1 className='text-xl font-semibold'>{person.name}</h1>
                    <p>{person.place}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonTes;