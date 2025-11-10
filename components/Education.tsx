'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { education, quotes } from '@/data';

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

const Timeline = styled.ul`
  position: relative;
  padding: 0;
  list-style: none;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    margin-left: -1px;
    content: '';
    background-color: #e9ecef;

    @media (max-width: 767px) {
      left: 40px;
    }
  }
`;

const TimelineItem = styled(motion.li)<{ $inverted?: boolean }>`
  position: relative;
  min-height: 150px;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    min-height: 100px;
    margin-bottom: 50px;
  }
`;

const TimelineImage = styled.div`
  position: absolute;
  z-index: 100;
  left: 50%;
  width: 150px;
  height: 150px;
  margin-left: -75px;
  text-align: center;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: var(--primary-accent);
  overflow: hidden;

  @media (max-width: 767px) {
    left: 0;
    width: 80px;
    height: 80px;
    margin-left: 0;
  }
`;

const TimelinePanel = styled.div<{ $inverted?: boolean }>`
  position: relative;
  float: ${props => props.$inverted ? 'right' : 'left'};
  width: 41%;
  padding: 0 20px 20px;
  text-align: ${props => props.$inverted ? 'left' : 'right'};

  @media (max-width: 767px) {
    float: right;
    width: 100%;
    padding: 0 20px 0 100px;
    text-align: left;
  }
`;

const TimelineHeading = styled.h4`
  margin-top: 0;
  color: inherit;
  font-size: 1.5rem;
`;

const TimelineBody = styled.p`
  margin-bottom: 0;
  color: #6c757d;
`;

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const invertedItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Section
      id="Education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Container>
        <Title>
          <TitleIcon>🎓</TitleIcon> Education
        </Title>
        <Subheading>{quotes.education}</Subheading>
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              $inverted={index % 2 === 1}
              variants={index % 2 === 1 ? invertedItemVariants : itemVariants}
            >
              <TimelineImage>
                <Image
                  src={edu.image}
                  alt={edu.degree}
                  width={150}
                  height={150}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </TimelineImage>
              <TimelinePanel $inverted={index % 2 === 1}>
                <TimelineHeading>{edu.year} - {edu.degree}</TimelineHeading>
                <TimelineBody>
                  Completed from {edu.institution} with {edu.percentage}
                </TimelineBody>
              </TimelinePanel>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
}
