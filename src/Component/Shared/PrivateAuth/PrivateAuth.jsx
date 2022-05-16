import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../Loading/Loading";

const PrivateAuth = ({children}) => {
    const [user,loading,error] = useAuthState(auth)
    const location = useLocation()
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    if(loading){
        return <Loading></Loading>
    }
    return children
};

export default PrivateAuth;