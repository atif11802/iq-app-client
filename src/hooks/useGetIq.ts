import { useQuery } from '@tanstack/react-query'
import React from 'react'
import instance from '../axiosInstance'

export const fetchIq = async (id:string) => {
    try{
      const data = await instance.get(`getIqSet/${id}`,{
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


const useGetIq = (id:string) => {
 return useQuery({ queryKey: ['iq',id], queryFn: ()=> fetchIq(id) })
}

export default useGetIq