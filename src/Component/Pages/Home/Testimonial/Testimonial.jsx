import React from "react";
import PersonTes from "./PersonTes";
import person1 from "../../../../img-assets/images/people1.png";
import person2 from "../../../../img-assets/images/people2.png";
import person3 from "../../../../img-assets/images/people3.png";
import quote from '../../../../img-assets/icons/quote.svg'

const Testimonial = () => {
  const personData = [
    {
      _id:1,
      name: "Winson Herry",
      img: person1,
      place: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id:2,
      name: "Milina warreo",
      img: person2,
      place: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id:3,
      name: "Soniya Lund",
      img: person3,
      place: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="container mx-auto">
      <div className="text-left mx-10 mb-10 flex justify-between">
        <div>
          <p className="font-semibold text-[#19D3AE]">Testimonial</p>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <div>
          <img src={quote} alt="" className="w-24 md:w-48"/>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:mx-0 mx-10">
        {personData.map((person) => (
          <PersonTes key={person._id} person={person}></PersonTes>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
