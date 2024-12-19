"use client"
import {CardBody, Card, CardFooter, CardHeader} from "@nextui-org/card"
import {Input} from "@nextui-org/input"
import {DateInput} from "@nextui-org/date-input"
import {Button} from "@nextui-org/button"
import * as React from "react"
import { useSession } from "@node_modules/next-auth/react"

export default function PaymentForm() {

    const {data:session, status} = useSession()

    const [name, setName] = React.useState("")
    const [reason, setReason] = React.useState("")
    const [amount, setAmount] = React.useState("")
    const [date, setDate] = React.useState("") // object type
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill Funding Details")

    async function SubmitData() {
        const baseUrl = "https://churchflowx-backend.onrender.com";
        const url = `${baseUrl}/${"finance/payments/new"}`;

        const new_payment = {
            GID: session.user.id,
            Name: name,
            Reason: reason,
            Amount: amount,
            Date: `${date.day}-${date.month}-${date.year}`,
        }
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
              },
              
            body: JSON.stringify(new_payment)
          });
          if (response.status !== 201) {
            alert("Error saving data in");
          }          

          const responseData = await response.json();
          console.log(responseData);
        } catch (error) {
          console.error("Error saving data:", error);
          alert("Error saving data out")
        }
    }

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
            SubmitData()
        }
    }

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Name" description="paying to" onValueChange={setName} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Reason" description="reason for payment" onValueChange={setReason} radius="sm" variant="underlined" isRequired isClearable={true}/>
            <Input type="text" labelPlacement="outside" label="Amount" description="amount paid" onValueChange={setAmount} radius="sm" variant="bordered" isRequired />
            <DateInput label="Payment Date" description="date of payment" onChange={setDate} className="pt-6" radius="sm" isRequired validate={true} />
        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Record Payment</Button>
        </CardFooter>
    </Card>
  );
}