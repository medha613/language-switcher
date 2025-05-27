"use client";

import { usePosts } from "@/hooks/usePost";

export default function PostsPage() {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>
        <p className="text-lg text-center">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>
        <p className="text-red-500 text-center">Error loading posts: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Posts</h1>
      {data?.pages && data.pages.length > 0 ? (
        data.pages.map((post, index) => (
          // Each 'page' from useInfiniteQuery is a post object in our case
          post && post.id ? ( // Ensure post and post.id are valid
            <div key={post.id} className="bg-white p-6 shadow-xl rounded-lg mb-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 capitalize">{post.title}</h2>
              <p className="text-gray-700 leading-relaxed">{post.body}</p>
            </div>
          ) : (
            // Fallback for posts that might be null or lack an id, though ideally data is clean
            <div key={`no-id-post-${index}`} className="bg-yellow-100 p-4 shadow-md rounded-lg mb-6">
              <p className="text-yellow-700">Post data is incomplete or missing ID.</p>
            </div>
          )
        ))
      ) : (
        <p className="text-center text-gray-500">No posts found.</p>
      )}

      {hasNextPage && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md disabled:opacity-50 transition-colors duration-300"
          >
            {isFetchingNextPage
              ? "Loading more..."
              : "Load More"}
          </button>
        </div>
      )}
      {!hasNextPage && data?.pages && data.pages.length > 0 && (
         <p className="text-center text-gray-500 mt-8">You've reached the end of the posts.</p>
      )}
    </div>
  );
}
