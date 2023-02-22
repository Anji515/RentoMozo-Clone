import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
  } from '@chakra-ui/react'

  function ModalComp() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div >
        <Button onClick={onOpen} fontFamily='Objektive' fontSize={'13px'} color='black' bg={'white'} border={'1px solid red'} width='200px' marginLeft={'-10px'}>Chat with us (9AM-6PM)</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}  >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Feel Free To Chat</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            Type Your Concern Here, We will get back to you asap...
            <br />
            <br />
            <Input type="text"/>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={onClose}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }


  export default ModalComp;