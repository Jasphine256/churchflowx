"use client"
import {CardBody, Card, CardFooter, CardHeader} from "@nextui-org/card"
import {Input} from "@nextui-org/input"
import {DatePicker} from "@nextui-org/date-picker"
import {Button} from "@nextui-org/button"
import * as React from "react"
import { useSession } from "next-auth/react"

export default function FundForm() {

    const {data:session, status} = useSession()

    const [name, setName] = React.useState("")
    const [reason, setReason] = React.useState("")
    const [amount, setAmount] = React.useState("")
    const [date, setDate] = React.useState("") // object type
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill Funding Details")

    async function SubmitData() {
        const baseUrl = "https://churchflowx-backend.onrender.com";
        const url = `${baseUrl}/${"finance/funds/new"}`;

        const new_fund = {
            GID: session.user.id,
            Name: name,
            Reason: reason,
            Amount: amount,
            Date: `${date.day}-${date.month}-${date.year}`,
        }
        console.log(new_fund)
        console.log(JSON.stringify(new_fund))

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
              },
              
            body: JSON.stringify(new_fund)
          });

          console.log("REQUEST SENT .................")

          if (response.status !== 201) {
            console.error(`HTTP Error: ${response.status}`);
            console.log(await response.text()); // Log server response for debugging

            alert("Error saving data in");
            // return;
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
            <Input type="text" labelPlacement="outside" label="Name" description="funds from" onValueChange={setName} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Reason" description="reason for funding" onValueChange={setReason} radius="sm" variant="underlined" isRequired isClearable={true}/>
            <Input type="text" labelPlacement="outside" label="Amount" description="amount recieved" onValueChange={setAmount} radius="sm" variant="bordered" isRequired />
            <DatePicker label="Funding Date" description="date of funding" onChange={setDate} className="pt-6" radius="sm" isRequired validate={true} />
        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Record Fund</Button>
        </CardFooter>
    </Card>
  );
}