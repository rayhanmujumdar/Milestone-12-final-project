import { useQuery } from "react-query";
import axiosPrivate from "../Component/Shared/axiosPrivate/axiosPrivate";

const useAdmin = (user) => {
    const {data,isLoading,error,refetch} = useQuery(['admin',user],() => {
        const email = user?.email
        if(email){
            return axiosPrivate.get(`http://localhost:5000/admin/${email}`)
        }
    })
    return {
        data,isLoading,error,refetch
    }
};

export default useAdmin;