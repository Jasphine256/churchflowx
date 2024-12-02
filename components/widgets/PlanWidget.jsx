'use client'

import {Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

export default function PlanWidget({plan}) {

  return (
        <Card isBlurred={true} fullWidth={true}>
            <CardBody>
                {plan.description}
            </CardBody>
            <CardFooter>
                <div className="w-full flex flex-row justify-between items-center">
                    <Chip variant="bordered" radius="sm" color="warning">BUDGET :  : {plan.budget}</Chip>
                    <Chip color={(plan.status === 'executed')? "primary" : "danger"} variant="dot">{plan.status}</Chip>
                </div>
            </CardFooter>
        </Card>  
  );
}