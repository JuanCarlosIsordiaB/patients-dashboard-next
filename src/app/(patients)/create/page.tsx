import Form from "@/components/Form";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Administrator Patients - Create",
  description: "Start with the administrator of your patients",
};

export default function CreatePage() {
  return (
    <div className="container mx-auto mt-20">
      <Form />
      
    </div>
  );
}
