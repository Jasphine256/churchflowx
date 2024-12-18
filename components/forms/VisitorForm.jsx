"use client"
import {CardBody, Card, CardFooter, CardHeader} from "@nextui-org/card"
import {Input} from "@nextui-org/input"
import {Button} from "@nextui-org/button"

import * as React from "react"
import { useSession } from "next-auth/react"

export default function PastorForm() {

    const [name, setName] = React.useState("");
    const [tel, setTel] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [homeDistrict, setHomeDistrict] = React.useState("");
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill visitor Details");

    const {data:session} = useSession()
    
    async function SubmitVisitorData() {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/people/visitors/new`;
    
      const new_visitor = {
        GID: session.user.id,
        Name: name,
        Tel: tel,
        Email: email,
        HomeDistrict: homeDistrict,
      };
    
      console.log(new_visitor);
      console.log(JSON.stringify(new_visitor));
    
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_visitor),
        });
    
        console.log("REQUEST SENT .................");
    
        if (response.status !== 201) {
          console.error(`HTTP Error: ${response.status}`);
          console.log(await response.text()); // Log server response for debugging
          alert("Error saving visitor data");
          return;
        }
    
        const responseData = await response.json();
        console.log(responseData);
        alert("Visitor successfully added!");
      } catch (error) {
        console.error("Error saving visitor data:", error);
        alert("Error saving visitor data");
      }
    }
    
    const validateAndSubmit = () => {
      if (!name) {
        setHeaderMessage("Name cannot be empty");
      } else if (!tel) {
        setHeaderMessage("Telephone number cannot be empty");
      } else if (!email) {
        setHeaderMessage("Email cannot be empty");
      } else if (!homeDistrict) {
        setHeaderMessage("Home District cannot be empty");
      } else {
        setHeaderMessage("Submitting...");
        SubmitVisitorData();
      }
    };
    

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
