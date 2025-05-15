"use client";
// for Users,
// use simple useQuey + caching

// CACHING is done using staleTime. for the amount of time the data is considered fresh, it will not be refetched.
// after that, it will be refetched in the background when the component mounts again.

import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// useInfiniteQuery is used for paginated data, where you can load more data as the user scrolls down.
// useQuery is used for non-paginated data, where you want to fetch all the data at once.
// implement next & previous cursor