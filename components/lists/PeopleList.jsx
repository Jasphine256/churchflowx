"use client"

import {Listbox, ListboxItem, Divider} from "@nextui-org/react";
import PersonListItem from "../widgets/PersonListItem";

export default function PeopleList({people}) {
  return (
    <div className="flex-1">
        <Listbox
            items={people}
            aria-label="Dynamic Actions"
            >
            {(person) => (
                <ListboxItem key={person.id} variant="light">
                    <PersonListItem person={person}/>
                    <Divider/>
                </ListboxItem>
            )}
    </Listbox>
    </div>
  );
}