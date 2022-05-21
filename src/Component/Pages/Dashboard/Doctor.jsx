import React from "react";
import toast from "react-hot-toast";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";

const Doctor = ({ doctor, index,refetch,setDeletedDoctor }) => {
  const { name, email, specialty, img } = doctor;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="w-8 rounded">
          <img src={img} alt={name} />
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
      <label 
      onClick={() => setDeletedDoctor(doctor)}
      className="btn btn-xs bg-transparent text-black hover:bg-red-500"
      for="delete-confirm">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
      </label>
      </td>
    </tr>
  );
};

export default Doctor;
