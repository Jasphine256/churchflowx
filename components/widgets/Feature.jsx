"use client"
import {Card, CardHeader, CardBody, Image, Link} from "@nextui-org/react";

export default function Feature({name, subtitle, url, icon}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Link href={url} className="text-tiny uppercase font-bold">{"DETAILS >>>"}</Link>
        <small className="text-default-500">{subtitle}</small>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}