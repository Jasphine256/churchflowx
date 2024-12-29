import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { Divider } from "@nextui-org/react"

export default function DetailItem({name, value}) {
  return (
    <Card className="mb-4 mx-1 rounded-md">
        <CardHeader>{name}</CardHeader>
        <Divider/>
        <CardBody>{value}</CardBody>
    </Card>  )
}
