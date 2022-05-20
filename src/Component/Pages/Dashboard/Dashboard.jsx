import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const {data,isLoading,error,refetch} = useAdmin(user)
  if(isLoading){
    return <Loading className='w-8 h-8'></Loading>
  }
  if(error){
    return <Loading className='w-8 h-8'></Loading>
  }
  const {admin} = data.data
  return (
    <div>
      <div className="drawer drawer-mobile lg:h-auto">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col md:items-center justify-start overflow-y-visible">
          <h1 className="text-4xl">Welcome to Dashboard</h1>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My reviews</Link>
            </li>
            <li>
              <Link to="/dashboard/history">My History</Link>
            </li>
            {admin && <li>
              <Link to="/dashboard/users">All User</Link>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
