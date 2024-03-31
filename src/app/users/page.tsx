"use client";
import { useGetUsersQuery } from "@/redux/usersApi";
const Users = () => {
  const { data } = useGetUsersQuery();
  return (
    <>
      <h3>Users List</h3>
      {data?.map((user) => (
        <div>
          <p>
            {user.name} --- {user.email}
          </p>
        </div>
      ))}
    </>
  );
};

export default Users;
