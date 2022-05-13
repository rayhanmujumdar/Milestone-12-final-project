import React from "react";
import Button from "../../../Shared/Button/Button";

const ContactForm = () => {
  return (
    <div className="py-10">
      <div>
        <p className="text-[#19D3AE] font-semibold">Contact Us</p>
        <h1 className="text-white text-3xl">Stay connected with us</h1>
      </div>
      <form className="flex flex-col gap-y-4 justify-center items-center mt-10">
          <input className="border border-gray-500 py-2 w-[400px] rounded-md pl-3" type="email" name="email" id="" placeholder="Email Address"/>
          <input className="border border-gray-500 py-2 w-[400px] rounded-md pl-3" type="email" name="email" id="" placeholder="Subject"/>
          <textarea  className="resize-none border border-gray-500 py-2 w-[400px] rounded-md h-[200px] pl-3" name="text" id="" cols='20' placeholder="Your message"></textarea>
      </form>
      <div>
          <Button>Submit</Button>
      </div>
    </div>
  );
};

export default ContactForm;
