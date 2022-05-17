import React, { useState } from "react";
import { format } from "date-fns";
import axiosPrivate from "../../../Shared/axiosPrivate/axiosPrivate";
import Service from "../../../Pages/AppointmentPage/Service/Service";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";

const AvailableAppointMent = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [load,setLoad] = useState(false)
  const newDate = format(date, "PP");
    //   https://arcane-brook-53779.herokuapp.com/services
  const {data,isLoading,error,refetch} = useQuery(['available', newDate], async () => {
    const url = `http://localhost:5000/available?date=${newDate}`
    return axiosPrivate.get(url)
  })
  if (isLoading) {
    return <Loading className='w-8 h-8'></Loading>
  }
  const {data:services } = data
  return (
    <div className="mb-10">
      <h5 className="text-xl font-semibold text-[#19D3AE] my-20">
        Available Appointments on {newDate}
      </h5>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-10">
        {services.map((service) => (
          <Service
            setIsOpen={setIsOpen}
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
        refetch={refetch}
          load={load}
          setLoad={setLoad}
          date={newDate}
          treatment={treatment}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointMent;
