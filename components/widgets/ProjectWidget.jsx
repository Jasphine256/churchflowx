'use client'

import {Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

export default function ProjectWidget({project}) {

  return (
        <Card isBlurred={true} fullWidth={true}>
            <CardBody>
                {project.description}
            </CardBody>
            <CardFooter>
                <div className="w-full flex flex-row justify-between items-center">
                    <Chip variant="bordered" radius="sm" color="primary">STARTED : : {project.startDate}</Chip>
                    <Chip color={(project.status === 'running') ? "primary" : "danger"} variant="dot">{project.status}</Chip>
                </div>
            </CardFooter>
        </Card>  
  );
}