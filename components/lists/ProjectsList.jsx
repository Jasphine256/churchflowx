"use client"
import { useState, useEffect } from "react"
import { useSession } from "@node_modules/next-auth/react";
import ProjectWidget from "../widgets/ProjectWidget"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"

export default function ProjectsList() {

    const {data:session, status} = useSession()

    const [projects, setProjects] = useState([]);

    useEffect(() => {
      if (status === "authenticated" && session?.user) {
        async function fetchData() {
          const baseUrl = "https://churchflowx-backend.onrender.com/collections/projects";
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
            setProjects(responseData.data.objects);
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
            projects.map((project)=>(
            <AccordionItem
                key={project.ID}
                aria-label="Chung Miller"
                startContent={
                    <Avatar radius="sm" src="https://img.icons8.com/windows/32/project.png"/>
                }
                subtitle={`HANDLER: ${project.Handler}`}
                title={project.Title}
                >
                <ProjectWidget project={project}/>
            </AccordionItem>
            ))
            }
        </Accordion>
    </div>
  )
}
