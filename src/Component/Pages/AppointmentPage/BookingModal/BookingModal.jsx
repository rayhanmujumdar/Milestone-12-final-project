import React from "react";
import Modal from "react-modal";
import Button from "../../../Shared/Button/Button";
import { format } from "date-fns";
import "./BookingModal.css";

const BookingModal = ({ treatment, setIsOpen, modalIsOpen, date }) => {
  const { name, slots } = treatment;
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleBooking = e => {
    e.preventDefault()
    const slot = e.target.slot.value
    console.log(slot)
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-3 text-xl bg-slate-800 px-2 my-0.5 rounded-full text-white"
          >
            X
          </button>
          <h2 className="text-xl mb-8 font-semibold">{name}</h2>
          <form onSubmit={handleBooking} className="flex flex-col gap-y-4">
            <input
              type="text"
              value={format(date, "PP")}
              readOnly
              className="
              form-control
              block
              w-96
              px-3
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              id="exampleFormControlInput1"
            />
            <div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <select
                  name="slot"
                    className="form-select appearance-none
                    block
                    w-96
                    px-3
                    py-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    
                  >
                    {slots.map(slot => <option value={slot}>{slot}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <input
              type="text"
              className="
              form-control
              block
              w-96
              px-3
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              id="exampleFormControlInput1"
              placeholder="Full Name"
            />
            <input
              type="number"
              className="
              form-control
              block
              w-96
              px-3
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
            <input
              type="Email"
              className="
              form-control
              block
              w-96
              px-3
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              id="exampleFormControlInput1"
              placeholder="Email"
            />
            <Button
              type="submit"
              className="w-full bg-[#3A4256] p-2 text-white rounded-md"
            >
              Submit
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default BookingModal;
