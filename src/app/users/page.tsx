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
  const {
    isOpen: isAddContactOpen,
    onOpen: onAddContactOpen,
    onOpenChange: onAddContactOpenChange,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onOpenChange: onDeleteOpenChange,
  } = useDisclosure();
  const [newUser, setNewUser] = useState<Tuser>(initialState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <Button onPress={onAddContactOpen} color="primary">
        Add User
      </Button>
      <Modelview
        isOpen={isAddContactOpen}
        onOpenChange={onAddContactOpenChange}
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
            <Button onPress={onDeleteOpen} color="danger">
              Delete
            </Button>
          </p>
        </div>
      ))}
      <Modelview
        isOpen={isDeleteOpen}
        onOpenChange={onDeleteOpenChange}
        modelBody={<></>}
        modelHeaderName="Are you sure you want to delete"
        modelSubmitName="Yes"
      />
    </>
  );
};

export default Users;
