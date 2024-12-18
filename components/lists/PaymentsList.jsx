'use client'
import PaymentWidget from "../widgets/PaymentWidget"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"
import { useSession } from "@node_modules/next-auth/react"
import { useState, useEffect } from "react";

export default function PaymentsList() {

  const {data:session, status} = useSession()

  const [payments, setPayments] = useState([]);

useEffect(() => {
  if (status === "authenticated" && session?.user) {
    async function fetchData() {
      const baseUrl = "https://churchflowx-backend.onrender.com/finance/payments";
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
        setPayments(responseData.data.objects);
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
            payments.map((payment)=>(
            <AccordionItem
                key={payment.ID}
                aria-label="Chung Miller"
                startContent={
                    <Avatar radius="sm" src="https://img.icons8.com/material-outlined/24/money--v1.png"/>
                }
                subtitle={`TO: ${payment.Name}`}
                title={payment.Amount}
                >
                <PaymentWidget reason={payment.Reason} date={payment.Date}/>
            </AccordionItem>
            ))
            }
        </Accordion>
    </div>
  )
}
