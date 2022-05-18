import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import useToken from "../../../Hooks/useToken";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

const SocialLogin = ({from}) => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [token] = useToken(googleUser);
    useEffect(() => {
      if (token) {
        toast.success("successfully login", {
          id: "success",
        });
        navigate(from || "/", { replace: true });
      }
    }, [token]);
    useEffect(() => {
      if (googleError) {
        toast.error(googleError?.code, {
          id: "error",
          duration: 2000,
        });
      }
    },[googleError])
  return (
    <div className="w-full my-5">
      <div className="flex justify-center items-center">
        <div className="w-full h-1 bg-[#CFCFCF]"></div>
        <p className="uppercase px-1.5">or</p>
        <div className="w-full h-1 bg-[#CFCFCF]"></div>
      </div>
      <div className="w-full">
        <Button
          onClick={() => signInWithGoogle()}
          type="submit"
          className="flex justify-center items-center gap-x-2 bg-transparent text-black p-2 rounded-md w-full py-2 border-gray-500 border-2 hover:btn-accent hover:text-white"
        >
          continue With Google
          {googleLoading && (
            <Loading className='w-3 h-3 bg-black'></Loading>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
