'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { quotes } from '@/data';

const Header = styled(motion.header)`
  padding-top: 6rem;
  padding-bottom: 2rem;
  text-align: center;
  color: var(--text-dark);
  background-image: url('/assets/img/ecebg.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding-top: 8rem;
    padding-bottom: 12.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Subheading = styled(motion.div)`
  font-size: 2rem;
  font-style: italic;
  line-height: 1.5rem;
  margin-bottom: 25px;
  font-family: 'Droid Serif', var(--font-roboto-slab), serif;
  color: var(--primary-base);

  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }
`;

const Heading = styled(motion.div)`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.25rem;
  margin-bottom: 2rem;
  font-family: var(--font-montserrat), sans-serif;
  color: var(--text-dark);

  @media (min-width: 768px) {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
`;

export default function Masthead() {
  return (
    <Header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Subheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome To My Conspectus!
        </Subheading>
        <Heading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          &quot;{quotes.masthead}&quot;
        </Heading>
      </Container>
    </Header>
  );
}
