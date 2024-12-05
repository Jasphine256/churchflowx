import TaskWidget from "../widgets/TaskWidget"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"

export default function TaskList() {
    const TASKS = [
        {
            id: "1",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            endDate: "26-11-2020",
            status: "finished"
        },
        {
            id: "2",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            endDate: "26-11-2020",
            status: "finished"
        },
        {
            id: "3",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            endDate: "26-11-2020",
            status: "finished"
        },
        {
            id: "4",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            endDate: "26-11-2020",
            status: "finished"
        },
        {
            id: "5",
            title: "Develop Church Management System",
            handler: "Mikhael Jasper",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            startDate: "22-10-2003",
            endDate: "26-11-2020",
            status: "finished"
        },
    ]
  return (
    <div className="w-full">
        <Accordion>
            {
            TASKS.map((task)=>(
            <AccordionItem
                key={task.id}
                aria-label="Chung Miller"
                startContent={
                    <Avatar radius="sm" src="https://img.icons8.com/material-outlined/24/task-completed.png"/>
                }
                subtitle={`HANDLER: ${task.handler}`}
                title={task.title}
                >
                <TaskWidget task={task}/>
            </AccordionItem>
            ))
            }
        </Accordion>
    </div>
  )
}
