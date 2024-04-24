import Link from "next/link";
import React from "react";

const Return = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-9">
      <p className="text-2xl text-gray-500 mb-4">No Patients Found</p>
      <Link
        href={`create`}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all"
      >
        Create Now
      </Link>
    </div>
  );
};

export default Return;
