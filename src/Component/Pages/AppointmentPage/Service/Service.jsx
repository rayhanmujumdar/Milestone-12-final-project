import React from "react";
import Button from "../../../Shared/Button/Button";

const Service = ({ service,setTreatment,setIsOpen }) => {
  const { name, slots} = service;
  const openModal = (service) => {
    setTreatment(service)
    setIsOpen(true)
  }
  return (
    <div className="p-3 bg-slate-100 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-[#19D3AE]">{name}</h1>
      <p className="my-1">
        {slots.length ? (
          <span>{slots[0]}</span>
        ) : (
          <span className="text-red-500">No slot Available</span>
        )}
      </p>
      <p className="uppercase">
        {slots.length} {slots.length > 1 ? "Spaces" : "space"} available
      </p>
      <div>
      <Button
      htmlFor={'modal'}
            type="button"
            onClick={() => openModal(service)}
            disabled={slots.length === 0}
            className={`${
              slots.length === 0 && "bg-slate-400 hover:bg-slate-400"
            }`}
          >
            Book Appointment
      </Button>
      </div>
    </div>
  );
};

export default Service;
