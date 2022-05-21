import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import Doctor from "./Doctor";

const ManageDoctors = () => {
  const [deleteDoctor,setDeletedDoctor] = useState(null)
  const {
    data: doctors,
    isLoading,
    error,
    refetch
  } = useQuery("doctors", () => {
    return axiosPrivate.get("http://localhost:5000/doctor");
  });
  if (isLoading) {
    return <Loading className="w-8 h-8"></Loading>;
  }
  if (error) {
    toast.error(error.code, {
      id: "error",
    });
    return <Loading className="w-8 h-8"></Loading>;
  }
  return (
    <div>
      {doctors?.data.length ? <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.data.map((doctor, index) => (
              <Doctor 
              key={doctor._id} 
              index={index} 
              doctor={doctor}
              refetch={refetch}
              setDeletedDoctor={setDeletedDoctor}
              ></Doctor>
            ))}
          </tbody>
        </table>
      </div>: <p className="text-red-500 text-xl">No Doctor Found</p>
      }
      {deleteDoctor && <DeleteConfirmModal 
      deleteDoctor={deleteDoctor}
      refetch={refetch}
      setDeletedDoctor={setDeletedDoctor}
      ></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;
