'use client'
import {
  Tabs, Tab,
  Card, CardBody, CardHeader,
  Button,
  Modal, ModalBody, ModalContent, ModalHeader, ModalFooter, useDisclosure
} from "@nextui-org/react";

import * as React from "react"

import PaymentForm from "@components/forms/PaymentForm"
import FundForm from "@components/forms/FundForm"

import PaymentList from "@components/lists/PaymentsList"
import FundList from "@components/lists/FundsList"

export default function FinanceTabs() {

  let tabs = [
    {
      id: "fund-form",
      label: "Funds",
      content: (<FundList/>)
    },
    {
      id: "payment-form",
      label: "Payments",
      content: (<PaymentList/>)
    },
  ];

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const FinanceModal = () => {  
    return (
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" scrollBehavior="inside">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Add new record</ModalHeader>
                <ModalBody>
                <Tabs radius="full" color="warning">
                  <Tab key={'payments'} title="Payment">
                    <PaymentForm/>
                  </Tab>  
                  <Tab key={'funds'} title="Fund">
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
                <Button variant="ghost" color="success" radius="sm"  onPress={onOpen}>Add New</Button>
              </CardHeader>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
      <FinanceModal/>
    </div>  
  );
}
