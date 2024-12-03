'use client'

import {Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

export default function TaskWidget({task}) {

  return (
        <Card isBlurred={true} fullWidth={true}>
            <CardBody>
                {task.description}
            </CardBody>
            <CardFooter>
                <div className="w-full flex flex-row justify-between items-center">
                    <Chip variant="bordered" radius="sm" color="warning">{task.startDate} : TO : {task.endDate}</Chip>
                    <Chip color={(task.status === 'finished') ? "warning" : "danger"} variant="dot">{task.status}</Chip>
                </div>
            </CardFooter>
        </Card>  
  );
}