import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import axiosPrivate from '../../Shared/axiosPrivate/axiosPrivate';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const {data: doctors,isLoading,error} = useQuery('doctors',() => {
        return axiosPrivate.get('http://localhost:5000/doctor')
    })
    if(isLoading){
        return <Loading className='w-8 h-8'></Loading>
    }
    if(error){
        toast.error(error.code,{
            id: 'error'
        })
        return <Loading className='w-8 h-8'></Loading>
    }
    console.log(doctors)
    return (
        <div>
            
        </div>
    );
};

export default ManageDoctors;