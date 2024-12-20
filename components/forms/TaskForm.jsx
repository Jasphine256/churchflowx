import {Form} from "@nextui-org/form"
import {Input, Textarea} from "@nextui-org/input"
import {DateInput} from "@nextui-org/date-input"
import {Button} from "@nextui-org/button"
import { useState } from "react"
import { useSession } from "next-auth/react"

export default function TaskForm() {

  const {data:session} = useSession()
  const [formData, setFormData] = useState({})

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Form Data:", data);
    setFormData(data)
    // Add logic to handle form submission
  };

  async function SubmitTaskData() {
    const baseUrl = "https://churchflowx-backend.onrender.com";
    const url = `${baseUrl}/collections/tasks/new`;

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
        alert("Error saving task data");
      }
      alert("Task successfully added!");
    } catch (error) {
      alert("Error saving task data");
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
        name="Title"
        type="text"
        labelPlacement="outside"
        label="Title"
        description="Enter the task title"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Textarea
        name="Description"
        type="text"
        labelPlacement="outside"
        label="Description"
        description="Enter the task description"
        radius="sm"
        variant="bordered"
        isRequired
      />
      <DateInput
        name="StartDate"
        label="Start Date"
        description="Enter the start date"
        radius="sm"
        isRequired
      />
      <DateInput
        name="DateDue"
        label="Date Due"
        description="Enter the due date"
        radius="sm"
        isRequired
      />
      <Input
        name="Status"
        type="text"
        labelPlacement="outside"
        label="Status"
        description="Enter the task status"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Button color="primary" fullWidth radius="sm" type="submit">
        Submit Task Details
      </Button>
    </Form>
  );
}