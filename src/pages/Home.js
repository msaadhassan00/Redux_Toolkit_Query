import React from 'react'
import User from '../components/User'
//import User from './components/User';
import {  useGetUsersQuery } from '../services/postApi'

const Home = () => {

const {data, isLoading} = useGetUsersQuery()

if(isLoading){
  return <h2 className="text-blue-700 text-4xl">Loading....</h2>
}

  return (
    <div className='container mx-auto p-6 shadow rounded'>
        <h1 className="text-blue-700 text-4xl">RTK Query</h1>

        <div className='flex flex-wrap justify-between gap-6'>
          {
            data?.map((pic,i)=>{
              return <User  send={pic} key={i}/>
            })
          }
        </div>


    </div>
  )
}

export default Home