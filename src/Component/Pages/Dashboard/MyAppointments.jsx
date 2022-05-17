import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../Firebase/firebase.init";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import Table from "./Table";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const { isLoading, error, data, refetch } = useQuery(
    "MyAppointment",
    async () => {
      if (user) {
        const url = `http://localhost:5000/booking?email=${user.email}`;
        return axiosPrivate.get(url);
      }
    }
  );
  if (isLoading) {
    return <Loading className="w-8 h-8"></Loading>;
  }
  const { data: appointment } = data;
    return (
      <Table appointment={appointment}></Table>
  );
};

export default MyAppointments;
