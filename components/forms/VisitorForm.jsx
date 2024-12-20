'use client'
import {Form} from "@nextui-org/form"
import {Input} from "@nextui-org/input"
import {Button} from "@nextui-org/button"
import { useState } from "react"
import { useSession } from "next-auth/react"

export default function PastorForm() {
    
    const {data:session} = useSession()

    const onSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      console.log("Form Data:", data);
      SubmitVisitorData(data)
    };
    async function SubmitVisitorData(formData) {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/people/visitors/new`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.status !== 201) {
          alert("Error saving visitor data");
        }
        alert("Visitor successfully added!");
      } catch (error) {
        alert("Error saving visitor data");
      }
    }
    
  return (
    <Form onSubmit={onSubmit} validationBehavior="native" className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 m-auto">
        <Input
        name="GID"
        type="text"
        value={session.user.id}
        isRequired
        className="hidden"
      />
      <Input
        name="Name"
        type="text"
        labelPlacement="outside"
        label="Name"
        description="Enter your full name"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Input
        name="Tel"
        type="text"
        labelPlacement="outside"
        label="Telephone"
        description="Enter your phone number"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Input
        name="Email"
        type="email"
        labelPlacement="outside"
        label="Email"
        description="Enter your email address"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Input
        name="HomeDistrict"
        type="text"
        labelPlacement="outside"
        label="Home District"
        description="Enter your home district"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Button color="primary" fullWidth radius="sm" type="submit">
        Submit Visitor Details
      </Button>
    </Form>
  );
}
