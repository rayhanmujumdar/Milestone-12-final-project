import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Shared/Button/Button";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import {
  useAuthState,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const [user,loading] = useAuthState(auth);
  //use sign In react-firebase-hooks
  const [signInWithEmailAndPassword, LoginUser, LoginLoading, LoginError] =
  useSignInWithEmailAndPassword(auth);
  console.log(user?.email)
  const [token] = useToken(user)
  // react-hooks-form hooks
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };
  // login user toast success
  useEffect(() => {
    if (LoginUser) {
      toast.success("SuccessFully login", {
        id: "success",
      });
    }
  },[LoginUser])
  // location route changeing
  const location = useLocation();
  const navigate = useNavigate();
  
  const from = location?.state?.from?.pathname || "/";
  // google error handle to toast
  useEffect(() => {
    if (LoginError) {
      toast.error(LoginError?.code, {
        id: "error",
        duration: 2000,
      });
    }
  },[LoginError])
  //user find to route change
  useEffect(() => {
    if (token || user) {
      navigate(from, { replace: true });
    }
  }, [token,navigate,from,user]);
  if(loading){
    return <Loading className='w-8 h-8'></Loading>
  }
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <PageTitle title={"Login"}></PageTitle>
      <div className="card max-w-xl bg-base-100 shadow-xl rounded-3xl">
        <div className="card-body items-center">
          <h2 className="card-title text-3xl my-2">Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
          >
            <label
              className="text-left text-xl"
              htmlFor="exampleFormControlInput1"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "email is require",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a Invalid Email",
                },
              })}
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
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-left text-red-500">{errors?.email?.message}</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-left text-red-500">{errors?.email?.message}</p>
            )}

            <label
              className="text-left text-xl"
              htmlFor="exampleFormControlInput1"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "password required",
                },
                minLength: {
                  value: 6,
                  message: "password must be 6 character",
                },
              })}
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
            {errors.password?.type === "required" && (
              <p className="text-left text-red-500">
                {errors?.password?.message}
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-left text-red-500">
                {errors?.password?.message}
              </p>
            )}
            <p className="text-left cursor-pointer hover:underline">
              Forget Password
            </p>
            <Button
              type="submit"
              className="w-full bg-[#3A4256] p-2 text-white rounded-md flex gap-x-2 justify-center items-center"
            >
              Submit
              {LoginLoading && <Loading className="w-4 h-4"></Loading>}
            </Button>
          </form>
          <div>
            <p>
              <small>
                {" "}
                New to Doctors Portal?{" "}
                <Link to="/signUp" className="text-[#19D3AE] hover:underline">
                  Create new account
                </Link>
              </small>
            </p>
          </div>
          <SocialLogin from={from}></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
