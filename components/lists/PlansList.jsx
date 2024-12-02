'use client'
import PlanWidget from "../widgets/PlanWidget"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"

export default function PlansList() {
    const PLANS = [
        {
            id: "1",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            budget: "UGX 200,000",
            status: "executed"
        },
        {
            id: "2",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            budget: "UGX 700,000",
            status: "pending"
        },
        {
            id: "3",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            budget: "UGX 670,000",
            status: "executed"
        },
        {
            id: "4",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            budget: "UGX 2,000,000",
            status: "pending"
        },
        {
            id: "5",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            budget: "UGX 4,000,000",
            status: "executed"
        },
    ]
  return (
    <div className="w-full">
        <Accordion>
            {
            PLANS.map((plan)=>(
            <AccordionItem
                key={plan.id}
                aria-label="Chung Miller"
                startContent={
                    <Avatar radius="sm" src="https://img.icons8.com/ios-glyphs/30/checklist.png"/>
                }
                subtitle={plan.handler}
                title={plan.title}
                >
                <PlanWidget plan={plan}/>
            </AccordionItem>
            ))
            }
        </Accordion>
    </div>
  )
}
