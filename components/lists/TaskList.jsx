"use client"

import TaskWidget from "../widgets/TaskWidget"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react";

export default function TaskList() {
    const {data:session, status} = useSession()

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
      if (status === "authenticated" && session?.user) {
        async function fetchData() {
          const baseUrl = "https://churchflowx-backend.onrender.com/collections/tasks";
          const params = new URLSearchParams({
            GID: session.user.id
          })
          const url = `${baseUrl}?${params.toString()}`;
  
          try {
            const response = await fetch(url, {
              method: "GET",
              headers: { "Accept": "application/json" },
            });
  
            if (!response.ok) {
              console.error(`HTTP Error: ${response.status}`);
              return;
            }
  
            const responseData = await response.json();
            setTasks(responseData.data.objects);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }
    }, [status, session]);

  return (
    <div className="w-full">
        <Accordion>
            {
            tasks.map((task)=>(
            <AccordionItem
                key={task.ID}
                aria-label="Chung Miller"
                startContent={
                    <Avatar radius="sm" src="https://img.icons8.com/material-outlined/24/task-completed.png"/>
                }
                subtitle={`HANDLER: ${task.Handler}`}
                title={task.Title}
                >
                <TaskWidget task={task}/>
            </AccordionItem>
            ))
            }
        </Accordion>
    </div>
  )
}
