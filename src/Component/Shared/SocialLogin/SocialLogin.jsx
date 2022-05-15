import React from 'react';
import Button from '../Button/Button';

const SocialLogin = () => {
    return (
        <div className='w-full my-5'>
            <div className='flex justify-center items-center'>
                <div className='w-full h-1 bg-[#CFCFCF]'></div>
                <p className='uppercase px-1.5'>or</p>
                <div className='w-full h-1 bg-[#CFCFCF]'></div>
            </div>
            <div className='w-full'>
                <Button
              type="submit"
              className="bg-transparent text-black p-2 rounded-md w-full py-2 border-gray-500 border-2 hover:text-white hover:border-0 "
            >
              continue With Google
            </Button>
            </div>
        </div>
    );
};

export default SocialLogin;