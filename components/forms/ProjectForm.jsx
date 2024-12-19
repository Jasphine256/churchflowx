"use client"
import {CardBody, Card, CardFooter, CardHeader} from "@nextui-org/card"
import {Input, Textarea} from "@nextui-org/input"
import {DatePicker} from "@nextui-org/date-picker"
import {Button} from "@nextui-org/button"

import { useSession } from "next-auth/react"
import * as React from "react"

export default function ProjectForm() {

    const {data:session, status} = useSession()

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [handler, setHandler] = React.useState("");
    const [budget, setBudget] = React.useState("");
    const [startDate, setStartDate] = React.useState(""); // object type
    const [endDate, setEndDate] = React.useState(""); // object type
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill in Project Details");
    
    async function SubmitProjectData() {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/collections/projects/new`;
    
      const new_project = {
        GID: session.user.id,
        Title: title,
        Description: description,
        Handler: handler,
        Budget: budget,
        StartDate: `${startDate.day}-${startDate.month}-${startDate.year}`,
        EndDate: `${endDate.day}-${endDate.month}-${endDate.year}`,
      };
    
      console.log(new_project);
      console.log(JSON.stringify(new_project));
    
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_project),
        });
    
        console.log("REQUEST SENT .................");
    
        if (response.status !== 201) {
          console.error(`HTTP Error: ${response.status}`);
          console.log(await response.text()); // Log server response for debugging
          alert("Error saving project data");
          return;
        }
    
        const responseData = await response.json();
        console.log(responseData);
        alert("Project successfully added!");
      } catch (error) {
        console.error("Error saving project data:", error);
        alert("Error saving project data");
      }
    }
    
    const validateAndSubmit = () => {
      if (!title) {
        setHeaderMessage("Title cannot be empty");
      } else if (!description) {
        setHeaderMessage("Description cannot be empty");
      } else if (!handler) {
        setHeaderMessage("Handler cannot be empty");
      } else if (!budget) {
        setHeaderMessage("Budget cannot be empty");
      } else if (!startDate) {
        setHeaderMessage("Start Date cannot be empty");
      } else if (!endDate) {
        setHeaderMessage("End Date cannot be empty");
      } else {
        setHeaderMessage("Submitting...");
        SubmitProjectData();
      }
    };
    

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Title" description="name the project" onChange={setTitle} radius="sm"  variant="underlined" isRequired />
            <Textarea type="text" labelPlacement="inside" label="Description" description="describe the projecct" onValueChange={setDescription} radius="sm" isRequired isClearable={true} className="pt-3"/>
            <Input type="text" labelPlacement="outside" label="Handler" description="person in charge" onChange={setHandler} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Budget" description="expense for project execution" onValueChange={setBudget} radius="sm" isRequired />
            <DatePicker label="Start Date" description="project started on" onChange={setStartDate} className="pt-6" radius="sm" isRequired validate={true} />
            <DatePicker label="End Date" description="project ended on (optional)" onChange={setEndDate} className="pt-6" radius="sm" validate={true} />
        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Save Project</Button>
        </CardFooter>
    </Card>
  );
}