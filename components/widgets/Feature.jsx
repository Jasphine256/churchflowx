import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Feature({name, subtitle, icon}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{subtitle}</small>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={icon}
          width={270}
          height={270}
          loading="eager"
        />
      </CardBody>
    </Card>
  );
}