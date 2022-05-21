import { useQuery } from "react-query";
import axiosPrivate from "../Component/Shared/axiosPrivate/axiosPrivate";

const useAdmin = (user) => {
    const {data,isLoading,error,refetch} = useQuery('admin',() => {
        const email = user?.email
        if(email){
            return axiosPrivate.get(`https://arcane-brook-53779.herokuapp.com/admin/${email}`)
        }
    })
    return {
        data,isLoading,error,refetch
    }
};

export default useAdmin;