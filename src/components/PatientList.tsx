'use client'
import React from "react";
import { Patient } from "@/interfaces";
import { usePatientStore } from "@/store/store";

interface Props {
  patient: Patient;
}

const PatientList = ({ patient }: Props) => {
  const {removePatient, editPatient} = usePatientStore();


  const removeClickedPatient = (id: string) => {

    if (window.confirm("Are you sure you want to delete this patient?")) {
      removePatient(id);
    }else{
      return;
    }
    
  }

  return (
    <div
      key={patient.id}
      className="bg-white shadow-md rounded-lg py-5 px-5 mb-5"
    >
      <h3 className="font-bold text-xl text-gray-600">{patient.name}</h3>
      <div className="mt-5 flex justify-between">
        <p className="text-gray-500 text-sm">{patient.email}</p>
        <p className="text-sm text-indigo-500 font-bold">
          Entry Date: <span className="text-gray-600"> {patient.date}</span>
        </p>
      </div>
      <p className="mt-5 font-bold text-md text-indigo-500">
        Symptoms:{" "}
        <span className="block font-light text-black">{patient.symptoms}</span>{" "}
      </p>
      <div className="mt-5 flex justify-end">
        <button 
          onClick={() => removeClickedPatient(patient.id)}
          className="bg-red-400 py-1 px-2 rounded-md hover:bg-red-500 text-white font-bold transition-all">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientList;
