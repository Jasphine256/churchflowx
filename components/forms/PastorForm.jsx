"use client"
import {Input, DatePicker, Textarea,
    Card, CardBody, CardHeader, CardFooter,
    Button,
    Radio, RadioGroup
} from "@nextui-org/react";

import * as React from "react"

export default function PastorForm() {

    const [date, setDate] = React.useState("")
    const [name, setName] = React.useState("")
    const [dob, setDob] = React.useState("")
    const [zone, setZone] = React.useState("")
    const [village, setVillage] = React.useState("")
    const [parish, setParish] = React.useState("")
    const [subcounty, setSubcounty] = React.useState("")
    const [formerReligion, setFormerReligion] = React.useState("")
    const [educ, setEduc] = React.useState("")
    const [occupation, setOccupation] = React.useState("")
    const [where, setWhere] = React.useState("")
    const [maritalStatus, setmaritalStatus] = React.useState("")
    const [children, setChildren] = React.useState("")
    const [tel, setTel] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [ministry, setMinistry] = React.useState("")
    const [ministeredSince, setMinisteredSince] = React.useState("")
    const [father, setFather] = React.useState("")
    const [mother, setMother] = React.useState("")
    const [homeVillage, setHomeVillage] = React.useState("")
    const [homeParish, setHomeParish] = React.useState("")
    const [homeSubCounty, setHomeSubCounty] = React.useState("")
    const [homeDistrict, setHomeDistrict] = React.useState("")
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill pastor Details")


    



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
            <DatePicker label="Date" description="date joined" onChange={setDate} className="pt-6" radius="sm" isRequired validate={true} />
            <Input type="text" labelPlacement="outside" label="Contact" description="telephone number" onValueChange={setTel} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Email" description="email address" onValueChange={setEmail} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Ministry" description="ministry" onValueChange={setMinistry} radius="sm"  variant="underlined" isRequired />
            <DatePicker label="Pastor Since" description="pastor since" onChange={setMinisteredSince} className="pt-6" radius="sm" isRequired validate={true} />
            <DatePicker label="DOB" description="date of birth" onChange={setDob} className="pt-6" radius="sm" isRequired validate={true} />
            <Input type="text" labelPlacement="outside" label="Education" description="highest level" onValueChange={setEduc} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Occupation" description="work field" onValueChange={setOccupation} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Where" description="work location" onValueChange={setWhere} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Zone" description="zone address" onValueChange={setZone} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Village" description="village address" onValueChange={setVillage} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Parish" description="parish addresh" onValueChange={setParish} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Subcounty" description="subcounty address" onValueChange={setSubcounty} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Former Religion" description="recent domination" onValueChange={setFormerReligion} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Marital Status" description="marital status" onValueChange={setmaritalStatus} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Children" description="number of children" onValueChange={setChildren} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Father's Name" description="father's name" onValueChange={setFather} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Mother's Name" description="mother's name" onValueChange={setMother} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home Village" description="home village" onValueChange={setHomeVillage} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home Parish" description="home parish" onValueChange={setHomeParish} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home SubCounty" description="home subcounty" onValueChange={setHomeSubCounty} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home District" description="home district" onValueChange={setHomeDistrict} radius="sm"  variant="underlined" isRequired />

        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={validateAndSubmit}>Save Pastor</Button>
        </CardFooter>
    </Card>
  );
}