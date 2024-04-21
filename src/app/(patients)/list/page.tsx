export const SEO = {
  title: "Administrator Patients - Patients List",
  description: "You can find all the patients here.",
  keywords: ["create", "patient", "form", "medical", "health"],
};

export default function CreatePage() {
  return (
    <div className="container mx-auto mt-20 max-w-md">
      <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <h3 className="font-bold text-2xl text-gray-600 text-center ">
          Total Patients:<span className="text-3xl p-2 text-indigo-500">5</span>
        </h3>
      </div>{" "}
      {/* Added closing tag for the div element */}
    </div>
  );
}
