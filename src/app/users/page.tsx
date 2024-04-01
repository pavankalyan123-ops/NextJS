"use client";
import React, { useState } from "react";
import { useGetUsersQuery } from "@/redux/usersApi";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import Modelview from "@/components/Modelview";
import type { Tuser } from "@/types/userType";

const Users = () => {
  const { data } = useGetUsersQuery();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newUser, setNewUser] = useState<Tuser>();
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
              label="Email"
              value=""
              name="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your email"
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
