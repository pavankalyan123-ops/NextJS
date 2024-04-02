"use client";
import React, { useState } from "react";
import { useGetUsersQuery } from "@/redux/usersApi";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import Modelview from "@/components/Modelview";
import type { Tuser } from "@/types/userType";

const initialState = {
  id: 1,
  name: "",
  email: "",
  age: 1,
};

const Users = () => {
  const { data } = useGetUsersQuery();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newUser, setNewUser] = useState<Tuser>(initialState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <Button onPress={onOpen} color="primary">
        Add Contact
      </Button>
      <Modelview
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        modelBody={
          <>
            <Input
              autoFocus
              label="name"
              value={newUser.name}
              name="name"
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your name"
              variant="bordered"
            />
            <Input
              autoFocus
              label="Email"
              value={newUser.email}
              name="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              autoFocus
              label="age"
              type="number"
              value={newUser.age.toString()}
              name="age"
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your age"
              variant="bordered"
            />
          </>
        }
        modelHeaderName="Login Page"
        modelSubmitName="Submit"
      />
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
