import {Link as Goto} from 'react-router-dom'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    useDisclosure,
    Box,
    CloseButton,
    Button,
    AlertDescription,
  } from '@chakra-ui/react'


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
          <AlertTitle>Success Deleted!</AlertTitle>
          <AlertDescription _hover={{
            textDecoration:'underline'
          }}>
            <Goto to='/admin'>Go to Admin Dashboard</Goto></AlertDescription>
        </Box>
        {/* <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        /> */}
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
        </Box>
        {/* <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        /> */}
      </Alert>
    ) : (
      <Button bg={'white'} isDisabled={visibleAdd} onClick={onOpen} />
    )
  }

  export {CompExample,AddingStatus}