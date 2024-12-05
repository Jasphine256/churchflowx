"use client"
import {Input, DatePicker, Textarea,
    Card, CardBody, CardHeader, CardFooter,
    Button,
} from "@nextui-org/react";

import * as React from "react"

export default function PlanForm() {

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [handler, setHandler] = React.useState("")
    const [budget, setBudget] = React.useState("")
    const [team, setTeam] = React.useState("")
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill in Plan Details")

    const validateAndSubmit = () => {
        if (title == "" ){
            setHeaderMessage("Name cannot be empty")
        } else if(description == ""){
            setHeaderMessage("Description cannot be empty")
        } else if(handler == ""){
            setHeaderMessage("Handler Cannot Be empty")
        } else if(budget == ""){
            setHeaderMessage("Budget cannot be empty")
        } else if(team == ""){
            setHeaderMessage("Status cannot be empty")
        }else{
            setHeaderMessage("All data is valid")
        }
    }

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Title" description="name the plan" onValueChange={setTitle} radius="sm"  variant="underlined" isRequired />
            <Textarea type="text" labelPlacement="inside" label="Description" description="describe the plan" onValueChange={setDescription} radius="sm" isRequired isClearable={true} className="pt-3"/>
            <Input type="text" labelPlacement="outside" label="Handler" description="person in charge" onValueChange={setHandler} radius="sm"  variant="underlined" isRequired />
            <Textarea type="text" labelPlacement="inside" label="Team Members" description="people to handle the plan" onValueChange={setTeam} radius="sm" isRequired isClearable={true} className="pt-3"/>
            <Input type="text" labelPlacement="outside" label="Budget" description="expense for plan execution" onValueChange={setBudget} radius="sm" isRequired />
        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Save Plan</Button>
        </CardFooter>
    </Card>
  );
}