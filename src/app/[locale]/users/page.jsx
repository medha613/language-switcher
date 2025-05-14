"use client";

import { useUsers } from "@/hooks/useUsers";

export default function UsersPage() {
  const { data, error } = useUsers();

  console.log(data, "DAATAA");
  return (
    <div>
      <h1>Users Page</h1>
      <p>Here you can manage user</p>
    </div>
  );
}
