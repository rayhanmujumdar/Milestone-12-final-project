import React from 'react';
import { Button } from 'react-day-picker';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Signup = () => {
    return (
        <div className="flex justify-center items-center h-[90vh]">
      <div className="card max-w-xl bg-base-100 shadow-xl rounded-3xl">
        <div className="card-body items-center">
          <h2 className="card-title text-3xl my-2">Login</h2>
          <form className="flex flex-col gap-y-2">
              <label 
              className="text-left text-xl" htmlFor="exampleFormControlInput1">Email</label>
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
            <label 
            className="text-left text-xl"
            htmlFor="exampleFormControlInput1">Password</label>
            <input
              type="password"
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
              placeholder="Password"
            />
            <p className="text-left">Forget Password</p>
            {/* <Button
              type="submit"
              className="w-full bg-[#3A4256] p-2 text-white rounded-md"
            >
              Submit
            </Button> */}
          </form>
          <div>
              <p>New to Doctors Portal? <Link to="/login" className="text-[#19D3AE]">Create new account</Link></p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    );
};

export default Signup;