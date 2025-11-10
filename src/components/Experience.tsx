'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience, highlights } from '@/data/portfolio';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #f4f1ea;

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

const ExperienceCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #2C425C;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const JobTitle = styled.h3`
  color: #3e4c3a;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Company = styled.div`
  font-weight: 600;
  color: #2C425C;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
`;

const Duration = styled.div`
  color: #7f8c8d;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const DescriptionItem = styled.li`
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  color: #3e4c3a;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #2C425C;
    font-weight: bold;
  }

  strong {
    color: #2C425C;
  }
`;

const TechStackToggle = styled.details`
  margin-top: 1rem;
  cursor: pointer;

  summary {
    font-weight: 600;
    color: #2C425C;
    cursor: pointer;
    user-select: none;
    padding: 0.5rem 0;

    &:hover {
      color: #7AC789;
    }
  }
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.75rem;
  padding: 1rem 0;
`;

const TechBadge = styled.span`
  background: #d9e4c8;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  text-align: center;
  color: #2C425C;
  font-weight: 500;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`;

const HighlightsSection = styled(motion.div)`
  margin-top: 3rem;
`;

const HighlightsQuote = styled.h3`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Droid Serif', serif;
  color: #7AC789;
  margin: 3rem 0 2rem;
`;

const HighlightsContainer = styled.div`
  background: #2C425C;
  color: #f4f1ea;
  padding: 1.5rem 0;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const HighlightsTicker = styled(motion.div)`
  display: flex;
  gap: 3rem;
  white-space: nowrap;
`;

const HighlightItem = styled.span`
  font-size: 1.125rem;
  display: inline-flex;
  align-items: center;

  &::before {
    content: '✓';
    margin-right: 0.75rem;
    color: #7AC789;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
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

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TitleIcon {...iconAnimation}>💼</TitleIcon>
          Work Experience
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Turning complex problems into elegant code."
        </Subtitle>
        
        {experience.map((job, index) => (
          <ExperienceCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <JobTitle>{job.title}</JobTitle>
            <Company>{job.company} · {job.type} · {job.mode}</Company>
            <Duration>
              {job.startDate} – {job.endDate}
              {job.duration && ` · ${job.duration}`} | {job.location}
            </Duration>
            
            {job.positions && job.positions.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                {job.positions.map((position, idx) => (
                  <div key={idx} style={{ marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.125rem', color: '#3e4c3a', marginBottom: '0.25rem' }}>
                      {position.title}
                    </h4>
                    <Duration>
                      {position.startDate} – {position.endDate} · {position.duration}
                    </Duration>
                  </div>
                ))}
              </div>
            )}
            
            <Description>
              {job.description.map((item, idx) => (
                <DescriptionItem key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </Description>
            
            <TechStackToggle>
              <summary>🔧 Tech Stack (Click to Expand)</summary>
              <TechStackGrid>
                {job.techStack.map((tech, idx) => (
                  <TechBadge key={idx}>{tech}</TechBadge>
                ))}
              </TechStackGrid>
            </TechStackToggle>
          </ExperienceCard>
        ))}

        <HighlightsSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HighlightsQuote>
            "It's not what you achieve, it's what you overcome. That's what defines your career."
          </HighlightsQuote>
          <HighlightsContainer>
            <HighlightsTicker
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...highlights, ...highlights].map((highlight, idx) => (
                <HighlightItem key={idx}>{highlight}</HighlightItem>
              ))}
            </HighlightsTicker>
          </HighlightsContainer>
        </HighlightsSection>
      </Container>
    </Section>
  );
};

export default Experience;
