"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async ({ pageParam = 1 }) => {
  console.log(pageParam, "PAGE PARAM");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${pageParam}`
  );
  const data = await res.json();
  return data;
};

export const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      // console.log(lastPage, pages, "LAST PAGE");
      if (pages.length < 10) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
    // getPreviousPageParam: (lastPage, pages) => {},
  });
};

//
