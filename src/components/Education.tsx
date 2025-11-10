'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { education } from '@/data/portfolio';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e9ecef;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 40px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ $inverted?: boolean }>`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: ${props => props.$inverted ? 'flex-start' : 'flex-end'};

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const TimelineImage = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 7px solid #e9ecef;
  overflow: hidden;
  background: #fff;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    left: 40px;
    width: 80px;
    height: 80px;
    border: 5px solid #e9ecef;
  }
`;

const TimelinePanel = styled(motion.div)<{ $inverted?: boolean }>`
  width: 45%;
  background: #f4f1ea;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #2C425C;
  text-align: ${props => props.$inverted ? 'left' : 'right'};

  @media (max-width: 768px) {
    width: calc(100% - 120px);
    text-align: left;
  }
`;

const Year = styled.h4`
  font-size: 1.5rem;
  color: #2C425C;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Degree = styled.h5`
  font-size: 1.25rem;
  color: #3e4c3a;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const Institution = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Grade = styled.p`
  color: #7AC789;
  font-weight: 600;
  font-size: 1.125rem;
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

const Education: React.FC = () => {
  return (
    <Section id="education">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TitleIcon {...iconAnimation}>🎓</TitleIcon>
          Education
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Education is simply the soul of a society as it passes from one generation to another"
        </Subtitle>
        <Timeline>
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              $inverted={index % 2 !== 0}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineImage>
                <Image
                  src={item.image}
                  alt={item.institution}
                  width={150}
                  height={150}
                />
              </TimelineImage>
              <TimelinePanel
                $inverted={index % 2 !== 0}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Year>{item.year} - {item.degree}</Year>
                <Institution>{item.institution}, {item.location}</Institution>
                <Grade>Grade: {item.grade}</Grade>
              </TimelinePanel>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Education;
