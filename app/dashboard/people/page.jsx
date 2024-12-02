'use client'
import {Tabs, Tab, Card, CardBody, CardHeader, Button} from "@nextui-org/react";
import MinistersView from "@components/views/MinistersView"
import PastorsView from "@components/views/PastorsView"
import VisitorsView from "@components/views/VisitorsView"
import MembersView from "@components/views/MembersView"



export default function PeopleTabs() {
  let tabs = [
    {
      id: "ministers",
      label: "Ministers",
      content: (<MinistersView/>)
    },
    {
      id: "members",
      label: "Members",
      content: (<MembersView/>)
    },
    {
      id: "visitors",
      label: "Visitors",
      content: (<VisitorsView/>)
    },
    {
      id: "pastors",
      label: "Pastors",
      content: (<PastorsView/>)
    }
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs} variant="underlined">
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card isBlurred={true} fullWidth={true}>
              <CardHeader>
                <Button variant="ghost" color="success" onClick={()=>{}}>Add New</Button>
              </CardHeader>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}