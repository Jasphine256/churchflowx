"use client"
import {CardBody, Card, CardFooter, CardHeader} from "@nextui-org/card"
import {Input, Textarea} from "@nextui-org/input"
import {Button} from "@nextui-org/button"
import { useSession } from "next-auth/react"
import * as React from "react"

export default function PlanForm() {

    const {data:session, status} = useSession()

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [handler, setHandler] = React.useState("");
    const [budget, setBudget] = React.useState("");
    const [team, setTeam] = React.useState("");
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill in Plan Details");
    
    async function SubmitPlanData() {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/collections/plans/new`;
    
      const new_plan = {
        GID: session.user.id,
        Title: title,
        Description: description,
        Handler: handler,
        Budget: budget,
        Team: team,
      };
    
      console.log(new_plan);
      console.log(JSON.stringify(new_plan));
    
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_plan),
        });
    
        console.log("REQUEST SENT .................");
    
        if (response.status !== 201) {
          console.error(`HTTP Error: ${response.status}`);
          console.log(await response.text()); // Log server response for debugging
          alert("Error saving plan data");
          return;
        }
    
        const responseData = await response.json();
        console.log(responseData);
        alert("Plan successfully added!");
      } catch (error) {
        console.error("Error saving plan data:", error);
        alert("Error saving plan data");
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
      } else if (!team) {
        setHeaderMessage("Team cannot be empty");
      } else {
        setHeaderMessage("Submitting...");
        SubmitPlanData();
      }
    };
    

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Title" description="name the plan" onChange={setTitle} radius="sm"  variant="underlined" isRequired />
            <Textarea type="text" labelPlacement="inside" label="Description" description="describe the plan" onValueChange={setDescription} radius="sm" isRequired isClearable={true} className="pt-3"/>
            <Input type="text" labelPlacement="outside" label="Handler" description="person in charge" onChange={setHandler} radius="sm"  variant="underlined" isRequired />
            <Textarea type="text" labelPlacement="inside" label="Team Members" description="people to handle the plan" onValueChange={setTeam} radius="sm" isRequired isClearable={true} className="pt-3"/>
            <Input type="text" labelPlacement="outside" label="Budget" description="expense for plan execution" onChange={setBudget} radius="sm" isRequired />
        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Save Plan</Button>
        </CardFooter>
    </Card>
  );
}