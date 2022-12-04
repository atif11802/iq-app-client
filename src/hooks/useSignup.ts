import { useMutation } from '@tanstack/react-query'
import React from 'react'
import instance from '../axiosInstance'

interface useSignupProps {
    email: string,
    password: string,
    name: string
}

const signUp = async ({email, password,name}:useSignupProps ) => {
    const response = await instance.post('/signup', { email, password,name })
    return response.data
}

const useSignup = ({email, password,name}:useSignupProps ) => {
    return useMutation({
        mutationFn:()=>signUp({email, password,name}),
        onError: (error:any, variables, context) => {
            console.log(error.response.data.error);
        alert(error.response.data.error)
          }
})}

export default useSignup