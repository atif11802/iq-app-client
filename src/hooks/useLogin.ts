import { useMutation } from '@tanstack/react-query'
import React from 'react'
import instance from '../axiosInstance'

interface useSignupProps {
    email: string,
    password: string,
   
}

const Login = async ({email, password}:useSignupProps ) => {
    const response = await instance.post('/signin', { email, password })
    return response.data
}

const useLogin = ({email, password}:useSignupProps ) => {
    return useMutation({
        mutationFn:()=>Login({email, password}),
        onError: (error:any, ) => {
            // console.log(error.response.data.error);
        alert(error.response.data.error)
          }
})}

export default useLogin