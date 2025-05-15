"use client";

import { usePosts } from "@/hooks/usePost";

export default function PostsPage() {
  const { data, error, isLoading } = usePosts();

  return (
    <div>
      {isLoading ? (
        <>
          <h1>loading</h1>
        </>
      ) : (
        <>
          <h1>{data?.pages[0]?.userId}</h1>
          <p>{data?.pages[0]?.title}</p>
          <p>{data?.pages[0]?.body}</p>
        </>
      )}
      {error && <h1>No Post to show</h1>}
    </div>
  );
}
