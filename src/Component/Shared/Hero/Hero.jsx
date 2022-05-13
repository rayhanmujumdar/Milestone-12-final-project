import React from "react";
import Button from "../Button/Button";

const Hero = ({ heroData }) => {
  console.log(heroData.img);
  return (
    <>
      <div className="text-left md:order-1 order-2 md:basis-2/4">
        <h1 className="capitalize text-4xl font-semibold">{heroData.title}</h1>
        <p className="my-3">{heroData.text}</p>
        <Button title={"Get started"}></Button>
      </div>
      <div className="md:order-2 order-1 md:basis-2/4">
        <img src={heroData.img} alt="" className="lg:max-w-xl md:max-w-sm  mx-auto rounded-md" />
      </div>
    </>
  );
};

export default Hero;