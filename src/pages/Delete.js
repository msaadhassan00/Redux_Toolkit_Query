import React from 'react'
import { useParams } from 'react-router-dom';
import { useDeleteUserByIdMutation } from '../services/postApi'

const Delete = () => {
    const { id } = useParams();
    const {data} = useDeleteUserByIdMutation(Number(id))
console.log(id);
console.log(data);
  return (
    <div>Delete</div>
  )
}

export default Delete