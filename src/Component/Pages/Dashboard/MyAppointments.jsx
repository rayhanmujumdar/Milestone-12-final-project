import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import Table from "./Table";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery(
    "MyAppointment",
    async () => {
      if (user?.email) {
        const url = `https://arcane-brook-53779.herokuapp.com/booking?email=${user?.email}`;
        return axiosPrivate.get(url);
      }
    }
  );
  if (isLoading) {
    return <Loading className="w-8 h-8"></Loading>;
  }
  if(error){
    if(error.response.status === 403 || error.response.status === 401)
    {
      toast.error(error.response.data.message,{
        id: 'error'
      })
      localStorage.removeItem('accessToken')
      signOut(auth)
      navigate('/login')
    }
    return <Loading className="w-8 h-8"></Loading>
  }
  const { data: appointment } = data;
  return <>
    {appointment.length ? <Table appointment={appointment}></Table> : <p className="text-red-500 ">No Appointment</p>}
  </>
};

export default MyAppointments;
