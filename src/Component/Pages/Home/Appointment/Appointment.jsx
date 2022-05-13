import React from "react";
import appointmentImg from "../../../../img-assets/images/appointment.png";
import Button from "../../../Shared/Button/Button";
import DoctorImg from "../../../../img-assets/images/doctor-small.png";

const Appointment = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] w-full">
      <div
        className="bg-no-repeat bg-cover bg-center relative h-[50vh]"
        style={{ background: `url(${appointmentImg})` }}
      >
        <div className="mx-10">
          <div className="md:block hidden absolute bottom-0 left-0">
            <img
              src={DoctorImg}
              alt=""
              className="max-w-lg lg:h-[636px] lg:w-[606px] h-[400px]"
            />
          </div>
          <div className="text-left text-white my-5 p-2 md:w-2/4 md:float-right">
            <small className="text-[#19D3AE] font-semibold">Appointment</small>
            <div className="my-3">
              <h1 className="text-3xl font-semibold my-3">
                Make an appointment Today
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
            </div>
            <Button title={"get started"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
