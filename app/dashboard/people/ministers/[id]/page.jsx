'use client'
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import DetailItem from "@components/widgets/DetailItem"

export default function Details() {

  const [fetchedData, setFetchedData] = useState([])

  const { data: session, status } = useSession()
  const params = useParams()
  const id = params.id

  useEffect(() => {
    async function fetchData() {
      if (status === "authenticated") {
        const baseUrl = `https://churchflowx-backend.onrender.com/people/ministers/${id}`;
      
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
          const data = responseData.data.objects

          // Update state with fetched data
          setFetchedData(data)  // Uncommented this line

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }
    fetchData()
  }, [session, status])

  return (
    <div className="flex w-full flex-col">
      <h2 className="w-full p-2 m-2 font-bold text-lg">Details</h2>
      {
        Object.entries(fetchedData).map(([key, value], index) => (
          <DetailItem name={key} value={value} key={index}/>
        ))
      }        
    </div>
  )
}
