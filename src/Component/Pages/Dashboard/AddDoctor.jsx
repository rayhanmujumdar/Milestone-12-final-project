import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";
import Button from "../../Shared/Button/Button";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data:services , isLoading } = useQuery("services", () => {
    return axiosPrivate.get("http://localhost:5000/services");
  });

  /* 
  * 3 ways to store images
  * 1.Third party storage // free open public storage is ok for practice project
  * 2.your own storage in your own server (file system)
  * 3.Database: Mongodb
  * YUP: to validate file: search: yup file validation for react hook form
  * *
  * * */
//  image upload
 const imageStoredKey = '17792340d0cfcbfa03b080e454423d55'
  const onSubmit = async (data) => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStoredKey}`
    const {data : uploadImg} = await axios(url,{
        method: "POST",
        data: formData
    })
      const img = uploadImg?.data.url
        const doctor = {
            ...data,
            img
        }
    const {data: doctorUpload} = await axiosPrivate.post('http://localhost:5000/doctor',doctor)
    if(doctorUpload.insertedId){
      toast.success('Doctor post Uploaded',{
        id: 'success'
      })
      reset()
    }else{
      toast.error('Failed to add the doctor',{
        id: 'error'
      })
    }
};
if (isLoading) {
      return <Loading className="w-8 h-8"></Loading>;
  }
  return (
    <div className="mt-3">
      <h1 className="text-3xl">Add a new Doctor</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <div className="flex flex-col items-start gap-y-1">
          <label className="text-xl" htmlFor="exampleFormControlInput1">
            Name
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
            <p className="text-left text-red-500">{errors?.email?.message}</p>
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
            <p className="text-left text-red-500">{errors?.email?.message}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-y-1">
          <label className="text-xl" htmlFor="exampleFormControlInput1">
            specialty
          </label>
        <select
        {...register("specialty", {
            required: {
              value: true,
              message: "Specialty is required",
            },
          })}
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
          {services?.data.map((service, index) => (
            <option key={index} value={service?.name}>
              {service.name}
            </option>
          ))}
        </select>
        </div>
        <div>
        <label className="text-xl text-left inline-block w-full" htmlFor="exampleFormControlInput1">
            photo
          </label>
          <input
            type="file"
            {...register("image", {
              required: {
                value: true,
                message: "image is require",
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
            <p className="text-left text-red-500">{errors?.email?.message}</p>
          )}
        </div>
        <Button
          disabled={errors.checkbox?.message}
          type="submit"
          className={`w-full bg-[#3A4256] p-2 flex justify-center items-center gap-x-2 text-white rounded-md ${
            errors.checkbox?.message && "bg-gray-400 hover:bg-gray-400"
          }`}
        >
          Add
          {/* {loading && <Loading className="w-4 h-4 bg-white"></Loading>} */}
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
