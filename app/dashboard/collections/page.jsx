'use client'
import {Tabs, Tab, Card, CardBody, CardHeader, Button} from "@nextui-org/react";
import TaskList from "@components/lists/TaskList"
import PlansList from "@components/lists/PlansList"
import ProjectsList from "@components/lists/ProjectsList"

export default function CollectionsTabs() {
  let tabs = [
    {
      id: "tasks",
      label: "Tasks",
      content: (<TaskList/>)
    },
    {
      id: "plans",
      label: "Plans",
      content: (<PlansList/>)
    },
    {
      id: "projects",
      label: "projects",
      content: (<ProjectsList/>)
    },
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