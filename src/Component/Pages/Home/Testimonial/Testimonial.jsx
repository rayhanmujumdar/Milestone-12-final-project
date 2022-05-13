import React from "react";
import PersonTes from "./PersonTes";
import person1 from "../../../../img-assets/images/people1.png";
import person2 from "../../../../img-assets/images/people2.png";
import person3 from "../../../../img-assets/images/people3.png";

const Testimonial = () => {
  const personData = [
    {
      name: "Winson Herry",
      img: person1,
      place: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      name: "Winson Herry",
      img: person2,
      place: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      name: "Winson Herry",
      img: person3,
      place: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div>
      <div className="text-left ml-14 mb-20">
        <p className="font-semibold text-[#19D3AE]">Testimonial</p>
        <h1 className="text-3xl">What Our Patients Says</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:mx-0 mx-10">
        {personData.map((person) => (
          <PersonTes person={person}></PersonTes>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
