'use client';
// for Users, 
// use simPle useQuey + caching

// CACHING is done using staleTime. for the amount of time the data is considered fresh, it will not be refetched.
// after that, it will be refetched in the background when the component mounts again.

import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response)
    return response.data;
} 

export const useUsers = () => {
    return useQuery({
        querykey: ['users'],
        queryFn: fetchUsers,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}