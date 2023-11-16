import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import validationSchema from '../../components/validetion/ValidationSchema';






export default function  ContactComponent2(){
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (values: any) => {
    const { name, email, message } = values;

    const templateParams = {
      from_name: name,
      message : message,
      email : email,
    };

    try {
      await emailjs.send('service_g3wnyeg', 'template_5dcimsm', templateParams, 'VYtbYRJVHvmxoHbpp');
      console.log('Email successfully sent!');
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
      
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


   return (
     <ChakraProvider>
    <Stack   w={'full'} pt={{base:0, sm:2, md:3}} rounded={6}>
      <Box>
        <Text  pt={4} textAlign={"start"} fontSize={["md","xl"]}>
          Send me a message using the form, and I will give you a response as soon as possible.
        </Text>
      </Box>

      <Formik
          initialValues={{ name:'', email:'', message:''}}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            sendEmail(values);
            setSubmitting(false);
            resetForm();
          }}>

  {({ isSubmitting }) => (

          <Form className='form'>

            
            <Field name="name">
              {({ field, form }: any) => (

                <FormControl mb={3} isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel color={'gray.500'}> Your name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement children={<InfoIcon  color="purple.500" />} />
                              <Input {...field} bg={"gray.700"} border={"none"}
                                name="name" color={"gray.200"} fontWeight={"700"}
                                type="text"
                                size="md" 
                                placeholder="Your name"
                                _hover={{
                                  border:"2px solid #805AD5",}}
                           
                          />
                              
                        </InputGroup> 
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                   )}
                   </Field>

                   <Field name="email">

              {({ field, form }: any) => (
                
                  <FormControl mb={3} isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel color={'gray.500' }> Email </FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement children={<EmailIcon color="purple.500" />} />
                          <Input {...field} bg={"gray.700"} color={"gray.200"} fontWeight={"700"}
                            type="email"  border={"none"}
                            
                            name="email" size="md"
                            placeholder="exemple@portifolio.com" 
                            _hover={{border:"2px solid #805AD5"}}
                         
                          />
                          
                        </InputGroup>

                       <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                   )}
                   </Field>
                      
                <Field name="message">
                  {({ field, form }: any) => (
                

                    <FormControl mb={3} isInvalid={form.errors.message && form.touched.message}>
                        <FormLabel color={'gray.500'}> Message </FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                        <Textarea {...field} bg={"gray.700"}  border={"none"} color={"gray.200"} 
                          name='message' fontWeight={"700"}
                          _hover={{
                            border:"2px solid #805AD5",
                            borderRadius: 'gray.300',
                            
                          }}

                      
                        />
                    
                    </InputGroup>
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>

                  </FormControl>

                  )}
                   </Field>
                <Stack spacing={6} py={6}>
                  <Button colorScheme={'blue'} variant={'solid'}
                    type="submit"  bg={"purple.700"}
                    color="white" 
                    _hover={{
                      bg: 'red.400',
                      cursor: 'pointer'
                    }}isLoading={isSubmitting} >
                  Send Message
                  </Button>
                </Stack>

                {isSuccess && (
                
                <Box bg={"green.800"} justifyContent={"space-between"}>
                  <Alert status="success" mb={4} rounded="md">
                    <AlertIcon />
                    <AlertTitle mr={2}>Message sent successfully</AlertTitle>
                 
                   </Alert>
                  </Box>
                )}
          
                </Form>
                  )}
                </Formik>
              </Stack>

     </ChakraProvider>
   )

}
