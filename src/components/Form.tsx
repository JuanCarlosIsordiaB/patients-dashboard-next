"use client";
import { useForm } from "react-hook-form";
import { redirect } from 'next/navigation';
import { Patient } from "../interfaces";
import {v4 as uuidv4} from 'uuid';
import { usePatientStore } from "../store/store";
import { useRouter } from 'next/navigation'



export const Form = () => {

  const { addPatient , patients} = usePatientStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Patient>();
  const router = useRouter();


  const registerPatient =  (data: Patient) => {
    data.id = uuidv4();
    addPatient(data);
    router.push('/list')
  };
  return (
    <div className=" mx-auto max-w-xl  h-screen ">
      
      <form
        onSubmit={handleSubmit(registerPatient)}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
      >
        <p className="text-2xl  mt-5 text-center mb-10 font-bold text-gray-500">
          Add New <span className=" text-indigo-500">Patient</span>
        </p>
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patient
          </label>
          <input
            id="name"
            className={`w-full p-3 border rounded-md ${
              errors.name ? "border-red-500" : "border-gray-100"
            }`}
            type="text"
            placeholder="Patient Name"
            {...register("name", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Minimum length should be 3",
              },
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className={`w-full p-3 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-100"
            }`}
            type="email"
            placeholder="Patient Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email format",
              },
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Date
          </label>
          <input
            id="date"
            className={`w-full p-3 border rounded-md ${
              errors.date ? "border-red-500" : "border-gray-100"
            }`}
            type="date"
            {...register("date", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className={`w-full p-3 border rounded-md ${
              errors.symptoms ? "border-red-500" : "border-gray-100"
            }`}
            placeholder="Symptoms of the patient"
            {...register("symptoms", {
              required: "This field is required",
            })}
          ></textarea>
        </div>

        <input
          //onClick={() => router.push('/list')}
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase rounded-md font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Add Patient"
        />
      </form>
    </div>
  );
};

export default Form;
