'use client'
import FundWidget from "../widgets/FundWidget"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"

export default function FundsList() {
    const FUNDS = [
        {
            id: "1",
            amount: "100,000,000",
            name: "Mikhael Jasper",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "22-10-2003",
        },
        {
            id: "6",
            amount: "100,000,000",
            name: "Mikhael Jasper",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "22-10-2003",
        },
        {
            id: "2",
            amount: "100,000,000",
            name: "Mikhael Jasper",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "22-10-2003",
        },
        {
            id: "3",
            amount: "100,000,000",
            name: "Mikhael Jasper",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "22-10-2003",
        },
        {
            id: "4",
            amount: "100,000,000",
            name: "Mikhael Jasper",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "22-10-2003",
        },
        {
            id: "5",
            amount: "100,000,000",
            name: "Mikhael Jasper",
            reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "22-10-2003",
        },
    ]
  return (
    <div className="w-full">
        <Accordion>
            {
            FUNDS.map((fund)=>(
            <AccordionItem
                key={fund.id}
                aria-label="Chung Miller"
                startContent={
                    <Avatar radius="sm" src="https://img.icons8.com/material-outlined/24/money--v1.png"/>
                }
                subtitle={`FROM: ${fund.name}`}
                title={fund.amount}
                >
                <FundWidget reason={fund.reason} date={fund.date}/>
            </AccordionItem>
            ))
            }
        </Accordion>
    </div>
  )
}
