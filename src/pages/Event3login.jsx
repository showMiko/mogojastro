import React, { useState } from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,FormControl,FormLabel,FormErrorMessage
  } from '@chakra-ui/react'
  import { Divider } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import { Formik, Form, Field, ErrorMessage } from 'formik';
  import { useNavigate } from "react-router-dom";
const Event2login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [login,setLogin]=useState("")
    const password = process.env.REACT_APP_EVENT3_PASSWORD;
    const navigate=useNavigate()
    function validateName(value) {
        let error
        if (!value) {
          error = 'Password is Required'
        } else if (value !== password) {
          error = "Wrong Password"
        }
        return error
      }
    
  return (
    <Box m={1}
      >
      <Button onClick={onOpen}>Event 3</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={7}>
          <ModalHeader>Welcome to Mogojastro</ModalHeader>
          <Divider/>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>

          <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          navigate("/mogojastro/6958799a4a9145b3a627ceab4291baa3")
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel ml={5}>Password</FormLabel>
                <Input {...field} placeholder='Password' ml={5} w={"90%"} />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button m={4} colorScheme='teal' isLoading={props.isSubmitting} type='submit'>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Event2login