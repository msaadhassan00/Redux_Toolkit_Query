import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath:'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),

    endpoints:(builder)=>({
        getUsers: builder.query({
            query:()=>{
                return 'users'
            }
        }),
        getUserbyId: builder.query({
           query:(id)=>({
               url :`users/${id}`,
               method : 'GET',
           })
        }),
        deleteUserById: builder.mutation({
            query:(id)=>({
                url :`users/${id}`,
               method : 'DELETE',
            })
        }),
        createUser: builder.mutation({
            query:()=>({
                url:'users',
                body:[
                    {
                        
                    }
                ]
            })
        })
    })
})

export const { useGetUsersQuery, useGetUserbyIdQuery, useDeleteUserByIdMutation } = postApi;
