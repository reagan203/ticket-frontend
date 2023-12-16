import React, { useState } from 'react';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedEvent: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form data submitted:', formData);
    // Reset the form after submission if needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      selectedEvent: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Event:
        <input
          type="text"
          name="selectedEvent"
          value={formData.selectedEvent}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

const Checkout = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Provide your details to complete the checkout:</p>

      {/* Include the EventRegistrationForm component */}
      <EventRegistrationForm />
    </div>
  );
};

export { Checkout };
