import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../Loading/Loading";

const PrivateAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const {data,isLoading} = useAdmin(user)
    const location = useLocation();
    if (loading || isLoading) {
      return <Loading className="w-8 h-8"></Loading>;
    }
    console.log(data?.data?.admin)
    if (!data?.data?.admin) {
        // console.log('admin')
        // signOut(auth)
      return <Navigate to="*" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateAdmin;