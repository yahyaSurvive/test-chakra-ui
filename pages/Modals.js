import { Button, Flex, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, FormLabel, Input } from "@chakra-ui/react";
import BtmNav from "./components/BtmNav";

const Modals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gas = () => {
    window.alert("mantap");
    console.log("masuk");
  };

  return (
    <>
      <Flex bg={"gray.200"} width={"full"} height={"720px"} alignItems={"center"} justifyContent={"center"}>
        <Button onClick={onOpen} variant="solid" colorScheme="blue">
          Open Modal
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <form onSubmit={gas} color={"red"}>
              <FormLabel>First name</FormLabel>
              <Input type="password" placeholder="First name" name="in1" required />

              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
              <Button type="submit" colorScheme="blue" mr={3}>
                Submit
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <BtmNav />
    </>
  );
};

export default Modals;
