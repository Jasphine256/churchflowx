'use client'

import {Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

export default function FundWidget({reason, date}) {

  return (
        <Card isBlurred={true} fullWidth={true}>
            <CardBody>
                {reason}
            </CardBody>
            <CardFooter>
                <Chip variant="bordered" radius="sm" color="success">FUNDED ON : : {date}</Chip>
            </CardFooter>
        </Card>  
  );
}