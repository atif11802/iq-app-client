import React from 'react'
import { useQuery } from '@tanstack/react-query'
import instance from '../axiosInstance'

export const fetchIqName = async () => {
    try{
      const data = await instance.get('/getIqName',{
            headers: {
                'Content-Type': 'application/json',

            }
       })
       return data.data
    }
    catch(e){
        console.log(e)
    }
}

const useGetIqName = () => {
    return useQuery({ queryKey: ['iqNames'], queryFn: fetchIqName })
    
}

export default useGetIqName