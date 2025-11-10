'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experiences, quotes } from '@/data';

const Section = styled(motion.section)`
  padding: 9rem 0;
  background-color: var(--complementary-accent);
  min-height: 100vh;

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

const ExperienceCard = styled(motion.div)`
  background: var(--secondary-palette);
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(62, 76, 58, 0.2);
  border-left: 4px solid var(--primary-base);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(62, 76, 58, 0.4);
  }
`;

const CardTitle = styled.h3`
  color: var(--text-dark);
  margin-top: 0;
  font-size: 1.4rem;
`;

const Company = styled.div`
  font-weight: bold;
  color: var(--primary-base);
  margin-top: 0.5rem;
`;

const Duration = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const PreviousRole = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Responsibilities = styled.ul`
  padding-left: 20px;
  margin-top: 1rem;
`;

const Responsibility = styled.li`
  margin-bottom: 8px;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: -20px;
    color: var(--primary-base);
  }
`;

const Details = styled.details`
  margin-top: 15px;
`;

const Summary = styled.summary`
  cursor: pointer;
  font-weight: 600;
  color: var(--primary-base);
  outline: none;

  &:hover {
    color: var(--primary-accent);
  }
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  padding: 15px 0;
  margin-top: 10px;
`;

const TechStackItem = styled.span`
  background: var(--complementary-accent);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  text-align: center;
  color: var(--primary-base);
  font-weight: 500;
`;

const FooterQuote = styled(motion.h3)`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Droid Serif', var(--font-roboto-slab), serif;
  color: var(--primary-accent);
  text-align: center;
  margin: 3rem 0;
`;

const HighlightsContainer = styled(motion.div)`
  background: var(--primary-base);
  color: var(--secondary-palette);
  padding: 15px 0;
  border-radius: 8px;
  margin: 30px 0;
  overflow: hidden;
`;

const HighlightsTicker = styled(motion.div)`
  display: flex;
  gap: 40px;
  white-space: nowrap;
  width: fit-content;
`;

const HighlightItem = styled.span`
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  &::before {
    content: '✓';
    margin-right: 8px;
    color: var(--primary-accent);
  }
`;

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const tickerVariants = {
    animate: {
      x: [0, -1600],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as const,
          duration: 20,
          ease: 'linear' as const,
        },
      },
    },
  };

  const skills = [
    'Full-Stack Development',
    'Problem Solving & Debugging',
    'Time Management',
    'Task Prioritization',
    'Agile Methodology',
    'Customer-Centric Development',
    'Self-Motivation & Independence',
    'Cross-Functional Team Collaboration'
  ];

  return (
    <Section
      id="Experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Container>
        <Title>
          <TitleIcon>💼</TitleIcon> Work Experience
        </Title>
        <Subheading>{quotes.experience}</Subheading>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle>{exp.title}</CardTitle>
            <Company>{exp.company} · {exp.type} · {exp.location}</Company>
            <Duration>{exp.duration}</Duration>
            {exp.previousTitle && (
              <>
                <PreviousRole>
                  <h4 style={{ marginTop: '15px', marginBottom: '5px' }}>{exp.previousTitle}</h4>
                  <Duration>{exp.previousDuration}</Duration>
                </PreviousRole>
              </>
            )}
            <Responsibilities>
              {exp.responsibilities.map((resp, idx) => (
                <Responsibility key={idx}>{resp}</Responsibility>
              ))}
            </Responsibilities>
            <Details>
              <Summary>🔧 Tech Stack (Click to Expand)</Summary>
              <TechStackGrid>
                {exp.techStack.map((tech, idx) => (
                  <TechStackItem key={idx}>{tech}</TechStackItem>
                ))}
              </TechStackGrid>
            </Details>
          </ExperienceCard>
        ))}
        <FooterQuote variants={itemVariants}>
          {quotes.experienceFooter}
        </FooterQuote>
        <HighlightsContainer variants={itemVariants}>
          <HighlightsTicker variants={tickerVariants} animate="animate">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {skills.map((skill, idx) => (
                  <HighlightItem key={`${i}-${idx}`}>{skill}</HighlightItem>
                ))}
              </React.Fragment>
            ))}
          </HighlightsTicker>
        </HighlightsContainer>
      </Container>
    </Section>
  );
}
