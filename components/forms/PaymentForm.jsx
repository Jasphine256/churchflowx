"use client"
import {Input, DatePicker, Card, CardBody, CardHeader, CardFooter, Button} from "@nextui-org/react";
import * as React from "react"

export default function PaymentForm() {

    const [name, setName] = React.useState("")
    const [reason, setReason] = React.useState("")
    const [amount, setAmount] = React.useState("")
    const [date, setDate] = React.useState("") // object type
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill Payment Details")

    const validateAndSubmit = () => {
        if (name == "" ){
            setHeaderMessage("Name cannot be empty")
        } else if(reason == ""){
            setHeaderMessage("Reason cannot be empty")
        } else if(amount == ""){
            setHeaderMessage("Amount Cannot Be empty")
        } else if(date == ""){
            setHeaderMessage("Date cannot be empty")
        }else{
            setHeaderMessage("All data is valid")
        }
    }

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Name" description="paying to" onValueChange={setName} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Reason" description="reason for payment" v onValueChange={setReason} radius="sm" variant="underlined" isRequired isClearable={true}/>
            <Input type="text" labelPlacement="outside" label="Amount" description="amount paid" v onValueChange={setAmount} radius="sm" variant="bordered" isRequired />
            <DatePicker label="Payment Date" description="date of payment" onChange={setDate} className="pt-6" radius="sm" isRequired validate={true} />
        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Record Payment</Button>
        </CardFooter>
    </Card>
  );
}