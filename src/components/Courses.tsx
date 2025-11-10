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

const CarouselArrow = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$position === 'left' ? 'left: -3rem;' : 'right: -3rem;'}
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(44, 66, 92, 0.85);
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  z-index: 2;

  &:hover {
    background: #7AC789;
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    background: rgba(204, 204, 204, 0.8);
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
    ${props => props.$position === 'left' ? 'left: -1.5rem;' : 'right: -1.5rem;'}
  }
`;

const ArrowIcon = styled.svg<{ $direction: 'left' | 'right' }>`
  width: 20px;
  height: 20px;
  fill: currentColor;
  transform: ${props => props.$direction === 'left' ? 'rotate(180deg)' : 'none'};
  transition: transform 0.3s ease;
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
          <CarouselArrow
            $position="left"
            onClick={handlePrev}
            aria-label="Previous course"
          >
            <ArrowIcon $direction="left" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </ArrowIcon>
          </CarouselArrow>
          <CarouselArrow
            $position="right"
            onClick={handleNext}
            aria-label="Next course"
          >
            <ArrowIcon $direction="right" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </ArrowIcon>
          </CarouselArrow>
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
