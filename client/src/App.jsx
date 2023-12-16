// App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <Container maxW="container.lg" mt="4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
