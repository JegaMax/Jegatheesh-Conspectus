'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/assets/img/ecebg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  padding: 6rem 2rem 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(244, 241, 234, 0.85);
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 2rem;
    background-attachment: scroll;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  font-style: italic;
  color: #2C425C;
  margin-bottom: 1.5rem;
  font-family: 'Droid Serif', serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #3e4c3a;
  line-height: 1.4;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #2C425C;
  font-size: 0.875rem;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 1rem;
  }
`;

const ScrollArrow = styled(motion.div)`
  width: 24px;
  height: 24px;
  border-left: 2px solid #2C425C;
  border-bottom: 2px solid #2C425C;
  transform: rotate(-45deg);
`;

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <HeroContainer>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome To My Conspectus!
        </Subtitle>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {personalInfo.quote}
        </Title>
      </HeroContainer>
      <ScrollIndicator
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Scroll</span>
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
