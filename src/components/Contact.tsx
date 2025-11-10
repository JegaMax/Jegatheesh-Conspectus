'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolio';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #212529;
  background-image: url('/assets/img/map-image.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(33, 37, 41, 0.9);
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  color: white;
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
  color: #EBE9E8;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

const ProfileCard = styled(motion.div)`
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 0.5rem solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Name = styled.h4`
  color: #EBE9E8;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Info = styled.p`
  color: #EBE9E8;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.05rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SocialButton = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2C425C;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #7AC789;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.125rem;
  }
`;

const Copyright = styled.p`
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  margin-top: 2rem;
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

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TitleIcon {...iconAnimation}>📧</TitleIcon>
          Contact
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "One day or Day one It's your choice
          <br />
          Feel free to contact with me"
        </Subtitle>
        
        <ProfileCard
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProfileImageWrapper>
            <Image
              src={personalInfo.image}
              alt={personalInfo.name}
              width={200}
              height={200}
            />
          </ProfileImageWrapper>
          
          <Name>Er. {personalInfo.name}</Name>
          <Info>
            {personalInfo.title}
            <br />
            {personalInfo.location.address}
            <br />
            {personalInfo.location.city}, {personalInfo.location.state}
            <br />
            {personalInfo.location.postalCode}
            <br />
            Ph.No: {personalInfo.phone}
          </Info>
          
          <SocialLinks>
            <SocialButton
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <i className="fa fa-envelope"></i>
            </SocialButton>
            <SocialButton
              href={personalInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </SocialButton>
            <SocialButton
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </SocialButton>
            <SocialButton
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </SocialButton>
          </SocialLinks>
          
          <Copyright>
            Copyright © jegatheesh-conspectus {currentYear}
          </Copyright>
        </ProfileCard>
      </Container>
    </Section>
  );
};

export default Contact;
