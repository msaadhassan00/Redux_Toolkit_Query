import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserbyIdQuery } from "../services/postApi";

const ViewStudent = () => {
  const { id } = useParams();
  
  const { data, isLoading } = useGetUserbyIdQuery(Number(id));

    if(isLoading){
        return <h2>Loading</h2>
    }

//   console.log(data);
  return (
    <div className="w-[60]  ">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div className="flex justify-start mt-4">
          <p className="text-xl font-medium text-indigo-500">ID: {data.id}</p>
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">
            {data.name}
          </h2>

          <p className="mt-2 text-gray-600">{data.email}</p>
          {/* <p className="mt-2 text-gray-600">{data.address}</p> */}
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-indigo-500">
        {data.phone}
      </a>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
