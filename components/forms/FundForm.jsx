import {Form} from "@nextui-org/form"
import {Input} from "@nextui-org/input"
import {DateInput} from "@nextui-org/date-input"
import {Button} from "@nextui-org/button"
import { useState } from "react"

export default function FundForm() {

  const [formData, setFormData] = useState({})

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Form Data:", data);
    setFormData(data)
    // Add logic to handle form submission
  };

  async function SubmitData() {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/${"finance/funds/new"}`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
            
          body: JSON.stringify(formData)
        });

        if (response.status !== 201) {
          alert("Error saving data");
        }          
        alert("saved successfully")
      } catch (error) {
        console.error("Error saving data:", error);
        alert("Error saving data")
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
        description="Enter the name"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Input
        name="Reason"
        type="text"
        labelPlacement="outside"
        label="Reason"
        description="Enter the reason for funding"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Input
        name="Amount"
        type="text"
        labelPlacement="outside"
        label="Amount"
        description="Enter the amount"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <DateInput
        name="Date"
        label="Date"
        description="Enter the funding date"
        radius="sm"
        isRequired
      />
      <Button color="primary" fullWidth radius="sm" type="submit">
        Submit Funding Details
      </Button>
    </Form>
  );
}