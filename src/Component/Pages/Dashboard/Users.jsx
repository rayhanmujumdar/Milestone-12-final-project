import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading,refetch } = useQuery("users", () => {
    return axiosPrivate.get("http://localhost:5000/user");
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
             users?.data.map((user,index) => <UserRow refetch={refetch} key={user._id} index={index} user={user}></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
