"use client"
import {Form} from "@nextui-org/form"
import {Input} from "@nextui-org/input"
import {DateInput} from "@nextui-org/date-input"
import {Button} from "@nextui-org/button"
import { useState } from "react"

export default function PastorForm() {

    const [formData, setFormData] = useState({})

    const onSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      console.log("Form Data:", data);
      setFormData(data)
      // Add logic to handle form submission
    };

    async function SubmitPastorData() {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/people/pastors/new`;

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
          alert("Error saving pastor data");
        }
    
        const responseData = await response.json();
        console.log(responseData);
        alert("Pastor successfully added!");
      } catch (error) {
        alert("Error saving pastor data");
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
    <DateInput
      name="Date"
      label="Date"
      description="Enter the date"
      radius="sm"
      isRequired
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
      name="Ministry"
      type="text"
      labelPlacement="outside"
      label="Ministry"
      description="Enter your ministry"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <DateInput
      name="DOB"
      label="Date of Birth"
      description="Enter your date of birth"
      radius="sm"
      isRequired
    />
    <DateInput
      name="PastorSince"
      label="Pastor Since"
      description="Enter the date you became a pastor"
      radius="sm"
      isRequired
    />
    <Input
      name="Zone"
      type="text"
      labelPlacement="outside"
      label="Zone"
      description="Enter your zone"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="Village"
      type="text"
      labelPlacement="outside"
      label="Village"
      description="Enter your village"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="Parish"
      type="text"
      labelPlacement="outside"
      label="Parish"
      description="Enter your parish"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="SubCounty"
      type="text"
      labelPlacement="outside"
      label="Subcounty"
      description="Enter your subcounty"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="FormerReligion"
      type="text"
      labelPlacement="outside"
      label="Former Religion"
      description="Enter your previous religion"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="Educ"
      type="text"
      labelPlacement="outside"
      label="Education"
      description="Enter your education level"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="Occupation"
      type="text"
      labelPlacement="outside"
      label="Occupation"
      description="Enter your occupation"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="Where"
      type="text"
      labelPlacement="outside"
      label="Where"
      description="Enter your work location"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="MaritalStatus"
      type="text"
      labelPlacement="outside"
      label="Marital Status"
      description="Enter your marital status"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="Children"
      type="text"
      labelPlacement="outside"
      label="Children"
      description="Enter number of children"
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
      type="text"
      labelPlacement="outside"
      label="Email"
      description="Enter your email address"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="Father"
      type="text"
      labelPlacement="outside"
      label="Father's Name"
      description="Enter your father's name"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="Mother"
      type="text"
      labelPlacement="outside"
      label="Mother's Name"
      description="Enter your mother's name"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="HomeVillage"
      type="text"
      labelPlacement="outside"
      label="Home Village"
      description="Enter your home village"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="HomeParish"
      type="text"
      labelPlacement="outside"
      label="Home Parish"
      description="Enter your home parish"
      radius="sm"
      variant="underlined"
      isRequired
    />
    <Input
      name="HomeSubCounty"
      type="text"
      labelPlacement="outside"
      label="Home SubCounty"
      description="Enter your home subcounty"
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
      Submit Pastor Details
    </Button>
  </Form>
  );
}