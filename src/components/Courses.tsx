'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from '@/data/portfolio';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TitleIcon = styled(motion.span)`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h3)`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Droid Serif', serif;
  color: #7AC789;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 3rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
`;

const CarouselItem = styled(motion.div)`
  background: #f4f1ea;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 200px;
  }
`;

const CourseTitle = styled.h4`
  font-size: 1.5rem;
  color: #2C425C;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CourseInfo = styled.p`
  font-size: 1.125rem;
  color: #3e4c3a;
  margin: 0.5rem 0;
  line-height: 1.6;

  strong {
    color: #2C425C;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ControlButton = styled.button`
  background: #2C425C;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7AC789;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Indicator = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? '#2C425C' : '#ccc'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7AC789;
  }
`;

const iconAnimation = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const Courses: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleIndicatorClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Section id="courses">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TitleIcon {...iconAnimation}>📝</TitleIcon>
          Courses & Certifications
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "A Learning Curve is Essential to Growth"
        </Subtitle>
        <CarouselContainer>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <CarouselItem
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <CourseTitle>{courses[currentIndex].title}</CourseTitle>
              <CourseInfo>
                <strong>{courses[currentIndex].type === 'Certificate' ? 'Issuer' : 'Institution'}:</strong> {courses[currentIndex].issuer}
              </CourseInfo>
              {courses[currentIndex].date && (
                <CourseInfo>
                  <strong>Issued Date:</strong> {courses[currentIndex].date}
                </CourseInfo>
              )}
              {courses[currentIndex].duration && (
                <CourseInfo>
                  <strong>Duration:</strong> {courses[currentIndex].duration}
                </CourseInfo>
              )}
            </CarouselItem>
          </AnimatePresence>
          <Controls>
            <ControlButton onClick={handlePrev}>
              Previous
            </ControlButton>
            <ControlButton onClick={handleNext}>
              Next
            </ControlButton>
          </Controls>
          <Indicators>
            {courses.map((_, index) => (
              <Indicator
                key={index}
                $active={index === currentIndex}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </Indicators>
        </CarouselContainer>
      </Container>
    </Section>
  );
};

export default Courses;
