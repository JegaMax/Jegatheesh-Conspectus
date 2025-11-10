'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo, quotes } from '@/data';

const Section = styled(motion.section)`
  padding: 9rem 0;
  background-color: var(--complementary-accent);
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
  white-space: pre-line;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled(motion.div)`
  max-width: 800px;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.8;

  .highlight {
    color: var(--primary-accent);
    font-weight: bold;
  }

  .tech {
    background-color: var(--primary-base);
    color: var(--secondary-palette);
    padding: 2px 5px;
    border-radius: 3px;
    font-weight: 500;
  }

  .icon {
    margin-right: 10px;
    font-size: 1.2em;
    vertical-align: middle;
    color: var(--primary-accent);
  }
`;

const Signature = styled(Paragraph)`
  font-style: italic;
  margin-top: 2rem;
`;

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Section
      id="About"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Container>
        <Title
          variants={itemVariants}
        >
          <TitleIcon>👨‍💻</TitleIcon> About
        </Title>
        <Subheading variants={itemVariants}>
          {quotes.about}
        </Subheading>
        <ContentWrapper>
          <Content variants={containerVariants}>
            <Paragraph variants={itemVariants}>
              <span className="highlight">Software Development Engineer</span> with{' '}
              <span className="highlight">4+ years</span> of experience specializing in full-stack web
              application development.
            </Paragraph>
            <Paragraph variants={itemVariants}>
              <span className="icon">🚀</span> I architect and build <strong>scalable web
                applications</strong> using modern technologies including{' '}
              <span className="tech">Java</span>, <span className="tech">Spring Boot</span>,{' '}
              <span className="tech">REST APIs</span>, <span className="tech">SQL</span>,{' '}
              <span className="tech">JavaScript</span>, <span className="tech">React</span>, and{' '}
              <span className="tech">Angular</span>.
            </Paragraph>
            <Paragraph variants={itemVariants}>
              <span className="icon">⚙️</span> My solutions have powered <strong>business
                applications</strong> serving thousands of users, with optimized{' '}
              <span className="tech">AWS</span> cloud implementations.
            </Paragraph>
            <Paragraph variants={itemVariants}>
              <span className="icon">🔍</span> I thrive in <strong>optimizing systems</strong> - whether
              refining code architecture, improving performance, or implementing CI/CD pipelines.
            </Paragraph>
            <Signature variants={itemVariants}>
              <span className="icon">💡</span> When not coding, I explore emerging technologies.
            </Signature>
          </Content>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
