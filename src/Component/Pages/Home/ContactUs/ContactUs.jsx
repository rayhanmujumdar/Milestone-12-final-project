import React from "react";
import ContactFrom from '../../../Pages/Home/ContactUs/ContactForm'
import bgForm from '../../../../img-assets/images/appointment.png'

const ContactUs = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat my-10" style={{"background":`url(${bgForm})`}}>
      <ContactFrom></ContactFrom>
    </div>
  );
};

export default ContactUs;
