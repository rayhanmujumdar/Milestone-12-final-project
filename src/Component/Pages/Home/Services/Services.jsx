import React from "react";
import Service from "./Service";
import cavity from "../../../../img-assets/images/cavity.png";
import fluoride from "../../../../img-assets/images/fluoride.png";
import whitening from "../../../../img-assets/images/whitening.png";

const Services = () => {
  const serviceData = [
    {
      img: fluoride,
      title: "Fluoride Treatment",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: cavity,
      title: "Cavity Filling",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: whitening,
      title: "Teeth Whitening",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="my-10">
      <div>
        <h5 className="uppercase text-sm font-semibold text-[#19D3AE]">
          our services
        </h5>
        <h1 className="capitalize text-2xl">Services We Provide</h1>
      </div>
      <div className="lg:container lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 mx-5">
        {serviceData.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
