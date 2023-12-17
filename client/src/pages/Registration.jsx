import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Checkbox,
  Stack,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  Flex,
} from '@chakra-ui/react';

import { BASE_URL } from '../utiles';

// EventRegistrationForm component
const EventRegistrationForm = () => {
  // State to manage form data
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedEvent: '',
    numberOfTickets: 0,
    additionalInfo: '',
    gender: '',
  };
  const [formData, setFormData] = useState(initialData);

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle number of tickets change
  const handleNumberOfTicketsChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      numberOfTickets: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked ? 'Male' : 'Female',
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state to true
    setIsLoading(true);

    fetch(`${BASE_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // Handle the response data
      console.log(data);
    })
    .catch((err) => {
      // Handle fetch errors
      console.error(err);
    });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        {/* First Name field */}
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </FormControl>

        {/* Last Name field */}
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </FormControl>

        {/* Email field */}
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </FormControl>

        {/* Phone Number field */}
        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </FormControl>

        {/* Event field */}
        <FormControl isRequired>
          <FormLabel>Event</FormLabel>
          <Input
            type="text"
            name="selectedEvent"
            required
            value={formData.selectedEvent}
            onChange={handleChange}
            placeholder="Enter the event name"
          />
        </FormControl>

        {/* Number of Tickets field */}
        <FormControl isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <NumberInput
            value={formData.numberOfTickets}
            required
            onChange={handleNumberOfTicketsChange}
            min={0}
          >
            <NumberInputField placeholder="Enter the number of tickets" />
          </NumberInput>
        </FormControl>

        {/* Additional Information field */}
        <FormControl>
          <FormLabel>Additional Information</FormLabel>
          <Textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Enter any additional information"
            size="sm"
          />
        </FormControl>

        {/* Gender checkbox */}
        <Flex direction="row" alignItems="center" mt={2}>
          <FormLabel>Gender</FormLabel>
          <Checkbox
            colorScheme="teal"
            defaultChecked={formData.gender === 'Male'}
            onChange={handleCheckboxChange}
            name="gender"
          >
            Male
          </Checkbox>
          <Checkbox
            colorScheme="teal"
            defaultChecked={formData.gender === 'Female'}
            onChange={handleCheckboxChange}
            name="gender"
          >
            Female
          </Checkbox>
        </Flex>

        {/* Submit button */}
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

// Registration component
const Registration = () => {
  return (
    <Box p="6" maxW="500px" mx="auto">
      <Heading as="h2" textAlign="left" mb="6" color="teal.500">
        REGISTRATION
      </Heading>
      <Text mb="4" color="gray.600">
        Provide your details to complete the registration:
      </Text>

      {/* Include the EventRegistrationForm component */}
      <EventRegistrationForm />
    </Box>
  );
};

export { Registration };
