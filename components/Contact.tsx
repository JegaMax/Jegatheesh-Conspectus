'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo, quotes } from '@/data';

const Section = styled(motion.section)`
  padding: 9rem 0;
  background-color: var(--primary-base);
  background-image: url('/assets/img/map-image.png');
  background-repeat: no-repeat;
  background-position: center;
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
  color: var(--secondary-palette);
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
  color: var(--secondary-palette);
  text-align: center;
  white-space: pre-line;
`;

const TeamMember = styled(motion.div)`
  margin-bottom: 3rem;
  text-align: center;
`;

const ProfileImage = styled(Image)`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  border: 0.5rem solid rgba(255, 255, 255, 0.1);
  margin: 0 auto 1.5rem;
  object-fit: cover;
`;

const Name = styled.h4`
  margin-top: 1.5rem;
  margin-bottom: 0;
  color: var(--secondary-palette);
`;

const Info = styled.p`
  color: var(--secondary-palette);
  margin-top: 1rem;
  line-height: 1.8;
  white-space: pre-line;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const SocialButton = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-accent);
  color: var(--secondary-palette);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--complementary-accent);
    color: var(--primary-base);
  }
`;

const Copyright = styled(motion.p)`
  color: var(--secondary-palette);
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
`;

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      id="Contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Title>
          <TitleIcon>📧</TitleIcon> Contact
        </Title>
        <Subheading>{quotes.contact}</Subheading>
        <TeamMember
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProfileImage
            src={personalInfo.image}
            alt={`${personalInfo.name} - ${personalInfo.title}`}
            width={224}
            height={224}
          />
          <Name>Er. {personalInfo.name}</Name>
          <Info>
            {personalInfo.title}
            {'\n'}
            {personalInfo.address}
            {'\n'}
            Ph.No: {personalInfo.phone}
          </Info>
          <SocialLinks>
            <SocialButton
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa fa-envelope"></i>
            </SocialButton>
            {personalInfo.facebook && (
              <SocialButton
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-facebook-f"></i>
              </SocialButton>
            )}
            {personalInfo.instagram && (
              <SocialButton
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-instagram"></i>
              </SocialButton>
            )}
            {personalInfo.linkedin && (
              <SocialButton
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </SocialButton>
            )}
          </SocialLinks>
          <Copyright>
            Copyright © jegatheesh-conspectus {currentYear}
          </Copyright>
        </TeamMember>
      </Container>
    </Section>
  );
}
