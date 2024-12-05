'use client'
import {Tabs, Tab,
  Card, CardBody, CardHeader,
  Button,
  Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure
} from "@nextui-org/react";
import MinistersView from "@components/views/MinistersView"
import PastorsView from "@components/views/PastorsView"
import VisitorsView from "@components/views/VisitorsView"
import MembersView from "@components/views/MembersView"

import FundForm from "@components/forms/FundForm";



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

  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const PeopleModal = () => {  
    return (
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" scrollBehavior="inside">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Add new record</ModalHeader>
                <ModalBody>
                <Tabs radius="full" color="warning">
                  <Tab key={'member-form'} title="Member">
                    <FundForm/>
                  </Tab>  
                  <Tab key={'minister-form'} title="Minister">
                    <FundForm/>
                  </Tab>
                  <Tab key={'visitor-form'} title="Visitor">
                    <FundForm/>
                  </Tab>  
                  <Tab key={'pastor-form'} title="Pastor">
                    <FundForm/>
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
      <PeopleModal/>
    </div>  
  );
}