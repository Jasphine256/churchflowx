"use client"
import {CardBody, Card, CardFooter, CardHeader} from "@nextui-org/card"
import {Input} from "@nextui-org/input"
import {DateInput} from "@nextui-org/date-input"
import {Button} from "@nextui-org/button"
import { useSession } from "next-auth/react"
import * as React from "react"

export default function MinisterForm() {

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
    const [ministry, setMinistry] = React.useState("");
    const [role, setRole] = React.useState("");
    const [father, setFather] = React.useState("");
    const [mother, setMother] = React.useState("");
    const [homeVillage, setHomeVillage] = React.useState("");
    const [homeParish, setHomeParish] = React.useState("");
    const [homeSubCounty, setHomeSubCounty] = React.useState("");
    const [homeDistrict, setHomeDistrict] = React.useState("");
    const [HeaderMessage, setHeaderMessage] = React.useState("Fill minister Details");
    
    async function SubmitMinisterData() {
      const baseUrl = "https://churchflowx-backend.onrender.com";
      const url = `${baseUrl}/people/ministers/new`;
    
      const new_minister = {
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
        Ministry: ministry,
        Role: role,
        Father: father,
        Mother: mother,
        HomeVillage: homeVillage,
        HomeParish: homeParish,
        HomeSubCounty: homeSubCounty,
        HomeDistrict: homeDistrict,
      };
    
      console.log(new_minister);
      console.log(JSON.stringify(new_minister));
    
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_minister),
        });
    
        console.log("REQUEST SENT .................");
    
        if (response.status !== 201) {
          console.error(`HTTP Error: ${response.status}`);
          console.log(await response.text()); // Log server response for debugging
          alert("Error saving minister data");
          return;
        }
    
        const responseData = await response.json();
        console.log(responseData);
        alert("Minister successfully added!");
      } catch (error) {
        console.error("Error saving minister data:", error);
        alert("Error saving minister data");
      }
    }
    
    const validateAndSubmit = () => {
      if (!date) {
        setHeaderMessage("Date cannot be empty");
      } else if (!name) {
        setHeaderMessage("Name cannot be empty");
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
      } else if (!ministry) {
        setHeaderMessage("Ministry cannot be empty");
      } else if (!role) {
        setHeaderMessage("Role cannot be empty");
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
        SubmitMinisterData();
      }
    };
    

  return (
    <Card isBlurred={true} className="w-full lg:w-1/2 flex flex-col gap-4 p-1 lg:p-4 lg:py-2 m-auto">
        <CardHeader>{HeaderMessage}</CardHeader>
        <CardBody>
            <Input type="text" labelPlacement="outside" label="Full Names" description="first and last name" onChange={setName} radius="sm"  variant="underlined" isRequired />
            <DateInput label="Date" description="date joined" onChange={setDate} className="pt-6" radius="sm" isRequired validate={true} />
            <Input type="text" labelPlacement="outside" label="Contact" description="telephone number" onChange={setTel} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Email" description="email address" onChange={setEmail} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Ministry" description="ministry" onChange={setMinistry} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Role" description="role played in ministry" onChange={setRole} radius="sm"  variant="underlined" isRequired />
            <DateInput label="DOB" description="date of birth" className="pt-6" radius="sm" isRequired validate={true} />
            <Input type="text" labelPlacement="outside" label="Education" description="highest level" onChange={setEduc} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Occupation" description="work field" onChange={setOccupation} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Where" description="work location" onChange={setWhere} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Zone" description="zone address" onChange={setZone} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Village" description="village address" onChange={setVillage} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Parish" description="parish addresh" onChange={setParish} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Subcounty" description="subcounty address" onChange={setSubcounty} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Former Religion" description="recent domination" onChange={setFormerReligion} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Marital Status" description="marital status" onChange={setMaritalStatus} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Children" description="number of children" onChange={setChildren} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Father's Name" description="father's name" onChange={setFather} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Mother's Name" description="mother's name" onChange={setMother} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home Village" description="home village" onChange={setHomeVillage} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home Parish" description="home parish" onChange={setHomeParish} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home SubCounty" description="home subcounty" onChange={setHomeSubCounty} radius="sm"  variant="underlined" isRequired />
            <Input type="text" labelPlacement="outside" label="Home District" description="home district" onChange={setHomeDistrict} radius="sm"  variant="underlined" isRequired />

        </CardBody>
        <CardFooter>
            <Button color="primary" fullWidth radius="sm" onPress={()=>{validateAndSubmit()}}>Save Minister</Button>
        </CardFooter>
    </Card>
  );
}