import React from "react";
import Button from "../../../Shared/Button/Button";

const ContactForm = () => {
  return (
    <div>
      <div>
        <p className="text-[#19D3AE] font-semibold">Contact Us</p>
        <h1>Stay connected with us</h1>
      </div>
      <form>
          <input type="email" name="email" id="" />
          <input type="email" name="email" id="" />
          <textarea className="resize-none" name="text" id="" cols="30" rows="10"></textarea>
      </form>
      <div>
          <Button title={"Submit"} type="submit"></Button>
      </div>
    </div>
  );
};

export default ContactForm;
