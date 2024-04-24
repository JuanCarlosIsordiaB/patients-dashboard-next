import PatientsList from "@/components/PatientsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrator Patients - List ",
  description: "Start with the administrator of your patients",
};

export default function CreatePage() {
  return (
    <div className="container mx-auto mt-20 max-w-md h-screen">
      <PatientsList />
    </div>
  );
}
