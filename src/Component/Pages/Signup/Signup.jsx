import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Button from "../../Shared/Button/Button";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Signup = () => {
  //create sign up user hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [passValue, setPassValue] = useState("");
  const navigate = useNavigate();
  //update name and photo url hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [updateProfile, updating] = useUpdateProfile(auth);
  //handle sign up user
  const onSubmit = async (data) => {
    try {
      const { email, password, name } = data;
      await createUserWithEmailAndPassword(email, password);
      console.log(email, password);
      await updateProfile({ displayName: name });
    } catch (error) {
      toast.error(error.message);
    }
  };
  // user navigate and sign in
  useEffect(() => {
    if (user) {
      toast.success("successfully sign up", {
        id: "success",
      });
      navigate("/");
    }
  }, [user]);
  // user error
  useEffect(() => {
    if (error) {
      toast.error(error.code, {
        id: "error",
      });
    }
  }, [error]);
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card max-w-xl bg-base-100 shadow-xl rounded-3xl">
        <div className="card-body items-center">
          <h2 className="card-title text-3xl my-4">Sign Up</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
          >
            <div className="flex flex-col items-start gap-y-1">
              <label className="text-xl" htmlFor="exampleFormControlInput1">
                Your Name
              </label>
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is require",
                  },
                })}
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
                placeholder="Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-left text-red-500">
                  {errors?.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <label className="text-xl" htmlFor="exampleFormControlInput1">
                Email
              </label>
              <input
                type="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is require",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Email is not valid",
                  },
                })}
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
              {errors.email?.type === "required" && (
                <p className="text-left text-red-500">
                  {errors?.email?.message}
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-left text-red-500">
                  {errors?.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <label className="text-xl" htmlFor="exampleFormControlInput1">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  validate: {
                    passValue: (value) => setPassValue(value),
                  },
                  pattern: {
                    value: /(?=.*[a-zA-Z])/,
                    message: "At least one special character",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum six characters",
                  },
                })}
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
              {errors.password?.type === "required" && (
                <p className="text-left text-red-500">
                  {errors?.password?.message}
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-left text-red-500">
                  {errors?.password?.message}
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-left text-red-500">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <label
                className="text-left text-xl"
                htmlFor="exampleFormControlInput1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "confirm password is required",
                  },
                  validate: {
                    match: (value) => value === passValue,
                  },
                })}
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
                placeholder="Confirm Password"
              />
              {errors.confirmPassword?.type === "match" && (
                <p className="text-left text-red-500">password mismatch</p>
              )}
              {errors.confirmPassword?.type === "required" && (
                <p className="text-left text-red-500">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <div>
              <label className="cursor-pointer label justify-start">
                <input
                  defaultChecked={true}
                  {...register("checkbox", {
                    required: {
                      value: true,
                      message: true,
                    },
                  })}
                  type="checkbox"
                  className="checkbox checkbox-primary w-4 h-4"
                />
                <span className="label-text ml-2">
                  I Agree your all terms and condition
                </span>
              </label>
            </div>
            <Button
              disabled={errors.checkbox?.message}
              type="submit"
              className={`w-full bg-[#3A4256] p-2 flex justify-center items-center gap-x-2 text-white rounded-md ${
                errors.checkbox?.message && "bg-gray-400 hover:bg-gray-400"
              }`}
            >
              Sign up
              {loading && <Loading className="w-4 h-4 bg-white"></Loading>}
            </Button>
          </form>
          <div>
            <p>
              <small>
                Already have a account{" "}
                <Link to="/login" className="text-[#19D3AE] hover:underline">
                  Login
                </Link>
              </small>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Signup;
