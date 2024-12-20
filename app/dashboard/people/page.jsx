'use client'
import {
  Tabs, Tab,
  Card, CardBody, CardHeader,
  Button,
  Modal, ModalHeader, ModalFooter, ModalContent, ModalBody, useDisclosure
} from "@nextui-org/react";

import MembersList from "@components/lists/MembersList"
import MinistersList from "@components/lists/MinistersList"
import PastorsList from "@components/lists/PastorsList"
import VisitorsList from "@components/lists/VisitorsList"

import MemberForm from "@components/forms/MemberForm"
import MinisterForm from "@components/forms/MinisterForm"
import PastorForm from "@components/forms/PastorForm"
import VisitorForm from "@components/forms/VisitorForm"

export default function PeopleTabs() {

  let tabs = [
    {
      id: "ministers",
      label: "Ministers",
      content: (<MinistersList/>)
    },
    {
      id: "members",
      label: "Members",
      content: (<MembersList/>)
    },
    {
      id: "visitors",
      label: "Visitors",
      content: (<VisitorsList/>)
    },
    {
      id: "pastors",
      label: "Pastors",
      content: (<PastorsList/>)
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
                    <MemberForm/>
                  </Tab>  
                  <Tab key={'minister-form'} title="Minister">
                    <MinisterForm/>
                  </Tab>
                  <Tab key={'visitor-form'} title="Visitor">
                    <VisitorForm/>
                  </Tab>  
                  <Tab key={'pastor-form'} title="Pastor">
                    <PastorForm/>
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