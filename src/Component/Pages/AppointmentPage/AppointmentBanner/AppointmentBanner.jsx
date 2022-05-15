import React from "react";
import chair from '../../../../img-assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({date,setDate}) => {
  return (
    <div className="flex my-40 justify-center items-center md:flex-row flex-col-reverse container md:mx-auto">
      <div className="text-left md:order-1 order-2 md:basis-2/4  flex flex-col items-center justify-center md:mb-0 mb-5">
        <DayPicker
        required
        dateFormat="MM-DD-YYYY"
        mode="single"
        selected={date}
        onSelect={setDate}
        ></DayPicker>
      </div>
      <div className="md:order-2 order-1 md:basis-2/4">
        <img
          src={chair}
          alt="Dentist Chair"
          className="lg:max-w-xl md:max-w-lg max-w-[380px] w-full mx-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default AppointmentBanner;
