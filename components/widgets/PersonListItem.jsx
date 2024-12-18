"use client"

import { Card, CardHeader, CardBody, Avatar, Snippet } from "@nextui-org/react";
import Link from "next/link";

export default function PersonListItem({person}){
    return(
        <Card isBlurred={true} fullWidth={true} isHoverable={false}>
            <CardBody>
                <div className="w-full flex flex-row justify-between items-centerp pb-2 px-1">
                    <p className="sm:text-xs font-mono font-extralight">since {person.Date}</p>
                    <p className="text-sm font-medium">{person.HomeDistrict}</p>
                </div>
                <div className="w-full flex flex-row justify-start items-center">
                    <Avatar name={person.Gender} color={person.Gender === "M" ? "success": "warning" } className="text-white font-bold text-large"/>
                    <div className="w-full flex flex-row justify-between items-baseline ml-4">
                        <Link href={`/dashboard/people/person/${person.ID}`} className="text-medium font-medium">{person.Name}</Link>
                        <Snippet size="sm" symbol="" color="primary" codeString={person.Tel}>
                            <p className="text-[10px]">{person.Tel}</p>
                        </Snippet>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}