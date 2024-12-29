import {Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

export default function TaskWidget({task}) {

  return (
        <Card isBlurred={true} fullWidth={true}>
            <CardBody>
                {task.Description}
            </CardBody>
            <CardFooter>
                <div className="w-full flex flex-row justify-between items-center">
                    <Chip variant="bordered" radius="sm" color="warning">{task.StartDate} : TO : {task.DateDue}</Chip>
                    <Chip color={(task.Status === 'finished') ? "warning" : "danger"} variant="dot">{task.Status}</Chip>
                </div>
            </CardFooter>
        </Card>  
  );
}