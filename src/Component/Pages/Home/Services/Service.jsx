import React from 'react';

const Service = ({service}) => {
    return (
        <div className='flex flex-col justify-center md:items-center gap-x-3 md:p-5 p-3 rounded-xl drop-shadow-md hover:drop-shadow-lg'>
            <div className='md:basis-1/4'>
                 <img src={service.img} alt="" className='min-w-fit md:mx-0 mx-auto'/>
            </div>
            <div className='p-2 md:basis-3/4'>
                <h1 className='font-semibold capitalize'>{service.title}</h1>
                <p className='mt-2'>{service.text}</p>
            </div>
        </div>
    );
};

export default Service;