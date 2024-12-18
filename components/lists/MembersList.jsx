"use client";

import { useEffect, useState } from "react";
import { Listbox, ListboxItem, Divider } from "@nextui-org/react";
import PersonListItem from "@components/widgets/PersonListItem";
import { useSession } from "next-auth/react";

export default function MembersList() {
  const { data: session, status } = useSession();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      async function fetchData() {
        const baseUrl = "https://churchflowx-backend.onrender.com/people/members";
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
          console.log(responseData.data.objects);
          setMembers(responseData.data.objects);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [status, session]);

  return (
    <div className="flex-1">
      <Listbox items={members} aria-label="Dynamic Actions">
        {(person) => (
          <ListboxItem key={person.ID} variant="light">
            <PersonListItem person={person} />
            <Divider />
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
}
