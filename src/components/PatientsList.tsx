"use client";
import { usePatientStore } from "@/store/store";
import PatientList from "./PatientList";
import Return from "./Return";

const PatientsList = () => {
  const { patients } = usePatientStore();
  return (
    <div>
    
      {patients && patients.length > 0 ? (
        <>
            <h3 className="bg-white font-bold text-xl shadow-md m-9 p-5 text-center text-gray-700 rounded-md">Total Patients: <span className="text-indigo-500">{patients.length}</span></h3> 
          <div className="">
            {patients.map((patient) => (
              <PatientList patient={patient} key={patient.id} />
            ))}
          </div>
        </>
      ) : (
        <Return />
      )}
    </div>
  );
};

export default PatientsList;
