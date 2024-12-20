import {Form} from "@nextui-org/form"
import {Input, Textarea} from "@nextui-org/input"
import {Button} from "@nextui-org/button"
import { useSession } from "next-auth/react"

export default function PlanForm() {

  const {data:session} = useSession()

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Form Data:", data);
    SubmitPlanData(data)
  };
    
    async function SubmitPlanData(formData) {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/collections/plans/new`;
    
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
          alert("Error saving plan data");
        }
        alert("Plan successfully added!");
      } catch (error) {
        alert("Error saving plan data");
      }
    }

  return (
    <Form onSubmit={onSubmit}  className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 m-auto">
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
        description="Enter the project title"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Textarea
        name="Description"
        type="text"
        labelPlacement="outside"
        label="Description"
        description="Enter the project description"
        radius="sm"
        variant="bordered"
        isRequired
      />
      <Input
        name="Handler"
        type="text"
        labelPlacement="outside"
        label="Handler"
        description="Enter the project handler"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Textarea
        name="Team"
        type="text"
        labelPlacement="outside"
        label="Team"
        description="Enter the project team"
        radius="sm"
        variant="bordered"
        isRequired
      />
      <Input
        name="Budget"
        type="text"
        labelPlacement="outside"
        label="Budget"
        description="Enter the project budget"
        radius="sm"
        variant="underlined"
        isRequired
      />
      <Button type="reset" variant="flat">Clear</Button>
      <Button color="primary" fullWidth radius="sm" type="submit">
        Submit Project Details
      </Button>
    </Form>
  );
}