'use client'
import {
  Tabs, Tab,
  Card, CardBody, CardHeader,
  Button,
  Modal, ModalHeader, ModalFooter, ModalContent, ModalBody, useDisclosure
} from "@nextui-org/react";

import TaskList from "@components/lists/TaskList"
import PlansList from "@components/lists/PlansList"
import ProjectsList from "@components/lists/ProjectsList"
import FundForm from "@components/forms/FundForm";
import TaskForm from "@components/forms/TaskForm"
import PlanForm from "@components/forms/PlanForm"
import ProjectForm from "@components/forms/ProjectForm"

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

  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const CollectionsModal = () => {  
    return (
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" scrollBehavior="inside">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Add new record</ModalHeader>
                <ModalBody>
                <Tabs radius="full" color="warning">
                  <Tab key={'task-form'} title="Task">
                    <TaskForm/>
                  </Tab>  
                  <Tab key={'plan-form'} title="Plan">
                    <PlanForm/>
                  </Tab>
                  <Tab key={'project-form'} title="Project">
                    <ProjectForm/>
                  </Tab>  
                </Tabs>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs} variant="underlined">
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card isBlurred={true} fullWidth={true}>
            <CardHeader>
                <Button variant="ghost" color="success" onClick={onOpen}>Add New</Button>
              </CardHeader>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
      <CollectionsModal/>
    </div>  
  );
}