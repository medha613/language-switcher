import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
    const users = await response.json();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ message: 'Failed to fetch users', error: error.message }, { status: 500 });
  }
}
