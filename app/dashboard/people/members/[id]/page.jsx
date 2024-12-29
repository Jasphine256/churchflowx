'use client'
import { useSession } from "next-auth/react"

export async function getServerSideProps(context) {
  const {data:session, status} = useSession()

  const {id} = context.params

  if(status === "authenticated"){
    const baseUrl = `https://churchflowx-backend.onrender.com/people/members/${id}`;
  
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
      const fetchedData = responseData.data.objects
      console.log(fetchedData)
      return {props: {fetchedData}};
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

export default function Details({fetchedData}) {

  return (
    <div className="flex w-full flex-col">
        {
            fetchedData.map((field)=>(
                <>
                    <p className='text-md'>Full Name</p>
                    <h3 className='text-lg font-bold'>Full Name</h3>
                </>
            ))
        }        
    </div>
  )
}
