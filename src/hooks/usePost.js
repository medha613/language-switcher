"use client"

import { useInfiniteQuery } from "@tanstack/react-query";


const fetchPosts = async ({pageParam = 1}) => {
    const res= await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`
    );
    return res.data
}


export const usePosts = () => {
    return useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        getNextPageParam: (_lastPage, allPages) =>{
            console.log(_lastPage, allPages, "LAST PAGE")
            if(allPages.length <10){
                return allPages.length+1;
            }else{
                return undefined;
            }
        }
    })
}