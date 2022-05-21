import React from "react";
import Modal from "react-modal";
import Button from "../../../Shared/Button/Button";
import "./BookingModal.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import axiosPrivate from "../../../Shared/axiosPrivate/axiosPrivate";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, setIsOpen, modalIsOpen, date,refetch }) => {
  // user auth state
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  // modal close function
  const closeModal = () => {
    setIsOpen(false);
  };
  // handle booking service
  const handleBooking = async (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    // input data set to database
    const booking = {
      treatmentId: _id,
      treatment: name,
      date,
      slot,
      patientEmail: user?.email,
      patient: user?.displayName,
      phone: e.target.phoneNumber.value,
    };
    const url = `https://arcane-brook-53779.herokuapp.com/booking`;
    const { data } = await axiosPrivate.post(url, booking);
    // const { data } = await axiosPrivate.get(url, booking);
    console.log(data);
    if (data?.success) {
      toast.success("Booking Success", {
        id: "success",
      });
    } else {
      toast.error("already booked at " + data.booking.slot, {
        id: "error",
      });
    }
    refetch()
    setIsOpen(false);
  };
  // modal style
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
          overlayClassName={"overly"}
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
              value={date}
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
              name="date"
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
                    {slots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
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
              name="name"
              value={user?.displayName}
              disabled
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
              name="phoneNumber"
              required
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
              name="email"
              disabled
              value={user?.email}
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
