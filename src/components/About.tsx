'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { about } from '@/data/portfolio';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #f4f1ea;

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
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

const Content = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #3e4c3a;
  margin-bottom: 1.5rem;

  &:first-child {
    font-size: 1.25rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    &:first-child {
      font-size: 1.125rem;
    }
  }
`;

const Highlight = styled.span`
  color: #2C425C;
  font-weight: 600;
`;

const Tech = styled.span`
  background: linear-gradient(135deg, #7AC789 0%, #2C425C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;

const Icon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.3em;
  vertical-align: middle;
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

const About: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TitleIcon {...iconAnimation}>👨‍💻</TitleIcon>
          {about.title}
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {about.subtitle}
        </Subtitle>
        <Content
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Description>
            <Highlight>Software Development Engineer</Highlight> with{' '}
            <Highlight>4+ years</Highlight> of experience specializing in full-stack web application development.
          </Description>
          <Description>
            <Icon>🚀</Icon>
            I architect and build <strong>scalable web applications</strong> using modern technologies including{' '}
            <Tech>Java</Tech>, <Tech>Spring Boot</Tech>, <Tech>REST APIs</Tech>,{' '}
            <Tech>SQL</Tech>, <Tech>JavaScript</Tech>, <Tech>React</Tech>, and{' '}
            <Tech>Angular</Tech>.
          </Description>
          <Description>
            <Icon>⚙️</Icon>
            My solutions have powered <strong>business applications</strong> serving thousands of users,
            with optimized <Tech>AWS</Tech> cloud implementations.
          </Description>
          <Description>
            <Icon>🔍</Icon>
            I thrive in <strong>optimizing systems</strong> - whether refining code architecture,
            improving performance, or implementing CI/CD pipelines.
          </Description>
          <Description>
            <Icon>💡</Icon>
            When not coding, I explore emerging technologies.
          </Description>
        </Content>
      </Container>
    </Section>
  );
};

export default About;
