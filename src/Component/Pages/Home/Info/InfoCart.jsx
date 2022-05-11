import React from 'react';

const InfoCart = ({info}) => {
    return (
        <div className={`${info.bg} flex md:flex-row flex-col justify-center md:items-center gap-x-3 md:p-5 p-3 rounded-xl shadow-lg`}>
            <div className='md:basis-1/4'>
                 <img src={info.img} alt="" className='min-w-fit md:mx-0 mx-auto'/>
            </div>
            <div className='text-left p-2 text-white md:basis-3/4'>
                <h1 className='font-semibold capitalize'>{info.title}</h1>
                <p className='mt-2'>{info.text}</p>
            </div>
        </div>
    );
};

export default InfoCart;