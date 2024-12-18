"use client"
import {CardBody, Card, CardFooter, CardHeader} from "@nextui-org/card"
import {Input} from "@nextui-org/input"
import {DatePicker} from "@nextui-org/date-picker"
import {Button} from "@nextui-org/button"
import { useSession } from "next-auth/react"
import * as React from "react"

export default function MemberForm() {

    const { data: session, status } = useSession();

    const [date, setDate] = React.useState("");
    const [name, setName] = React.useState("");
    const [dob, setDob] = React.useState("");
    const [zone, setZone] = React.useState("");
    const [village, setVillage] = React.useState("");
    const [parish, setParish] = React.useState("");
    const [subcounty, setSubcounty] = React.useState("");
    const [formerReligion, setFormerReligion] = React.useState("");
    const [educ, setEduc] = React.useState("");
    const [occupation, setOccupation] = React.useState("");
    const [where, setWhere] = React.useState("");
    const [maritalStatus, setMaritalStatus] = React.useState("");
    const [children, setChildren] = React.useState("");
    const [tel, setTel] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [father, setFather] = React.useState("");
    const [mother, setMother] = React.useState("");
    const [homeVillage, setHomeVillage] = React.useState("");
    const [homeParish, setHomeParish] = React.useState("");
    const [homeSubCounty, setHomeSubCounty] = React.useState("");
    const [homeDistrict, setHomeDistrict] = React.useState("");
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill membership Details");
    
    async function SubmitMemberData() {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/people/members/new`;
    
      const new_member = {
        GID: session.user.id,
        Date: `${date.day}-${date.month}-${date.year}`,
        Name: name,
        DOB: `${dob.day}-${dob.month}-${dob.year}`,
        Zone: zone,
        Village: village,
        Parish: parish,
        Subcounty: subcounty,
        FormerReligion: formerReligion,
        Education: educ,
        Occupation: occupation,
        Where: where,
        MaritalStatus: maritalStatus,
        Children: children,
        Tel: tel,
        Email: email,
        Father: father,
        Mother: mother,
        HomeVillage: homeVillage,
        HomeParish: homeParish,
        HomeSubCounty: homeSubCounty,
        HomeDistrict: homeDistrict,
      };
    
      console.log(new_member);
      console.log(JSON.stringify(new_member));
    
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_member),
        });
    
        console.log("REQUEST SENT .................");
    
        if (response.status !== 201) {
          console.error(`HTTP Error: ${response.status}`);
          console.log(await response.text()); // Log server response for debugging
          alert("Error saving data in");
          return;
        }
    
        const responseData = await response.json();
        console.log(responseData);
        alert("Member successfully added!");
      } catch (error) {
        console.error("Error saving data:", error);
        alert("Error saving data out");
      }
    }
    
    const validateAndSubmit = () => {
      if (!name) {
        setHeaderMessage("Name cannot be empty");
      } else if (!date) {
        setHeaderMessage("Date cannot be empty");
      } else if (!dob) {
        setHeaderMessage("Date of Birth cannot be empty");
      } else if (!zone) {
        setHeaderMessage("Zone cannot be empty");
      } else if (!village) {
        setHeaderMessage("Village cannot be empty");
      } else if (!parish) {
        setHeaderMessage("Parish cannot be empty");
      } else if (!subcounty) {
        setHeaderMessage("Subcounty cannot be empty");
      } else if (!formerReligion) {
        setHeaderMessage("Former Religion cannot be empty");
      } else if (!educ) {
        setHeaderMessage("Education level cannot be empty");
      } else if (!occupation) {
        setHeaderMessage("Occupation cannot be empty");
      } else if (!where) {
        setHeaderMessage("Where field cannot be empty");
      } else if (!maritalStatus) {
        setHeaderMessage("Marital Status cannot be empty");
      } else if (!children) {
        setHeaderMessage("Number of Children cannot be empty");
      } else if (!tel) {
        setHeaderMessage("Telephone number cannot be empty");
      } else if (!email) {
        setHeaderMessage("Email cannot be empty");
      } else if (!father) {
        setHeaderMessage("Father's Name cannot be empty");
      } else if (!mother) {
        setHeaderMessage("Mother's Name cannot be empty");
      } else if (!homeVillage) {
        setHeaderMessage("Home Village cannot be empty");
      } else if (!homeParish) {
        setHeaderMessage("Home Parish cannot be empty");
      } else if (!homeSubCounty) {
        setHeaderMessage("Home Subcounty cannot be empty");
      } else if (!homeDistrict) {
        setHeaderMessage("Home District cannot be empty");
      } else {
        setHeaderMessage("Submitting...");
        SubmitMemberData();
      }
    };

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Full Names" description="first and last name" onValueChange={setName} radius="sm"  variant="underlined" isRequired />
            <DatePicker label="Date" description="date joined" onChange={setDate} className="pt-6" radius="sm" isRequired validate={true} />
            <Input type="text" labelPlacement="outside" label="Contact" description="telephone number" onValueChange={setTel} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Email" description="email address" onValueChange={setEmail} radius="sm"  variant="underlined" isRequired />
            <DatePicker label="DOB" description="date of birth" onChange={setDob} className="pt-6" radius="sm" isRequired validate={true} />
            <Input type="text" labelPlacement="outside" label="Education" description="highest level" onValueChange={setEduc} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Occupation" description="work field" onValueChange={setOccupation} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Where" description="work location" onValueChange={setWhere} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Zone" description="zone address" onValueChange={setZone} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Village" description="village address" onValueChange={setVillage} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Parish" description="parish addresh" onValueChange={setParish} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Subcounty" description="subcounty address" onValueChange={setSubcounty} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Former Religion" description="recent domination" onValueChange={setFormerReligion} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Marital Status" description="marital status" onValueChange={setMaritalStatus} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Children" description="number of children" onValueChange={setChildren} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Father's Name" description="father's name" onValueChange={setFather} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Mother's Name" description="mother's name" onValueChange={setMother} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home Village" description="home village" onValueChange={setHomeVillage} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home Parish" description="home parish" onValueChange={setHomeParish} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home SubCounty" description="home subcounty" onValueChange={setHomeSubCounty} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home District" description="home district" onValueChange={setHomeDistrict} radius="sm"  variant="underlined" isRequired />

        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Save Member</Button>
        </CardFooter>
    </Card>
  );
}