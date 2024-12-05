import {Input, DatePicker, Textarea,
    Card, CardBody, CardHeader, CardFooter,
    Button,
} from "@nextui-org/react";

import * as React from "react"

export default function ProjectForm() {

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [handler, setHandler] = React.useState("")
    const [budget, setBudget] = React.useState("")
    const [startDate, setStartDate] = React.useState("") // object type
    const [endDate, setEndDate] = React.useState("") // object type
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill in Project Details")

    const validateAndSubmit = () => {
        if (title == "" ){
            setHeaderMessage("Name cannot be empty")
        } else if(description == ""){
            setHeaderMessage("Description cannot be empty")
        } else if(handler == ""){
            setHeaderMessage("Handler Cannot Be empty")
        } else if(budget == ""){
            setHeaderMessage("Budget cannot be empty")
        } else if(startDate == ""){
            setHeaderMessage("Date Cannot Be empty")
        } else if(endDate == ""){
            setHeaderMessage("Date cannot be empty")
        }else{
            setHeaderMessage("All data is valid")
        }
    }

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Title" description="name the project" onValueChange={setTitle} radius="sm"  variant="underlined" isRequired />
            <Textarea type="text" labelPlacement="inside" label="Description" description="describe the projecct" onValueChange={setDescription} radius="sm" isRequired isClearable={true} className="pt-3"/>
            <Input type="text" labelPlacement="outside" label="Handler" description="person in charge" onValueChange={setHandler} radius="sm"  variant="underlined" isRequired />
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