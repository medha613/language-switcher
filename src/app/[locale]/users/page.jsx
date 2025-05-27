"use client";

import { useUsers } from "@/hooks/useUsers";

export default function UsersPage() {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p className="text-lg">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p className="text-red-500">Error loading users: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Users</h1>
      {users && users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
}
