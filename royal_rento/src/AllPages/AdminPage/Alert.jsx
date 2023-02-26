import {Link as Goto} from 'react-router-dom'
import {Alert,AlertIcon,AlertTitle,useDisclosure,Box,Button,AlertDescription} from '@chakra-ui/react'


function CompExample({visible}) {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
  
    return isVisible ? (
      <Alert status='success'>
        <AlertIcon />
        <Box>
          <AlertTitle textAlign={'center'}>Successfully Deleted</AlertTitle>
          <AlertDescription _hover={{
            textDecoration:'underline'
          }}>
            <Goto to='/admin'>Go to Admin Dashboard</Goto></AlertDescription>
        </Box>
      </Alert>
    ) : (
      <Button bg={'white'} isDisabled={visible} onClick={onOpen}></Button>
    )
  }

  function AddingStatus({visibleAdd}) {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
  
    return isVisible ? (
      <Alert status='success'>
        <AlertIcon />
        <Box>
          <AlertTitle>Succesfully Added..</AlertTitle>
          <AlertDescription _hover={{
            textDecoration:'underline'
          }}>
            <Goto to='/admin'>Go to Admin Dashboard</Goto></AlertDescription>
        </Box>
      </Alert>
    ) : (
      <Button bg={'white'} isDisabled={visibleAdd} onClick={onOpen} />
    )
  }


  export {CompExample,AddingStatus}