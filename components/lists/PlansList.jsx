"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PlanWidget from "../widgets/PlanWidget"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import {Avatar} from "@nextui-org/avatar"

export default function PlansList() {
      const { data: session, status } = useSession();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      async function fetchData() {
        const baseUrl = "https://churchflowx-backend.onrender.com/collections/plans";
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
          setPlans(responseData.data.objects);
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
            plans.map((plan)=>(
            <AccordionItem
                key={plan.ID}
                aria-label="Chung Miller"
                startContent={
                    <Avatar radius="sm" src="https://img.icons8.com/ios-glyphs/30/checklist.png"/>
                }
                subtitle={`HANDLER: ${plan.Handler}`}
                title={plan.Title}
                >
                <PlanWidget plan={plan}/>
            </AccordionItem>
            ))
            }
        </Accordion>
    </div>
  )
}
