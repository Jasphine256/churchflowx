"use client"
import {Input, DatePicker, Textarea,
    Card, CardBody, CardHeader, CardFooter,
    Button,
    Radio, RadioGroup
} from "@nextui-org/react";

import * as React from "react"

export default function PastorForm() {

    const [name, setName] = React.useState("")
    const [tel, setTel] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [homeDistrict, setHomeDistrict] = React.useState("")
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill visitor Details")

    const validateAndSubmit = () => {
        // if (title == "" ){
        //     setHeaderMessage("Name cannot be empty")
        // } else if(description == ""){
        //     setHeaderMessage("Description cannot be empty")
        // } else if(startDate == ""){
        //     setHeaderMessage("Date Cannot Be empty")
        // } else if(dateDue == ""){
        //     setHeaderMessage("Date cannot be empty")
        // } else if(status == "status"){
        //     setHeaderMessage("Status cannot be empty")
        // }else{
        //     setHeaderMessage("All data is valid")
        // }
    }

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Full Names" description="first and last name" onValueChange={setName} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Contact" description="telephone number" onValueChange={setTel} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Email" description="email address" onValueChange={setEmail} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home District" description="home district" onValueChange={setHomeDistrict} radius="sm"  variant="underlined" isRequired />

        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Save Visitor</Button>
        </CardFooter>
    </Card>
  );
}
