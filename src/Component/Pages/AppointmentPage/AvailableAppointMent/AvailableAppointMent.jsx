import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import axiosPrivate from "../../../Shared/axiosPrivate/axiosPrivate";
import Service from "../../../Pages/AppointmentPage/Service/Service";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointMent = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [load,setLoad] = useState(false)
  const newDate = format(date, "PP");
  useEffect(() => {
    //   https://arcane-brook-53779.herokuapp.com/services
    const url = `http://localhost:5000/available?date=${newDate}`
    axiosPrivate.get(url).then((res) => {
      setServices(res.data);
    });
  }, [load,newDate]);
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
