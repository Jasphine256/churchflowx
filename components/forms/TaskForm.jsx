"use client"
import {Input, DatePicker, Textarea,
    Card, CardBody, CardHeader, CardFooter,
    Button,
    Radio, RadioGroup
} from "@nextui-org/react";

import * as React from "react"

export default function TaskForm() {

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [startDate, setStartDate] = React.useState("") // object type
    const [dateDue, setDateDue] = React.useState("") // object type

    const [status, setStatus] = React.useState(new Set(["status"]))
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill in Task Details")

    const validateAndSubmit = () => {
        if (title == "" ){
            setHeaderMessage("Name cannot be empty")
        } else if(description == ""){
            setHeaderMessage("Description cannot be empty")
        } else if(startDate == ""){
            setHeaderMessage("Date Cannot Be empty")
        } else if(dateDue == ""){
            setHeaderMessage("Date cannot be empty")
        } else if(status == "status"){
            setHeaderMessage("Status cannot be empty")
        }else{
            setHeaderMessage("All data is valid")
        }
    }

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Title" description="name the task" onValueChange={setTitle} radius="sm"  variant="underlined" isRequired />
            <Textarea type="text" labelPlacement="inside" label="Description" description="describe the task" onValueChange={setDescription} radius="sm" isRequired isClearable={true} className="pt-3"/>
            <DatePicker label="Start Date" description="task assigned on ?" onChange={setStartDate} className="pt-6" radius="sm" isRequired validate={true} />
            <DatePicker label="Start Date" description="task finished by ?" onChange={setDateDue} className="pt-6" radius="sm" isRequired validate={true} />
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