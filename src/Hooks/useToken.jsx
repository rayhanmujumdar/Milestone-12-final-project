import { useEffect, useState } from "react"
import axiosPrivate from '../Component/Shared/axiosPrivate/axiosPrivate'

const useToken = (user) => {
    const [token,setToken] = useState('')
    useEffect(() => {
        const email = user?.email
        const currentUser = { email }
        const myToken = async () => {
             if (email) {
              const url = `http://localhost:5000/user/${email}`;
              const { data } = await axiosPrivate.put(url, currentUser);
              const accessToken = data?.token;
              localStorage.setItem('accessToken',accessToken);
              setToken(accessToken)
            }
        }
        myToken()
    },[user])
    console.log(token)
    return [token,setToken];
}
export default useToken