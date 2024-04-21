

'use client'
import { usePatientStore } from "@/store/store";

export default function CreatePage() {
  const { patients } = usePatientStore();

  return (
    <div className="container mx-auto mt-20 max-w-md">
      <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <h3 className="font-bold text-2xl text-gray-600 text-center ">
          Total Patients:<span className="text-3xl p-2 text-indigo-500">5</span>
        </h3>
      </div>{" "}
      <div>
        {patients.map((patient) => (
          <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <h3 className="font-bold text-2xl text-gray-600 text-center ">
              {patient.name}
            </h3>
            <p className="text-gray-500 text-center">{patient.email}</p>
            <p className="text-gray-500 text-center">{patient.date}</p>
            <p className="text-gray-500 text-center">{patient.symptoms}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
