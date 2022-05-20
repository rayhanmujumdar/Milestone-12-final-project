import React from "react";
import toast from "react-hot-toast";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";

const UserRow = ({index,user,refetch}) => {
    const {email,role} = user
    const makeAdmin = async () => {
        try{
            const {data} = await axiosPrivate.put(`http://localhost:5000/user/admin/${email}`)
        if(data?.modifiedCount > 0){
            toast.success(`successfully make an admin`,{
                id: 'success'
            })
            refetch()
        }
        }catch(error){
            const {status} = error.response
            if(status === 403){
                toast.error('Failed to Make an admin',{
                    id: 'error'
                })
            }
        }
    }
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}
      </td>
      <td>
        <button className="btn btn-xs">remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
