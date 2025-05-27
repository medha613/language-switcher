import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let postId = parseInt(searchParams.get('page'), 10);

  // Default to postId 1 if 'page' is not provided, NaN, or less than or equal to 0
  if (isNaN(postId) || postId <= 0) {
    postId = 1;
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ message: `Post with ID ${postId} not found` }, { status: 404 });
      }
      // For other HTTP errors (e.g., 500 from the external API)
      throw new Error(`Error fetching post: ${response.statusText} (status: ${response.status})`);
    }

    const post = await response.json();

    // The API might return an empty object {} for an ID that exists but has no content,
    // or for IDs that don't exist but don't return a 404.
    // A common check for a valid post object is to ensure it has an 'id' property.
    if (Object.keys(post).length === 0 || typeof post.id === 'undefined') {
      return NextResponse.json({ message: `Post with ID ${postId} not found or returned empty.` }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });

  } catch (error) {
    console.error(`Failed to fetch post ${postId}:`, error);
    // Send a generic message to the client, but log the specific error on the server.
    return NextResponse.json({ message: 'Failed to fetch post', error: error.message }, { status: 500 });
  }
}