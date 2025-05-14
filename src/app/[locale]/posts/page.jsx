'use client'

import { usePosts } from "@/hooks/usePost"

export default function PostsPage(){
    const {data, error} = usePosts()

    console.log(data, "DAATAA");
    return(
        <div>
            <h1>Post Page</h1>
            <p>Here you can manage post</p>          
        </div>
    )
}