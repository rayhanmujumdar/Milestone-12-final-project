import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1yDZHs6wuzh3Fh3csuDAEL2eQAkqCVbbJsqylqoD6cMJkhjGuO8dZuncqAm2NfiwatKpAH55Stfdjx8vWPOWyg004tLQ2a3b"
);

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useQuery(["payment", id], () => {
    return axiosPrivate.get(`http://localhost:5000/booking/${id}`);
  });
  if (isLoading) {
    return <Loading className="w-8 h-8"></Loading>;
  }
  const { patient, treatment, slot, price, date } = data.data;
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content w-96 flex-col">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-left">
              <p className="text-success font-bold">Hello, {patient}</p>
              <h2 className="card-title">Pay for {treatment}</h2>
              <p>
                Your Appointment <span className="text-orange-600">{date}</span>{" "}
                at <span>{slot}</span>
              </p>
              <p>Please pay for: ${price}</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
