import { data } from 'autoprefixer'
import React from 'react'
import { Link } from 'react-router-dom'

const User = ({send}) => {
    const {id,name,username,email} = send
  //  console.log(send)
  return (
    <div className='w-[60] shadow '>
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div className="flex justify-start mt-4">
          <p className="text-xl font-medium text-indigo-500">ID: {id}</p>
        </div>
        <div>
        <Link to={`/students/${id}`}>
            <h2 className="text-gray-800 text-3xl font-semibold">
              {name}
            </h2>
         </Link>
          <p className="mt-2 text-gray-600">{email}</p>
          {/* <p className="mt-2 text-gray-600">{data.phone}</p> */}
        </div>
        <div className="flex justify-end mt-4">
        <Link to={`/delete/${id}`}>
          <button href="#" className="text-xl font-medium text-indigo-500">
            Delete
          </button>
          </Link>
        </div>
      
      </div>
    </div>
  )
}

export default User