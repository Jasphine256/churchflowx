"use client"

import {CardBody, Card, CardFooter, CardHeader} from "@nextui-org/card"
import {Input, Textarea} from "@nextui-org/input"
import {Radio, RadioGroup} from "@nextui-org/radio"
import {DateInput} from "@nextui-org/date-input"
import {Button} from "@nextui-org/button"

import * as React from "react"
import { useSession } from "next-auth/react";

export default function TaskForm() {

    const {data:session} = useSession()

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [startDate, setStartDate] = React.useState(""); // object type
    const [dateDue, setDateDue] = React.useState(""); // object type
    const [status, setStatus] = React.useState("");
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill in Task Details");
    
    async function SubmitTaskData() {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/collections/tasks/new`;
    
      const new_task = {
        GID: session.user.id,
        Title: title,
        Description: description,
        StartDate: `${startDate.day}-${startDate.month}-${startDate.year}`,
        DateDue: `${dateDue.day}-${dateDue.month}-${dateDue.year}`,
        Status: status,
      };
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_task),
        });
        if (response.status !== 201) {
          alert("Error saving task data");
        }
        alert("Task successfully added!");
      } catch (error) {
        alert("Error saving task data");
      }
    }
    
    const validateAndSubmit = () => {
      if (!title) {
        setHeaderMessage("Title cannot be empty");
      } else if (!description) {
        setHeaderMessage("Description cannot be empty");
      } else if (!startDate) {
        setHeaderMessage("Start Date cannot be empty");
      } else if (!dateDue) {
        setHeaderMessage("Due Date cannot be empty");
      } else if (!status) {
        setHeaderMessage("Status must be selected");
      } else {
        setHeaderMessage("Submitting...");
        SubmitTaskData();
      }
    };
    

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Title" description="name the task" onValueChange={setTitle} radius="sm"  variant="underlined" isRequired />
            <Textarea type="text" labelPlacement="inside" label="Description" description="describe the task" onValueChange={setDescription} radius="sm" isRequired isClearable={true} className="pt-3"/>
            <DateInput label="Start Date" description="task assigned on ?" onChange={setStartDate} className="pt-6" radius="sm" isRequired validate={true} />
            <DateInput label="Date Due" description="task finished by ?" onChange={setDateDue} className="pt-6" radius="sm" isRequired validate={true} />
            <RadioGroup label={"Set Status"} value={status} onValueChange={setStatus} className="pt-3">
                <Radio value={"finished"} description="the task is completed" color="success">Finished</Radio>
                <Radio value={"pending"} description="the task is in execution" color="primary">Pending</Radio>
            </RadioGroup>
        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Save Task</Button>
        </CardFooter>
    </Card>
  );
}