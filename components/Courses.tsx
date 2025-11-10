'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { courses, quotes } from '@/data';

const Section = styled(motion.section)`
  padding: 9rem 0;
  background-color: var(--background-beige);
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled(motion.h1)`
  color: var(--primary-base);
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

const TitleIcon = styled.span`
  font-size: 3rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
  color: var(--primary-accent);
  margin-right: 0.5rem;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Subheading = styled(motion.h3)`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Droid Serif', var(--font-roboto-slab), serif;
  margin-bottom: 3rem;
  color: var(--primary-accent);
  text-align: center;
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  position: relative;
  width: 100%;
`;

const CarouselItem = styled(motion.div)`
  position: relative;
  display: none;
  text-align: center;
  padding: 2rem;
  background-color: var(--secondary-palette);
  border-radius: 8px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active {
    display: flex;
  }
`;

const CarouselContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--primary-base);

  b {
    color: var(--primary-accent);
    font-weight: 700;
  }
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ControlButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-base);
  color: var(--secondary-palette);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  &:hover {
    background-color: var(--primary-accent);
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Indicator = styled(motion.button)<{ $active: boolean }>`
  width: ${props => props.$active ? '30px' : '10px'};
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.$active ? 'var(--primary-accent)' : '#ccc'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Section
      id="Course"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Title>
          <TitleIcon>📝</TitleIcon> Courses & Certifications
        </Title>
        <Subheading>{quotes.courses}</Subheading>
        <CarouselContainer>
          <CarouselInner>
            <AnimatePresence mode="wait">
              <CarouselItem
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="active"
              >
                <CarouselContent>
                  <div>
                    <b>Certificate Name:</b> {courses[currentIndex].name}
                  </div>
                  <div>
                    <b>Issuer:</b> {courses[currentIndex].issuer}
                  </div>
                  {courses[currentIndex].date && (
                    <div>
                      <b>Issued Date:</b> {courses[currentIndex].date}
                    </div>
                  )}
                  {courses[currentIndex].duration && (
                    <div>
                      <b>Duration:</b> {courses[currentIndex].duration}
                    </div>
                  )}
                </CarouselContent>
              </CarouselItem>
            </AnimatePresence>
          </CarouselInner>
          <CarouselControls>
            <ControlButton
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-chevron-left"></i>
            </ControlButton>
            <ControlButton
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-chevron-right"></i>
            </ControlButton>
          </CarouselControls>
          <Indicators>
            {courses.map((_, index) => (
              <Indicator
                key={index}
                $active={index === currentIndex}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </Indicators>
        </CarouselContainer>
      </Container>
    </Section>
  );
}
