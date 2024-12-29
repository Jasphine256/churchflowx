'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"

export default function Details() {

    const {data:session, status} = useSession()

    const [data, setData] = useState({})

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
          async function fetchData() {
            const baseUrl = "https://churchflowx-backend.onrender.com/people";
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
              setData(responseData.data.objects);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
          fetchData();
        }
      }, [status, session]);
  return (
    <div className="flex w-full flex-col">
        {
            data.map((field)=>(
                <>
                    <p className='text-md'>Full Name</p>
                    <h3 className='text-lg font-bold'>Full Name</h3>
                </>
            ))
        }        
    </div>
  )
}
