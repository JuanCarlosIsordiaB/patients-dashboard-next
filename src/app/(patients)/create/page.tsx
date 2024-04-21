import Form from "@/components/Form";


export const SEO = {
  title: "Administrator Patients - Add Patients",
  description: "You can find all the patients here.",
  keywords: ["create", "patient", "form", "medical", "health"],
};

export default function CreatePage() {
  return (
    <div className="container mx-auto mt-20">
      <Form />
    </div>
  );
}
