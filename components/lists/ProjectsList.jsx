'use client'
import ProjectWidget from "../widgets/ProjectWidget"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"

export default function ProjectsList() {
    const PROJECTS = [
        {
            id: "1",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            status: "running"
        },
        {
            id: "2",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            status: "finished"
        },
        {
            id: "3",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            status: "running"
        },
        {
            id: "4",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            status: "finished"
        },
        {
            id: "5",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            status: "running"
        },
    ]
  return (
    <div className="w-full">
        <Accordion>
            {
            PROJECTS.map((project)=>(
            <AccordionItem
                key={project.id}
                aria-label="Chung Miller"
                startContent={
                    <Avatar radius="sm" src="https://img.icons8.com/windows/32/project.png"/>
                }
                subtitle={project.handler}
                title={project.title}
                >
                <ProjectWidget project={project}/>
            </AccordionItem>
            ))
            }
        </Accordion>
    </div>
  )
}
